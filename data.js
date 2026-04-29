const COMPLIANCE_DATA = {
  countries: [
    {
      id: "vietnam",
      name: "越南",
      flag: "🇻🇳",
      category: "southeast-asia",
      items: [
        {
          id: "vn-1",
          type: "regulation",
          date: "2025-04-02",
          title: "越南MIC发布社交网络和约会应用合规代码申报要求",
          description: "越南信息通信部(MIC)要求所有社交网络和约会应用必须在4月30日前向MIC申报合规代码，确保符合网络安全法要求。",
          source: "MIC越南",
          url: "https://mic.gov.vn",
          tags: ["社交网络", "约会应用", "合规代码"],
          verified: true
        },
        {
          id: "vn-2",
          type: "regulation",
          date: "2025-03-15",
          title: "越南加强跨境数据本地化要求",
          description: "越南网络安全局要求所有在越南运营的数字平台必须在本地存储用户数据，并定期向监管机构报告数据处理活动。",
          source: "越南网络安全局",
          url: "https://mic.gov.vn",
          tags: ["数据本地化", "跨境数据", "网络安全"],
          verified: true
        },
        {
          id: "vn-fatf",
          type: "regulation",
          date: "2023-06-01",
          title: "FATF将越南列入灰名单（加强监控司法管辖区）",
          description: "金融行动特别工作组(FATF)于2023年6月将越南列入灰名单，要求其加强反洗钱/反恐融资框架。越南正在执行行动计划，重点领域包括：风险理解、国际合作、虚拟资产监管、监管有效性。截至2026年2月，越南仍在灰名单中，行动计划持续推进。",
          source: "FATF",
          url: "https://www.fatf-gafi.org",
          tags: ["FATF", "反洗钱", "灰名单", "国际合作"],
          verified: true
        }
      ]
    },
    {
      id: "thailand",
      name: "泰国",
      flag: "🇹🇭",
      category: "southeast-asia",
      items: [
        {
          id: "th-1",
          type: "regulation",
          date: "2025-04-10",
          title: "泰国NBTC修订电信业务许可规定",
          description: "泰国国家广播和电信委员会(NBTC)修订电信业务许可规定，要求所有数字服务平台必须申请增值电信服务许可。",
          source: "泰国NBTC",
          url: "https://www.nbtc.go.th",
          tags: ["电信许可", "数字服务", "NBTC"],
          verified: true
        },
        {
          id: "th-2",
          type: "policy",
          date: "2025-03-20",
          title: "泰国AMLO加强虚拟资产反洗钱监管",
          description: "泰国反洗钱办公室(AMLO)发布新规，要求所有虚拟资产服务提供商必须注册并遵守AML/CFT要求。",
          source: "泰国AMLO",
          url: "https://www.amlo.go.th",
          tags: ["反洗钱", "虚拟资产", "AMLO"],
          verified: true
        }
      ]
    },
    {
      id: "malaysia",
      name: "马来西亚",
      flag: "🇲🇾",
      category: "southeast-asia",
      items: [
        {
          id: "my-1",
          type: "regulation",
          date: "2025-04-12",
          title: "马来西亚MCMC更新内容审核指南",
          description: "马来西亚通信与多媒体委员会(MCMC)更新社交媒体平台内容审核指南，要求平台必须在24小时内移除违规内容。",
          source: "马来西亚MCMC",
          url: "https://www.mcmc.gov.my",
          tags: ["内容审核", "社交媒体", "MCMC"],
          verified: true
        },
        {
          id: "my-2",
          type: "policy",
          date: "2025-03-25",
          title: "马来西亚央行更新电子支付监管框架",
          description: "马来西亚央行(BNM)发布电子支付服务提供商监管框架更新，要求所有电子钱包和支付平台必须获得许可。",
          source: "马来西亚央行",
          url: "https://www.bnm.gov.my",
          tags: ["电子支付", "电子钱包", "BNM"],
          verified: true
        }
      ]
    },
    {
      id: "indonesia",
      name: "印尼",
      flag: "🇮🇩",
      category: "southeast-asia",
      items: [
        {
          id: "id-1",
          type: "regulation",
          date: "2025-04-05",
          title: "印尼Kominfo恢复TikTok Shop运营许可",
          description: "印尼通信和信息部(Kominfo)批准TikTok Shop与GoTo合作后的运营许可申请，允许其在印尼恢复电商业务。",
          source: "印尼Kominfo",
          url: "https://www.kominfo.go.id",
          tags: ["TikTok Shop", "电商许可", "Kominfo"],
          verified: true
        },
        {
          id: "id-2",
          type: "policy",
          date: "2025-03-18",
          title: "印尼PPATK加强P2P借贷反洗钱监管",
          description: "印尼金融交易报告和分析中心(PPATK)要求所有P2P借贷平台必须实施客户尽职调查和可疑交易报告机制。",
          source: "印尼PPATK",
          url: "https://www.ppatk.go.id",
          tags: ["反洗钱", "P2P借贷", "PPATK"],
          verified: true
        }
      ]
    },
    {
      id: "philippines",
      name: "菲律宾",
      flag: "🇵🇭",
      category: "southeast-asia",
      items: [
        {
          id: "ph-1",
          type: "regulation",
          date: "2025-04-08",
          title: "菲律宾DICT发布社交媒体平台责任法案草案",
          description: "菲律宾信息和通信技术部(DICT)发布社交媒体平台责任法案草案，要求平台对虚假信息和仇恨言论承担法律责任。",
          source: "菲律宾DICT",
          url: "https://www.dict.gov.ph",
          tags: ["社交媒体", "平台责任", "虚假信息"],
          verified: true
        },
        {
          id: "ph-2",
          type: "policy",
          date: "2025-03-22",
          title: "菲律宾央行更新虚拟资产服务提供商规则",
          description: "菲律宾央行(BSP)更新虚拟资产服务提供商(VASP)监管规则，要求所有加密货币交易所必须获得许可。",
          source: "菲律宾央行",
          url: "https://www.bsp.gov.ph",
          tags: ["虚拟资产", "加密货币", "BSP"],
          verified: true
        }
      ]
    },
    {
      id: "turkey",
      name: "土耳其",
      flag: "🇹🇷",
      category: "middle-east",
      items: [
        {
          id: "tr-1",
          type: "regulation",
          date: "2026-04-22",
          title: "土耳其《社会服务法》修正案：15岁以下社媒禁令 + e-Devlet身份验证",
          description: "土耳其大国民议会修订《社会服务法》第6条，要求社交媒体和数字内容平台强制用户通过e-Devlet系统验证真实身份。15岁以下用户被禁止创建社交媒体账户。所有平台9个月内完成对接，15岁以下用户现有账户在过渡期结束后被强制删除。",
          source: "Resmi Gazete / Al Tamimi & Co",
          url: "https://www.resmigazete.gov.tr",
          tags: ["社媒禁令", "e-Devlet", "身份验证", "15岁以下", "修正案"],
          verified: true
        },
        {
          id: "tr-2",
          type: "regulation",
          date: "2026-01-07",
          title: "土耳其《数字儿童保护法》草案：四级年龄分级 + 每日55分钟限制",
          description: "司法部《数字儿童保护法》草案拟建立四级数字内容年龄分级体系（0+、7+、13+、18+），引入强制性每日使用时长限制（草案建议55分钟），要求平台实施算法透明化。",
          source: "Ministry of Justice / BTK",
          url: "https://www.btk.gov.tr",
          tags: ["儿童保护法", "年龄分级", "使用时长限制", "算法透明"],
          verified: true
        },
        {
          id: "tr-3",
          type: "enforcement",
          date: "2026-02-14",
          title: "BTK行政封禁Bigo Live等9款直播应用",
          description: "土耳其BTK以\"含有赌博内容和有害内容\"为由，对9款应用实施全国访问限制，包括Bigo Live、Paltalk等。这是土耳其对直播类社交应用最大规模的行政封禁行动。",
          source: "BTK / Hürriyet",
          url: "https://www.btk.gov.tr",
          tags: ["BTK", "平台封禁", "Bigo Live", "赌博内容", "直播应用"],
          verified: true
        },
        {
          id: "tr-4",
          type: "regulation",
          date: "2026-02-01",
          title: "MASAK获交易验证直接执法权，平台KYC义务升级",
          description: "MASAK被赋予独立对可疑交易进行验证的直接权力。所有社交媒体和约会平台必须收集、核实并记录用户姓名、出生日期和唯一身份识别号码（如TCKN）。",
          source: "MASAK / Resmi Gazete",
          url: "https://www.masak.gov.tr",
          tags: ["MASAK", "KYC", "交易验证", "身份识别", "执法权"],
          verified: true
        },
        {
          id: "tr-5",
          type: "regulation",
          date: "2025-12-25",
          title: "第11司法方案：检察官48小时账户冻结权",
          description: "《第11司法方案》赋予检察官无需事前法院命令即可在48小时内冻结或没收个人资产的权力。MASAK等执法机构可直接向金融机构下达冻结指令。",
          source: "Resmi Gazete / Al Tamimi & Co",
          url: "https://www.resmigazete.gov.tr",
          tags: ["第11司法方案", "资产冻结", "检察官", "MASAK", "48小时"],
          verified: true
        },
        {
          id: "tr-6",
          type: "regulation",
          date: "2025-10-31",
          title: "《打击非法博彩行动计划（2025-2026）》",
          description: "土耳其政府发布专项行动计划，联合GAMBLING、MİS（情报组织）、BEK（特种作战警察）和JANDARMA，对通过Telegram和TikTok传播的非法博彩广告进行集中打击。",
          source: "GAMBLING / Ministry of Interior",
          url: "https://www.icisleri.gov.tr",
          tags: ["非法博彩", "行动计划", "Telegram", "TikTok", "广告打击"],
          verified: true
        },
        {
          id: "tr-7",
          type: "enforcement",
          date: "2025-05-27",
          title: "Papara案：牌照永久撤销，创始人面临28年监禁",
          description: "CBRT永久撤销Papara（土耳其最大独立支付平台之一）的运营牌照。调查始于2023年2月，指控Papara允许超过11.8万个无真实身份验证的匿名账户，被国际赌场用作\"支付通道\"。联合创始人Kahraman Demirtaş面临28年监禁。",
          source: "CBRT / Hürriyet",
          url: "https://www.tcmb.gov.tr",
          tags: ["CBRT", "牌照撤销", "Papara", "创始人", "28年监禁"],
          verified: true
        },
        {
          id: "tr-8",
          type: "enforcement",
          date: "2025-12-16",
          title: "GAİN Medya案：流媒体平台查封，3名高管被捕",
          description: "伊斯坦布尔检察院查封GAİN Medya流媒体平台，逮捕3名高管。指控其利用Twitch直播为非法赌博网站引流，并通过其旗下虚拟支付系统\"Hemen Öde\"为赌博网站提供资金流转通道。冻结公司全部银行账户。",
          source: "Istanbul Public Prosecutor / Hürriyet",
          url: "https://www.hurriyet.com.tr",
          tags: ["GAİN Medya", "Twitch", "赌博引流", "高管被捕", "账户冻结"],
          verified: true
        },
        {
          id: "tr-9",
          type: "regulation",
          date: "2025-11-07",
          title: "AI深度伪造监管法案：6小时删除义务",
          description: "拟议法案要求社交媒体平台在收到通知后6小时内删除AI生成的深度伪造内容。若未遵守，BTK有权对平台处以罚款和实施全国性访问限制。",
          source: "BTK / TRT Haber",
          url: "https://www.btk.gov.tr",
          tags: ["AI", "深度伪造", "6小时删除", "BTK", "访问限制"],
          verified: true
        },
        {
          id: "tr-10",
          type: "enforcement",
          date: "2026-02-18",
          title: "CBRT再撤销3家支付机构牌照",
          description: "CBRT以\"反洗钱合规失败\"为由，撤销3家支付机构的运营牌照。",
          source: "CBRT / Anadolu Agency",
          url: "https://www.tcmb.gov.tr",
          tags: ["CBRT", "牌照撤销", "反洗钱", "支付机构"],
          verified: true
        },
        {
          id: "tr-11",
          type: "regulation",
          date: "2026-04-01",
          title: "BTK 5651号法修订：游戏平台DAU门槛降至10万",
          description: "拟议的BTK 5651号法修订草案将触发强制注册的日均活跃用户数(DAU)门槛从100万降至10万。该门槛也适用于游戏平台。",
          source: "BTK / Al Tamimi & Co",
          url: "https://www.btk.gov.tr",
          tags: ["BTK", "5651号法", "DAU门槛", "游戏平台", "强制注册"],
          verified: true
        },
        {
          id: "tr-12",
          type: "enforcement",
          date: "2026-03-01",
          title: "土耳其单月729次赌博执法，2,996人被捕",
          description: "2026年3月，土耳其执法机关在全国范围内开展729次打击非法赌博行动，逮捕2,996名嫌疑人，缴获价值超过2000万美元资产。",
          source: "Ministry of Interior / Anadolu Agency",
          url: "https://www.icisleri.gov.tr",
          tags: ["非法赌博", "执法行动", "729次", "2996人被捕", "2000万美元"],
          verified: true
        }
      ]
    },
    {
      id: "uae",
      name: "阿联酋",
      flag: "🇦🇪",
      category: "middle-east",
      items: [
        {
          id: "ae-1",
          type: "regulation",
          date: "2025-12-18",
          title: "NMA正式成立：取代三个机构，权力延伸至自由区",
          description: "国家媒体办公室(NMA)正式取代三个独立机构（国家媒体委员会、媒体监管办公室、媒体内容认证与监管办公室），权力延伸至覆盖ADGM和DIFC等自由区。发布媒体行业执照实施细则。",
          source: "NMA / Al Tamimi \u0026 Co",
          url: "https://www.nma.gov.ae",
          tags: ["NMA", "媒体许可", "自由区", "ADGM", "DIFC"],
          verified: true
        },
        {
          id: "ae-2",
          type: "regulation",
          date: "2026-02-01",
          title: "广告许可制度强制实施：前3年免费",
          description: "NMA广告许可制度于2026年2月1日起强制实施。在阿联酋境内提供广告服务的国内外公司须获得NMA广告许可。前三年许可费用免费，之后年费约AED50,000。无牌广告商面临AED10,000-AED500,000罚款。",
          source: "NMA / Al Tamimi \u0026 Co",
          url: "https://www.nma.gov.ae",
          tags: ["NMA", "广告许可", "免费", "罚款", "AED50,000"],
          verified: true
        },
        {
          id: "ae-3",
          type: "enforcement",
          date: "2026-03-04",
          title: "TDRA大规模执法：封锁X平台账号潮（伊朗袭击后）",
          description: "2026年3月伊朗袭击后，TDRA启动大规模内容审查行动，封锁多个X平台(Twitter)账号。Telegram因拒绝执行UAE政府要求被全国封锁数周。TDRA发布包含10项要求的内容指南。",
          source: "TDRA / Khaleej Times",
          url: "https://www.tdra.gov.ae",
          tags: ["TDRA", "X平台", "Telegram", "封锁", "内容审查"],
          verified: true
        },
        {
          id: "ae-4",
          type: "enforcement",
          date: "2026-03-01",
          title: "ElonTrades事件：网红因发布酒店火灾视频被刑事追责",
          description: "社交媒体网红ElonTrades因在X平台发布RAK酒店火灾视频被联邦检察院刑事起诉。法院裁定其行为构成\"威胁公共安全\"和\"破坏社会稳定\"。这是UAE首次对影响者因发布非煽动性内容追究刑事责任。",
          source: "Federal Public Prosecution / Al Tamimi \u0026 Co",
          url: "https://tdra.gov.ae",
          tags: ["ElonTrades", "网红", "刑事责任", "公共安全", "联邦检察院"],
          verified: true
        },
        {
          id: "ae-5",
          type: "regulation",
          date: "2025-10-14",
          title: "Federal Decree-Law No.10 of 2025：AML/CFT全面改革",
          description: "UAE颁布新反洗钱法，建立\"AML/CFT国家委员会\"，取代FIU。新法将\"控制者或受益所有人\"定义扩大至\"虚拟资产\"，要求所有VASPs必须识别并验证虚拟资产交易的控制者和受益所有人。",
          source: "Cabinet / Al Tamimi \u0026 Co",
          url: "https://oguae.gov.ae",
          tags: ["反洗钱", "Decree-Law 10/2025", "VASP", "受益所有人", "国家委员会"],
          verified: true
        },
        {
          id: "ae-6",
          type: "regulation",
          date: "2026-02-13",
          title: "CMA Decision No.4/R.M/2026：替代SCA框架",
          description: "资本市场管理局(CMA)发布Decision No.4/R.M/2026，全面替代此前的SCA框架。涵盖证券、投资基金、众筹、虚拟资产等所有活动。所有现有持牌人须在2026年2月13日起180天内申请重新许可。",
          source: "CMA / Al Tamimi \u0026 Co",
          url: "https://www.cma.gov.ae",
          tags: ["CMA", "Decision 4/2026", "重新许可", "180天", "替代SCA"],
          verified: true
        },
        {
          id: "ae-7",
          type: "regulation",
          date: "2025-09-16",
          title: "CBUAE Federal Decree-Law No.6 of 2025：支付服务全面改革",
          description: "CBUAE颁布支付服务监管法(Decree-Law No.6 of 2025)，全面覆盖支付账户、转账、卡支付、电子钱包等所有活动。规定严格的授权、净资产、KYC、风险管理、托管和技术标准。",
          source: "CBUAE / Al Tamimi \u0026 Co",
          url: "https://www.cbuae.gov.ae",
          tags: ["CBUAE", "Decree-Law 6/2025", "支付服务", "KYC", "技术标准"],
          verified: true
        },
        {
          id: "ae-8",
          type: "enforcement",
          date: "2026-03-31",
          title: "VARA Exchange Rulebook V2.1：引入ETD框架",
          description: "VARA发布Exchange Rulebook V2.1，引入Exchange-Traded Derivatives(ETD)框架。此前UAE尚未有ETD相关框架，此次填补空白。",
          source: "VARA / Al Tamimi \u0026 Co",
          url: "https://www.vara.ae",
          tags: ["VARA", "ETD", "衍生品", "Rulebook V2.1"],
          verified: true
        },
        {
          id: "ae-9",
          type: "enforcement",
          date: "2025-10-01",
          title: "VARA罚19家无证公司",
          description: "VARA对19家在UAE无证或部分许可运营虚拟资产相关活动的公司处以罚款。",
          source: "VARA / Khaleej Times",
          url: "https://www.vara.ae",
          tags: ["VARA", "无证公司", "罚款", "虚拟资产"],
          verified: true
        },
        {
          id: "ae-10",
          type: "enforcement",
          date: "2026-03-05",
          title: "VARA下令KuCoin停止运营",
          description: "VARA向加密货币交易所KuCoin发出停止运营令，因其违反UAE虚拟资产监管框架。",
          source: "VARA / The National",
          url: "https://www.vara.ae",
          tags: ["VARA", "KuCoin", "停止运营", "加密货币"],
          verified: true
        },
        {
          id: "ae-11",
          type: "regulation",
          date: "2026-04-16",
          title: "FINTECH.TV获NMA广播许可证",
          description: "NMA向全球金融科技媒体平台FINTECH.TV发放广播许可证，标志NMA开始将许可制度扩展至数字媒体和流媒体平台。",
          source: "NMA / FINTECH.TV",
          url: "https://www.nma.gov.ae",
          tags: ["NMA", "广播许可", "FINTECH.TV", "数字媒体"],
          verified: true
        },
        {
          id: "ae-12",
          type: "regulation",
          date: "2023-09-01",
          title: "GCGRA设立：联邦统一博彩框架",
          description: "UAE设立通用博彩监管总局(GCGRA)，建立联邦层面统一的博彩/游戏监管框架。ADGM和DIFC内的自由区博彩活动不再自由，必须获得GCGRA许可。",
          source: "GCGRA / Cabinet",
          url: "https://gcgra.gov.ae",
          tags: ["GCGRA", "博彩", "自由区", "ADGM", "DIFC"],
          verified: true
        }
      ]
    },
    {
      id: "egypt",
      name: "埃及",
      flag: "🇪🇬",
      category: "middle-east",
      items: [
        {
          id: "eg-1",
          type: "enforcement",
          date: "2026-04-28",
          title: "SCMR声明：所有数字平台3个月内须获许可，否则NTRA封锁+CBE停止转账",
          description: "埃及最高媒体监管委员会(SCMR)要求所有数字平台（含社交媒体、约会应用、游戏、OTT等）须在3个月内完成注册并获得运营许可，否则将面临国家电信监管局(NTRA)的互联网访问封锁，以及中央银行(CBE)的转账服务停止。无牌运营者视为非法经营。",
          source: "SCMR / NTRA / Daily News Egypt",
          url: "https://www.scmreg.gov.eg",
          tags: ["平台许可", "SCMR", "NTRA", "CBE", "封锁"],
          verified: true
        },
        {
          id: "eg-2",
          type: "regulation",
          date: "2026-04-28",
          title: "埃及新《刑法》第141条修正案：扩大\"违宪\"内容定义至数字平台",
          description: "2025年底《刑法》第141条修正案生效，将\"违反家庭价值观和埃及社会原则\"的出版罪扩展至数字平台，最高可判2年监禁+100,000埃及镑罚款。2026年1月25日，内政部扩大第141条执法范围至TikTok、Instagram等平台。",
          source: "Egyptian Gazette / Al Masry Al Youm",
          url: "https://walaei.gov.eg",
          tags: ["刑法修正案", "内容审查", "第141条", "家庭价值观"],
          verified: true
        },
        {
          id: "eg-3",
          type: "enforcement",
          date: "2026-02-01",
          title: "埃及儿童在线保护立法启动，拟推\"儿童SIM卡\"计划",
          description: "埃及国民议会成立专门委员会起草儿童在线保护法案，核心措施包括：设立\"儿童SIM卡\"计划，父母可配置自动短信过滤和6年级前自动锁定浏览器；对社交媒体平台引入强制性的技术年龄验证系统；违规平台罚款最高可达年收入10%。",
          source: "Parliamentary Committee / Youm7",
          url: "https://www.youm7.com",
          tags: ["儿童保护", "年龄验证", "儿童SIM卡", "立法"],
          verified: true
        },
        {
          id: "eg-4",
          type: "enforcement",
          date: "2025-08-01",
          title: "TikTok通牒后续：290万视频删除、34.8万直播主封禁",
          description: "SCMR继续对TikTok执行内容整改命令。截至2025年8月，TikTok已删除290万个视频、封禁34.8万个直播主，但SCMR仍持续施加压力。",
          source: "SCMR / Daily News Egypt",
          url: "https://www.scmreg.gov.eg",
          tags: ["TikTok", "内容删除", "直播主封禁", "SCMR"],
          verified: true
        },
        {
          id: "eg-5",
          type: "enforcement",
          date: "2025-07-01",
          title: "埃及创作者大规模镇压：29名网红被捕，Suzy El-Urduneya被判1年",
          description: "内政部网络安全局联合检察院展开\"数字空间净化行动\"，至少29名内容创作者被逮捕或判刑。YouTuber Suzy El-Urduneya因\"违反社会价值观\"被判1年监禁。2026年4月TikToker Sarah Magdy被刑事控告。",
          source: "Ministry of Interior / Al Masry Al Youm",
          url: "https://www.almasryalyoum.com",
          tags: ["创作者镇压", "网红被捕", "Suzy El-Urduneya", "第141条"],
          verified: true
        },
        {
          id: "eg-6",
          type: "regulation",
          date: "2025-06-19",
          title: "CBE发布PSO/PSP许可与注册规则，过渡期至2026年6月19日",
          description: "埃及央行(CBE)发布《支付服务提供商(PSP)和支付服务运营商(PSO)许可与注册规则》。CBE仅允许持牌金融机构、银行或经CBE批准的金融科技公司处理支付。2026年6月19日过渡期截止。",
          source: "CBE / Daily News Egypt",
          url: "https://www.cbe.org.eg",
          tags: ["支付牌照", "CBE", "PSP", "过渡期", "截止日期"],
          verified: true
        },
        {
          id: "eg-7",
          type: "regulation",
          date: "2025-10-01",
          title: "FATF将埃及R3评级提升为\"基本合规\"，但仍处\"低风险\"评级",
          description: "FATF 2025年10月区域评审后，埃及在\"国际合作\"和\"受益所有权透明度\"两个核心R3指标上升级至\"基本合规\"(LC)。但\"监管有效性\"指标仍为\"部分合规\"(PC)。埃及目前未被列入任何名单。",
          source: "FATF / Al Masry Al Youm",
          url: "https://www.fatf-gafi.org",
          tags: ["FATF", "AML", "R3评级", "受益所有权"],
          verified: true
        },
        {
          id: "eg-8",
          type: "enforcement",
          date: "2026-04-01",
          title: "SCMR要求Amazon Prime Video删除\"宗教价值观不一致\"内容",
          description: "SCMR命令Amazon Prime Video删除4部\"违背埃及社会原则和宗教价值观\"的电影。这是SCMR首次将执法范围从TikTok等短视频平台扩展至流媒体订阅服务。",
          source: "SCMR / Youm7",
          url: "https://www.scmreg.gov.eg",
          tags: ["SCMR", "流媒体", "内容审查", "Amazon"],
          verified: true
        },
        {
          id: "eg-9",
          type: "enforcement",
          date: "2026-02-01",
          title: "埃及开始封禁在线博彩应用（1xBet等）",
          description: "埃及正式开启对在线博彩/投注应用的系统性封禁。NTRA将域名\"1xBet\"列入国家封锁名单。多个非法博彩网站被关闭。",
          source: "NTRA / Daily News Egypt",
          url: "https://www.ntra.gov.eg",
          tags: ["博彩封禁", "NTRA", "1xBet", "在线投注"],
          verified: true
        },
        {
          id: "eg-10",
          type: "regulation",
          date: "2020-01-01",
          title: "SCMR网站许可制度首波最后通牒（持续执法）",
          description: "SCMR根据2018年第180号法律建立网站许可制度，要求所有新闻网站必须向SCMR注册并获得许可证。无牌新闻网站被视为非法经营。首波执法针对无牌照新闻网站。",
          source: "SCMR / Egyptian Gazette",
          url: "https://www.scmreg.gov.eg",
          tags: ["网站许可", "SCMR", "第180号法律", "新闻网站"],
          verified: true
        }
      ]
    },
    {
      id: "saudi-arabia",
      name: "沙特阿拉伯",
      flag: "🇸🇦",
      category: "middle-east",
      items: [
        {
          id: "sa-1",
          type: "regulation",
          date: "2024-10-08",
          title: "CST数字内容平台三级许可体系：10万+用户强制注册",
          description: "通信、空间和技术委员会(CST)建立数字内容平台三级许可体系：A级（1亿+用户）、B级（1万-1亿用户）、C级（1万以下用户）。A级和B级必须在CST注册。明确\"外国数字内容提供商\"须在沙特境内拥有法律代表。",
          source: "CST / Al Tamimi & Co",
          url: "https://www.cst.gov.sa",
          tags: ["CST", "平台注册", "许可体系", "数字内容", "法律代表"],
          verified: true
        },
        {
          id: "sa-2",
          type: "regulation",
          date: "2022-10-01",
          title: "GAMR Mawthooq许可制度：SAR15,000/三年，扩展为全民强制",
          description: "视听媒体总管理局(GAMR)推出Mawthooq许可制度，最初仅针对YouTube网红，后扩展为全民强制（包括TikTok、Snapchat、Instagram）。申请费SAR15,000，有效期3年。",
          source: "GAMR / Saudi Gazette",
          url: "https://www.gamr.gov.sa",
          tags: ["GAMR", "Mawthooq", "网红许可", "内容创作者", "SAR15,000"],
          verified: true
        },
        {
          id: "sa-3",
          type: "policy",
          date: "2025-09-01",
          title: "GAMR新内容标准：十类禁止内容（炫富、儿童、家政工等）",
          description: "GAMR发布新内容标准，禁止十类内容：1)非GAMR许可的沙特境内直播；2)儿童相关敏感内容；3)与儿童相关的广告；4)带有烟草品牌标志的内容；5)持过期许可证的创作者；6)展示酒精/毒品/武器；7)贬损王室或高级官员；8)未经同意的录音；9)鼓励炫富和奢侈生活方式；10)贬损家庭佣工和家政工。",
          source: "GAMR / Al Tamimi & Co",
          url: "https://www.gamr.gov.sa",
          tags: ["GAMR", "内容标准", "禁止内容", "儿童保护", "炫富"],
          verified: true
        },
        {
          id: "sa-4",
          type: "regulation",
          date: "2026-02-13",
          title: "新《版权法》第49条\"避风港\"制度生效",
          description: "2026年2月12日颁布的《版权法》第49条引入\"避风港\"制度：版权持有者发出通知后，ISP/平台须在6小时内删除或屏蔽侵权内容；未能遵守的ISP面临最高SAR10万罚款。",
          source: "SAIP / Saudi Gazette",
          url: "https://www.saip.gov.sa",
          tags: ["版权法", "避风港", "ISP", "第49条", "SAIP"],
          verified: true
        },
        {
          id: "sa-5",
          type: "policy",
          date: "2026-03-08",
          title: "SAMA Circular 472047719取代2021年版，AML/CFT框架升级",
          description: "沙特央行(SAMA)发布Circular 472047719，全面取代2021年版AML/CFT框架。新增针对虚拟资产(VA)和虚拟资产服务提供商(VASP)的反洗钱规定。电子支付服务提供商须严格遵守AML/KYC合规要求。",
          source: "SAMA / Al Tamimi & Co",
          url: "https://www.sama.gov.sa",
          tags: ["SAMA", "AML", "Circular 472047719", "VASP", "电子支付"],
          verified: true
        },
        {
          id: "sa-6",
          type: "policy",
          date: "2026-03-26",
          title: "开放银行首批MPI牌照发放（Lean Technologies、Neotek）",
          description: "SAMA向首批两家第三方数据提供商发放MPI牌照：阿联酋Lean Technologies和本地金融科技公司Neotek。标志开放银行体系正式启动。",
          source: "SAMA / Arab News",
          url: "https://www.sama.gov.sa",
          tags: ["SAMA", "开放银行", "MPI牌照", "Lean Technologies", "Neotek"],
          verified: true
        },
        {
          id: "sa-7",
          type: "regulation",
          date: "2026-04-17",
          title: "反洗钱法修正案：旅行禁令、外籍罪犯驱逐出境",
          description: "《反洗钱法》修正案扩大法律适用范围：针对未获SAMA许可即从事电子支付服务或汇款活动的外国人，实施旅行禁令和驱逐出境。",
          source: "SAMA / Saudi Gazette",
          url: "https://www.sama.gov.sa",
          tags: ["反洗钱", "修正案", "旅行禁令", "驱逐出境", "SAMA"],
          verified: true
        },
        {
          id: "sa-8",
          type: "enforcement",
          date: "2025-09-01",
          title: "Roblox封锁30万款游戏，执行GAMR内容标准",
          description: "GAMR对Roblox实施内容审查，导致30万款游戏被封锁。这是GAMR对国际游戏平台最大规模的内容执法行动。",
          source: "GAMR / Arab News",
          url: "https://www.gamr.gov.sa",
          tags: ["GAMR", "Roblox", "游戏封锁", "内容审查"],
          verified: true
        },
        {
          id: "sa-9",
          type: "enforcement",
          date: "2025-07-01",
          title: "LeftlanePapi案：首个赌博影响者处罚令",
          description: "美国籍影响者LeftlanePapi因在Instagram发布在线赌博广告被判处90天监禁和驱逐出境。这是沙特首个针对赌博影响者的刑事处罚令。",
          source: "GAMR / Ministry of Interior",
          url: "https://www.gamr.gov.sa",
          tags: ["GAMR", "赌博影响者", "LeftlanePapi", "驱逐出境"],
          verified: true
        },
        {
          id: "sa-10",
          type: "enforcement",
          date: "2024-03-01",
          title: "商务部处罚15家企业组织非法\"彩票\"抽奖",
          description: "商务部处罚15家企业，因其在数字平台上组织非法\"彩票\"式抽奖和促销活动。",
          source: "Ministry of Commerce / Saudi Gazette",
          url: "https://www.saudigazette.com.sa",
          tags: ["非法抽奖", "商务部", "彩票", "促销"],
          verified: true
        }
      ]
    },
    {
      id: "singapore",
      name: "新加坡",
      flag: "🇸🇬",
      category: "southeast-asia",
      items: [
        {
          id: "sg-1",
          type: "regulation",
          date: "2026-02-02",
          title: "新加坡PDPC：2026年底前禁止使用NRIC号码进行身份验证",
          description: "新加坡个人数据保护委员会(PDPC)宣布，私营机构必须在2026年12月31日前停止使用完整或部分NRIC号码进行用户身份验证。自2027年1月1日起，PDPC将加强执法，对持续违规行为发出指令或处以经济处罚。IMDA、MAS、卫生部等监管机构已向各自领域发布相关指引。",
          source: "PDPC Singapore / Baker McKenzie",
          url: "https://www.pdpc.gov.sg/news-and-events/press-room/2026/01/organisations-to-cease-the-use-of-nric-numbers-for-authentication-by-31-december-2026",
          tags: ["数据保护", "身份验证", "PDPA", "PDPC"],
          verified: true
        },
        {
          id: "sg-2",
          type: "enforcement",
          date: "2026-04-20",
          title: "新加坡PDPC对Grabcar处以1万新元罚款",
          description: "PDPC对Grabcar处以10,000新元罚款，因其未能采取合理的安全安排防止未经授权访问个人数据。",
          source: "PDPC Singapore",
          url: "https://www.pdpc.gov.sg/organisations/regulations-decisions/enforcement-decisions/breach-of-the-protection-obligation-by-grabcar",
          tags: ["数据保护", "执法", "罚款", "Grab"],
          verified: true
        },
        {
          id: "sg-3",
          type: "enforcement",
          date: "2026-01-30",
          title: "新加坡PDPC对旅行社处以4.7万新元罚款（33万人数据泄露）",
          description: "PDPC对Air Sino-Euro Associates Travel处以47,000新元罚款，因其违反PDPA的问责义务和保护义务。该公司在遭受网络攻击后，336,759人的个人数据被泄露。调查发现该公司未任命数据保护官(DPO)、未制定内部数据处理政策、未更新过时的操作系统、未实施多因素认证。",
          source: "PDPC Singapore / Baker McKenzie",
          url: "https://www.pdpc.gov.sg",
          tags: ["数据泄露", "网络攻击", "DPO", "罚款"],
          verified: true
        },
        {
          id: "sg-4",
          type: "enforcement",
          date: "2026-01-29",
          title: "新加坡PDPC年初连发4项执法决定，信号明确",
          description: "PDPC在2026年1月发布4项独立执法决定，全部涉及保护义务违规。被处罚机构涵盖人力资源科技、零售、旅游和企业软件行业。罚款金额从17,500新元到64,000新元不等。PDPC明确表示：财务困难不能作为系统性安全失败的免责理由，基础安全控制缺失将不再被容忍。",
          source: "Privacy Ninja / PDPC",
          url: "https://www.privacy.com.sg/resources/2026-protection-obligation-cases/",
          tags: ["数据保护", "执法趋势", "保护义务", "VAPT"],
          verified: true
        }
      ]
    },
    {
      id: "hong-kong",
      name: "香港",
      flag: "🇭🇰",
      category: "global",
      items: [
        {
          id: "hk-1",
          type: "regulation",
          date: "2025-04-18",
          title: "香港证监会更新虚拟资产交易平台许可框架",
          description: "香港证券及期货事务监察委员会(SFC)更新虚拟资产交易平台(VATP)许可框架，要求所有平台必须获得牌照并遵守AML/CFT要求。",
          source: "香港证监会",
          url: "https://www.sfc.hk",
          tags: ["虚拟资产", "交易平台", "SFC", "许可"],
          verified: true
        },
        {
          id: "hk-2",
          type: "policy",
          date: "2025-03-15",
          title: "香港金管局发布虚拟银行监管指引更新",
          description: "香港金融管理局(HKMA)发布虚拟银行监管指引更新，要求所有虚拟银行必须加强客户尽职调查和反洗钱措施。",
          source: "香港金管局",
          url: "https://www.hkma.gov.hk",
          tags: ["虚拟银行", "反洗钱", "HKMA"],
          verified: true
        }
      ]
    },
    {
      id: "india",
      name: "印度",
      flag: "🇮🇳",
      category: "global",
      items: [
        {
          id: "in-1",
          type: "regulation",
          date: "2026-02-10",
          title: "印度MeitY发布IT（中介指南）修订规则2026，监管AI生成内容",
          description: "印度电子和信息技术部(MeitY)发布《信息技术（中介指南和数字媒体道德准则）修订规则2026》，针对合成生成信息(SGI)包括深度伪造进行监管。2026年2月20日生效。主要内容包括：中介必须部署技术措施防止非法SGI；缩短内容下架时限（法院/政府命令从36小时缩至3小时，非自愿裸露内容从24小时缩至2小时）；重大社交媒体中介(SSMI)必须在发布前验证用户声明的SGI并添加显著标签；每季度向用户发送合规提醒。",
          source: "MeitY / Khaitan & Co",
          url: "https://www.meity.gov.in/static/uploads/2025/10/065b6deb585441b5ccdf8be42502a49c.pdf",
          tags: ["AI生成内容", "深度伪造", "SGI", "中介责任", "SSMI"],
          verified: true
        },
        {
          id: "in-2",
          type: "policy",
          date: "2026-03-25",
          title: "印度议会小组建议对社交媒体、约会和游戏平台强制实施KYC",
          description: "印度议会妇女赋权委员会提交第四份报告（2025-26年度），建议在所有社交媒体、约会和游戏平台引入强制性的基于KYC的身份验证，以遏制虚假资料、冒充和匿名骚扰。报告还建议为社交媒体平台制定适合年龄的规定和校准使用限制，以及安全设计标准。Google、Meta和X未公开反对该建议。",
          source: "Medianama",
          url: "https://www.medianama.com/2026/03/223-lowdown-parliamentary-panel-recommends-mandatory-kyc-social-media-dating-gaming-apps-cybercrime-law/",
          tags: ["KYC", "身份验证", "约会平台", "社交媒体", "议会报告"],
          verified: true
        },
        {
          id: "in-3",
          type: "regulation",
          date: "2025-05-08",
          title: "印度RBI发布数字借贷指令2025",
          description: "印度储备银行(RBI)发布《数字借贷指令2025》，为受监管实体(RE)和借贷服务提供商(LSP)制定新规范。核心内容包括：多贷款平台必须提供所有可用贷款方案的透明比较；所有数字借贷应用(DLA)必须在2025年6月15日前向RBI中央信息管理系统(CIMS)注册；设置冷静期允许借款人在无罚息情况下退出贷款；禁止未经明确请求自动提高信用额度；借款人数据必须存储在印度境内服务器，境外处理的须在24小时内删除并返回。",
          source: "RBI / Lawrbit",
          url: "https://www.lawrbit.com/article/reserve-bank-of-india-digital-lending-directions-2025/",
          tags: ["数字借贷", "RBI", "CIMS", "数据本地化", "借款人保护"],
          verified: true
        },
        {
          id: "in-4",
          type: "regulation",
          date: "2025-09-15",
          title: "印度RBI发布支付聚合商(PA)主指令2025",
          description: "RBI发布2025年支付聚合商主指令，将所有支付聚合商纳入监管范围（包括此前未纳入的面对面交付付款POS聚合商）。指令要求严格的授权、净资产、KYC、风险管理、托管和技术标准，以增强印度支付生态系统的安全性和透明度。",
          source: "RBI / India Fintech Foundation",
          url: "https://indiafintechfoundation.com/regulatoryAnnouncements",
          tags: ["支付聚合商", "RBI", "KYC", "支付生态"],
          verified: true
        }
      ]
    },
    {
      id: "fatf",
      name: "国际组织",
      flag: "🌍",
      category: "global",
      items: [
        {
          id: "fatf-1",
          type: "regulation",
          date: "2026-02-01",
          title: "FATF 2026年2月更新灰名单：科威特、巴布亚新几内亚新增",
          description: "金融行动特别工作组(FATF)在2026年2月全体会议上更新灰名单（加强监控司法管辖区）。新增科威特（因金融制裁实施缺陷、资产冻结延迟、现金交易监控不足）和巴布亚新几内亚（因跨机构AML/CFT协调失败、腐败和非法伐木收益追回不足）。灰名单共23个国家/地区。黑名单仍为3个：伊朗、朝鲜、缅甸。",
          source: "FATF / Sanctions Lawyers",
          url: "https://sanctionslawyers.net/blog-en/the-fatf-grey-list-and-blacklist-complete-guide/",
          tags: ["FATF", "灰名单", "反洗钱", "科威特", "巴布亚新几内亚"],
          verified: true
        },
        {
          id: "fatf-2",
          type: "policy",
          date: "2025-10-01",
          title: "FATF 2025年10月灰名单变动：南非、尼日利亚、莫桑比克、布基纳法索移除",
          description: "FATF 2025年10月全体会议将4个非洲国家从灰名单移除：南非（完成约2年的改革）、尼日利亚（改善AML起诉和金融情报能力）、莫桑比克（银行监管和受益所有权框架改进）、布基纳法索（尽管萨赫勒地区安全挑战仍完成行动计划）。",
          source: "FATF / CheckLynx",
          url: "https://checklynx.com/en/resources/blog/FATF_2025",
          tags: ["FATF", "灰名单", "南非", "尼日利亚", "移除"],
          verified: true
        }
      ]
    }
  ],

  // 更新日志
  lastUpdated: "2026-04-28",
  version: "1.2.0",
  source: "Litmatch合规信息跟踪站"
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = COMPLIANCE_DATA;
}