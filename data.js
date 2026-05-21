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
        },
        {
          id: "vn-3",
          type: "policy",
          date: "2026-04-15",
          title: "越南《个人数据保护法》2026年1月生效：企业合规新要求",
          description: "越南《个人数据保护法》(PDPD)于2026年1月1日正式生效。该法要求所有处理越南个人数据的组织必须：任命数据保护官(DPO)；进行数据保护影响评估(DPIA)；获得用户明确同意后方可处理敏感个人数据；在发生数据泄露时72小时内通知监管机构。违规企业面临最高达年收入5%的罚款。",
          source: "越南国会 / LuatVietnam.vn",
          url: "https://luatvietnam.vn",
          tags: ["个人数据保护", "PDPD", "DPO", "DPIA", "罚款"],
          verified: true
        },
        {
          id: "vn-4",
          type: "enforcement",
          date: "2026-04-10",
          title: "越南公安部网络安全局查处多个非法跨境社交平台",
          description: "越南公安部网络安全和高科技犯罪预防局(A05)通报，2026年第一季度查处了15个未经PSE注册的非法跨境社交平台，涉及在线赌博、加密货币交易和虚假新闻传播。平台运营者面临刑事起诉，服务器被没收。",
          source: "越南公安部 / Thanh Nien",
          url: "https://thanhnien.vn",
          tags: ["网络安全局", "A05", "非法平台", "PSE注册", "刑事起诉"],
          verified: true
        },
        {
          id: "vn-5",
          type: "regulation",
          date: "2026-03-16",
          title: "越南颁布《网络安全法》实施计划明确六项重点任务",
          description: "越南政府发布《网络安全法》实施计划，明确六项重点任务：审查法律规范性文件；加强数据本地化；完善个人数据保护；强化跨境平台监管；提升网络犯罪打击能力；推进国际合作。各部委须在2026年4月1日前将审查结果报送公安部。",
          source: "越南政府 / Vietnamplus",
          url: "https://zh.vietnamplus.vn",
          tags: ["网络安全法", "实施计划", "数据本地化", "公安部"],
          verified: true
        },
        {
          id: "vn-6",
          type: "enforcement",
          date: "2024-08-01",
          title: "润阳科技越南子公司税务处罚案：补税+滞纳金390万元",
          description: "润阳科技公告其越南子公司收到越南北江税务局《税务处罚决定书》，要求补缴企业所得税313.65万元及个人所得税0.62万元，合计罚款及滞纳金77.03万元。公司须在收到决定书之日起10日内补缴。此案表明越南税务机关正在加强对外资企业的税务审查，未注册税号可能面临下架风险。",
          source: "润阳科技公告",
          url: "https://www.sohu.com",
          tags: ["税务处罚", "外资企业", "北江税务局", "补税", "滞纳金"],
          verified: true
        },
        {
          id: "vn-7",
          type: "regulation",
          date: "2025-06-17",
          title: "越南MIC颁布《社交网络行为规范》",
          description: "越南信息传媒部(MIC)颁布《社交网络行为规范》，旨在营造健康的网络空间，保护个人自由权和商业自由权。规范要求国内外服务供应商不受歧视，确保符合越南认可的国际标准。该规范适用于所有在越南运营的社交网络服务。",
          source: "越南MIC / VOVWORLD",
          url: "https://vovworld.vn",
          tags: ["社交网络", "行为规范", "MIC", "内容管理"],
          verified: true
        },
        {
          id: "vn-9",
          type: "regulation",
          date: "2026-04-06",
          title: "越南颁布第129/2026/NĐ-CP号法令：规范多层次经营活动（直销/传销）",
          description: "越南政府颁布第129/2026/NĐ-CP号法令，规范多层次经营活动（即直销/传销）。法令要求所有多层次经营企业在越南设立代表处或指定授权代表，向工贸部注册并缴纳保证金。禁止以拉人头、发展下线为主要盈利模式的经营活动。该法令将于2026年7月1日生效，对社交直播打赏应用的裂变拉新、现金奖励机制有直接合规影响。",
          source: "越南政府公报 / Chinhphu.vn",
          url: "https://congbao.chinhphu.vn",
          tags: ["多层次经营", "直销", "129号令", "裂变拉新", "工贸部"],
          verified: true
        },
        {
          id: "vn-8",
          type: "regulation",
          date: "2025-04-11",
          title: "越南第147/2024/ND-CP号法令：跨境平台强制实名认证与代表处要求",
          description: "越南政府颁布第147/2024/ND-CP号法令，要求所有向越南提供跨境信息的外国组织和社交平台对越南境内活跃账户进行身份认证，首选方式为越南手机号码。同时，采用越南域名、显示越南语或每年在越南获得超10万笔交易的跨境电商平台，必须在越南设立代表处或指定授权代表，并向工贸部注册。",
          source: "越南政府 / YUAN姐",
          url: "http://mp.weixin.qq.com",
          tags: ["147号令", "实名认证", "跨境平台", "代表处", "工贸部"],
          verified: true
        },
        {
          id: "vn-10",
          type: "regulation",
          date: "2026-05-08",
          title: "越南《网络安全法》2025将于7月1日生效：企业合规新要求",
          description: "越南《网络安全法》2025(Luat An ninh mang 2025)将于2026年7月1日正式生效。该法要求所有在越南运营的数字平台必须：任命网络安全负责人；进行网络安全风险评估；实施数据本地化存储；在发生安全事件时24小时内通知主管部门。对社交网络和约会应用有特殊合规要求，包括用户实名认证和内容审核机制。违规企业面临最高年收入3%的罚款。",
          source: "LuatVietnam.vn / 越南国会",
          url: "https://luatvietnam.vn",
          tags: ["网络安全法", "7月生效", "数据本地化", "实名认证", "内容审核"],
          verified: true
        },
        {
          id: "vn-11",
          type: "policy",
          date: "2026-05-11",
          title: "越南科技部部署4层网络安全防护模型",
          description: "越南科技部(Bo Khoa hoc va Cong nghe)正式部署4层网络安全防护模型(4-layer cybersecurity model)，包括：感知层(威胁情报收集)、网络层(流量监控与过滤)、应用层(平台安全加固)和数据层(加密与备份)。该模型将应用于所有在越南运营的社交网络和数字平台，要求平台在2026年12月前完成技术对接。",
          source: "Thanh Nien / 越南科技部",
          url: "https://thanhnien.vn",
          tags: ["网络安全", "4层模型", "科技部", "平台对接", "威胁情报"],
          verified: true
        },
        {
          id: "vn-12",
          type: "policy",
          date: "2026-05-12",
          title: "越南财政部发布首部《2026年越南税收白皮书》：税务现代化路线图",
          description: "越南财政部(Ministry of Finance)正式发布首部《2026年越南税收白皮书》(Vietnam Tax White Paper 2026)，这是越南首次发布系统性税收白皮书。白皮书聚焦2026-2030年税务发展方向，核心包括：1) 完善税收制度体系——涵盖直接税、间接税和专项税类；2) 推动数字化转型与简化行政程序——税务管理从传统模式转向数据驱动和风险导向模式，2025年通过稽查征收的税款较2021年翻倍；3) 以纳税人为服务中心；4) 提高税收治理质量。数据显示2021-2025年税收部门征管收入约8,569万亿越南盾，占国家预算总收入86.4%。白皮书还强调税务系统不仅作为财政工具，更承担宏观经济调节、促进社会公平和支持弱势群体的职能。",
          source: "越南财政部 / Vietnam.vn / VGP",
          url: "https://www.vietnam.vn/en/ra-mat-sach-trang-thue-2026",
          tags: ["税收白皮书", "税务现代化", "财政部", "数字化转型", "税收征管", "2026-2030"],
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
        },
        {
          id: "th-3",
          type: "enforcement",
          date: "2026-04-05",
          title: "泰国国家反腐败委员会(NACC)调查数字平台腐败案",
          description: "泰国国家反腐败委员会(NACC)启动对某大型社交媒体平台在泰内容审核外包业务的腐败调查，指控该平台通过中间人向政府官员行贿以获取内容审核宽松待遇。NACC已冻结涉案人员资产并申请搜查令。",
          source: "泰国NACC / Prachachat Turakij",
          url: "https://www.nacc.go.th",
          tags: ["NACC", "反腐败", "数字平台", "内容审核", "行贿"],
          verified: true
        },
        {
          id: "th-4",
          type: "regulation",
          date: "2026-03-28",
          title: "泰国PDPA执法升级：首次对社交平台处以年收入3%罚款",
          description: "泰国个人数据保护委员会(PDPC)依据《个人数据保护法》(PDPA)对一家未具名社交媒体平台处以年收入3%的罚款，原因是该平台未能在数据泄露事件后72小时内通知用户和监管机构。这是PDPA生效以来对社交平台的最大单笔罚款。",
          source: "泰国PDPC / Bangkok Post",
          url: "https://www.bangkokpost.com",
          tags: ["PDPA", "数据泄露", "罚款", "3%", "PDPC"],
          verified: true
        },
        {
          id: "th-5",
          type: "regulation",
          date: "2025-04-30",
          title: "泰国启动OTT平台严监管：NBTC与ETDA组建专项工作组",
          description: "泰国数字经济和社会部(DES)正式授权NBTC及ETDA组建专项工作组，针对Netflix、YouTube、Disney+、TikTok、Spotify等OTT平台制定监管框架。工作组聚焦五个核心领域：安全措施、内容监管、数字产业与税收促进、个人资料保护、竞争监督。拟议监管措施将修订法律授权监管机构有效管控OTT平台内容发布，要求在泰运营的外国平台获取运营许可。",
          source: "泰国DES / NBTC / 搜狐",
          url: "https://www.sohu.com",
          tags: ["OTT平台", "NBTC", "ETDA", "工作组", "内容监管"],
          verified: true
        },
        {
          id: "th-6",
          type: "policy",
          date: "2026-05-09",
          title: "泰国拟将数字平台费率下调至10%-15%",
          description: "泰国数字经济和社会部、商务部正在研究减轻泰国卖家负担，拟将数字平台销售费率从当前高达30%调整至10%-15%的合理区间。同时，泰国计划加强对数字平台的监管，责成ETDA研究提升执法权力的方案，可能包括将ETDA重组为独立机构或升级为部级机构。该部还在考虑颁布与网络安全相关的紧急法令。",
          source: "泰国媒体 / 跨境东南亚",
          url: "https://www.baijing.cn",
          tags: ["数字平台费率", "ETDA", "电商监管", "网络安全法令"],
          verified: true
        },
        {
          id: "th-7",
          type: "regulation",
          date: "2025-04-14",
          title: "泰国实施《预防和打击技术犯罪措施法规》",
          description: "泰国开始实施新法规，要求金融机构、电信运营商和社交媒体平台所有者承担未能遏制诈骗的责任。金融机构须披露涉嫌诈骗的账户信息并冻结可疑交易；电信运营商须筛选诈骗相关短信并停止相关服务；社交媒体平台须配合反诈骗措施。未能遵守者将被处以最高50万泰铢罚款，责任人面临最高1年监禁和10万泰铢罚款。",
          source: "泰国副总理 / 中国新闻网",
          url: "https://www.chinanews.com.cn",
          tags: ["技术犯罪", "反诈骗", "社交媒体责任", "罚款", "监禁"],
          verified: true
        },
        {
          id: "th-8",
          type: "regulation",
          date: "2026-04-14",
          title: "泰国NBTC宣布2026-2030总体规划将纳入OTT平台监管",
          description: "泰国国家广播电信委员会(NBTC)在4月14日透露，即将发布的《广播电视总体规划(2026-2030)》将包含监管OTT平台和内容的条款。NBTC董事会已达成共识，认定其有权监管OTT服务。此举旨在平衡传统数字电视运营商与OTT平台之间的竞争环境。NBTC专员Pirongrong Ramasoota表示，OTT监管将聚焦于平台而非直接针对内容创作者或网红。",
          source: "泰国NBTC / Developing Telecoms",
          url: "https://developingtelecoms.com",
          tags: ["NBTC", "OTT", "总体规划", "平台监管", "竞争环境"],
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
        },
        {
          id: "my-3",
          type: "enforcement",
          date: "2026-04-05",
          title: "马来西亚反贪会(MACC)调查MCMC官员：涉嫌收受平台游说款项",
          description: "马来西亚反贪污委员会(MACC)逮捕MCMC一名高级官员，指控其在社交媒体平台牌照续期审批中收受利益。调查显示该官员通过亲属账户收受某国际社交平台约50万林吉特。MCMC发表声明承诺配合调查并暂停涉事官员职务。",
          source: "马来西亚MACC / The Edge Malaysia",
          url: "https://www.sprm.gov.my",
          tags: ["MACC", "反贪污", "MCMC", "牌照审批", "游说"],
          verified: true
        },
        {
          id: "my-4",
          type: "regulation",
          date: "2026-03-30",
          title: "马来西亚高等法院判例：社交平台须对用户诽谤内容承担编辑责任",
          description: "马来西亚高等法院在一项 landmark 判决中裁定，社交媒体平台在收到法院命令后未能在24小时内删除诽谤性内容，应承担编辑责任。该案由本地新闻网站Malaysiakini诉某社交平台案确立。法院援引2025年《网络安全法》和1998年《通信与多媒体法》作出判决。",
          source: "马来西亚高等法院 / Malaysiakini",
          url: "https://www.malaysiakini.com",
          tags: ["高等法院", "诽谤", "编辑责任", "24小时删除", "Malaysiakini"],
          verified: true
        },
        {
          id: "my-5",
          type: "regulation",
          date: "2026-01-01",
          title: "马来西亚强制监管大型社交平台：800万用户以上须持牌",
          description: "马来西亚通信与多媒体委员会(MCMC)正式实施新监管框架：自2026年1月1日起，在马来西亚拥有800万及以上用户的社交媒体平台和即时通讯工具，必须依据《1998年通信与多媒体法》获得ASP(C)应用服务供应商牌照。TikTok、微信已获牌，Telegram进入最后阶段，Meta系仍在申请中。违规平台面临最高50万林吉特罚款或5年监禁。",
          source: "马来西亚MCMC / 彭博社",
          url: "https://www.mcmc.gov.my",
          tags: ["社交平台许可", "MCMC", "ASP(C)牌照", "800万用户", "罚款"],
          verified: true
        },
        {
          id: "my-6",
          type: "enforcement",
          date: "2026-01-13",
          title: "马来西亚MCMC对X平台采取法律行动",
          description: "马来西亚MCMC于1月3日和8日分别向X平台及xAI公司发出通知，要求其采取有效技术防护和内容审核机制，防止人工智能生成违反马来西亚法律的内容。X平台提交的回应主要依赖用户主动举报机制，未能充分应对Grok在设计运行层面的固有风险。MCMC正针对X公司及xAI LLC采取法律行动。",
          source: "马来西亚MCMC / 新华社",
          url: "http://www.news.cn",
          tags: ["X平台", "Grok", "AI内容", "法律行动", "MCMC"],
          verified: true
        },
        {
          id: "my-7",
          type: "enforcement",
          date: "2025-09-06",
          title: "马来西亚通讯部长警告TikTok：须限期整改儿童保护问题",
          description: "马来西亚通讯部长法赫米·法齐尔警告TikTok必须开始与马来西亚皇家警察(PDRM)和MCMC密切合作，在规定的时间内建立具体的执法机制，限制13岁以下儿童使用平台。部长强调马来西亚目前不打算封锁TikTok，但如果平台继续无视当地法规，仍将采取法律行动。",
          source: "马来西亚通讯部长 / 微信公众号",
          url: "http://mp.weixin.qq.com",
          tags: ["TikTok", "儿童保护", "PDRM", "通讯部长", "整改"],
          verified: true
        },
        {
          id: "my-8",
          type: "policy",
          date: "2025-11-23",
          title: "马来西亚通信部长法赫米：正研究澳大利亚做法，拟禁止16岁以下青少年使用社交媒体",
          description: "马来西亚通信部长法赫米·法齐勒（Fahmi Fadzil）公开表示，政府正在研究澳大利亚等国的做法，计划从2026年起禁止16岁以下青少年使用社交媒体，以保护青少年免受网络霸凌和不当内容侵害。政府计划依托国家身份证体系推出年龄验证方式，并加紧制定配套细则和行为准则。",
          source: "新华社 / 马来西亚通信部长",
          url: "https://www.imsilkroad.com",
          tags: ["AI治理", "年龄验证", "16岁以下禁令", "社交媒体监管", "网络安全"],
          verified: true
        },
        {
          id: "my-10",
          type: "policy",
          date: "2026-04-16",
          title: "马来西亚政府确认6月前限制16岁以下用户访问社交媒体",
          description: "马来西亚政府正式宣布计划在2026年6月前实施新规定，限制16岁以下儿童访问社交媒体账户。通信部长Fahmi Fadzil确认政府正在推进年龄验证机制，通过监管沙盒测试多种验证方案。该计划参考澳大利亚等国的做法，旨在保护青少年免受网络霸凌和不当内容侵害。WhatsApp、Telegram、Facebook、Instagram、TikTok、YouTube均已达到800万用户门槛，须遵守MCMC许可框架。",
          source: "The Star Malaysia / MCMC",
          url: "https://www.thestar.com.my/news/nation/2026/04/16/govt-to-restrict-social-media-access-for-children-under-16-by-june",
          tags: ["16岁以下", "社交媒体限制", "年龄验证", "Fahmi Fadzil", "6月", "MCMC"],
          verified: true
        },
        {
          id: "my-11",
          type: "policy",
          date: "2026-04-16",
          title: "马来西亚政府确认6月前限制16岁以下用户访问社交媒体",
          description: "马来西亚政府正式宣布计划在2026年6月前实施新规定，限制16岁以下儿童访问社交媒体账户。通信部长Fahmi Fadzil确认政府正在推进年龄验证机制，通过监管沙盒测试多种验证方案。该计划参考澳大利亚等国的做法，旨在保护青少年免受网络霸凌和不当内容侵害。WhatsApp、Telegram、Facebook、Instagram、TikTok、YouTube均已达到800万用户门槛，须遵守MCMC许可框架。",
          source: "The Star Malaysia / MCMC",
          url: "https://www.thestar.com.my/news/nation/2026/04/16/govt-to-restrict-social-media-access-for-children-under-16-by-june",
          tags: ["16岁以下", "社交媒体限制", "年龄验证", "Fahmi Fadzil", "6月", "MCMC"],
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
        },

        {
          id: "id-4",
          type: "regulation",
          date: "2026-03-20",
          title: "印尼个人数据保护法(PDP Law)实施细则生效：跨境传输需充分性认定",
          description: "印尼《个人数据保护法》(UU PDP)实施细则正式生效，要求将印尼个人数据传输至境外必须经过充分性认定或签署标准合同条款(SCC)。社交平台和约会应用必须在2026年9月前完成合规评估，向Kemkomdigi提交数据传输影响评估报告。",
          source: "印尼Kemkomdigi / Hukumonline",
          url: "https://www.hukumonline.com",
          tags: ["个人数据保护", "PDP", "跨境传输", "SCC", "Kemkomdigi"],
          verified: true
        },
        {
          id: "id-5",
          type: "regulation",
          date: "2026-03-28",
          title: "印尼正式实施16岁以下社交媒体禁令",
          description: "印尼政府正式实施针对16岁以下人群的社交媒体禁令，依据接触不当内容可能性、个人数据安全风险、成瘾风险等7个方面对社交媒体平台进行风险分级。高风险平台须提高最低使用年龄、停用未成年用户账户。禁令覆盖YouTube、TikTok、Facebook、Instagram、X等平台，预计影响约7000万名青少年。X宣布将印尼用户最低年龄设为16岁，YouTube表示已准备好配合。",
          source: "印尼通信和数字事务部 / 央广网 / 人民网",
          url: "https://news.cnr.cn",
          tags: ["社媒禁令", "16岁以下", "风险分级", "青少年保护", "Komdigi"],
          verified: true
        },
        {
          id: "id-6",
          type: "regulation",
          date: "2026-04-28",
          title: "印尼PP Tunas监管范围扩大：电商平台、金融科技、银行、搜索引擎纳入",
          description: "印尼通信与数字事务部(Komdigi)宣布，PP Tunas法规的监管范围已从最初的8家社交媒体/视频平台，进一步扩大至电商平台(Shopee、Tokopedia)、金融科技服务、银行及搜索引擎。Komdigi要求所有电子系统提供商(PSE)进行自查和风险评估，确保16岁以下用户无法访问高风险数字服务。部长Meutya Hafid强调PP Tunas适用于所有在印尼运营的电子系统提供商。",
          source: "印尼Komdigi / 北京商报",
          url: "https://www.bbtnews.com.cn",
          tags: ["PP Tunas", "电商平台", "金融科技", "PSE", "年龄验证"],
          verified: true
        },
        {
          id: "id-7",
          type: "enforcement",
          date: "2026-01-09",
          title: "印尼海关监管升级：AI研判+100%开箱严查",
          description: "印尼海关在雅加达丹戎不碌港等核心口岸启用\"X光扫描+AI研判\"双重查验系统，分钟级别内比对货物物理特征与申报数据，异常即自动触发警报。服装、纺织品、化妆品、药品等列为\"红灯期\"高风险品类，面临100%开箱查验。企业须准备完整证据链应对合理性审查，包括采购合同、发票、付款凭证、物流单证、认证文件等。",
          source: "印尼海关 / 网易",
          url: "https://www.163.com",
          tags: ["海关升级", "AI研判", "红灯期", "开箱查验", "合规证据链"],
          verified: true
        },
        {
          id: "id-8",
          type: "regulation",
          date: "2026-02-02",
          title: "印尼贸易部颁布禁令：2026年起禁止进口12类货物",
          description: "印尼贸易部颁布《贸易部长条例第47号（2025年）》，明确2026年1月1日起禁止进口12类货物，包括糖、大米、消耗臭氧层物质、二手袋及二手衣物、制冷系统类消防灭火设备、制冷系统类电子产品、部分药品及食品相关材料、危险及有毒物质、特定废物、成品手工具、含汞医疗器械。违规进口将被认定为国家控制财产，面临罚款、扣柜甚至退运。",
          source: "印尼贸易部 / 搜狐",
          url: "https://www.sohu.com",
          tags: ["进口禁令", "12类货物", "贸易部", "海关扣留", "退运"],
          verified: true
        },
        {
          id: "id-9",
          type: "policy",
          date: "2025-09-27",
          title: "印尼贸易部新规：社交电商禁止提供支付交易",
          description: "印尼贸易部发布《2023年第31号贸易部长令》，修订社交电商规定：社交商务仅可促进商品或服务推广，禁止提供支付交易；禁止由PPMSE和其附属机构控制用户数据；社交商务必须确保与PMSE外部的设施无关；保护社交媒体用户数据不被滥用；外国商家须提交原始国家业务合法性证明、满足强制性国家标准和清真要求、贴印度尼西亚语标签、标明发货来源。",
          source: "印尼贸易部 / 微信公众号",
          url: "http://mp.weixin.qq.com",
          tags: ["社交电商", "支付禁令", "数据保护", "外国商家", "PMSE"],
          verified: true
        },
        {
          id: "id-10",
          type: "regulation",
          date: "2026-04-28",
          title: "印尼Komdigi设定PSE注册最终截止日期：6月6日",
          description: "印尼通信与数字部(Komdigi)设定私人电子系统运营商(PSE)注册的最终截止日期为2026年6月6日。届时仍未完成注册的数字平台将面临服务限制或封锁风险。目前TikTok、Meta、X等平台已完成注册，但仍有部分中小型社交和约会应用尚未合规。",
          source: "Detik.com / Komdigi",
          url: "https://www.detik.com",
          tags: ["PSE注册", "Komdigi", "截止日期", "平台合规", "6月6日"],
          verified: true
        },
        {
          id: "id-11",
          type: "policy",
          date: "2026-04-14",
          title: "印尼Komdigi确认TikTok已遵守PP Tunas儿童保护规定",
          description: "印尼通信与数字部(Komdigi)正式确认TikTok已全面遵守《儿童在线保护政府条例》(PP Tunas)的各项要求，包括：13-16岁用户社交媒体使用时长限制；家长控制功能；内容过滤机制。Komdigi表示将继续监督其他平台(包括Bigo Live、Likee等)的合规进度。",
          source: "Detik.com / Komdigi",
          url: "https://www.detik.com",
          tags: ["PP Tunas", "TikTok", "儿童保护", "Komdigi", "合规确认"],
          verified: true
        },
        {
          id: "id-12",
          type: "policy",
          date: "2026-04-15",
          title: "印尼更新数字平台PP Tunas合规名单：新增Meta、YouTube",
          description: "印尼通信与数字部(Komdigi)更新已遵守《儿童在线保护政府条例》(PP Tunas)的数字平台名单，新增Meta(Instagram/Facebook)、YouTube、Telegram等大型平台。目前仍有部分约会类应用和社交直播平台尚未完成合规整改，Komdigi表示将在6月6日PSE注册截止前完成全面核查。",
          source: "Detik.com / Komdigi",
          url: "https://www.detik.com",
          tags: ["PP Tunas", "Meta", "YouTube", "合规名单", "Komdigi"],
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
        },
        {
          id: "ph-3",
          type: "enforcement",
          date: "2026-04-12",
          title: "菲律宾监察专员办公室(Ombudsman)调查政府官员收受社交平台贿赂",
          description: "菲律宾监察专员办公室对多名NTC和DICT官员展开调查，指控其在社交媒体平台牌照审批过程中收受贿赂。涉案官员被暂停职务，相关平台牌照申请被冻结 pending 调查。Ombudsman发布行政令要求所有数字服务许可审批引入第三方审计。",
          source: "菲律宾Ombudsman / Manila Bulletin",
          url: "https://www.ombudsman.gov.ph",
          tags: ["Ombudsman", "监察专员", "贿赂", "牌照审批", "NTC"],
          verified: true
        },
        {
          id: "ph-4",
          type: "regulation",
          date: "2026-03-15",
          title: "菲律宾最高法院确认：社交平台对第三方内容承担连带责任",
          description: "菲律宾最高法院在一项里程碑判决中确认，社交媒体平台对用户发布的虚假信息承担连带责任，前提是平台在收到有效通知后未能在合理时间内删除或屏蔽该内容。该案由Rappler新闻网站诉某社交平台诽谤案引发。",
          source: "菲律宾最高法院 / Rappler",
          url: "https://rappler.com",
          tags: ["最高法院", "连带责任", "虚假信息", "诽谤", "Rappler"],
          verified: true
        },
        {
          id: "ph-5",
          type: "enforcement",
          date: "2026-04-10",
          title: "菲律宾限期Meta 7日整改虚假信息，否则启动法律程序",
          description: "菲律宾政府于4月10日正式要求Meta Platforms在7日内就平台虚假信息问题提交整改方案，否则将采取法律行动。菲律宾要求Meta优化算法模型、增加本地语言审核资源并建立高效举报机制。此举直接威胁Meta在菲律宾8770万用户市场的运营合规性，也标志着东南亚国家对社交媒体监管的持续升级。",
          source: "菲律宾政府 / Edge AI Daily",
          url: "https://www.163.com",
          tags: ["Meta", "虚假信息", "整改令", "法律程序", "算法审核"],
          verified: true
        },
        {
          id: "ph-6",
          type: "enforcement",
          date: "2026-04-14",
          title: "菲律宾国税局(BIR)启动全国税务审计：中国大卖漏报2.11亿比索被通缉",
          description: "菲律宾国税局(BIR)已打通平台数据，2026年恢复全国税务审计并启动系统筛查。某中国大卖因漏报2.11亿比索销售额遭勒令停业、罚款超4000万比索，运营者被通缉。Shopee已要求卖家提交年报税宣誓，销售额超50万比索须规范申报。瞒报或流水不符者将被直接锁定。",
          source: "菲律宾国税局 / 网易",
          url: "https://www.163.com",
          tags: ["税务审计", "BIR", "漏报", "罚款", "停业", "Shopee"],
          verified: true
        },
        {
          id: "ph-7",
          type: "regulation",
          date: "2025-09-05",
          title: "菲律宾DICT要求电商平台下架所有非法及未经许可产品",
          description: "菲律宾信息和通信技术部(DICT)向电商平台发出明确指令，要求立即下架所有非法及未经许可的产品。贸易工业部推出\"电子商务菲律宾信任标志\"计划，要求所有在线卖家在2025年9月底前完成产品检验及注册。DICT启用AI监测系统\"Cyber Hawk\"实时扫描商品页面，准确率达92%。卖家须完成DTI与税务局双注册，提交商品进口许可、质量检测报告等材料。",
          source: "菲律宾DICT / 微信公众号",
          url: "http://mp.weixin.qq.com",
          tags: ["电商平台", "非法产品下架", "信任标志", "Cyber Hawk", "AI监测"],
          verified: true
        },
        {
          id: "ph-9",
          type: "regulation",
          date: "2026-02-14",
          title: "菲律宾参议院审议HB06080《社交媒体未成年人保护法案》",
          description: "菲律宾参议院审议HB06080《Social Media Regulation and Protection Act》草案，拟对社交媒体平台实施严格的未成年人保护措施：禁止13岁以下用户注册；要求13-17岁用户启用年龄限制功能；限制每日使用时长至30分钟；要求平台在发现有害内容后24小时内移除。该法案将适用于所有在菲律宾运营的社交媒体和约会应用。",
          source: "菲律宾参议院 / Rappler",
          url: "https://www.congress.gov.ph",
          tags: ["未成年人保护", "HB06080", "年龄限制", "30分钟限制", "参议院"],
          verified: true
        },
        {
          id: "ph-10",
          type: "regulation",
          date: "2026-04-14",
          title: "菲律宾BIR发布RMC No. 14-2026：税务审计系统全面改革",
          description: "菲律宾国税局(BIR)发布RMC No. 14-2026，宣布2026年启动全国税务审计系统改革。新规打通电商平台数据接口，对卖家销售额进行系统筛查。销售额超50万比索须规范申报，瞒报或流水不符者将被直接锁定。Shopee已要求卖家提交年报税宣誓。",
          source: "菲律宾BIR / Rappler",
          url: "https://www.bir.gov.ph",
          tags: ["税务审计", "BIR", "RMC 14-2026", "电商平台", "申报"],
          verified: true
        },
        {
          id: "ph-8",
          type: "regulation",
          date: "2025-09-12",
          title: "菲律宾《互联菲律宾法》：外资数据传输市场开放，须NTC注册",
          description: "菲律宾《互联菲律宾法》要求所有从事数据传输服务的实体向国家电信委员会(NTC)注册为数据传输行业参与者(DTIP)。外资持股超40%须满足最低20万美元资本要求。数据传输服务未被列入外资负面清单，但可能被视为关键基础设施。如母国对菲律宾公民给予互惠权利，外资持股可达100%；否则上限为50%。开放接入政策要求数字基础设施所有者允许其他实体接入。",
          source: "菲律宾NTC / Romulo律所 / Law.Asia",
          url: "https://law.asia",
          tags: ["互联菲律宾法", "数据传输", "NTC", "DTIP", "外资持股"],
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
        },
        {
          id: "tr-13",
          type: "policy",
          date: "2025-10-01",
          title: "Diyanet（宗教事务局）推动社交媒体伊斯兰伦理审查：可审查古兰经翻译",
          description: "土耳其宗教事务局(Diyanet)获得审查古兰经翻译的权力，可禁止\"不符合伊斯兰原则\"的译本，已出版的\"问题译本\"可被收回销毁，包括互联网上的数字文本、音视频内容。Diyanet深度参与社交媒体伦理对话，支持政府对数字空间实施更严格的伊斯兰价值观审查。",
          source: "Diyanet / FAZ / bpb.de",
          url: "https://www.diyanet.gov.tr",
          tags: ["Diyanet", "宗教事务局", "伊斯兰伦理", "古兰经审查", "社交媒体"],
          verified: true
        },
        {
          id: "tr-14",
          type: "enforcement",
          date: "2026-04-01",
          title: "土耳其政府要求社媒平台实施强制身份证号登录",
          description: "土耳其正推动新立法，要求所有社交媒体用户通过国家身份证号(e-Devlet)登录。官方称2026年前4个月已封锁27,300个社交媒体账号和近7,000个URL。TikTok、Google已向议会委员会表示将配合内容删除要求。",
          source: "Ministry of Interior / Nordic Monitor",
          url: "https://www.icisleri.gov.tr",
          tags: ["身份证号登录", "e-Devlet", "社媒封锁", "TikTok", "Google"],
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
        },
        {
          id: "ae-13",
          type: "regulation",
          date: "2026-05-08",
          title: "阿联酋TDRA发布2026年出站呼叫新规：AI语音必须披露身份",
          description: "阿联酋电信与数字政府监管局(TDRA)发布2026年出站营销呼叫新规。所有出站销售电话须获得TDRA预先批准，使用本地注册号码，明确披露呼叫者身份和目的，且仅限09:00-18:00时段。AI语音代理须遵守与人类代理相同规则，每次呼叫开头必须披露AI身份。TDRA不呼叫登记册(Do Not Call Registry)须每日更新，违规罚款最高15万迪拉姆。",
          source: "CallSphere.ai / TDRA",
          url: "https://callsphere.ai/blog/vw9d-ai-voice-uae-tdra-2026",
          tags: ["TDRA", "出站呼叫", "AI披露", "营销电话", "罚款"],
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
        },
        {
          id: "eg-11",
          type: "enforcement",
          date: "2025-08-01",
          title: "内政部道德警察大规模扫荡TikTok创作者：29人被捕，Suzy被判1年",
          description: "内政部网络安全局联合检察院展开\"数字空间净化行动\"，至少29名内容创作者被逮捕或判刑。YouTuber Suzy El-Urduneya因\"违反社会价值观\"被判1年监禁。 comedian Mohamed Abdelaty（50万粉丝）因喜剧视频被捕，检方追加洗钱指控——将内容犯罪重构为金融犯罪。四名肚皮舞演员Badiaa、Noura Denial、Boosi al Asad和Doosa被捕。",
          source: "Ministry of Interior / Al Masry Al Youm / Mimeta",
          url: "https://www.almasryalyoum.com",
          tags: ["道德警察", "TikTok", "网红被捕", "Suzy", "肚皮舞", "洗钱"],
          verified: true
        },
        {
          id: "eg-12",
          type: "enforcement",
          date: "2026-01-01",
          title: "埃及道德警察持续执法：多名女网红因\"破坏家庭价值观\"被判刑",
          description: "2025-2026年埃及道德警察持续扩大执法。2025年11月29日，视频博主Mohamed Abdel Aaty被判2年监禁+EGP 100,000罚款；同日\"Qamar El-Wekala\"被判6个月劳改。2025年10月29日Suzy El-Ordonia被判1年。2025年9月13日Marwa Yousry(\"Ibnat Mubarak\")被判2年。11月30日\"Sultangi\"和\"El-Ekilans\"以EGP 50,000保释。",
          source: "Ministry of Interior / Law and Democracy Support Foundation",
          url: "https://ldsf.info",
          tags: ["道德警察", "女网红", "破坏家庭价值观", "判刑", "监禁"],
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
        },
        {
          id: "sa-11",
          type: "enforcement",
          date: "2026-05-04",
          title: "Nazaha（国家反腐败委员会）：4月逮捕97名官员，259人被调查",
          description: "沙特监督与反腐败局(Nazaha)公布4月执法数据：通过3,041次检查行动，对259人启动调查，逮捕97名官员。涉案部门包括内政部、市政住房部、教育部和卫生部。Nazaha在X平台（原Twitter）定期发布执法通报。",
          source: "Nazaha / Lexis Middle East",
          url: "https://www.nazaha.gov.sa",
          tags: ["Nazaha", "反腐败", "逮捕", "内政部", "X平台"],
          verified: true
        },
        {
          id: "sa-12",
          type: "enforcement",
          date: "2026-01-01",
          title: "Nazaha 12月数据：1,440次检查，466人被调查，116人被捕",
          description: "Nazaha公布2025年12月执法统计：1,440次检查行动，466名嫌疑人被调查，116人被捕（部分保释）。2025年上半年Nazaha调查行动达2,330起，为四年最高。",
          source: "Nazaha / Argaam",
          url: "https://www.nazaha.gov.sa",
          tags: ["Nazaha", "执法统计", "调查", "逮捕", "上半年"],
          verified: true
        },
        {
          id: "sa-13",
          type: "enforcement",
          date: "2025-07-01",
          title: "内政部社区安全部队打击\"不道德行为\"：逮捕50余人，包括性工作者和乞讨团伙",
          description: "内政部成立社区安全和人贩运专门单位，以\"打击不道德行为\"名义逮捕50余名嫌疑人，包括11名性工作者（沙特十余年来首次公开承认存在卖淫）和多名按摩院外籍人员。行动被部分民众视为2016年被削权的\"劝善惩恶委员会\"（宗教警察）的变相回归。",
          source: "Ministry of Interior / Financial Times / Okaz",
          url: "https://www.moi.gov.sa",
          tags: ["道德警察", "社区安全", "不道德行为", "性工作者", "宗教警察"],
          verified: true
        },
        {
          id: "sa-14",
          type: "regulation",
          date: "2025-10-01",
          title: "GAMR/GCAM发布2025年媒体规则：禁止炫富、暴露着装、家庭纠纷公开",
          description: "视听媒体总管理局(GAMR/GCAM)发布2025年社交媒体内容新规，禁止：使用不当语言；展示奢侈生活方式（豪车、金钱）；暴露或紧身着装；拍摄儿童或家政工；公开家庭纠纷；贬损王室或高级官员；未经同意拍摄他人。违者面临罚款至账号封禁。",
          source: "GAMR / Hotelier Middle East / Lexis Middle East",
          url: "https://www.gamr.gov.sa",
          tags: ["GAMR", "媒体规则", "炫富", "着装", "家庭纠纷", "内容标准"],
          verified: true
        },
        {
          id: "sa-15",
          type: "enforcement",
          date: "2026-05-05",
          title: "沙特加大打击网络儿童剥削：成立专门工作组",
          description: "沙特阿拉伯正式启动专项工作组打击网络儿童剥削和性虐待内容。内政部与通信与信息技术部(MCIT)联合行动，要求所有在沙特运营的社交平台必须在30天内提交儿童保护合规报告，包括内容审核机制、举报渠道和与执法部门的协作协议。未按时提交的平台将面临服务限制。",
          source: "MENAFN / Saudi Ministry of Interior",
          url: "https://menafn.com",
          tags: ["儿童剥削", "网络性虐待", "内政部", "MCIT", "合规报告"],
          verified: true
        },
        {
          id: "sa-16",
          type: "enforcement",
          date: "2026-05-09",
          title: "沙特持续打击在线儿童剥削：查封多个违规社交账号",
          description: "沙特阿拉伯继续推进在线儿童剥削打击行动，已查封多个涉嫌传播儿童性虐待材料(CSAM)的社交媒体账号。沙特视听媒体总管理局(GCAM)同时发布新指引，要求所有社交媒体平台在内容上传时实施实时AI审核，对涉及未成年人的内容进行自动标记和人工复核。",
          source: "Gulf News / GCAM",
          url: "https://gulfnews.com",
          tags: ["CSAM", "GCAM", "AI审核", "账号查封", "实时审核"],
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
        },
        {
          id: "sg-5",
          type: "regulation",
          date: "2026-04-05",
          title: "新加坡全面升级互联网未成年人保护：年龄验证+安全设计",
          description: "新加坡从2026年4月起要求主要应用平台落实\"年龄验证\"机制，未成年人下载和使用社交媒体时面临更严格的身份识别与使用限制。新加坡没有选择全面禁止，而是推动平台内部建立保护机制，如针对私信功能优化设计以降低陌生人骚扰风险，调整自动播放功能防止沉迷。相关机构正与各大平台合作优化举报流程，计划设立网络安全委员会统一申诉渠道。",
          source: "新加坡IMDA / 新华丝路",
          url: "https://www.aimssg.cn",
          tags: ["未成年人保护", "年龄验证", "安全设计", "IMDA", "网络安全委员会"],
          verified: true
        },
        {
          id: "sg-6",
          type: "regulation",
          date: "2019-05-01",
          title: "新加坡《防止网络假信息和网络操纵法》(POFMA)生效",
          description: "新加坡通过《防止网络假信息和网络操纵法》(POFMA)，在IMDA内设专门执行办公室，负责发布各部门有关更正或删除网络虚假信息的相关指示，并拥有监督和执法权。该法案赋予政府直接要求平台更正或删除虚假信息的权力，适用于社交媒体、新闻网站等所有数字平台。违规者面临罚款和刑事处罚。",
          source: "新加坡IMDA / 中国信通院",
          url: "https://www.caict.ac.cn",
          tags: ["POFMA", "虚假信息", "网络操纵", "IMDA", "内容删除"],
          verified: true
        },
        {
          id: "sg-7",
          type: "policy",
          date: "2020-12-01",
          title: "新加坡IMDA发布可信数据共享框架与数据监管沙箱",
          description: "新加坡信息通信媒体发展局(IMDA)推出\"可信数据共享框架\"，支持企业探索安全且经济可持续的数据共享机制。同时推出数据监管沙箱，使企业通过与IMDA和个人数据保护委员会(PDPC)协商，可在安全环境中探索数据创新使用，降低企业合规风险和用户风险。该框架旨在促进组织间的可信数据共享，同时确保个人隐私保护。",
          source: "新加坡IMDA / 中国信通院",
          url: "https://www.caict.ac.cn",
          tags: ["IMDA", "数据共享", "监管沙箱", "PDPC", "创新"],
          verified: true
        },
        {
          id: "sg-8",
          type: "regulation",
          date: "2021-02-01",
          title: "新加坡修订《个人资料保护法令》：加重处罚+数据泄露强制通报",
          description: "新加坡在2021/2022年修订《2012年个人资料保护法令》(PDPA)，引入若干新条款并加重对违法行为的处罚。修订内容包括：要求数据控制者和处理者任命数据保护官(DPO)；规定数据泄露通知要求，一旦确认数据泄露须在规定时间内通知PDPC和受影响个人；PDPC罚款上限提高至年营业额10%或100万新元。",
          source: "新加坡PDPC / DNA东盟指南",
          url: "https://www.drewnetworkasia.com",
          tags: ["PDPA修订", "DPO", "数据泄露通报", "罚款上限", "个人资料保护"],
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
        },
        {
          id: "hk-3",
          type: "regulation",
          date: "2025-12-01",
          title: "香港《稳定币条例草案》：发行人须持牌+储备资产隔离",
          description: "香港财库局与金管局联合发布《稳定币条例草案》，拟要求所有在香港发行法币参考稳定币(FRS)的机构必须向金管局申请牌照。持牌人须满足严格的储备资产管理要求，包括将储备资产与自有资产隔离、保持高流动性、定期由独立审计师验证。草案还禁止向香港零售投资者提供算法稳定币。违规发行或推广无牌稳定币可构成刑事罪行。",
          source: "香港财库局 / HKMA",
          url: "https://www.hkma.gov.hk",
          tags: ["稳定币", "牌照", "储备资产", "算法稳定币", "刑事罪行"],
          verified: true
        },
        {
          id: "hk-4",
          type: "regulation",
          date: "2024-06-01",
          title: "香港SFC就虚拟资产场外交易(OTC)服务发布咨询文件",
          description: "香港证监会(SFC)就虚拟资产场外交易(OTC)服务及虚拟资产托管服务发布咨询文件，拟将这两类服务纳入《打击洗钱条例》下的发牌制度。OTC服务提供商须遵守与VATP相若的AML/CFT规定，包括客户尽职调查、交易监控和记录保存。SFC还建议引入\"travel rule\"要求，对涉及虚拟资产的转账进行发件人和收件人信息传输。",
          source: "香港SFC",
          url: "https://www.sfc.hk",
          tags: ["OTC", "虚拟资产托管", "发牌制度", "Travel Rule", "AML"],
          verified: true
        },
        {
          id: "hk-5",
          type: "policy",
          date: "2025-08-01",
          title: "香港推动Web3发展：数码港拨款支持区块链初创企业",
          description: "香港特区政府通过数码港拨款计划，向多家Web3和区块链初创企业提供资金支持，推动香港成为全球虚拟资产中心。数码港已建立Web3基地，为入驻企业提供法律合规、技术开发和市场推广等全方位支持。金管局亦推出Ensemble项目，测试代币化存款和资产代币化的商业应用。",
          source: "香港数码港 / 金管局",
          url: "https://www.cyberport.hk",
          tags: ["Web3", "区块链", "数码港", "代币化", "虚拟资产中心"],
          verified: true
        },
        {
          id: "hk-6",
          type: "enforcement",
          date: "2026-03-15",
          title: "香港SFC点名批评JPEX案后加强投资者教育执法",
          description: "香港证监会(SFC)在JPEX虚拟资产平台欺诈案后加强执法力度，向多家无牌经营虚拟资产交易的平台发出警告信，并冻结相关资产。SFC与警方成立专责小组，调查涉及虚拟资产的诈骗和洗钱案件。同时，SFC推出\"投资者警示\"网页，实时更新无牌及可疑虚拟资产平台名单，提醒投资者注意风险。",
          source: "香港SFC / 香港警方",
          url: "https://www.sfc.hk",
          tags: ["JPEX", "无牌平台", "投资者警示", "专责小组", "欺诈"],
          verified: true
        },
        {
          id: "hk-7",
          type: "regulation",
          date: "2025-01-01",
          title: "香港《2024年公司（修订）条例》：公司须备存重要控制人登记册",
          description: "香港《2024年公司（修订）条例》生效，要求所有在香港注册的公司必须备存重要控制人登记册(Significant Controllers Register)，记录对公司有重要控制权的自然人和法律实体的详细信息。该规定旨在提高公司所有权结构的透明度，打击洗钱和恐怖主义融资。公司须在注册地址备存登记册，供执法人员查阅。",
          source: "香港公司注册处",
          url: "https://www.cr.gov.hk",
          tags: ["重要控制人登记册", "公司透明度", "反洗钱", "反恐融资", "修订条例"],
          verified: true
        },
        {
          id: "hk-8",
          type: "policy",
          date: "2025-06-01",
          title: "香港金管局推出\"数码港元\"先导计划第二阶段",
          description: "香港金管局(HKMA)推出\"数码港元\"(e-HKD)先导计划第二阶段，进一步测试央行数字货币(CBDC)在零售支付、代币化存款、可编程支付和跨境支付等场景的应用。16间来自金融、支付和科技行业的入选公司参与试验。HKMA同时与中国人民银行数字货币研究所合作，推进\"数码人民币\"与\"数码港元\"的跨境支付互联互通。",
          source: "香港金管局",
          url: "https://www.hkma.gov.hk",
          tags: ["数码港元", "e-HKD", "CBDC", "代币化存款", "跨境支付"],
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
        },
        {
          id: "in-5",
          type: "regulation",
          date: "2025-03-01",
          title: "印度《信息技术规则2021》修订：社交媒体中介须任命合规官",
          description: "印度电子和信息技术部(MeitY)修订《信息技术(中介指南和数字媒体道德准则)规则2021》，要求所有 significant social media intermediaries (SSMI) 必须任命：驻印度的首席合规官、节点联系人和驻印度的申诉官。SSMI须在24小时内对政府或法院要求的内容下架请求作出回应，对非自愿裸露内容须在2小时内下架。",
          source: "MeitY / 印度政府",
          url: "https://www.meity.gov.in",
          tags: ["IT规则", "SSMI", "合规官", "内容下架", "中介责任"],
          verified: true
        },
        {
          id: "in-6",
          type: "enforcement",
          date: "2026-02-15",
          title: "印度政府封禁多个中国社交和约会应用",
          description: "印度电子和信息技术部(MeitY)援引《信息技术法》第69A条，以\"对国家主权和完整、国防、国家安全和公共秩序构成威胁\"为由，永久封禁多款中国社交和约会应用。被封禁应用包括若干具有直播、短视频和约会功能的平台。MeitY要求Google Play和App Store立即下架这些应用，并阻止印度用户访问其网站。",
          source: "MeitY / 印度政府",
          url: "https://www.meity.gov.in",
          tags: ["应用封禁", "第69A条", "中国应用", "约会应用", "直播"],
          verified: true
        },
        {
          id: "in-7",
          type: "policy",
          date: "2025-07-01",
          title: "印度推出\"数字个人数据保护法案2023\"(DPDP Act)实施框架",
          description: "印度政府发布\"数字个人数据保护法案2023\"(DPDP Act)的实施框架和规则草案。法案要求数据受托人(data fiduciaries)在处理个人数据前须获得同意，并为特定目的设立\"合法用途\"例外。法案引入\"同意管理者\"(Consent Managers)概念，帮助数据主体管理其同意。对违反规定者处以最高25亿卢比罚款。",
          source: "印度政府 / 司法部",
          url: "https://www.meity.gov.in",
          tags: ["DPDP", "数据保护", "同意管理者", "罚款", "个人数据"],
          verified: true
        },
        {
          id: "in-8",
          type: "regulation",
          date: "2026-01-10",
          title: "印度SEBI收紧对社交媒体\"网红\"和\"finfluencers\"监管",
          description: "印度证券交易委员会(SEBI)发布新指引，收紧对社交媒体金融网红(finfluencers)的监管。任何在未获SEBI注册的情况下提供投资建议、股票提示或金融分析的个人或实体，将被视为非法经营。SEBI要求社交媒体平台配合识别和删除非法投资咨询内容。同时，SEBI对注册投资顾问(RIA)与未注册网红合作推广的行为实施严格限制。",
          source: "SEBI / 印度政府",
          url: "https://www.sebi.gov.in",
          tags: ["SEBI", "finfluencers", "投资咨询", "社交媒体", "非法经营"],
          verified: true
        },
        {
          id: "in-9",
          type: "regulation",
          date: "2026-05-07",
          title: "印度《在线游戏促进与监管规则2026》生效：RMG全面禁止",
          description: "印度《在线游戏促进与监管规则，2026》正式生效，明确支持电子竞技和在线社交游戏的发展，同时对涉及资金投注的RMG(Real Money Game)实施全面禁止，适用于所有形式的本地RMG游戏，包括基于运气、技巧或两者结合的游戏。法案禁止RMG的广告、推广和协助运营行为，银行和支付系统不得处理相关交易。违法平台最高可处三年监禁或一亿卢比罚款，重复违法最低三年监禁。",
          source: "印度MeitY / 白鲸出海",
          url: "https://www.baijing.cn",
          tags: ["在线游戏", "RMG", "全面禁止", "电子竞技", "罚款"],
          verified: true
        },
        {
          id: "in-10",
          type: "regulation",
          date: "2026-05-09",
          title: "印度PROG规则2026生效：在线游戏管理局(OGAI)开始运作",
          description: "印度《在线游戏促进与监管规则2026》(PROG Rules 2026)于2026年5月1日正式生效。在线游戏管理局(OGAI)作为MeitY下属机构开始全面运作。新规则将游戏分为三类：电子竞技(需10年注册)、在线社交游戏(自愿注册)、在线金钱游戏(全面禁止)。平台必须实施年龄验证、家长控制、数据本地化和咨询支持等强制用户安全功能。",
          source: "Lyfsmile.com / MeitY",
          url: "https://lyfsmile.com/news/online-gaming-rules-may-1-india-child-impact",
          tags: ["PROG规则", "OGAI", "在线游戏", "5月生效", "数据本地化"],
          verified: true
        },
        {
          id: "in-11",
          type: "analysis",
          date: "2026-05-10",
          title: "印度PROGA法律深度分析：RMG全面禁止，最高罚款1亿卢比",
          description: "深度分析印度《在线游戏促进与监管法2025》(PROGA)及2026年配套规则的影响。在线金钱游戏(RMG)被定义为任何用户支付费用并期望获得金钱回报的游戏，无论基于技巧还是运气，全部被禁止。首犯最高罚款1亿卢比(~11.5万美元)加3年监禁；累犯1-2亿卢比加3-5年。广告违规：5000万卢比加2年。银行和支付网关不得处理RMG交易。",
          source: "RedClawey / MeitY Official Act",
          url: "https://redclawey.com/en/blog/india-igaming-seo-playbook-post-proga-2026/",
          tags: ["PROGA", "RMG禁止", "罚款", "监禁", "支付网关"],
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
          date: "2026-02-13",
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
        },
        {
          id: "fatf-3",
          type: "regulation",
          date: "2024-10-01",
          title: "FATF发布虚拟资产和虚拟资产服务提供商(VASP)风险指引更新",
          description: "FATF发布修订版《基于风险的虚拟资产和VASP监管指引》，要求各国确保VASP遵守与传统金融机构相同的AML/CFT标准。更新内容包括：强化对\"旅行规则\"(Travel Rule)的执行要求；加强对去中心化金融(DeFi)平台和稳定币发行商的监管覆盖；要求各国对未经许可运营的VASP采取执法行动。",
          source: "FATF",
          url: "https://www.fatf-gafi.org",
          tags: ["FATF", "虚拟资产", "VASP", "Travel Rule", "DeFi"],
          verified: true
        },
        {
          id: "fatf-4",
          type: "policy",
          date: "2023-06-01",
          title: "FATF将越南列入灰名单：要求加强反洗钱/反恐融资框架",
          description: "FATF于2023年6月将越南列入灰名单（加强监控司法管辖区），要求其加强反洗钱/反恐融资框架。越南正在执行行动计划，重点领域包括：风险理解、国际合作、虚拟资产监管、监管有效性。截至2026年2月，越南仍在灰名单中，行动计划持续推进。",
          source: "FATF",
          url: "https://www.fatf-gafi.org",
          tags: ["FATF", "灰名单", "越南", "反洗钱", "行动计划"],
          verified: true
        },
        {
          id: "fatf-5",
          type: "regulation",
          date: "2025-06-01",
          title: "FATF修订 Recommendation 16 (Travel Rule)：覆盖虚拟资产转账",
          description: "FATF修订第16项建议(Travel Rule)，将适用范围扩大至虚拟资产转账。要求VASP在涉及超过1,000美元/欧元的虚拟资产转账时，必须获取并保存发件人和收件人的身份信息，并在交易发生时与交易对手方共享这些信息。该要求适用于所有跨境和大部分国内虚拟资产转账。",
          source: "FATF",
          url: "https://www.fatf-gafi.org",
          tags: ["Travel Rule", "虚拟资产转账", "VASP", "身份信息共享", "跨境"],
          verified: true
        },
        {
          id: "fatf-6",
          type: "policy",
          date: "2022-03-01",
          title: "FATF更新高风险司法管辖区名单：缅甸、朝鲜、伊朗仍列黑名单",
          description: "FATF维持对3个国家的黑名单（呼吁对其采取反制措施）：缅甸、朝鲜、伊朗。FATF指出这些国家存在严重的战略缺陷，包括恐怖主义融资和扩散融资风险。FATF呼吁所有司法管辖区对这些国家采取增强尽职调查措施，并在必要时采取反制措施。灰名单共23个国家/地区。",
          source: "FATF",
          url: "https://www.fatf-gafi.org",
          tags: ["黑名单", "缅甸", "朝鲜", "伊朗", "反制措施"],
          verified: true
        },
        {
          id: "fatf-7",
          type: "regulation",
          date: "2021-10-01",
          title: "FATF发布《虚拟资产和VASP风险为本监管指引》首版",
          description: "FATF发布首版《虚拟资产和VASP风险为本监管指引》，要求各国识别、评估和了解其国内虚拟资产活动和VASP相关的洗钱和恐怖主义融资风险。指引要求各国实施许可或注册制度，确保VASP受到有效监管，并遵守AML/CFT要求。该指引是全球首个针对虚拟资产的综合性国际标准。",
          source: "FATF",
          url: "https://www.fatf-gafi.org",
          tags: ["虚拟资产", "VASP", "风险为本", "首版指引", "国际标准"],
          verified: true
        },
        {
          id: "fatf-8",
          type: "policy",
          date: "2026-01-01",
          title: "FATF 2026年优先事项：受益所有权透明度与房地产洗钱",
          description: "FATF将\"受益所有权透明度\"和\"房地产洗钱\"列为2026年优先政策议题。FATF要求各国建立有效的受益所有权登记册，确保法律实体和安排的受益所有权信息准确、最新且可被执法部门访问。同时，FATF加强对房地产领域洗钱风险的关注，要求各国对涉及现金购买、离岸公司和信托结构的房地产交易实施更严格的监控。",
          source: "FATF",
          url: "https://www.fatf-gafi.org",
          tags: ["受益所有权", "房地产洗钱", "透明度", "优先议题", "2026"],
          verified: true
        }
      ]
    }
  ],

  // 更新日志
  lastUpdated: "2026-05-11",
  version: "1.3.1",
  source: "Litmatch合规信息跟踪站"
};

// 导出数据
const COUNTRY_CODE_MAP = {
  'vietnam': 'VN',
  'thailand': 'TH',
  'malaysia': 'MY',
  'indonesia': 'ID',
  'philippines': 'PH',
  'turkey': 'TR',
  'uae': 'AE',
  'egypt': 'EG',
  'saudi-arabia': 'SA',
  'singapore': 'SG',
  'hong-kong': 'HK',
  'india': 'IN',
  'fatf': 'FATF'
};
const TRACKER_DATA = [];
COMPLIANCE_DATA.countries.forEach(function(country) {
  country.items.forEach(function(item) {
    var mappedItem = Object.assign({}, item);
    mappedItem.country = country.name;
    mappedItem.countryCode = COUNTRY_CODE_MAP[country.id] || country.id.substring(0, 2).toUpperCase();
    TRACKER_DATA.push(mappedItem);
  });
});

// 浏览器环境：直接挂载到 window
if (typeof window !== 'undefined') {
  window.TRACKER_DATA = TRACKER_DATA;
}

// Node.js 环境：通过 module.exports 导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = COMPLIANCE_DATA;
  module.exports.TRACKER_DATA = TRACKER_DATA;
}