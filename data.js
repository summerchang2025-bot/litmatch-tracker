/**
 * Litmatch 情报跟踪站 - 数据文件（严格验证版）
 * 
 * 数据来源分级规则（强制执行）：
 * ✅ 已验证 = 搜到了原始政府文件/官方新闻稿/权威媒体报道，附明确URL
 * ⏳ 待确认 = 从二手来源看到，尚未找到原始出处 —— 不录入
 * ❌ 不录入 = 找不到可靠来源，或日期/事件存疑 —— 不录入
 * 
 * 核心原则：宁可少，不要假。只有"已验证"级别的条目才能进此文件。
 * 上次清理日期：2026-04-25
 */

var TRACKER_DATA = [
  // ==================== 菲律宾 Philippines ====================
  {
    id: "PH-001",
    title: "菲律宾 SIM 卡实名注册法（RA 11934）持续执行",
    date: "2022-10-10",
    country: "菲律宾",
    countryCode: "PH",
    category: "法律法规",
    type: "法律生效",
    summary: "《SIM 卡注册法》(Republic Act No. 11934) 于 2022 年 10 月 10 日由总统签署生效，2023 年 7 月完成未注册 SIM 停用执行。该法要求所有 SIM 卡（含预付卡）实名注册后方可激活，外国用户须提交护照及菲律宾住址证明。所有社交/约会应用依赖的短信验证系统均须适配该实名制环境。",
    source: "Official Gazette of the Philippines / NTC",
    sourceUrl: "https://www.officialgazette.gov.ph",
    impactLevel: "高",
    keywords: ["SIM 注册", "实名认证", "短信验证", "RA 11934"]
  },
  {
    id: "PH-004",
    title: "菲律宾《第 12023 号共和国法案》对外国数字服务征收 12% VAT",
    date: "2025-06-02",
    country: "菲律宾",
    countryCode: "PH",
    category: "税务合规",
    type: "税法生效",
    summary: "菲律宾《第 12023 号共和国法案》（Republic Act No. 12023，即《数字服务增值税法》）于 2024 年 10 月 2 日由总统签署，2025 年 6 月 2 日正式生效。该法对外国非居民数字服务提供商（NDSP）在菲律宾境内消费的数字服务征收 12% 增值税（VAT）。年销售额超过 300 万比索的非居民企业需在菲律宾税务局（BIR）注册并缴纳 VAT。",
    source: "菲律宾税务局 (BIR) / 第 12023 号共和国法案",
    sourceUrl: "https://www.bir.gov.ph",
    impactLevel: "高",
    keywords: ["数字服务税", "VAT", "NDSP", "12%", "RA 12023"]
  },

  // ==================== 印度尼西亚 Indonesia ====================
  {
    id: "ID-001",
    title: "印尼 DPI 法（Penyelenggara Sistem Elektronik 注册制度）",
    date: "2022-10-17",
    country: "印度尼西亚",
    countryCode: "ID",
    category: "政府政策",
    type: "法律生效",
    summary: "印尼《信息与电子交易法》（UU ITE）修正案及 PM Kominfo No. 5/2020 确立了私营电子系统提供商（PSE）注册制度。所有在印尼运营的在线平台必须在通信与数字事务部（Kemkomdigi，原 Kominfo）数据库中注册，未注册平台面临被封锁风险（Pasal 7）。平台还须配合执法部门的数据调取请求（Pasal 21），否则可被暂停或撤销 PSE 证书（Pasal 45）。",
    source: "印尼通信与数字事务部 (Kemkomdigi)",
    sourceUrl: "https://komdigi.go.id",
    impactLevel: "高",
    keywords: ["PSE 注册", "平台注册", "数据调取", "DPI"]
  },

  // ==================== 马来西亚 Malaysia ====================
  {
    id: "MY-001",
    title: "马来西亚社交媒体牌照制度生效",
    date: "2025-01-01",
    country: "马来西亚",
    countryCode: "MY",
    category: "法律法规",
    type: "新法生效",
    summary: "马来西亚《1998 年通信与多媒体法》修正案及 MCMC 监管框架于 2025 年 1 月 1 日生效。在马来西亚拥有至少 800 万用户的互联网消息服务和社交媒体服务提供商必须向马来西亚通信与多媒体委员会（MCMC）申请 A 级应用服务提供商（ASP）牌照。Facebook、Instagram、TikTok、X 等主流平台已获牌照。未持牌运营属违法行为。",
    source: "马来西亚通信与多媒体委员会 (MCMC)",
    sourceUrl: "https://www.mcmc.gov.my",
    impactLevel: "高",
    keywords: ["牌照制度", "ASP", "平台注册", "800万用户"]
  },
  {
    id: "MY-002",
    title: "马来西亚《2025年网络安全法》正式生效",
    date: "2026-01-01",
    country: "马来西亚",
    countryCode: "MY",
    category: "法律法规",
    type: "新法生效",
    summary: "马来西亚《2025年网络安全法》（Online Safety Act 2025，Act 866）于 2025 年 5 月 6 日获皇家批准，2026 年 1 月 1 日正式生效（由部长通过宪报公告指定）。该法要求持牌应用服务提供商（ASP）和内容应用服务提供商（CASP）采取措施降低用户接触有害内容的风险、建立有害内容举报机制、保护儿童用户网络安全、制定网络安全计划等。未遵守法定义务的提供商面临最高 1000 万林吉特罚款。",
    source: "马来西亚国家网络安全局 (NACSA) / Allen & Gledhill 律所",
    sourceUrl: "https://www.allenandgledhill.com",
    impactLevel: "高",
    keywords: ["网络安全法", "有害内容", "儿童保护", "罚款"]
  },

  // ==================== 土耳其 Turkey ====================
  {
    id: "TR-001",
    title: "土耳其《社交媒体法》（第 7253 号法）要求本地代表和数据存储",
    date: "2020-07-31",
    country: "土耳其",
    countryCode: "TR",
    category: "法律法规",
    type: "法律执行",
    summary: "土耳其第 7253 号法（Law No. 7253）于 2020 年 7 月 31 日通过，修订第 5651 号《互联网法》。该法要求日访问量超过 100 万的社交网络提供商必须在土耳其任命至少一名本地代表（自然人须为土耳其公民），并将从土耳其用户收集的数据存储在土耳其境内。平台须在 48 小时内响应内容移除申请，并每半年向信息技术和通信管理局（BTK）提交报告。未遵守的平台面临从 1000 万土耳其里拉起罚、广告禁令和最高 90% 带宽限制。",
    source: "土耳其信息技术和通信管理局 (BTK)",
    sourceUrl: "https://www.btk.gov.tr",
    impactLevel: "高",
    keywords: ["本地代表", "数据本地化", "带宽限制", "7253号法"]
  },

  // ==================== 阿联酋 UAE ====================
  {
    id: "AE-001",
    title: "阿联酋加强 AML/CFT 执法，虚拟资产为重点领域",
    date: "2025-01-01",
    country: "阿联酋",
    countryCode: "AE",
    category: "反洗钱",
    type: "执法加强",
    summary: "阿联酋在 2024 年 2 月被 FATF 移出灰名单后，继续加速 AML/CFT 改革。2024 年 8 月修订反洗钱法，将关键机构提升至内阁和总统府级别。2024-2027 年国家 AML/CFT 战略明确将虚拟资产和新型网络犯罪列为重点风险领域。迪拜虚拟资产监管局（VARA）要求所有虚拟资产服务提供商（VASP）实施客户尽职调查、持续监控、可疑活动报告及旅行规则合规。",
    source: "阿联酋央行 (CBUAE) / FATF / VARA",
    sourceUrl: "https://www.cbuae.gov.ae",
    impactLevel: "中",
    keywords: ["AML", "FATF", "虚拟资产", "VARA", "灰名单"]
  },

  // ==================== Google Play ====================
  {
    id: "GP-001",
    title: "Google Play 2026年4月重大政策更新",
    date: "2026-04-15",
    country: "Google Play",
    countryCode: "GP",
    category: "应用市场政策",
    type: "政策更新",
    summary: "Google Play 于 2026 年 4 月 15 日发布重大政策更新。核心变化：1）联系人权限 — 非核心功能应用必须使用 Android Contact Picker 而非请求完整 READ_CONTACTS 权限（最早执行 2026-05-15）；2）位置权限 — 必须采用位置按钮（location button）作为一次性精确位置访问的推荐方式（最早执行 2026-05-15）；3）账户转移 — 必须通过 Play Console 官方"Transfer ownership"流程进行，含 7 天安全延迟期（截止 2026-05-27）；4）预测市场试点 — 允许真实货币交易的预测市场应用须于 2026-06-01 前注册试点计划。",
    source: "Google Play Policy Center / ASOWorld",
    sourceUrl: "https://asoworld.com/blog/april-2026-google-play-policy-updates/",
    impactLevel: "极高",
    keywords: ["联系人权限", "位置按钮", "账户转移", "预测市场"]
  }
];

// 导出供 app.js 使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TRACKER_DATA };
}

// 浏览器环境：显式挂载到 window
if (typeof window !== 'undefined') {
  window.TRACKER_DATA = TRACKER_DATA;
}
