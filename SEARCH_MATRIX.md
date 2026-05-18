# 搜索矩阵表（Search Matrix）— Litmatch 合规追踪站
# 每次手动搜索或 cron 执行，必须按表逐项勾选
# 日期格式：YYYY-MM-DD

## 使用规则
1. 每次搜索必须选一个【国家区块】，按主题顺序执行
2. 每个主题至少用【本地语言关键词】和【英文关键词】各搜一次
3. 必须加 `site:` 限定本地域名（除非搜政府公报）
4. 搜完在【状态】列标注：✅ 有命中 / ❌ 无命中 / ⏭️ 跳过
5. 命中结果必须记录：URL + 日期 + 是否已存在于 data.js

---

## 🇻🇳 越南 Vietnam

| # | 主题 | 本地语言关键词 | 英文关键词 | 目标域名（site:） | 优先级 | 状态 | 最后搜索 | 命中URL |
|---|------|--------------|-----------|----------------|--------|------|---------|--------|
| VN-1 | 政府公报/新法令 | `"Nghị định" 2026` / `"Thông tư" 2026` | `"Decree" Vietnam 2026` | `congbao.chinhphu.vn` / `mic.gov.vn` | 🔴 | ⏭️ | - | - |
| VN-2 | 社交网络监管 | `"mạng xã hội" "quản lý" 2026` / `"mạng xã hội" "xác thực" 2026` | `"social network" Vietnam regulation 2026` | `vnexpress.net` / `vietnamnet.vn` / `thanhnien.vn` | 🔴 | ⏭️ | - | - |
| VN-3 | 147号令执行动态 | `"Nghị định 147" 2026` / `"147/2024" xác thực` | `"Decree 147" Vietnam 2026` | `vnexpress.net` / `luatvietnam.vn` / `lawnet.vn` | 🔴 | ⏭️ | - | - |
| VN-4 | 税务/数字税 | `"thuế" "dịch vụ số" 2026` / `"thuế" "bách thư" 2026` | `"digital services tax" Vietnam 2026` / `"Vietnam Tax White Paper"` | `vnexpress.net` / `baodautu.vn` / `chinatax.gov.cn` | 🔴 | ⏭️ | - | - |
| VN-5 | 支付/金融科技 | `"ví điện tử" "quản lý" 2026` / `"fintech" "Ngân hàng Nhà nước"` | `"e-wallet" regulation Vietnam 2026` | `vnexpress.net` / `vietnamnet.vn` | 🟡 | ⏭️ | - | - |
| VN-6 | 反洗钱/虚拟资产 | `"chống rửa tiền" 2026` / `"tiền ảo" "quản lý"` | `"AML" Vietnam 2026` / `"virtual asset" Vietnam` | `baodautu.vn` / `vnexpress.net` | 🟡 | ⏭️ | - | - |
| VN-7 | 个人数据保护 | `"bảo vệ dữ liệu cá nhân" 2026` / `"PDPD" Việt Nam` | `"personal data protection" Vietnam 2026` | `vnexpress.net` / `luatvietnam.vn` | 🟡 | ⏭️ | - | - |
| VN-8 | 执法/处罚/下架 | `"gỡ bỏ" "ứng dụng" 2026` / `"cấm" "mạng xã hội"` | `"banned" "app" Vietnam 2026` / `"removed" "platform"` | `vnexpress.net` / `vietnamnet.vn` / `mic.gov.vn` | 🔴 | ⏭️ | - | - |
| VN-9 | 律所分析 | - | `site:tilleke.com Vietnam digital 2026` | `tilleke.com` / `luatvietnam.vn` | 🟡 | ⏭️ | - | - |
| VN-10 | 同业（TikTok/Bigo/Mico） | `"TikTok" Việt Nam 2026` / `"Bigo Live" Việt Nam` | `"TikTok" Vietnam 2026` / `"Bigo Live" Vietnam` | `vnexpress.net` / `thanhnien.vn` | 🟡 | ⏭️ | - | - |

---

## 🇮🇩 印尼 Indonesia

| # | 主题 | 本地语言关键词 | 英文关键词 | 目标域名（site:） | 优先级 | 状态 | 最后搜索 | 命中URL |
|---|------|--------------|-----------|----------------|--------|------|---------|--------|
| ID-1 | 政府公报/新法规 | `"Peraturan" 2026` / `"Permen" Komdigi 2026` | `"regulation" Indonesia 2026` | `jdih.komdigi.go.id` / `beritanegara.id` | 🔴 | ⏭️ | - | - |
| ID-2 | 社交媒体/未成年保护 (PP Tunas) | `"PP Tunas" 2026` / `"anak" "media sosial" 2026` | `"PP Tunas" Indonesia 2026` / `"under 16" Indonesia social media` | `detik.com` / `kompas.com` / `komdigi.go.id` | 🔴 | ⏭️ | - | - |
| ID-3 | PSE注册/平台合规 | `"PSE" "Komdigi" 2026` / `"pendaftaran" PSE` | `"PSE registration" Indonesia 2026` | `komdigi.go.id` / `djkpm.komdigi.go.id` | 🔴 | ⏭️ | - | - |
| ID-4 | 税务/数字服务税 | `"pajak layanan digital" 2026` / `"PMK" "digital" 2026` | `"digital services tax" Indonesia 2026` | `detik.com` / `kompas.com` | 🟡 | ⏭️ | - | - |
| ID-5 | 支付/金融科技 | `"dompet digital" "BI" 2026` / `"fintech" "OJK"` | `"e-wallet" Indonesia 2026` / `"fintech regulation" Indonesia` | `detik.com` / `kompas.com` | 🟡 | ⏭️ | - | - |
| ID-6 | 反洗钱/虚拟资产 | `"anti pencucian uang" 2026` / `"kripto" "PPATK"` | `"AML" Indonesia 2026` / `"crypto" Indonesia regulation` | `kompas.com` / `detik.com` | 🟡 | ⏭️ | - | - |
| ID-7 | 数据保护/跨境传输 | `"perlindungan data pribadi" 2026` / `"PDP" Indonesia` | `"data protection" Indonesia 2026` | `detik.com` / `hukumonline.com` | 🟡 | ⏭️ | - | - |
| ID-8 | 执法/处罚/下架 | `"dilarang" "aplikasi" 2026` / `"Komdigi" "blokir"` | `"banned" "app" Indonesia 2026` / `"Komdigi" blocked` | `detik.com` / `kompas.com` / `antaranews.com` | 🔴 | ⏭️ | - | - |
| ID-9 | 律所分析 | - | `site:hhp.co.id fintech OR digital 2026` | `hhp.co.id` / `lexology.com` | 🟡 | ⏭️ | - | - |
| ID-10 | 同业（TikTok/Bigo/Mico） | `"TikTok" Indonesia 2026` / `"Bigo Live" Indonesia` | `"TikTok" Indonesia 2026` | `detik.com` / `kompas.com` / `liputan6.com` | 🟡 | ⏭️ | - | - |

---

## 🇵🇭 菲律宾 Philippines

| # | 主题 | 本地语言关键词 | 英文关键词 | 目标域名（site:） | 优先级 | 状态 | 最后搜索 | 命中URL |
|---|------|--------------|-----------|----------------|--------|------|---------|--------|
| PH-1 | 政府公报/新法案 | `"Republic Act" 2026` / `"Senate Bill" 2026` | `"law" Philippines 2026` | `officialgazette.gov.ph` / `senate.gov.ph` | 🔴 | ⏭️ | - | - |
| PH-2 | 社交媒体监管 | `"social media" regulation Philippines 2026` | `"social media" law Philippines 2026` | `rappler.com` / `philstar.com` / `inquirer.net` | 🔴 | ⏭️ | - | - |
| PH-3 | 年龄验证/未成年保护 | `"age verification" Philippines 2026` | `"under 16" social media Philippines` | `rappler.com` / `philstar.com` / `gmanetwork.com` | 🔴 | ⏭️ | - | - |
| PH-4 | DICT平台合规 | `"DICT" "platform" 2026` / `"KONEKTA" 2026` | `"DICT" Philippines digital platform 2026` | `dict.gov.ph` / `rappler.com` | 🟡 | ⏭️ | - | - |
| PH-5 | 税务 | `"BIR" "digital services" 2026` / `"RA 12023"` | `"digital services tax" Philippines 2026` | `bworldonline.com` / `rappler.com` | 🟡 | ⏭️ | - | - |
| PH-6 | 反洗钱 | `"AML" "BSP" 2026` / `"anti-money laundering" Philippines` | `"AML" Philippines 2026` | `bworldonline.com` / `rappler.com` | 🟡 | ⏭️ | - | - |
| PH-7 | 执法/下架 | `"NTC" "banned" 2026` / `"app" "suspended" Philippines` | `"banned" app Philippines 2026` | `rappler.com` / `philstar.com` / `gmanetwork.com` | 🔴 | ⏭️ | - | - |
| PH-8 | 律所分析 | - | `site:syciplaw.com fintech OR digital 2026` | `syciplaw.com` / `lexology.com` | 🟡 | ⏭️ | - | - |
| PH-9 | 同业 | `"TikTok" Philippines 2026` / `"Bigo" Philippines` | `"TikTok" Philippines 2026` | `rappler.com` / `philstar.com` | 🟡 | ⏭️ | - | - |

---

## 🇹🇭 泰国 Thailand

| # | 主题 | 本地语言关键词 | 英文关键词 | 目标域名（site:） | 优先级 | 状态 | 最后搜索 | 命中URL |
|---|------|--------------|-----------|----------------|--------|------|---------|--------|
| TH-1 | 政府公报 | `"ประกาศ" "กสทช" 2026` / `"พ.ร.บ." 2026` | `"NBTC" regulation 2026` | `ratchakitcha.soc.go.th` / `nbtc.go.th` | 🔴 | ⏭️ | - | - |
| TH-2 | 社交媒体/OTT监管 | `"โซเชียลมีเดีย" "กฎหมาย" 2026` / `"ETDA" "แพลตฟอร์ม"` | `"social media" Thailand regulation 2026` | `bangkokpost.com` / `nationthailand.com` / `thaipbs.or.th` | 🔴 | ⏭️ | - | - |
| TH-3 | 税务/数字服务税 | `"ภาษีบริการดิจิทัล" 2026` / `"VAT" "ดิจิทัล"` | `"digital services tax" Thailand 2026` | `bangkokpost.com` / `nationthailand.com` | 🟡 | ⏭️ | - | - |
| TH-4 | PDPA/数据保护 | `"PDPA" "บังคับใช้" 2026` | `"PDPA" enforcement Thailand 2026` | `bangkokpost.com` / `nationthailand.com` | 🟡 | ⏭️ | - | - |
| TH-5 | 反洗钱/虚拟资产 | `"ฟอกเงิน" "กฎหมาย" 2026` / `"สินทรัพย์ดิจิทัล"` | `"AML" Thailand 2026` / `"virtual asset" Thailand` | `bangkokpost.com` / `matichon.co.th` | 🟡 | ⏭️ | - | - |
| TH-6 | 执法/下架/罚款 | `"ปรับ" "แพลตฟอร์ม" 2026` / `"แบน" "แอป"` | `"fined" platform Thailand 2026` / `"banned" app Thailand` | `bangkokpost.com` / `nationthailand.com` / `thaipbs.or.th` | 🔴 | ⏭️ | - | - |
| TH-7 | 律所分析 | - | `site:tilleke.com Thailand digital 2026` | `tilleke.com` / `weerawongcp.com` / `lexology.com` | 🟡 | ⏭️ | - | - |
| TH-8 | 同业 | `"TikTok" ไทย 2026` / `"Bigo" ไทย` | `"TikTok" Thailand 2026` | `bangkokpost.com` / `thairath.co.th` | 🟡 | ⏭️ | - | - |

---

## 🇲🇾 马来西亚 Malaysia

| # | 主题 | 本地语言关键词 | 英文关键词 | 目标域名（site:） | 优先级 | 状态 | 最后搜索 | 命中URL |
|---|------|--------------|-----------|----------------|--------|------|---------|--------|
| MY-1 | 政府公报/新法案 | `"Akta" 2026` / `"RUU" "media sosial"` | `"Act" Malaysia 2026` | `fedgazette.com.my` / `mcmc.gov.my` | 🔴 | ⏭️ | - | - |
| MY-2 | 社交媒体牌照/监管 | `"MCMC" "lesen" 2026` / `"media sosial" "lesen"` | `"MCMC" license 2026` / `"social media" Malaysia 2026` | `freemalaysiatoday.com` / `malaysiakini.com` / `thestar.com.my` | 🔴 | ⏭️ | - | - |
| MY-3 | 年龄验证/未成年 | `"pengesahan umur" "16 tahun"` | `"age verification" Malaysia 2026` | `freemalaysiatoday.com` / `malaysiakini.com` | 🔴 | ⏭️ | - | - |
| MY-4 | 税务/SST数字服务 | `"SST" "perkhidmatan digital" 2026` | `"SST" digital services Malaysia 2026` | `theedgemalaysia.com` / `thestar.com.my` | 🟡 | ⏭️ | - | - |
| MY-5 | 反洗钱 | `"AML" "BNM" 2026` | `"anti-money laundering" Malaysia 2026` | `thestar.com.my` / `freemalaysiatoday.com` | 🟡 | ⏭️ | - | - |
| MY-6 | 执法/下架 | `"MCMC" "tindakan" 2026` / `"digantung" "aplikasi"` | `"MCMC" action 2026` / `"banned" app Malaysia` | `malaysiakini.com` / `freemalaysiatoday.com` / `thestar.com.my` | 🔴 | ⏭️ | - | - |
| MY-7 | 律所分析 | - | `site:zico.law digital OR MCMC 2026` | `zico.law` / `lexology.com` | 🟡 | ⏭️ | - | - |
| MY-8 | 同业 | `"TikTok" Malaysia 2026` / `"Bigo" Malaysia` | `"TikTok" Malaysia 2026` | `malaysiakini.com` / `freemalaysiatoday.com` | 🟡 | ⏭️ | - | - |

---

## 🇹🇷 土耳其 Turkey

| # | 主题 | 本地语言关键词 | 英文关键词 | 目标域名（site:） | 优先级 | 状态 | 最后搜索 | 命中URL |
|---|------|--------------|-----------|----------------|--------|------|---------|--------|
| TR-1 | 政府公报/Resmi Gazete | `"Kanun" 2026` / `"Kararname" 2026` | `"law" Turkey 2026` | `resmigazete.gov.tr` | 🔴 | ⏭️ | - | - |
| TR-2 | 社交媒体/5651号法 | `"5651" "sosyal medya" 2026` / `"BTK" "yasak"` | `"social media" Turkey 2026` / `"5651" Turkey` | `hurriyet.com.tr` / `sozcu.com.tr` / `trthaber.com` | 🔴 | ⏭️ | - | - |
| TR-3 | 未成年保护 | `"15 yaş" "sosyal medya" 2026` / `"yaş sınırı"` | `"under 15" social media Turkey 2026` | `hurriyet.com.tr` / `sozcu.com.tr` | 🔴 | ⏭️ | - | - |
| TR-4 | 税务 | `"KDV" "dijital" 2026` | `"digital tax" Turkey 2026` | `hurriyet.com.tr` / `sozcu.com.tr` | 🟡 | ⏭️ | - | - |
| TR-5 | 反洗钱/MASAK | `"MASAK" 2026` / `"kara para" 2026` | `"MASAK" 2026` / `"AML" Turkey 2026` | `hurriyet.com.tr` / `trthaber.com` | 🟡 | ⏭️ | - | - |
| TR-6 | 执法/下架/罚款 | `"BTK" "para cezası" 2026` / `"yasak" "uygulama"` | `"BTK" fine 2026` / `"banned" app Turkey 2026` | `hurriyet.com.tr` / `sozcu.com.tr` / `trthaber.com` | 🔴 | ⏭️ | - | - |
| TR-7 | 律所分析 | - | `site:gun.av.tr BTK OR digital 2026` | `gun.av.tr` / `paksoy.av.tr` / `lexology.com` | 🟡 | ⏭️ | - | - |
| TR-8 | 同业 | `"TikTok" Türkiye 2026` / `"Bigo" Türkiye` | `"TikTok" Turkey 2026` | `hurriyet.com.tr` / `sozcu.com.tr` | 🟡 | ⏭️ | - | - |

---

## 🇦🇪 阿联酋 UAE

| # | 主题 | 本地语言关键词 | 英文关键词 | 目标域名（site:） | 优先级 | 状态 | 最后搜索 | 命中URL |
|---|------|--------------|-----------|----------------|--------|------|---------|--------|
| AE-1 | 政府公报/Federal Decree | `"Federal Decree-Law" UAE 2026` | `"Federal Decree" UAE 2026` | `oguae.gov.ae` / `uae Cabinet portal` | 🔴 | ⏭️ | - | - |
| AE-2 | NMA/媒体监管 | `"NMA" "licensing" 2026` | `"NMA" UAE 2026` / `"media regulation" UAE` | `thenationalnews.com` / `khaleejtimes.com` | 🔴 | ⏭️ | - | - |
| AE-3 | 税务/企业税 | `"corporate tax" UAE 2026` | `"corporate tax" UAE 2026` | `gulfnews.com` / `khaleejtimes.com` | 🟡 | ⏭️ | - | - |
| AE-4 | 反洗钱/虚拟资产 | `"AML" UAE 2026` / `"VARA" 2026` | `"anti-money laundering" UAE 2026` | `thenationalnews.com` / `gulfnews.com` | 🟡 | ⏭️ | - | - |
| AE-5 | 数据保护/PDPL | `"PDPL" UAE 2026` | `"data protection" UAE 2026` | `thenationalnews.com` / `gulfnews.com` | 🟡 | ⏭️ | - | - |
| AE-6 | 执法/下架 | `"blocked" platform UAE 2026` / `"TDRA" action` | `"banned" app UAE 2026` | `gulfnews.com` / `khaleejtimes.com` / `thenationalnews.com` | 🔴 | ⏭️ | - | - |
| AE-7 | 律所分析 | - | `site:tamimi.com UAE digital 2026` | `tamimi.com` / `hadefpartners.com` / `lw.com` | 🟡 | ⏭️ | - | - |
| AE-8 | 同业 | `"TikTok" UAE 2026` | `"TikTok" UAE 2026` | `gulfnews.com` / `khaleejtimes.com` | 🟡 | ⏭️ | - | - |

---

## 🇪🇬 埃及 Egypt

| # | 主题 | 本地语言关键词 | 英文关键词 | 目标域名（site:） | 优先级 | 状态 | 最后搜索 | 命中URL |
|---|------|--------------|-----------|----------------|--------|------|---------|--------|
| EG-1 | 政府公报/SCMR | `"قرار" "إعلام" 2026` / `"ترخيص" "منصات"` | `"SCMR" Egypt 2026` | `scmreg.gov.eg` / `cabinet.gov.eg` | 🔴 | ⏭️ | - | - |
| EG-2 | NTRA/通信监管 | `"NTRA" "ترخيص" 2026` | `"NTRA" Egypt 2026` | `dailynewsegypt.com` / `egypttoday.com` | 🔴 | ⏭️ | - | - |
| EG-3 | CBE/支付牌照 | `"CBE" "ترخيص" "دفع" 2026` | `"CBE" "payment" license Egypt 2026` | `cbe.org.eg` / `dailynewsegypt.com` | 🔴 | ⏭️ | - | - |
| EG-4 | 税务 | `"ضريبة" "رقمية" 2026` | `"digital tax" Egypt 2026` | `dailynewsegypt.com` / `egypttoday.com` | 🟡 | ⏭️ | - | - |
| EG-5 | 反洗钱 | `"مكافحة غسل الأموال" 2026` | `"AML" Egypt 2026` | `dailynewsegypt.com` / `egyptindependent.com` | 🟡 | ⏭️ | - | - |
| EG-6 | 数据保护/PDPL | `"حماية البيانات" "قانون" 2026` | `"data protection" Egypt 2026` | `dailynewsegypt.com` / `egypttoday.com` | 🟡 | ⏭️ | - | - |
| EG-7 | 执法/下架/罚款 | `"حجب" "منصات" 2026` / `"غرامة" "إعلام"` | `"blocked" platform Egypt 2026` | `dailynewsegypt.com` / `almasryalyoum.com` / `youm7.com` | 🔴 | ⏭️ | - | - |
| EG-8 | 创作者/网红执法 | `"صانع محتوى" "حبس" 2026` / `"مؤثر" "غرامة"` | `"content creator" arrested Egypt 2026` / `"influencer" fined Egypt` | `almasryalyoum.com` / `youm7.com` | 🔴 | ⏭️ | - | - |
| EG-9 | 律所分析 | - | `site:tamimi.com Egypt digital 2026` | `tamimi.com` / `lexology.com` | 🟡 | ⏭️ | - | - |
| EG-10 | 同业 | `"TikTok" مصر 2026` | `"TikTok" Egypt 2026` | `dailynewsegypt.com` / `almasryalyoum.com` | 🟡 | ⏭️ | - | - |

---

## 🇸🇦 沙特阿拉伯 Saudi Arabia

| # | 主题 | 本地语言关键词 | 英文关键词 | 目标域名（site:） | 优先级 | 状态 | 最后搜索 | 命中URL |
|---|------|--------------|-----------|----------------|--------|------|---------|--------|
| SA-1 | 政府公报/Umm Al-Qura | `"قرار" "إعلام" 2026` / `"ترخيص" CST` | `"CST" Saudi 2026` | `uqn.gov.sa` / `cst.gov.sa` | 🔴 | ⏭️ | - | - |
| SA-2 | CST/GAMR 平台许可 | `"CST" "ترخيص" "منصات" 2026` / `"GAMR" "معايير"` | `"CST" licensing Saudi 2026` / `"GAMR" content standards 2026` | `saudigazette.com.sa` / `arabnews.com` | 🔴 | ⏭️ | - | - |
| SA-3 | Mawthooq/网红许可 | `"موثوق" "ترخيص" 2026` / `"مؤثر" "موثوق"` | `"Mawthooq" Saudi 2026` / `"influencer" license Saudi` | `saudigazette.com.sa` / `arabnews.com` | 🔴 | ⏭️ | - | - |
| SA-4 | SAMA/支付/金融科技 | `"SAMA" "ترخيص" "دفع" 2026` | `"SAMA" fintech Saudi 2026` | `saudigazette.com.sa` / `arabnews.com` | 🟡 | ⏭️ | - | - |
| SA-5 | 反洗钱/PDPL | `"مكافحة غسل" "أموال" 2026` / `"PDPL" "Saudi"` | `"AML" Saudi 2026` / `"PDPL" Saudi 2026` | `saudigazette.com.sa` / `arabnews.com` | 🟡 | ⏭️ | - | - |
| SA-6 | 道德管理局/内容审查 | `"هيئة الأخلاق" "محتوى" 2026` | `"morality authority" Saudi content 2026` | `saudigazette.com.sa` / `arabnews.com` | 🔴 | ⏭️ | - | - |
| SA-7 | 执法/罚款/下架 | `"غرامة" "منصات" 2026` / `"حجب" "تطبيق"` | `"fine" platform Saudi 2026` / `"blocked" app Saudi` | `saudigazette.com.sa` / `arabnews.com` | 🔴 | ⏭️ | - | - |
| SA-8 | 律所分析 | - | `site:tamimi.com Saudi CST 2026` | `tamimi.com` / `lexology.com` | 🟡 | ⏭️ | - | - |
| SA-9 | 同业 | `"TikTok" السعودية 2026` | `"TikTok" Saudi 2026` | `saudigazette.com.sa` / `arabnews.com` | 🟡 | ⏭️ | - | - |

---

## 🏛️ 跨区域律所/国际组织（每周必搜）

| # | 主题 | 搜索词 | 目标域名 | 频率 | 状态 | 最后搜索 | 命中URL |
|---|------|--------|---------|------|------|---------|--------|
| LEX-1 | Lexology 聚合 | `site:lexology.com "Vietnam" OR "Indonesia" OR "Philippines" OR "Thailand" OR "Malaysia" OR "Turkey" OR "UAE" OR "Saudi" OR "Egypt" "digital" OR "fintech" OR "AML" OR "media" OR "data protection" 2026` | `lexology.com` | 每周 | ⏭️ | - | - |
| LEX-2 | ICLG 国别指南 | `site:iclg.com "gambling" OR "data protection" OR "fintech" OR "media" + country` | `iclg.com` | 每周 | ⏭️ | - | - |
| FATF-1 | FATF 动态 | `site:fatf-gafi.org "Vietnam" OR "Indonesia" OR "Philippines" OR "Thailand" OR "Malaysia" OR "Turkey" OR "UAE" 2026` | `fatf-gafi.org` | 每周 | ⏭️ | - | - |
| FATF-2 | FATF 灰名单更新 | `site:fatf-gafi.org "grey list" OR "increased monitoring" 2026` | `fatf-gafi.org` | 每月 | ⏭️ | - | - |
| GP-1 | Google Play 政策更新 | `site:android-developers.googleblog.com "policy" OR "update" 2026` | `android-developers.googleblog.com` | 每月 | ⏭️ | - | - |

---

## 🔄 同业协议更新监测（每周一搜）

| # | 产品 | 协议页面URL | 检测内容 | 频率 | 状态 | 最后检查 | Last Updated日期 |
|---|------|-----------|---------|------|------|---------|-----------------|
| COMP-1 | Bigo Live | `https://www.bigo.tv/terms` | Last Updated / 生效日期 | 每周 | ⏭️ | - | - |
| COMP-2 | MICO | `https://www.micoworld.com/terms.html` | Last Updated / 生效日期 | 每周 | ⏭️ | - | - |
| COMP-3 | TikTok | `https://www.tiktok.com/legal/terms-of-use` | Last Updated / 生效日期 | 每周 | ⏭️ | - | - |
| COMP-4 | Likee | `https://likee.video/terms.html` | Last Updated / 生效日期 | 每周 | ⏭️ | - | - |
| COMP-5 | SUGO | `https://www.sugo.live/terms` | Last Updated / 生效日期 | 每周 | ⏭️ | - | - |
| COMP-6 | TopTop | `https://www.toptop.com/terms` | Last Updated / 生效日期 | 每周 | ⏭️ | - | - |

---

## ✅ 单次搜索执行检查清单

每次搜索后必须确认：
- [ ] 按矩阵表逐项搜索（至少搜完 🔴 优先级主题）
- [ ] 每个主题使用了本地语言关键词
- [ ] 每个主题使用了 `site:` 限定本地域名
- [ ] 命中结果核对了日期（是否>data.js最新日期）
- [ ] 命中结果核对了ID（是否已存在于data.js）
- [ ] 新条目写入了 data.js（附 source + url + verified: true）
- [ ] git add → commit → push 完成
- [ ] 搜索矩阵表状态列已更新

---

## 📊 覆盖率统计（每月复盘）

| 国家 | 主题数 | 本月已搜次数 | 本月新增条目 | 漏检条目（用户发现） |
|------|--------|------------|------------|-------------------|
| 🇻🇳 越南 | 10 | - | - | - |
| 🇮🇩 印尼 | 10 | - | - | - |
| 🇵🇭 菲律宾 | 9 | - | - | - |
| 🇹🇭 泰国 | 8 | - | - | - |
| 🇲🇾 马来西亚 | 8 | - | - | - |
| 🇹🇷 土耳其 | 8 | - | - | - |
| 🇦🇪 阿联酋 | 8 | - | - | - |
| 🇪🇬 埃及 | 10 | - | - | - |
| 🇸🇦 沙特 | 9 | - | - | - |
| 跨区域律所 | 5 | - | - | - |
| 同业协议 | 6 | - | - | - |

---

*版本：v1.0 可执行版*
*创建日期：2026-05-18*
*关联文件：SEARCH_STRATEGY.md（详细策略说明）*
*用途：每次手动搜索或 cron 执行的必查清单*
