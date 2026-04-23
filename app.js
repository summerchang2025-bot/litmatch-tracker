/**
 * Litmatch 情报跟踪站 - 应用逻辑
 * 功能：手动刷新、两周时间窗口过滤、分类筛选、地区筛选
 */

(function () {
  'use strict';

  // ============ 配置 ============
  const CATEGORIES = ['全部', '法律法规', '政府政策', '同业信息', '执法行动', '应用市场政策'];
  const REGIONS = [
    { code: 'ALL', name: '全部地区' },
    { code: 'PH', name: '🇵🇭 菲律宾' },
    { code: 'ID', name: '🇮🇩 印度尼西亚' },
    { code: 'TH', name: '🇹🇭 泰国' },
    { code: 'MY', name: '🇲🇾 马来西亚' },
    { code: 'VN', name: '🇻🇳 越南' },
    { code: 'BR', name: '🇧🇷 巴西' },
    { code: 'GP', name: '🤖 Google Play' },
    { code: 'AS', name: '🍎 App Store' },
    { code: 'GL', name: '🌍 全球' },
    { code: 'SEA', name: '🌏 东南亚' }
  ];

  // ============ 状态 ============
  let state = {
    currentCategory: '全部',
    currentRegion: 'ALL',
    refreshTime: null,
    twoWeeksAgo: null
  };

  // ============ DOM 元素缓存 ============
  let $refreshBtn, $refreshTime, $timeRange, $categoryTags, $regionSelect,
      $resultsCount, $cardContainer, $noResults;

  // ============ 初始化 ============
  function init() {
    cacheElements();
    bindEvents();
    doRefresh(); // 首次加载即执行一次"刷新"
  }

  function cacheElements() {
    $refreshBtn = document.getElementById('refresh-btn');
    $refreshTime = document.getElementById('refresh-time');
    $timeRange = document.getElementById('time-range');
    $categoryTags = document.getElementById('category-tags');
    $regionSelect = document.getElementById('region-select');
    $resultsCount = document.getElementById('results-count');
    $cardContainer = document.getElementById('card-container');
    $noResults = document.getElementById('no-results');
  }

  function bindEvents() {
    // 刷新按钮
    if ($refreshBtn) {
      $refreshBtn.addEventListener('click', function () {
        $refreshBtn.disabled = true;
        $refreshBtn.textContent = '刷新中...';
        // 模拟 600ms 刷新动画
        setTimeout(function () {
          doRefresh();
          $refreshBtn.disabled = false;
          $refreshBtn.textContent = '🔄 手动刷新';
        }, 600);
      });
    }

    // 分类标签
    if ($categoryTags) {
      $categoryTags.addEventListener('click', function (e) {
        if (e.target.classList.contains('tag')) {
          state.currentCategory = e.target.dataset.category;
          renderCategoryTags();
          renderCards();
        }
      });
    }

    // 地区选择
    if ($regionSelect) {
      $regionSelect.addEventListener('change', function () {
        state.currentRegion = this.value;
        renderCards();
      });
    }
  }

  // ============ 核心：手动刷新逻辑 ============
  function doRefresh() {
    const now = new Date();
    state.refreshTime = now;
    // 计算两周前
    const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);
    state.twoWeeksAgo = twoWeeksAgo;

    // 更新顶部时间显示
    updateTimeDisplay(now, twoWeeksAgo);
    // 渲染卡片
    renderCards();
  }

  function updateTimeDisplay(now, twoWeeksAgo) {
    if ($refreshTime) {
      $refreshTime.textContent = formatDateTimeCN(now);
    }
    if ($timeRange) {
      $timeRange.textContent = '数据窗口：' + formatDateCN(twoWeeksAgo) + ' 至 ' + formatDateCN(now) + '（共两周）';
    }
  }

  // ============ 筛选逻辑 ============
  function getFilteredData() {
    if (!window.TRACKER_DATA) return [];

    const now = state.refreshTime || new Date();
    const twoWeeksAgo = state.twoWeeksAgo || new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);
    const twoWeeksAgoStr = formatDateISO(twoWeeksAgo);
    const nowStr = formatDateISO(now);

    return window.TRACKER_DATA.filter(function (item) {
      // 时间筛选：只显示在 [twoWeeksAgo, today] 范围内的
      if (item.date < twoWeeksAgoStr || item.date > nowStr) {
        return false;
      }
      // 分类筛选
      if (state.currentCategory !== '全部' && item.category !== state.currentCategory) {
        return false;
      }
      // 地区筛选
      if (state.currentRegion !== 'ALL' && item.countryCode !== state.currentRegion) {
        return false;
      }
      return true;
    }).sort(function (a, b) {
      // 按日期降序（新的在前）
      return b.date.localeCompare(a.date);
    });
  }

  // ============ 渲染 ============
  function renderCategoryTags() {
    if (!$categoryTags) return;
    $categoryTags.innerHTML = CATEGORIES.map(function (cat) {
      const active = cat === state.currentCategory ? 'active' : '';
      return '<span class="tag ' + active + '" data-category="' + cat + '">' + cat + '</span>';
    }).join('');
  }

  function renderCards() {
    const data = getFilteredData();

    // 更新结果计数
    if ($resultsCount) {
      $resultsCount.textContent = '共 ' + data.length + ' 条情报';
    }

    // 空状态
    if (data.length === 0) {
      $cardContainer.innerHTML = '';
      $noResults.style.display = 'block';
      return;
    }
    $noResults.style.display = 'none';

    // 渲染卡片
    $cardContainer.innerHTML = data.map(function (item) {
      return buildCard(item);
    }).join('');
  }

  function buildCard(item) {
    const impactClass = getImpactClass(item.impactLevel);
    const daysAgo = getDaysAgo(item.date);
    const daysLabel = daysAgo === 0 ? '今天' : daysAgo + ' 天前';

    return '\n      <div class="intel-card" data-id="' + item.id + '">\n        <div class="card-header">\n          <div class="meta">\n            <span class="country">' + item.country + '</span>\n            <span class="date">' + item.date + '（' + daysLabel + '）</span>\n          </div>\n          <div class="badges">\n            <span class="badge category-' + getCategorySlug(item.category) + '">' + item.category + '</span>\n            <span class="badge type">' + item.type + '</span>\n            <span class="badge impact ' + impactClass + '">影响：' + item.impactLevel + '</span>\n          </div>\n        </div>\n        <h3 class="card-title">' + escapeHtml(item.title) + '</h3>\n        <p class="card-summary">' + escapeHtml(item.summary) + '</p>\n        <div class="card-footer">\n          <div class="keywords">' + item.keywords.map(function (k) {
            return '<span class="keyword">#' + escapeHtml(k) + '</span>';
          }).join('') + '</div>\n          <div class="source">\n            <span>来源：' + escapeHtml(item.source) + '</span>\n            ' + (item.sourceUrl ? '<a href="' + escapeHtml(item.sourceUrl) + '" target="_blank" rel="noopener" class="source-link">查看原文 ↗</a>' : '') + '\n          </div>\n        </div>\n      </div>\n    ';
  }

  // ============ 工具函数 ============
  function formatDateTimeCN(date) {
    const y = date.getFullYear();
    const m = pad(date.getMonth() + 1);
    const d = pad(date.getDate());
    const h = pad(date.getHours());
    const min = pad(date.getMinutes());
    return y + '-' + m + '-' + d + ' ' + h + ':' + min;
  }

  function formatDateCN(date) {
    const y = date.getFullYear();
    const m = pad(date.getMonth() + 1);
    const d = pad(date.getDate());
    return y + '-' + m + '-' + d;
  }

  function formatDateISO(date) {
    const y = date.getFullYear();
    const m = pad(date.getMonth() + 1);
    const d = pad(date.getDate());
    return y + '-' + m + '-' + d;
  }

  function pad(n) {
    return n < 10 ? '0' + n : n;
  }

  function getImpactClass(level) {
    if (level === '极高') return 'impact-critical';
    if (level === '高') return 'impact-high';
    if (level === '中') return 'impact-medium';
    return 'impact-low';
  }

  function getCategorySlug(cat) {
    var map = {
      '法律法规': 'law',
      '政府政策': 'policy',
      '同业信息': 'industry',
      '执法行动': 'enforcement',
      '应用市场政策': 'store',
      '内容合规': 'content',
      '未成年合规': 'minor',
      '反洗钱': 'aml',
      '税务合规': 'tax'
    };
    return map[cat] || 'other';
  }

  function getDaysAgo(dateStr) {
    const target = new Date(dateStr);
    const now = state.refreshTime || new Date();
    const diff = now.getTime() - target.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }

  function escapeHtml(text) {
    if (!text) return '';
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ============ 启动 ============
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
