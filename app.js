/**
 * Litmatch 情报跟踪站 - 应用逻辑
 * 功能：手动刷新、分类筛选、地区筛选、🆕新情报标记
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
    { code: 'SG', name: '🇸🇬 新加坡' },
    { code: 'TR', name: '🇹🇷 土耳其' },
    { code: 'AE', name: '🇦🇪 阿联酋' },
    { code: 'IN', name: '🇮🇳 印度' },
    { code: 'HK', name: '🇭🇰 香港' },
    { code: 'GP', name: '🤖 Google Play' },
    { code: 'AS', name: '🍎 App Store' },
    { code: 'GL', name: '🌍 全球' },
    { code: 'SEA', name: '🌏 东南亚' },
    { code: 'FATF', name: '🌍 国际组织' }
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
    doRefresh();
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
    if ($refreshBtn) {
      $refreshBtn.addEventListener('click', function () {
        $refreshBtn.disabled = true;
        $refreshBtn.textContent = '刷新中...';
        setTimeout(function () {
          doRefresh();
          $refreshBtn.disabled = false;
          $refreshBtn.textContent = '🔄 手动刷新';
        }, 600);
      });
    }

    if ($categoryTags) {
      $categoryTags.addEventListener('click', function (e) {
        if (e.target.classList.contains('tag')) {
          state.currentCategory = e.target.dataset.category;
          renderCategoryTags();
          renderCards();
        }
      });
    }

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
    const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);
    state.twoWeeksAgo = twoWeeksAgo;

    updateTimeDisplay(now, twoWeeksAgo);
    renderCategoryTags();
    renderCards();
  }

  function updateTimeDisplay(now, twoWeeksAgo) {
    if ($refreshTime) {
      $refreshTime.textContent = formatDateTimeCN(now);
    }
    if ($timeRange) {
      $timeRange.textContent = '显示全部情报 · 两周内更新标记为 🆕 新';
    }
  }

  // ============ 筛选逻辑 ============
  function getFilteredData() {
    if (!window.TRACKER_DATA) return [];

    return window.TRACKER_DATA.filter(function (item) {
      if (state.currentCategory !== '全部' && item.category !== state.currentCategory) {
        return false;
      }
      if (state.currentRegion !== 'ALL' && item.countryCode !== state.currentRegion) {
        return false;
      }
      return true;
    }).sort(function (a, b) {
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

    if ($resultsCount) {
      $resultsCount.textContent = '共 ' + data.length + ' 条情报';
    }

    if (data.length === 0) {
      $cardContainer.innerHTML = '';
      $noResults.style.display = 'block';
      return;
    }
    $noResults.style.display = 'none';

    $cardContainer.innerHTML = data.map(function (item) {
      return buildCard(item);
    }).join('');
  }

  function buildCard(item) {
    const impactClass = getImpactClass(item.impact);
    const isNew = isWithinTwoWeeks(item.date);
    const newBadge = isNew ? '<span class="badge new-badge">🆕 新</span>' : '';

    const parts = [];
    parts.push('<div class="intel-card' + (isNew ? ' card-new' : '') + '" data-id="' + item.id + '">');
    parts.push('  <div class="card-header">');
    parts.push('    <div class="meta">');
    parts.push('      <span class="country">' + item.country + '</span>');
    parts.push('      <span class="date">' + item.date + '</span>');
    parts.push('    </div>');
    parts.push('    <div class="badges">');
    parts.push('      ' + newBadge);
    parts.push('      <span class="badge category-' + getCategorySlug(item.category) + '">' + item.category + '</span>');
    parts.push('      <span class="badge type">' + item.type + '</span>');
    parts.push('      <span class="badge impact ' + impactClass + '">影响：' + item.impact + '</span>');
    parts.push('    </div>');
    parts.push('  </div>');
    parts.push('  <h3 class="card-title">' + escapeHtml(item.title) + '</h3>');
    parts.push('  <p class="card-summary">' + escapeHtml(item.summary) + '</p>');
    parts.push('  <div class="card-footer">');
    parts.push('    <div class="keywords">');
    const tagsHtml = (item.tags || []).map(function (k) {
      return '<span class="keyword">#' + escapeHtml(k) + '</span>';
    }).join('');
    parts.push('      ' + tagsHtml);
    parts.push('    </div>');
    parts.push('    <div class="source">');
    parts.push('      <span>来源：' + escapeHtml(item.source) + '</span>');
    if (item.sourceUrl) {
      parts.push('      <a href="' + escapeHtml(item.sourceUrl) + '" target="_blank" rel="noopener" class="source-link">查看原文 ↗</a>');
    }
    parts.push('    </div>');
    parts.push('  </div>');
    parts.push('</div>');

    return parts.join('\n');
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

  function isWithinTwoWeeks(dateStr) {
    const target = new Date(dateStr);
    const now = state.refreshTime || new Date();
    const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);
    return target >= twoWeeksAgo && target <= now;
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
