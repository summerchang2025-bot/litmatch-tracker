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
          date: "2025-04-01",
          title: "土耳其MASAK加强社交媒体平台反洗钱合规",
          description: "土耳其金融犯罪调查委员会(MASAK)要求所有社交媒体平台实施用户身份验证，并报告可疑金融交易。",
          source: "土耳其MASAK",
          url: "https://www.masak.gov.tr",
          tags: ["反洗钱", "社交媒体", "MASAK"],
          verified: true
        },
        {
          id: "tr-2",
          type: "enforcement",
          date: "2025-03-28",
          title: "土耳其对未获许可的约会应用实施访问限制",
          description: "土耳其信息和通信技术管理局(BTK)对多家未获得运营许可的国际约会应用实施访问限制。",
          source: "土耳其BTK",
          url: "https://www.btk.gov.tr",
          tags: ["约会应用", "访问限制", "BTK"],
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
          date: "2025-04-15",
          title: "阿联酋VARA更新虚拟资产服务提供商许可框架",
          description: "迪拜虚拟资产监管局(VARA)更新虚拟资产服务提供商许可框架，要求所有VASP必须获得完整许可才能运营。",
          source: "阿联酋VARA",
          url: "https://www.vara.ae",
          tags: ["虚拟资产", "VARA", "许可框架"],
          verified: true
        },
        {
          id: "ae-2",
          type: "policy",
          date: "2025-03-30",
          title: "阿联酋央行发布数字支付服务提供商新规",
          description: "阿联酋央行发布数字支付服务提供商新规，要求所有支付服务提供商必须实施强客户认证(SCA)。",
          source: "阿联酋央行",
          url: "https://www.centralbank.ae",
          tags: ["数字支付", "强认证", "央行"],
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