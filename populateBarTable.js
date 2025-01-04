const barData = [
    {
        name: "醉後的晚餐",
        address: "台北市中山區中山北路一段135巷28號",
        startTime: "19:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為19:00 - 23:00<br>🎁1/4微醺散步專屬優惠：<br>✷ 所有啤酒99元 <br>✷ 消費達低消200元即贈本店特色修女主題酒吧初體驗（初見愛心）拍立得乙張",
        bayesianScore: 4.719,
        rating: 4.7,
        reviewCount: 75,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJmSjHCACpQjQR6SIrzkCC110",
        website: "https://www.instagram.com/drunk_dinner_bar",
        phone: ""
    },
    {
        name: "辣吉點火烤兩吃",
        address: "台北市中山區中山北路一段105巷16號之1",
        startTime: "15:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為15:00 - 23:00<br>🎁1/4微醺散步專屬優惠：<br>✷ 來店送200元折價券（可現場折抵或下次消費折抵）<br>✷ 現場消費折抵低消880（桌）",
        bayesianScore: 4.7577,
        rating: 5.0,
        reviewCount: 2830,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJMSby2KqpQjQRgHGxi1YE9ok",
        website: "https://www.facebook.com/profile.php?id=61552922302454&mibextid=LQQJ4d",
        phone: "02 2521 8997"
    },
    {
        name: "雲霧",
        address: "台北市中山區林森北路133巷46號",
        startTime: "20:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為20:00 - 23:00",
        bayesianScore: 4.7244,
        rating: 5.0,
        reviewCount: 342,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJARRKXbWpQjQRrDsx03OW4Io",
        website: "http://instagram.com/kumosakura2022",
        phone: "02 2523 6661"
    },
    {
        name: "魚擺擺魚火鍋",
        address: "台北市中山區長安東路一段87號",
        startTime: "",
        endTime: "",
        promotion: "",
        bayesianScore: 4.7231,
        rating: 4.8,
        reviewCount: 933,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJqzq0M96pQjQR0eoJPJvpx18",
        website: "https://www.facebook.com/%E9%AD%9A%E6%93%BA%E6%93%BA%E9%AD%9A%E7%81%AB%E9%8D%8B-100383852445001/",
        phone: "02 2567 3131"
    },
    {
        name: "酒點見",
        address: "台北市中山區林森北路133巷80號",
        startTime: "19:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為19:00 - 23:00<br>🎁1/4微醺散步專屬優惠：<br>消費達本店低消（800＋10%），即可參與射轉盤乙次，每位限乙次。",
        bayesianScore: 4.7226,
        rating: 5.0,
        reviewCount: 227,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJDRDyqoypQjQR4GXpcJjq7Xc",
        website: "https://instagram.com/seeyou.nine?igshid=MzRlODBiNWFlZA==",
        phone: "0955 502 409"
    },
    {
        name: "串藏燒鳥居酒屋",
        address: "台北市中山區林森北路119巷23號",
        startTime: "",
        endTime: "",
        promotion: "",
        bayesianScore: 4.7219,
        rating: 4.8,
        reviewCount: 658,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJ70OTYn2pQjQR5wxa-e5Jx5A",
        website: "",
        phone: "02 2531 9919"
    },
    {
        name: "The Open Door",
        address: "台北市中山區中山北路一段121巷27號",
        startTime: "20:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為20:00 - 23:00<br>🎁1/4微醺散步專屬優惠：<br>單人消費滿800折100（含服務費）",
        bayesianScore: 4.7215,
        rating: 5.0,
        reviewCount: 159,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJxyzvbaqpQjQRqvSLpO12GPQ",
        website: "https://www.instagram.com/theopendoor_tpe/",
        phone: "02 2567 5751"
    },
    {
        name: "枋 Square",
        address: "台北市中山區中山北路一段62號",
        startTime: "20:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為20:00 - 23:00<br>🎁1/4微醺散步專屬優惠：消費打九折",
        bayesianScore: 4.7211,
        rating: 5.0,
        reviewCount: 128,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJVSX3gZWpQjQR63VvK2Mto2E",
        website: "https://instagram.com/square_taipei?igshid=YmMyMTA2M2Y=",
        phone: "0963 399 299"
    },
    {
        name: "暮 Taipei",
        address: "台北市中山區中山北路一段135巷36號",
        startTime: "19:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為19:00 - 23:00<br>🎁1/4微醺散步專屬優惠：<br>✷ 店內消費一率八折<br>✷ 招待炸物一份",
        bayesianScore: 4.721,
        rating: 5.0,
        reviewCount: 121,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJ-STechKpQjQR9vJpoHPMjiw",
        website: "https://instagram.com/moontaipei_bar?igshid=YmMyMTA2M2Y=",
        phone: "0905 973 964"
    },
    {
        name: "Another Eatery",
        address: "台北市中正區天津街9號",
        startTime: "18:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為18:00 - 23:00<br>🎁1/4微醺散步專屬優惠：<br>加碼追蹤IG打卡額外贈本店招牌Shot",
        bayesianScore: 4.7206,
        rating: 4.8,
        reviewCount: 349,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJk3lGbtypQjQRaDWDkSFy0yQ",
        website: "https://instagram.com/another.eatery",
        phone: "02 2395 6900"
    },
    {
        name: "Upsilon",
        address: "台北市中山區長安東路一段44號",
        startTime: "20:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為20:00 - 23:00",
        bayesianScore: 4.7205,
        rating: 4.9,
        reviewCount: 148,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJ264CQjKpQjQRzDtusW8f-aA",
        website: "",
        phone: "02 2511 8650"
    },
    {
        name: "Welina微莉那音樂沙發酒吧",
        address: "台北市中山區林森北路133巷54號",
        startTime: "13:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為13:00 - 23:00<br>🎁1/4微醺散步專屬優惠：現場所有酒品單杯250元",
        bayesianScore: 4.7201,
        rating: 4.9,
        reviewCount: 105,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJny7u5mWpQjQRR7gT3NX74Lk",
        website: "https://www.instagram.com/gbartraphouse?igsh=MWx2dnl1NGRydWdrNQ==",
        phone: "0987 801 295"
    },
    {
        name: "知心寮",
        address: "台北市中山區林森北路145巷17號",
        startTime: "18:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為18:00 - 23:00<br>🎁1/4微醺散步專屬優惠：<br>✷ 整單服務費全免<br>✷ 整單打九折<br>✷ 招待一份暖呼呼的關東煮",
        bayesianScore: 4.72,
        rating: 4.8,
        reviewCount: 214,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJ6SKI-qipQjQRf5mKrFnn6Zs",
        website: "https://reurl.cc/pxzq1r",
        phone: "02 2531 5961"
    },
    {
        name: "燒酒",
        address: "台北市中山區林森北路107巷76號",
        startTime: "20:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為20:00 - 23:00",
        bayesianScore: 4.7199,
        rating: 5.0,
        reviewCount: 57,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJ6XnjzM6pQjQRDMp1boVx0ok",
        website: "",
        phone: "02 2562 0399"
    },
    {
        name: "暗光窖",
        address: "台北市中山區林森北路119巷21號",
        startTime: "18:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為18:00 - 23:00<br>🎁1/4微醺散步專屬優惠：<br>✷ 調酒買一送一<br>✷ 同品項啤酒買5搭1",
        bayesianScore: 4.7199,
        rating: 5.0,
        reviewCount: 52,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJF9ZjOsqpQjQR4rK89jwG5JU",
        website: "https://www.instagram.com/sowilobar/?next=/&hl=zh-tw",
        phone: "02 2581 8285"
    },
    {
        name: "Shalom-sabar bar",
        address: "台北市中山區長安東路一段53巷12號",
        startTime: "13:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為13:00 - 23:00<br>🎁1/4微醺散步專屬優惠：<br>✷ 當⽇店內消費免⼈頭費 <br>✷ 體驗穿族服拍照 <br>✷ 點路跑套餐 （NT$300）贈折價卷，下次來店可折抵",
        bayesianScore: 4.7197,
        rating: 4.9,
        reviewCount: 66,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJ5fJHX9GpQjQRy7fAyXNJyqU",
        website: "https://m.facebook.com/Shalom-sabar-103049838643088/",
        phone: "02 2568 1220"
    },
    {
        name: "找小山Bar",
        address: "台北市中山區新生北路一段108號",
        startTime: "21:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為21:00 - 23:00<br>🎁1/4微醺散步專屬優惠：<br>當日出示「條通祭」通行證者<br>即可獲得「免費小山酒卷」一張",
        bayesianScore: 4.7196,
        rating: 4.9,
        reviewCount: 53,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJ77ewCnmpQjQRGxK0NUnSTzg",
        website: "",
        phone: "02 2564 2468"
    },
    {
        name: "四葉草 Clover",
        address: "台北市中山區林森北路133巷11號",
        startTime: "20:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為20:00 - 23:00",
        bayesianScore: 4.7193,
        rating: 5.0,
        reviewCount: 13,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJifDlSgCpQjQRGLj5CIR8BjQ",
        website: "",
        phone: "02 2522 1118"
    },
    {
        name: "金色蘑菇餐酒館",
        address: "台北市中山區林森北路85巷57號",
        startTime: "14:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為14:00 - 23:00<br>🎁1/4微醺散步專屬優惠：<br>✷ 消費四人同行招待炸薯條一份<br>✷ 20:00 - 23:00百威買二送一<br>✷ 前五組限量百富或大摩買二送一，可寄酒",
        bayesianScore: 4.7193,
        rating: 4.9,
        reviewCount: 20,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJI-5NdompQjQRWILcI7GU8t0",
        website: "",
        phone: "02 2537 7775"
    },
    {
        name: "Bar Logos",
        address: "台北市中山區新生北路1段108之2號",
        startTime: "20:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為20:00 - 23:00<br>🎁1/4微醺散步專屬優惠：<br>凡店內消費達成一餐搭一酒的參加者，贈送特製調酒（100ml）一瓶",
        bayesianScore: 4.7192,
        rating: 5.0,
        reviewCount: 8,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJ-cD7lSOpQjQREbk85ZqHZUk",
        website: "https://www.instagram.com/logos_tpe/",
        phone: "02 2511 7117"
    },
    {
        name: "Ana bar",
        address: "台北市中山區林森北路119巷78號",
        startTime: "20:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為20:00 - 23:00<br>🎁1/4微醺散步專屬優惠：<br>憑條通祭入場憑證，入店消費再送一杯200ml義大利氣泡酒",
        bayesianScore: 4.7192,
        rating: 4.8,
        reviewCount: 26,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJ5a6SWEupQjQR41PosYbfMJU",
        website: "https://instagram.com/anabar04?igshid=MmIzYWVlNDQ5Yg==",
        phone: "0906 678 027"
    },
    {
        name: "小酒館",
        address: "台北市中山區林森北路119巷71-5號",
        startTime: "19:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為19:00 - 23:00",
        bayesianScore: 4.7191,
        rating: 5.0,
        reviewCount: 3,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJ_7yTsiWpQjQRucmI_iTUSCE",
        website: "https://instagram.com/littlebar2022?igshid=MzNlNGNkZWQ4Mg==",
        phone: "0986 555 806"
    },
    {
        name: "醉後的晚餐",
        address: "台北市中山區中山北路一段135巷28號",
        startTime: "19:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為19:00 - 23:00<br>🎁1/4微醺散步專屬優惠：<br>✷ 所有啤酒99元 <br>✷ 消費達低消200元即贈本店特色修女主題酒吧初體驗（初見愛心）拍立得乙張",
        bayesianScore: 4.719,
        rating: 4.7,
        reviewCount: 75,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJmSjHCACpQjQR6SIrzkCC110",
        website: "https://www.instagram.com/drunk_dinner_bar",
        phone: ""
    },
    {
        name: "E Village by A Train",
        address: "台北市中山區中山北路一段57-2號",
        startTime: "",
        endTime: "",
        promotion: "",
        bayesianScore: 4.7189,
        rating: 4.7,
        reviewCount: 120,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJo6X2teapQjQRbZue75Qslac",
        website: "https://www.facebook.com/people/East-Village-by-A-Train/61552159766573/",
        phone: "02 2541 8992"
    },
    {
        name: "酒窩 Dimple",
        address: "台北市中山區林森北路119巷6之1號",
        startTime: "18:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為18:00 - 23:00<br>🎁1/4微醺散步專屬優惠：<br>✷ 洋酒單杯200元（限定洋酒）<br>✷ 啤酒單杯100元<br>✷ 調酒單杯100元",
        bayesianScore: 4.7189,
        rating: 4.7,
        reviewCount: 139,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJ-fVeWG-pQjQRPHDK10s_Zyc",
        website: "",
        phone: "02 2511 1159"
    },
    {
        name: "ADDICT 沉癮餐酒館",
        address: "台北市中山區中山北路一段73號",
        startTime: "17:30",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為17:30 - 23:00<br>🎁1/4微醺散步專屬優惠：<br>✷ 19:00前 酒類買一送一<br>✷ 19:00後 酒類第二杯半價",
        bayesianScore: 4.7189,
        rating: 4.7,
        reviewCount: 152,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJYw8FAUapQjQRJsabw9DQEbs",
        website: "https://www.instagram.com/addict.bistro/",
        phone: "02 2563 9720"
    },
    {
        name: "壹樓・臺北",
        address: "台北市中山區中山北路一段135巷32號B1",
        startTime: "",
        endTime: "",
        promotion: "",
        bayesianScore: 4.7188,
        rating: 4.6,
        reviewCount: 40,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJ_0WwQ_qpQjQRVvb2iliuJr8",
        website: "",
        phone: "02 2537 6051"
    },
    {
        name: "Aye Taipei Bar & Restaurant",
        address: "台北市中山區林森北路138巷15號",
        startTime: "17:00",
        endTime: "23:00",
        promotion: "",
        bayesianScore: 4.7187,
        rating: 4.7,
        reviewCount: 308,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJ1aAxzRCpQjQRUFCLQyeCIl8",
        website: "https://www.facebook.com/ayetaipei/",
        phone: "02 2567 2485"
    },
    {
        name: "原火乍初",
        address: "台北市中山區林森北路119巷10號",
        startTime: "19:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為19:00 - 23:00<br>🎁1/4微醺散步專屬優惠：購買鹹酥雞（原價89元），只要50元一份",
        bayesianScore: 4.7184,
        rating: 4.7,
        reviewCount: 663,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJF1cE7BqpQjQRahbjy8PNncc",
        website: "https://eats.quickclick.cc/togo/13616?p=friedtheway",
        phone: "0919 119 029"
    },
    {
        name: "Bar Ace",
        address: "台北市中山區林森北路107巷25號",
        startTime: "20:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為20:00 - 23:00<br>🎁1/4微醺散步專屬優惠：<br>✷ 1+1調酒：150元 <br>✷ 啤酒：75元<br>✷ 經典調酒及特調系列：200元 - 250元",
        bayesianScore: 4.7183,
        rating: 4.3,
        reviewCount: 32,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJY_5qWR-pQjQRneKTXSyPzOU",
        website: "https://instagram.com/barace_relax?r=nametag",
        phone: "02 2521 7131"
    },
    {
        name: "Bar Nine VIP",
        address: "台北市中山區林森北路107巷40號",
        startTime: "",
        endTime: "",
        promotion: "",
        bayesianScore: 4.7183,
        rating: 4.5,
        reviewCount: 63,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJTaPJJHupQjQRhvnnTr5nBrw",
        website: "https://www.instagram.com/vip____bar",
        phone: "02 2562 9816"
    },
    {
        name: "R77餐酒館",
        address: "台北市中山區林森北路119巷77號",
        startTime: "",
        endTime: "",
        promotion: "",
        bayesianScore: 4.7182,
        rating: 4.7,
        reviewCount: 779,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJwbUNFxypQjQRMxOlgc5fH74",
        website: "https://instagram.com/r77_official_",
        phone: "02 2542 0520"
    },
    {
        name: "日月茶莊 - 條通の酒",
        address: "台北市中山區林森北路107巷84號",
        startTime: "",
        endTime: "",
        promotion: "",
        bayesianScore: 4.7182,
        rating: 4.4,
        reviewCount: 49,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJ33lluGWpQjQRBrOJNOUYcB4",
        website: "",
        phone: "02 2523 2033"
    },
    {
        name: "Lux Bar",
        address: "台北市中山區林森北路107巷82號",
        startTime: "18:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為18:00 - 23:00<br>🎁1/4微醺散步專屬優惠：餐食、酒飲均八折",
        bayesianScore: 4.7182,
        rating: 4.4,
        reviewCount: 49,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJ33lluGWpQjQRBrOJNOUYcB4",
        website: "",
        phone: "02 2523 2033"
    },
    {
        name: "Sugar Bar",
        address: "台北市中山區林森北路107巷24號",
        startTime: "22:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為22:00 - 23:00<br>🎁1/4微醺散步專屬優惠：<br>點「條通祭特調（優惠價300元）」即可獲得轉盤抽獎活動一次。",
        bayesianScore: 4.7172,
        rating: 4.5,
        reviewCount: 151,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJ-Q889WWpQjQRJcO58ym_0Ys",
        website: "http://bit.ly/SugarBarTaipeiFB",
        phone: "02 2542 5659"
    },
    {
        name: "KOKORO居酒屋",
        address: "台北市中山區林森北路133巷15號",
        startTime: "",
        endTime: "",
        promotion: "",
        bayesianScore: 4.7156,
        rating: 4.5,
        reviewCount: 280,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJ5wCs_mWpQjQR_117Oj2OT3w",
        website: "",
        phone: "02 2523 0828"
    },
    {
        name: "晃串燒私廚",
        address: "台北市中山區長安東路一段53巷15號",
        startTime: "19:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為19:00 - 23:00<br>🎁1/4微醺散步專屬優惠：<br>凡臉書打卡或Google 5星好評，即可享受100元內的免費烤串（超過需補差價）",
        bayesianScore: 4.7152,
        rating: 4.4,
        reviewCount: 216,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJy9qq62WpQjQRzCxntS6d8Ng",
        website: "https://m.facebook.com/%E6%99%83%E4%B8%B2%E7%87%92%E7%A7%81%E5%BB%9A-303067113923963/",
        phone: "02 2562 2432"
    },
    {
        name: "Bar Nine",
        address: "台北市中山區林森北路107巷9號",
        startTime: "20:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為20:00 - 23:00<br>🎁1/4微醺散步專屬優惠：<br>活動限定三選一調酒（單杯300元）供外帶離場喝，無低消、不提供座位、不收10%",
        bayesianScore: 4.7152,
        rating: 4.5,
        reviewCount: 317,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJPWZsX2-pQjQR-UZ0K6wKl84",
        website: "",
        phone: "02 2563 3057"
    },
    {
        name: "小胖燒烤 x 東道煮",
        address: "台北市中山區林森北路107巷41號",
        startTime: "",
        endTime: "",
        promotion: "",
        bayesianScore: 4.7141,
        rating: 4.4,
        reviewCount: 278,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJcdVIt1-pQjQR1rC8fle83gs",
        website: "https://www.facebook.com/%E6%9D%B1%E9%81%93%E7%85%AE%E9%BA%BB%E8%BE%A3%E4%B8%B2%E4%B8%B2-2298240133832595",
        phone: "02 2562 1969"
    },
    {
        name: "PapiPapi西班牙餐館",
        address: "台北市中山區林森北路119巷60號",
        startTime: "20:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為20:00 - 23:00",
        bayesianScore: 4.7079,
        rating: 4.5,
        reviewCount: 949,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJh_mrw2WpQjQRaWvCYEO2Qow",
        website: "https://www.facebook.com/papipapilinsen/",
        phone: "02 2523 3223"
    },
    {
        name: "Nep. Lounge Bar",
        address: "台北市中山區天津街63號B1",
        startTime: "20:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為20:00 - 23:00<br>🎁1/4微醺散步專屬優惠：<br>消費滿千折百",
        bayesianScore: 4.7038,
        rating: 4.4,
        reviewCount: 893,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJg-A9Mm-pQjQRJU0UoHwI1ss",
        website: "http://www.nep6363.com/",
        phone: "02 2521 0069"
    },
    {
        name: "GiliGili韓國釜山餐酒館",
        address: "台北市中山區天津街16號",
        startTime: "20:00",
        endTime: "23:00",
        promotion: "🥃本店供Shot時段為20:00 - 23:00<br>🎁1/4微醺散步專屬優惠：<br>來店消費即可兌換「炸海苔冬粉捲」 乙份",
        bayesianScore: 4.6787,
        rating: 4.1,
        reviewCount: 1238,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJ30DoS26pQjQRNxLXPpiA4vs",
        website: "https://www.instagram.com/giligilibistro/",
        phone: "02 2523 0678"
    },
    {
        name: "麵屋武藏 神山",
        address: "台北市中山區中山北路一段121巷18號",
        startTime: "",
        endTime: "",
        promotion: "",
        bayesianScore: 4.6353,
        rating: 4.3,
        reviewCount: 4433,
        googleMapLink: "https://www.google.com/maps/place/?q=place_id:ChIJg-MBO2-pQjQRFFJKWg8N4b0",
        website: "https://bit.ly/m634tw",
        phone: "02 2542 8222"
    }
];

function populateTable() {
    // Helper to convert time strings to minutes since midnight
    function timeToMinutes(time) {
        if (!time) return null; // Return null for missing startTime
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
    }

    // Helper to create rows for a bar
    function createBarRow(bar) {
        return `
            <td class="bar-name" data-promotion="${bar.promotion || 'No promotion available'}">${bar.name}</td>
            <td style="text-align: left;">${bar.bayesianScore}<br>🅶 ${bar.rating}<br>🅶 ${bar.reviewCount}</td>
            <td><a href="${bar.googleMapLink}" target="_blank">Google Map</a></td>
        `;
    }

    // Helper to filter and sort bars for a specific hour
    function filterBarsForHour(hour) {
        const hourMinutes = timeToMinutes(hour);
        const nextHourMinutes = hourMinutes + 60; // Calculate the start of the next hour
        return barData
            .filter(bar => {
                const startMinutes = bar.startTime ? timeToMinutes(bar.startTime) : null;
                return startMinutes !== null && startMinutes >= hourMinutes && startMinutes < nextHourMinutes;
            })
            .sort((a, b) => b.bayesianScore - a.bayesianScore); // Sort by Bayesian score in descending order
    }

    // Populate a single table
    function populateSingleTable(tableId, hours) {
        const tableBody = document.querySelector(`#${tableId} tbody`);
        if (!tableBody) {
            console.error(`Table body for ${tableId} not found!`);
            return;
        }

        // Clear any existing rows
        tableBody.innerHTML = "";

        // Create rows for each hour
        const maxBarsPerHour = Math.max(...hours.map(hour => filterBarsForHour(hour).length));
        for (let i = 0; i < maxBarsPerHour; i++) {
            const row = document.createElement("tr");

            hours.forEach(hour => {
                const bars = filterBarsForHour(hour);
                const bar = bars[i];
                if (bar) {
                    row.innerHTML += createBarRow(bar);
                } else {
                    row.innerHTML += `<td colspan="3"></td>`;
                }
            });

            tableBody.appendChild(row);
        }

        // Add click event listeners to bar name cells
        const barNameCells = tableBody.querySelectorAll(".bar-name");
        barNameCells.forEach(cell => {
            cell.addEventListener("click", (event) => {
                event.stopPropagation(); // Prevent the click from bubbling up to the document

                // Check if a popup already exists for this cell
                const existingPopup = cell.querySelector(".promotion-popup");
                if (existingPopup) {
                    // If the popup exists, remove it
                    existingPopup.remove();
                } else {
                    // Remove any other existing popups
                    document.querySelectorAll(".promotion-popup").forEach(popup => popup.remove());

                    // Create a new popup
                    const promotion = cell.getAttribute("data-promotion");
                    const popup = document.createElement("div");
                    popup.className = "promotion-popup";
                    popup.innerHTML = promotion;

                    // Style the popup
                    popup.style.position = "absolute";
                    popup.style.backgroundColor = "white";
                    popup.style.border = "1px solid #ccc";
                    popup.style.padding = "10px";
                    popup.style.zIndex = "1000";
                    popup.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

                    // Position the popup below the clicked cell
                    const rect = cell.getBoundingClientRect();
                    popup.style.top = `${rect.bottom + window.scrollY}px`;
                    popup.style.left = `${rect.left + window.scrollX}px`;

                    // Append the popup to the cell
                    cell.appendChild(popup);
                }
            });
        });

        // Add a click event listener to the document to close popups when clicking outside
        document.addEventListener("click", () => {
            document.querySelectorAll(".promotion-popup").forEach(popup => popup.remove());
        });
    }

    // First table: 13:00 ~ 17:00
    populateSingleTable("shot-distribution-table-1", ["13:00", "14:00", "15:00", "16:00", "17:00"]);

    // Second table: 18:00 ~ 22:00
    populateSingleTable("shot-distribution-table-2", ["18:00", "19:00", "20:00", "21:00", "22:00"]);
}

// Call the function to populate the tables
populateTable();