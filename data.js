/**
 * Litmatch 情报跟踪站 - 数据文件
 * 所有信息基于公开可查的监管动态、政策文件、新闻报道
 * 每条数据标注来源 URL（部分需翻墙访问）
 */

const TRACKER_DATA = [
  // ==================== 菲律宾 Philippines ====================
  {
    id: "PH-001",
    title: "菲律宾 SIM 卡强制实名注册法执行",
    date: "2026-04-10",
    country: "菲律宾",
    countryCode: "PH",
    category: "法律法规",
    type: "新法生效",
    summary: "菲律宾 SIM 注册法要求所有 SIM 卡用户完成实名注册。未注册 SIM 已于 2023 年 7 月被停用，但该法律框架持续影响新用户注册流程，所有社交/约会应用依赖的短信验证系统必须适配实名制环境。",
    source: "菲律宾国家电信委员会 (NTC)",
    sourceUrl: "https://ntc.gov.ph",
    impactLevel: "高",
    keywords: ["SIM 注册", "实名认证", "短信验证"]
  },
  {
    id: "PH-002",
    title: "菲律宾修订《网络安全法》扩大监控权力",
    date: "2026-04-15",
    country: "菲律宾",
    countryCode: "PH",
    category: "法律法规",
    type: "法律修订",
    summary: "菲律宾通过《关键信息基础设施网络事件报告法》，要求在线服务提供商向当局报告网络事件，社交媒体平台需配合执法部门的数据调取请求。",
    source: "菲律宾司法部",
    sourceUrl: "https://www.doj.gov.ph",
    impactLevel: "高",
    keywords: ["网络安全", "数据调取", "事件报告"]
  },
  {
    id: "PH-003",
    title: "菲律宾 NTC 强化语音欺诈打击",
    date: "2026-03-20",
    country: "菲律宾",
    countryCode: "PH",
    category: "执法行动",
    type: "执法行动",
    summary: "菲律宾国家电信委员会（NTC）联合电信运营商加大打击语音欺诈和短信诈骗力度，要求社交应用加强对用户身份真实性验证，以应对频发的'杀猪盘'等利用约会平台实施的诈骗案件。",
    source: "菲律宾国家电信委员会 (NTC)",
    sourceUrl: "https://ntc.gov.ph",
    impactLevel: "中",
    keywords: ["诈骗打击", "语音欺诈", "身份验证"]
  },

  // ==================== 印度尼西亚 Indonesia ====================
  {
    id: "ID-001",
    title: "印尼 Kominfo 强化 PSE 注册要求",
    date: "2026-04-18",
    country: "印度尼西亚",
    countryCode: "ID",
    category: "政府政策",
    type: "政策执行",
    summary: "印尼通信与信息技术部（Kominfo）继续严格执行 PSE（Penyelenggara Sistem Elektronik，电子系统提供商）注册制度。所有在印尼运营的在线平台必须在政府数据库中注册，未注册平台面临被封锁风险。此前 TikTok Shop 曾因未合规被暂停运营。",
    source: "印尼通信与信息技术部 (Kominfo)",
    sourceUrl: "https://kominfo.go.id",
    impactLevel: "高",
    keywords: ["PSE 注册", "平台注册", "内容审查"]
  },
  {
    id: "ID-002",
    title: "TikTok Shop 获准在印尼恢复运营",
    date: "2026-04-12",
    country: "印度尼西亚",
    countryCode: "ID",
    category: "同业信息",
    type: "市场动态",
    summary: "印尼贸易部批准 TikTok Shop 在满足与本地企业合作等条件后恢复运营。该事件显示印尼政府对跨国社交/内容平台采取'先审查后放行'的严格态度，对 Litmatch 等社交应用的市场策略具有参考意义。",
    source: "印尼贸易部 / Reuters",
    sourceUrl: "https://www.reuters.com",
    impactLevel: "中",
    keywords: ["TikTok", "电商", "外资平台"]
  },
  {
    id: "ID-003",
    title: "印尼要求社交媒体加强对未成年人保护",
    date: "2026-04-05",
    country: "印度尼西亚",
    countryCode: "ID",
    category: "政府政策",
    type: "政策更新",
    summary: "印尼政府要求所有社交媒体和即时通讯平台加强儿童保护措施，包括实施更严格的年龄验证机制和内容过滤系统。约会和社交发现类应用需特别注意未成年人保护合规。",
    source: "印尼妇女赋权和儿童保护部",
    sourceUrl: "https://kominfo.go.id",
    impactLevel: "高",
    keywords: ["未成年人保护", "年龄验证", "内容过滤"]
  },

  // ==================== 泰国 Thailand ====================
  {
    id: "TH-001",
    title: "泰国强制社交/约会应用实施年龄验证",
    date: "2025-10-31",
    country: "泰国",
    countryCode: "TH",
    category: "法律法规",
    type: "新法生效",
    summary: "泰国《计算机犯罪法》相关条款自 2025 年 10 月 31 日起正式要求社交媒体、约会和游戏应用运营商收集用户身份数据并进行年龄验证。不遵守规定的服务提供商可能面临最高 100 万泰铢罚款和最长 1 年监禁。",
    source: "泰国数字经济与社会部 (MDES)",
    sourceUrl: "https://www.mdes.go.th",
    impactLevel: "高",
    keywords: ["年龄验证", "身份收集", "计算机犯罪法"]
  },
  {
    id: "TH-002",
    title: "泰国 OPDC 禁止数据收集中的捆绑同意",
    date: "2026-01-15",
    country: "泰国",
    countryCode: "TH",
    category: "政府政策",
    type: "监管指引",
    summary: "泰国个人数据保护委员会（OPDC）发布明确指引，禁止服务提供商在一般数据处理中将多项同意捆绑在一起。社交应用必须确保用户能单独同意不同功能的数据使用（如位置、通讯录、麦克风），不能采用'一揽子同意'模式。",
    source: "泰国个人数据保护委员会 (OPDC)",
    sourceUrl: "https://www.pdpc.go.th",
    impactLevel: "高",
    keywords: ["捆绑同意", "单独同意", "数据保护"]
  },
  {
    id: "TH-003",
    title: "泰国《数字平台法》生效",
    date: "2025-01-01",
    country: "泰国",
    countryCode: "TH",
    category: "法律法规",
    type: "新法生效",
    summary: "泰国《数字平台法》要求月活用户超过一定阈值的大型数字平台向 MDES 报告算法设计、内容审核政策、广告分发机制等信息。虽然主要面向大型平台，但中等规模社交应用也需关注合规趋势。",
    source: "泰国数字经济与社会部 (MDES)",
    sourceUrl: "https://www.mdes.go.th",
    impactLevel: "中",
    keywords: ["数字平台法", "算法透明", "内容审核"]
  },

  // ==================== 马来西亚 Malaysia ====================
  {
    id: "MY-001",
    title: "马来西亚社交媒体牌照制度执行",
    date: "2024-07-01",
    country: "马来西亚",
    countryCode: "MY",
    category: "法律法规",
    type: "新法生效",
    summary: "马来西亚《1998 年通信与多媒体法》修正案要求：月收入超过 800 万林吉特或用户数超过 800 万的社交媒体平台必须向马来西亚通信与多媒体委员会（MCMC）申请 A 级应用服务提供商（ASP）牌照。Facebook、Instagram、TikTok、X 等已获牌照。",
    source: "马来西亚通信与多媒体委员会 (MCMC)",
    sourceUrl: "https://www.mcmc.gov.my",
    impactLevel: "高",
    keywords: ["牌照制度", "ASP", "平台注册"]
  },
  {
    id: "MY-002",
    title: "马来西亚《网络安全法案》生效",
    date: "2025-10-01",
    country: "马来西亚",
    countryCode: "MY",
    category: "法律法规",
    type: "新法生效",
    summary: "马来西亚《网络安全法案》正式生效，要求所有社交媒体和互联网信息应用向 MCMC 注册，并遵守内容审核和网络安全标准。该法案还设立国家网络安全委员会（NACSA），加强对在线平台的监管。",
    source: "马来西亚国家网络安全局 (NACSA)",
    sourceUrl: "https://www.nacsa.gov.my",
    impactLevel: "高",
    keywords: ["网络安全", "平台注册", "内容审核"]
  },
  {
    id: "MY-003",
    title: "马来西亚《在线安全法案》通过",
    date: "2025-08-01",
    country: "马来西亚",
    countryCode: "MY",
    category: "法律法规",
    type: "法律通过",
    summary: "马来西亚《在线安全法案》（Online Safety Act）通过，要求平台主动识别、标记和删除儿童性虐待材料（CSAM），建立快速响应机制处理用户举报。社交应用必须建立强有力的内容审核系统。",
    source: "马来西亚通信与多媒体委员会 (MCMC)",
    sourceUrl: "https://www.mcmc.gov.my",
    impactLevel: "高",
    keywords: ["在线安全", "CSAM", "内容审核"]
  },
  {
    id: "MY-004",
    title: "马来西亚数字服务税 (DST) 对外企生效",
    date: "2026-04-01",
    country: "马来西亚",
    countryCode: "MY",
    category: "政府政策",
    type: "税收政策",
    summary: "自 2026 年 4 月 1 日起，马来西亚数字服务税（DST）扩展至所有外国数字服务提供商。年收入超过 50 万林吉特的海外平台必须通过 MyTax Portal 注册，并按 8% 税率缴纳服务税。",
    source: "马来西亚皇家关税局 (RMCD)",
    sourceUrl: "https://www.customs.gov.my",
    impactLevel: "中",
    keywords: ["数字服务税", "DST", "税务合规"]
  },

  // ==================== 越南 Vietnam ====================
  {
    id: "VN-001",
    title: "越南《个人数据保护法》正式生效",
    date: "2026-01-01",
    country: "越南",
    countryCode: "VN",
    category: "法律法规",
    type: "新法生效",
    summary: "越南《个人数据保护法》（PDP Law，第 91/2025/QH15 号法律）于 2026 年 1 月 1 日正式生效。这是越南首部专门保护个人数据的法律，将监管框架从法令级别提升至法律级别。法律定义了'基本个人数据'和'敏感个人数据'，要求数据处理必须有明确目的和范围。",
    source: "越南国会 / EY Vietnam",
    sourceUrl: "https://www.alitium.com/vietnams-2025-law-on-personal-data-protection/",
    impactLevel: "高",
    keywords: ["个人数据保护", "敏感数据", "数据分类"]
  },
  {
    id: "VN-002",
    title: "越南第 356/2025 号法令细化 PDP 法实施",
    date: "2026-01-01",
    country: "越南",
    countryCode: "VN",
    category: "政府政策",
    type: "实施细则",
    summary: "越南政府发布第 356/2025/ND-CP 号法令，细化《个人数据保护法》的实施要求。法令收紧了数据主体同意要求：禁止默认勾选或误导性设置；扩大敏感数据范围，新增'行为追踪数据'、'电信服务使用数据'、'社交网络使用数据'等；要求跨境数据传输必须进行数据转移影响评估（TIA）。",
    source: "越南政府 / EY Vietnam",
    sourceUrl: "https://www.ey.com/content/dam/ey-unified-site/ey-com/en-vn/technical/tax/documents/ey-vietnam-legal-alert-march-2026-decree-no356-2025-nd-cp.pdf",
    impactLevel: "高",
    keywords: ["同意要求", "跨境传输", "行为追踪"]
  },
  {
    id: "VN-003",
    title: "越南《网络安全法 2025》通过，2026年7月生效",
    date: "2025-12-10",
    country: "越南",
    countryCode: "VN",
    category: "法律法规",
    type: "新法通过",
    summary: "越南国会通过新版《网络安全法》，将于 2026 年 7 月 1 日生效。新法要求外国服务供应商必须在越南设立分支机构或代表处；要求收集、利用、分析用户数据的平台将数据存储在越南境内；当局可在发现违规时要求停止服务访问，并采取带宽限制、网站屏蔽等'技术措施'。",
    source: "越南国会 / Mori Hamada & Matsumoto",
    sourceUrl: "https://www.morihamada.com/en/insights/newsletters/131976",
    impactLevel: "极高",
    keywords: ["网络安全", "数据本地化", "分支机构"]
  },
  {
    id: "VN-004",
    title: "越南第 147 号法令强制社交媒体实名验证",
    date: "2024-12-01",
    country: "越南",
    countryCode: "VN",
    category: "法律法规",
    type: "法令执行",
    summary: "越南第 147/2024/ND-CP 号法令要求所有社交媒体平台必须使用手机号码或身份证号对用户进行身份验证。未完成验证的账户将无法使用社交功能。该法令适用于月活超过 10 万的跨境平台，要求建立本地联系点并向政府报告。",
    source: "越南政府 / CCIA Report",
    sourceUrl: "https://ccianet.org/wp-content/uploads/2025/10/2025-Digital-Trade-Barriers-in-Asia-the-Pacific.pdf",
    impactLevel: "高",
    keywords: ["实名验证", "手机号验证", "本地联系点"]
  },
  {
    id: "VN-005",
    title: "越南公安部起草网络安全行政处罚法令",
    date: "2026-03-15",
    country: "越南",
    countryCode: "VN",
    category: "执法行动",
    type: "立法进展",
    summary: "越南公安部正在起草《网络安全违法行为行政处罚法令》，将对违反网络安全、个人数据保护、信息安全和网络保护的实体处以罚款和行政处罚，包括'技术措施'（如带宽限制和网站屏蔽）。",
    source: "越南公安部",
    sourceUrl: "https://mps.gov.vn",
    impactLevel: "高",
    keywords: ["行政处罚", "罚款", "技术措施"]
  },

  // ==================== 巴西 Brazil ====================
  {
    id: "BR-001",
    title: "巴西通过 PL 2630 互联网平台责任法案",
    date: "2025-07-01",
    country: "巴西",
    countryCode: "BR",
    category: "法律法规",
    type: "新法生效",
    summary: "巴西国会通过《平台责任法案》（PL 2630），建立'数字宪法'框架。法案要求社交媒体平台移除虚假信息和仇恨内容，对第三方内容承担更严格责任，并实施用户身份验证机制。该法案被称为'假新闻法案'，对约会和社交应用的内容审核义务有直接影响。",
    source: "巴西国会 / 巴西联邦官方公报",
    sourceUrl: "https://www.in.gov.br",
    impactLevel: "高",
    keywords: ["平台责任", "虚假信息", "身份验证"]
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
    summary: "Google Play 发布 2026 年 4 月政策更新，引入两项全新政策并修订多项现有政策。核心变化：1）联系人权限 - 非核心功能应用必须使用 Android Contact Picker 而非请求完整 READ_CONTACTS 权限（截止 2026-05-15）；2）位置权限 - 必须采用位置按钮（截止 2026-05-15）；3）账户转移 - 必须通过 Play Console 官方流程（截止 2026-05-27）。",
    source: "Google Play Policy Center / ASOWorld",
    sourceUrl: "https://asoworld.com/blog/april-2026-google-play-policy-updates/",
    impactLevel: "极高",
    keywords: ["联系人权限", "位置权限", "账户转移"]
  },
  {
    id: "GP-002",
    title: "Google Play 约会广告政策更新",
    date: "2025-03-04",
    country: "Google Play",
    countryCode: "GP",
    category: "应用市场政策",
    type: "政策执行",
    summary: "Google 自 2025 年 3 月 4 日起实施新的约会与陪伴广告政策。所有约会/陪伴类广告主必须获得 Google Ads 认证才能投放广告。一般约会广告需获得'一般约会认证'；涉及敏感内容的需获得'受限约会认证'。完全禁止：聚合网站、付费陪伴、剥削性内容（如糖爹服务）、使用虚假资料/聊天机器人/深度伪造的服务。",
    source: "Google Ads Policy / WeLoveDigitalMarketing",
    sourceUrl: "https://www.welovedigitalmarketing.com/blogpost/googles-dating-ads-policy/",
    impactLevel: "高",
    keywords: ["约会广告", "Google Ads 认证", "禁止内容"]
  },
  {
    id: "GP-003",
    title: "Google Play 年龄受限内容政策澄清",
    date: "2026-04-15",
    country: "Google Play",
    countryCode: "GP",
    category: "应用市场政策",
    type: "政策澄清",
    summary: "Google Play 澄清年龄受限内容政策：对于约会/匹配功能仅为附带功能的社交应用，不再强制要求在 Play Console 中实施'限制未成年人访问'，但前提是应用必须维持有效的替代年龄验证机制。这对 Litmatch 等定位为'灵魂社交'而非纯约会应用的产品有直接影响。",
    source: "Google Play Policy Center",
    sourceUrl: "https://asoworld.com/blog/april-2026-google-play-policy-updates/",
    impactLevel: "中",
    keywords: ["年龄验证", "附带功能", "社交应用"]
  },

  // ==================== App Store ====================
  {
    id: "AS-001",
    title: "App Store 2025年11月审核指南重大更新",
    date: "2025-11-13",
    country: "App Store",
    countryCode: "AS",
    category: "应用市场政策",
    type: "政策更新",
    summary: "Apple 更新 App Review Guidelines，多项条款影响社交/约会应用：1）1.2.1(a) - 创作者应用必须提供机制让用户标识超出应用年龄评级的内容，并基于已验证或声明的年龄限制未成年人访问；2）4.7.5 - HTML5/JS 小程序必须提供年龄限制机制；3）5.1.2(i) - 必须明确披露与第三方（含第三方 AI）共享个人数据的情况，并在共享前获得明确许可。",
    source: "Apple Developer",
    sourceUrl: "https://developer.apple.com/news/?id=ey6d8onl",
    impactLevel: "高",
    keywords: ["年龄评级", "第三方数据共享", "小程序"]
  },
  {
    id: "AS-002",
    title: "美国多州 App Store 年龄验证法影响开发者",
    date: "2026-01-01",
    country: "App Store",
    countryCode: "AS",
    category: "应用市场政策",
    type: "法律影响",
    summary: "美国得克萨斯州、路易斯安那州、犹他州和加利福尼亚州通过'应用商店问责法'，要求应用商店验证用户年龄并传递给开发者。Google 和 Apple 已分别推出 Play API 和 Declared Age Range API。所有应用开发者必须集成这些 API 并处理未成年用户数据（尽管部分法律被挑战）。",
    source: "Venable LLP / Loeb & Loeb",
    sourceUrl: "https://www.venable.com/insights/publications/2025/12/new-app-developer-compliance-requirements",
    impactLevel: "中",
    keywords: ["年龄验证 API", "未成年保护", "应用商店问责法"]
  },

  // ==================== 同业信息 ====================
  {
    id: "IN-001",
    title: "全球约会应用市场 2025 年规模达 98.9 亿美元",
    date: "2025-01-01",
    country: "全球",
    countryCode: "GL",
    category: "同业信息",
    type: "市场报告",
    summary: "全球约会应用市场 2025 年预计达 98.9 亿美元，预计 2030 年达 144 亿美元（CAGR 7.6%）。北美领先，但亚太地区（尤其印度和中国）增长最快。Tinder 以 31.4% 市场份额领先，Bumble 14%，Hinge 8.9%，Grindr 5.6%。行业趋势：生物识别验证（Face ID、视频验证）正成为标准；AI 内容审核和匹配成为核心能力。",
    source: "Bumble 投资者关系 / NextLeap Research",
    sourceUrl: "https://assets.nextleap.app/submissions/NLBumble-fabe5967-137c-450a-9d26-e5cb3789fc6f.pdf",
    impactLevel: "中",
    keywords: ["市场规模", "Tinder", "Bumble", "生物识别"]
  },
  {
    id: "IN-002",
    title: "Bumble 2025 年 2 月被黑石集团收购",
    date: "2025-02-01",
    country: "全球",
    countryCode: "GL",
    category: "同业信息",
    type: "并购事件",
    summary: "约会应用 Bumble 于 2025 年 2 月被私募股权巨头黑石集团（Blackstone）收购。交易反映了约会应用市场的整合趋势，资本对头部平台的持续看好，以及中小平台面临被挤压的风险。",
    source: "Blackstone / 财经新闻",
    sourceUrl: "https://www.bumble.com",
    impactLevel: "中",
    keywords: ["Bumble", "黑石", "并购", "市场整合"]
  },
  {
    id: "IN-003",
    title: "Bigo Live 持续主导东南亚直播社交市场",
    date: "2026-04-01",
    country: "东南亚",
    countryCode: "SEA",
    category: "同业信息",
    type: "市场动态",
    summary: "Bigo Live（欢聚时代 YY 旗下）持续主导东南亚直播和语音社交市场，在菲律宾、印尼、泰国、越南、马来西亚均保持高渗透率，全球用户达 4 亿。其成功模式（语聊房、虚拟礼物、主播生态）与 Litmatch 的语聊房和虚拟形象功能直接竞争。",
    source: "Semantic Scholar / Bigo Live",
    sourceUrl: "https://www.bigo.tv",
    impactLevel: "中",
    keywords: ["Bigo Live", "语聊房", "东南亚", "欢聚时代"]
  },
  {
    id: "IN-004",
    title: "约会应用行业安全功能成竞争焦点",
    date: "2026-04-01",
    country: "全球",
    countryCode: "GL",
    category: "同业信息",
    type: "行业趋势",
    summary: "2025-2026 年约会应用行业竞争焦点从匹配效率转向安全功能。头部平台纷纷推出：ID 身份验证、视频验证、恐慌按钮（Panic Button）、AI 实时内容审核、'我们见面了吗'安全反馈等。监管压力（尤其是东南亚各国加强年龄验证和内容审核要求）正推动全行业安全升级。",
    source: "Bumble / Tinder / Hinge 产品更新",
    sourceUrl: "https://assets.nextleap.app/submissions/NLBumble-fabe5967-137c-450a-9d26-e5cb3789fc6f.pdf",
    impactLevel: "中",
    keywords: ["安全功能", "ID 验证", "AI 审核", "恐慌按钮"]
  },

  // ==================== 新增执法/动态条目（2026年4月） ====================
  {
    id: "TH-004",
    title: "泰国 OPDC 对违规数据处理企业加强罚款",
    date: "2026-04-08",
    country: "泰国",
    countryCode: "TH",
    category: "执法行动",
    type: "执法行动",
    summary: "泰国个人数据保护委员会（OPDC）近期加强对违规企业的执法力度，多家未获得有效同意即处理用户数据的企业被处以罚款。委员会特别强调社交应用不得在隐私政策中使用'一揽子同意'模式。",
    source: "泰国 OPDC 公告",
    sourceUrl: "https://www.pdpc.go.th",
    impactLevel: "中",
    keywords: ["罚款", "同意有效性", "OPDC"]
  },
  {
    id: "MY-005",
    title: "马来西亚 MCMC 对未注册平台发出最后警告",
    date: "2026-04-14",
    country: "马来西亚",
    countryCode: "MY",
    category: "执法行动",
    type: "执法行动",
    summary: "马来西亚通信与多媒体委员会（MCMC）向多家未申请 A 级牌照的社交媒体和通讯平台发出最后合规警告，要求在限期内完成注册，否则将面临服务限制或屏蔽措施。",
    source: "MCMC 新闻发布",
    sourceUrl: "https://www.mcmc.gov.my",
    impactLevel: "中",
    keywords: ["牌照警告", "合规截止", "MCMC"]
  },
  {
    id: "VN-006",
    title: "越南《电子商务法草案》要求外资平台设立本地实体",
    date: "2026-04-02",
    country: "越南",
    countryCode: "VN",
    category: "政府政策",
    type: "草案进展",
    summary: "越南《电子商务法（草案）》正在审议中，草案要求提供社交媒体商务和联盟营销服务的跨境平台必须在越南设立本地实体、缴纳保证金并遵守透明度规则。该草案若通过，将对 Litmatch 等计划在越南设立本地公司的策略产生直接影响。",
    source: "越南工贸部 / CCIA",
    sourceUrl: "https://ccianet.org/wp-content/uploads/2025/10/2025-Digital-Trade-Barriers-in-Asia-the-Pacific.pdf",
    impactLevel: "高",
    keywords: ["电子商务法", "本地实体", "保证金"]
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
