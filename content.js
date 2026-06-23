/* =====================================================================
   网站内容文件 —— 你以后只需要改这一个文件！
   ---------------------------------------------------------------------
   本网站支持中英文切换。每一段文字都写成:
        { en: "English text", zh: "中文内容" }
   你只要改引号 "..." 里的字即可(英文改 en 那句,中文改 zh 那句)。

   常见操作:
   - 改文字:找到对应的 en / zh,替换引号里的内容。
   - 换/加图:把图片放进 assets 文件夹,再把下面的 "assets/文件名" 换成它。
   - 加项目:复制任意一整个 { ... } 块,粘到 PROJECTS 列表里,改内容;
            id 必须是唯一的英文(无空格)。
   - 删项目:把那一整个 { ... } 块删掉。
   改完保存(网页上点 Commit changes),1~2 分钟后网站自动更新。
   ===================================================================== */

/* ---------- 基本信息 ---------- */
const SITE = {
  name:    "Yechen Zhu",
  email:   "zhuyechen666@gmail.com",
  website: "www.zhuyechen.com",
  location:{ en:"Virginia, USA", zh:"美国 弗吉尼亚" },
  role:    { en:"Industrial & Interaction Designer", zh:"工业与交互设计师" },
  heroLine:  { en:"Design",        zh:"设计," },
  heroAccent:{ en:"that matters.", zh:"重要的事。" },
};

/* ---------- 界面文字(导航、各板块标题等) ---------- */
const UI = {
  navWork:    { en:"Work",     zh:"作品" },
  navAbout:   { en:"About",    zh:"关于" },
  navApproach:{ en:"Approach", zh:"方法" },
  navContact: { en:"Contact",  zh:"联系" },

  available:  { en:"Available 2026", zh:"2026 可合作" },
  scroll:     { en:"Scroll", zh:"向下滚动" },
  heroTag:    { en:"Industrial & interaction designer crafting objects, interfaces and material futures.",
                zh:"工业与交互设计师,专注于产品、界面与材料未来的创造。" },
  heroRole:   { en:"Yechen Zhu — a designer working between physical product, digital experience and research, from concept to crafted detail.",
                zh:"朱叶尘 —— 一位游走于实体产品、数字体验与研究之间的设计师,从概念到每一处细节。" },
  tagline:    { en:"Inspire · Innovate · Impact", zh:"启发 · 创新 · 影响" },

  aboutLabel: { en:"About", zh:"关于我" },
  aboutLead:  { en:"I design with clarity, craft and care — turning research and curiosity into objects and interfaces people actually feel.",
                zh:"我以清晰、工艺与用心去设计 —— 把研究与好奇,转化为人们能真切感受到的产品与界面。" },

  expLabel:   { en:"Experience",   zh:"工作经历" },
  eduLabel:   { en:"Education",    zh:"教育背景" },
  pubLabel:   { en:"Publications", zh:"学术发表" },
  skillLabel: { en:"Skills",       zh:"技能" },

  workTitle:  { en:"Selected Work", zh:"精选作品" },

  approachLabel:{ en:"Approach", zh:"方法" },
  approachTitle:{ en:"How a vague idea becomes a real thing.", zh:"一个模糊的想法,如何变成真实之物。" },
  approachAccent:{ en:"a real thing.", zh:"真实之物。" },

  recogLabel: { en:"Awards & Recognition", zh:"奖项与荣誉" },
  recogTitle: { en:"Recognition", zh:"荣誉" },

  contactEyebrow:{ en:"Let's work together", zh:"一起合作" },
  contactTitle:  { en:"Got an idea?", zh:"有想法吗?" },
  sayHello:      { en:"Say hello ↗", zh:"打个招呼 ↗" },
  copyright:     { en:"Designed & built with care.", zh:"用心设计与构建。" },
  nextProject:   { en:"Next Project", zh:"下一个项目" },
  allWork:       { en:"← All Work", zh:"← 全部作品" },
  overview:      { en:"Overview", zh:"概述" },
};

/* ---------- 简历 / 关于我 ---------- */
const RESUME = {
  summary:{ en:"Industrial designer specializing in consumer hardware and wearable products — taking concepts from form and CMF through embedded electronics, functional prototyping and design for manufacturing. Published at ACM TEI 2025, Core77 Emerging Technologies Notable, and a Terra Carta Design Lab finalist.",
            zh:"工业设计师,专注于消费硬件与可穿戴产品 —— 从造型与 CMF,贯通嵌入式电子、功能原型与可量产设计。论文发表于 ACM TEI 2025,获 Core77 新兴技术 Notable,并入围 Terra Carta 设计实验室。" },

  experience:[
    { org:{en:"Virginia Aquarium & Marine Science Center",zh:"弗吉尼亚水族馆与海洋科学中心"},
      role:{en:"Exhibits Technician II — Interactive Exhibit Design & Fabrication",zh:"互动展项设计与制作 技师 II"},
      date:"2024 — Now", place:{en:"Virginia Beach, VA",zh:"弗吉尼亚海滩"},
      points:[
        {en:"Designed an interactive coral-spawning installation end-to-end — Arduino-driven airflow, load-bearing structure, fabrication and install.",
         zh:"独立完成珊瑚产卵互动装置:基于 Arduino 的气流系统、承重结构、制作与安装全流程。"},
        {en:"Built an ESP32 pan-tilt camera system and retrofitted legacy exhibits with new sensor electronics.",
         zh:"打造 ESP32 云台摄像系统,并为多个旧展项加装新的传感与控制电路。"},
      ]},
    { org:{en:"BrainCo",zh:"BrainCo 强脑科技"},
      role:{en:"UX / Industrial Design Intern",zh:"用户体验 / 工业设计 实习生"},
      date:"2021", place:{en:"Hangzhou, CN",zh:"中国 杭州"},
      points:[
        {en:"Drove the industrial design of an around-ear sleep wearable — teardown of 5 devices, 20+ form explorations, 3 Rhino CAD iterations.",
         zh:"主导一款耳周睡眠可穿戴的工业设计:拆解 5 款竞品、20+ 造型探索、3 轮 Rhino 建模迭代。"},
        {en:"Ran wear-comfort studies and worked with EEs to reconcile form, layout and manufacturability.",
         zh:"开展佩戴舒适度研究,并与电子工程师协作平衡造型、布局与可制造性。"},
      ]},
  ],

  education:[
    { school:{en:"Rhode Island School of Design (RISD)",zh:"罗德岛设计学院 (RISD)"},
      degree:{en:"Master of Industrial Design",zh:"工业设计硕士"},
      date:"2022 — 2024",
      note:{en:"RISD Fellowship · Assistantship · Fred M. Roddy Scholarship",zh:"RISD 奖学金 · 助教席位 · Fred M. Roddy 奖学金"} },
    { school:{en:"Shanghai University",zh:"上海大学"},
      degree:{en:"Bachelor of Fine Arts",zh:"美术学 学士"},
      date:"2017 — 2021",
      note:{en:"Shanghai City Honor Graduate · Municipal Scholarship",zh:"上海市优秀毕业生 · 上海市奖学金"} },
  ],

  publications:[
    {en:"Cultivating a Green Interface: Human–Product Interaction Based on Plant Interfaces — ACM TEI '25",
     zh:"《培育绿色界面:基于植物界面的人–产品交互》—— ACM TEI 2025"},
    {en:"Divcap: A Smart Nightcap that Promotes Sleep through the Five Senses — IEEE CACRE 2020",
     zh:"《Divcap:通过五感促进睡眠的智能睡帽》—— IEEE CACRE 2020"},
    {en:"Design of Olfactory Information Visualization: Olfactory AR Watch oWatch — Design Journal 2020",
     zh:"《嗅觉信息可视化设计:嗅觉 AR 腕表 oWatch》—— 装饰/设计期刊 2020"},
  ],

  skills:[
    { k:{en:"Design",zh:"设计"},       v:"Rhino · Keyshot · Sketching · CMF · Adobe CS · Figma · Clo3D" },
    { k:{en:"Fabrication",zh:"制造"},   v:"3D Printing · Laser Cutting · CNC Milling · Metal Lathe · Mold Making" },
    { k:{en:"Interactive",zh:"交互"},   v:"Arduino · ESP32 (RS-485) · Max/MSP · MadMapper · p5.js · TouchDesigner" },
    { k:{en:"Process",zh:"流程"},       v:"User Research · Storyboarding · Wireframing · Rapid Prototyping · Strategy" },
  ],

  awards:[
    { yr:"2025", name:{en:"Core77 Design Awards — Emerging Technologies, Student Notable",zh:"Core77 设计奖 —— 新兴技术 学生 Notable"}, org:{en:"Core77",zh:"Core77"} },
    { yr:"2024", name:{en:"Terra Carta Design Lab — Finalist",zh:"Terra Carta 设计实验室 —— 入围"}, org:{en:"HM King Charles III × Sir Jony Ive",zh:"查尔斯三世 × Jony Ive 爵士"} },
    { yr:"2025", name:{en:"Published at ACM TEI 2025",zh:"论文发表于 ACM TEI 2025"}, org:{en:"ACM TEI",zh:"ACM TEI"} },
    { yr:"—",   name:{en:"International Design Awards (IDA) — Silver & Bronze",zh:"国际设计奖 (IDA) —— 银奖与铜奖"}, org:{en:"IDA",zh:"IDA"} },
    { yr:"—",   name:{en:"UX Design Award (UXDA) — Bronze",zh:"UX 设计奖 (UXDA) —— 铜奖"}, org:{en:"UXDA",zh:"UXDA"} },
  ],
};

/* ---------- 方法 / 流程(3 步) ---------- */
const APPROACH = [
  { no:"01", h:{en:"Understand",zh:"理解"},
    p:{en:"I start with people, context and material constraints — research, interviews and hands-on exploration to find the real problem worth solving.",
       zh:"我从人、情境与材料约束出发 —— 通过研究、访谈与动手探索,找到真正值得解决的问题。"} },
  { no:"02", h:{en:"Design & Build",zh:"设计与制作"},
    p:{en:"Sketch, model, prototype, code. I move fast between physical and digital, making the idea tangible enough to test and feel.",
       zh:"草图、建模、原型、写代码。我在实体与数字之间快速穿梭,让想法变得可被测试与感受。"} },
  { no:"03", h:{en:"Refine & Evolve",zh:"打磨与迭代"},
    p:{en:"Then I sharpen every detail — form, flow, finish — iterating with feedback until it earns its place in someone's hands.",
       zh:"然后打磨每个细节 —— 造型、流程、工艺 —— 在反馈中迭代,直到它真正配得上被使用。"} },
];

/* ---------- 项目列表 ---------- */
const PROJECTS = [
  {
    id:"scentopia", cover:"assets/scentopia-c1.png", wide:true, year:"2024",
    title:{en:"Scentopia",zh:"Scentopia 嗅觉界面"},
    tags:{en:"Olfactory · Wearable · Spatial",zh:"嗅觉 · 可穿戴 · 空间计算"},
    subtitle:{en:"An olfactory necklace that blends six scents into spatial, head-tracked digital fragrance.",
              zh:"一款嗅觉项链:调和六种基础气味,生成可随头部转动的空间化数字气味。"},
    role:{en:"Concept · Industrial Design · Electronics",zh:"概念 · 工业设计 · 电子"},
    type:{en:"Olfactory Wearable",zh:"嗅觉可穿戴"},
    tools:"Rhino · ESP32 · Max/MSP · Stepper Motors",
    body:[
      {en:"Scentopia is a wearable olfactory interface — a necklace that blends six foundational scents into 'digital fragrances', adding the missing sense of smell to immersive VR and meditation experiences.",
       zh:"Scentopia 是一款可穿戴的嗅觉界面 —— 一条能调和六种基础气味、生成“数字气味”的项链,为沉浸式 VR 与冥想体验补上缺失的嗅觉维度。"},
      {en:"Six directional emitters on watch-grade stepper motors, paired with a gyroscope for head-tracking, rotate scent a full 360° around the wearer; an ultrasonic atomizer and an ESP32 (Wi-Fi, Max/MSP) time each release to match what you see.",
       zh:"六个方向性喷口由腕表级步进电机驱动,配合陀螺仪进行头部追踪,让气味绕佩戴者 360° 旋转;超声波雾化结合 ESP32(Wi-Fi、Max/MSP),使每一次气味释放都与画面同步。"},
      {en:"Selected for the Core77 Design Awards in the Emerging Technologies category.",
       zh:"入选 Core77 设计奖 —— 新兴技术组。"},
    ],
    gallery:["assets/scentopia-c1.png","assets/scentopia-c4.png","assets/scentopia-c3.png","assets/scentopia-c5.jpg"],
  },
  {
    id:"plantform", cover:"assets/proj-plantform.jpg", wide:false, year:"2021",
    title:{en:"Plantform",zh:"Plantform 植物系统"},
    tags:{en:"Product · Sustainability",zh:"产品 · 可持续"},
    subtitle:{en:"A growing system that brings nature back into everyday space.",zh:"把自然带回日常空间的种植系统。"},
    role:{en:"Industrial Design · Research",zh:"工业设计 · 研究"},
    type:{en:"Sustainable Product",zh:"可持续产品"},
    tools:"Rhino · Prototyping · CMF",
    body:[
      {en:"Plantform is a modular growing system designed to make caring for plants intuitive, beautiful and sustainable.",
       zh:"Plantform 是一套模块化种植系统,让照料植物变得直觉、美观且可持续。"},
      {en:"The form language balances organic and engineered surfaces, inviting people to build a small ecosystem of their own.",
       zh:"它的造型语言在有机与工业曲面之间取得平衡,邀请人们打造属于自己的微型生态。"},
    ],
    gallery:["assets/proj-plantform.jpg","assets/plantform-2.jpg","assets/plantform-3.jpg"],
  },
  {
    id:"brainco", cover:"assets/proj-brainco.jpg", wide:false, year:"2021",
    title:{en:"BrainCo Sleep Mask",zh:"BrainCo 睡眠可穿戴"},
    tags:{en:"Wearable · Internship",zh:"可穿戴 · 实习"},
    subtitle:{en:"An around-ear sleep wearable taken from teardown to CAD.",zh:"从竞品拆解到 CAD 的耳周睡眠可穿戴。"},
    role:{en:"UX / Industrial Design Intern",zh:"UX / 工业设计实习生"},
    type:{en:"Wearable / Internship",zh:"可穿戴 / 实习"},
    tools:"Rhino · CMF · DFM",
    body:[
      {en:"During my internship at BrainCo, I drove the industrial design of an early-stage around-ear sleep wearable across the full product cycle.",
       zh:"在 BrainCo 实习期间,我主导了一款早期耳周睡眠可穿戴设备的工业设计,贯穿完整产品周期。"},
      {en:"A competitive teardown of five devices, 20+ form explorations and three CAD iterations resolved the form against a tight hardware envelope.",
       zh:"通过拆解五款竞品、20 多个造型探索与三轮 CAD 迭代,在紧凑的硬件空间内确定了最终形态。"},
    ],
    gallery:["assets/proj-brainco.jpg","assets/brainco-2.png","assets/brainco-3.png"],
  },
  {
    id:"plant", cover:"assets/proj-plant.jpg", wide:false, year:"2023",
    title:{en:"Plant Interfaces",zh:"植物界面"},
    tags:{en:"Interaction · Published (TEI'25)",zh:"交互 · 已发表 (TEI'25)"},
    subtitle:{en:"Tangible interfaces that let plants and people communicate.",zh:"让植物与人彼此沟通的实体界面。"},
    role:{en:"Interaction Design · Research",zh:"交互设计 · 研究"},
    type:{en:"Research / Interaction",zh:"研究 / 交互"},
    tools:"Arduino · Sensors · Prototyping",
    body:[
      {en:"Plant Interfaces investigates how living plants can become part of an interactive system — sensing, responding and expressing.",
       zh:"植物界面研究活体植物如何成为交互系统的一部分 —— 感知、回应并表达。"},
      {en:"The work was published at ACM TEI 2025 as 'Cultivating a Green Interface', blending biology, electronics and interaction design.",
       zh:"该研究以《培育绿色界面》发表于 ACM TEI 2025,融合了生物、电子与交互设计。"},
    ],
    gallery:["assets/proj-plant.jpg","assets/plant-2.png","assets/plant-3.jpg"],
  },
  {
    id:"emofirefly", cover:"assets/proj-emofirefly.png", wide:false, year:"2023",
    title:{en:"EmoFirefly",zh:"EmoFirefly 情绪萤火"},
    tags:{en:"UX · Wellbeing",zh:"UX · 身心健康"},
    subtitle:{en:"A gentle companion for noticing and naming emotions.",zh:"一位帮你察觉与命名情绪的温柔伙伴。"},
    role:{en:"UX / UI · Concept",zh:"UX / UI · 概念"},
    type:{en:"Digital Experience",zh:"数字体验"},
    tools:"Figma · Prototyping · Research",
    body:[
      {en:"EmoFirefly is a digital wellbeing concept that helps people slow down, reflect and care for their emotional state.",
       zh:"EmoFirefly 是一个数字身心健康概念,帮助人们慢下来、自省并照料自己的情绪。"},
      {en:"The experience translates abstract feelings into a warm, living visual language inspired by fireflies.",
       zh:"它把抽象的感受,转译成一套以萤火虫为灵感的、温暖而有生命力的视觉语言。"},
    ],
    gallery:["assets/proj-emofirefly.png","assets/emofirefly-2.jpg","assets/emofirefly-3.png"],
  },
  {
    id:"brick", cover:"assets/proj-brick.jpg", wide:true, year:"2022",
    title:{en:"Brick as Currency",zh:"砖即货币"},
    tags:{en:"Material · Speculative",zh:"材料 · 思辨"},
    subtitle:{en:"Biocement research reimagining bricks as a unit of value.",zh:"以生物水泥研究,重新想象“砖”作为价值单位。"},
    role:{en:"Material Research · Speculative Design",zh:"材料研究 · 思辨设计"},
    type:{en:"Research / Material",zh:"研究 / 材料"},
    tools:"Biomaterial · Casting · Exhibition",
    body:[
      {en:"Brick as Currency is a speculative material research project exploring biocement — growing bricks from organic and mineral matter.",
       zh:"《砖即货币》是一个思辨性的材料研究项目,探索生物水泥 —— 用有机与矿物质“生长”出砖。"},
      {en:"By treating the brick as a form of currency, the project asks how material, labour and value could be re-imagined in a sustainable future.",
       zh:"把砖视作一种货币,项目追问:在可持续的未来里,材料、劳动与价值能否被重新想象。"},
    ],
    gallery:["assets/proj-brick.jpg","assets/brick-2.jpg","assets/brick-3.jpg"],
  },
  {
    id:"butterfly", cover:"assets/proj-butterfly.png", wide:false, year:"2023",
    title:{en:"Dream of Butterfly",zh:"梦蝶"},
    tags:{en:"Immersive · Spatial",zh:"沉浸 · 空间"},
    subtitle:{en:"An immersive space between dreaming and waking.",zh:"介于梦与醒之间的沉浸空间。"},
    role:{en:"Spatial · Experience Design",zh:"空间 · 体验设计"},
    type:{en:"Immersive Installation",zh:"沉浸装置"},
    tools:"Spatial Design · Projection · Sound",
    body:[
      {en:"Dream of Butterfly is an immersive spatial experience inspired by the classic question of what is real and what is dreamt.",
       zh:"《梦蝶》是一件沉浸式空间体验,灵感来自“何为真实、何为梦境”这一古老叩问。"},
      {en:"Light, projection and sound dissolve the room into a soft, shifting environment for the visitor to wander through.",
       zh:"光、投影与声音把房间消融成一片柔软流动的环境,供观者在其中游走。"},
    ],
    gallery:["assets/proj-butterfly.png","assets/butterfly-2.jpg","assets/butterfly-3.png"],
  },
  {
    id:"pajama", cover:"assets/proj-pajama.jpg", wide:false, year:"2022",
    title:{en:"Inflatable Pajama",zh:"充气睡衣"},
    tags:{en:"Wearable · MIT Media Lab",zh:"可穿戴 · MIT 媒体实验室"},
    subtitle:{en:"Sleepwear that gently presses the body to shape dreams.",zh:"在睡梦中轻柔施压、试图塑造梦境的睡衣。"},
    role:{en:"Design · Material · Prototype",zh:"设计 · 材料 · 原型"},
    type:{en:"Wearable Research",zh:"可穿戴研究"},
    tools:"Patterning · Vinyl / TPU · Sewing",
    body:[
      {en:"Made at MIT Media Lab with Dr. Adam Haar Horowitz, Inflatable Pajama applies targeted pressure to leg and arm pressure points during REM sleep — exploring whether tactile cues can shape dream content.",
       zh:"在 MIT 媒体实验室与 Adam Haar Horowitz 博士合作完成。充气睡衣在 REM 睡眠期对腿部与手臂的压点施加定向压力,探索触觉线索能否影响梦的内容。"},
      {en:"I led material exploration across vinyl and TPU-coated nylon, designing inflatable patterns that balance comfort, elasticity and efficacy.",
       zh:"我主导了从 PVC 到 TPU 涂层尼龙的材料探索,设计出在舒适、弹性与功效之间取得平衡的充气结构。"},
    ],
    gallery:["assets/proj-pajama.jpg","assets/pajama-2.jpg","assets/pajama-3.jpg"],
  },
  {
    id:"divcap", cover:"assets/proj-divcap.png", wide:false, year:"2020",
    title:{en:"Divcap — Smart Nightcap",zh:"Divcap 智能睡帽"},
    tags:{en:"Wearable · Published",zh:"可穿戴 · 已发表"},
    subtitle:{en:"A smart nightcap that promotes sleep through the five senses.",zh:"通过五感促进睡眠的智能睡帽。"},
    role:{en:"Industrial Design · Research",zh:"工业设计 · 研究"},
    type:{en:"Wearable / Concept",zh:"可穿戴 / 概念"},
    tools:"Sketching · 3D · Rendering",
    body:[
      {en:"Divcap is a smart nightcap concept that gently guides the wearer into sleep through coordinated cues across the five senses.",
       zh:"Divcap 是一款智能睡帽概念,通过协调五感的线索,温柔地引导佩戴者进入睡眠。"},
      {en:"The project was published at the IEEE CACRE 2020 conference in Dalian, China.",
       zh:"该项目发表于 2020 年中国大连 IEEE CACRE 国际会议。"},
    ],
    gallery:["assets/proj-divcap.png","assets/divcap-2.png"],
  },
  {
    id:"cnc", cover:"assets/proj-cnc.jpg", wide:false, year:"2024",
    title:{en:"Printed Modular Biobrick Lamp",zh:"打印模块化生物砖灯"},
    tags:{en:"Lighting · Terra Carta Finalist",zh:"灯具 · Terra Carta 入围"},
    subtitle:{en:"A modular lamp grown from ceramic waste.",zh:"由陶瓷废料“生长”出的模块化灯具。"},
    role:{en:"Design · Material · Fabrication",zh:"设计 · 材料 · 制造"},
    type:{en:"Lighting / Sustainability",zh:"灯具 / 可持续"},
    tools:"Rhino · Clay Printing · CNC",
    body:[
      {en:"Inspired by clay's molecular behavior, this modular lamp is digitally printed from a 50% ceramic-waste / 50% porcelain composite, cutting firing energy by about 30%.",
       zh:"灵感源自黏土的分子行为,这款模块化灯具以 50% 陶瓷废料 / 50% 瓷土的复合材料数字打印而成,烧成能耗降低约 30%。"},
      {en:"It was selected as a RISD finalist in the Terra Carta Design Lab (launched by HM King Charles III & Sir Jony Ive) and exhibited during Climate Week NYC 2024.",
       zh:"它入围由查尔斯三世与 Jony Ive 爵士发起的 Terra Carta 设计实验室(RISD 代表),并于 2024 纽约气候周期间展出。"},
    ],
    gallery:["assets/proj-cnc.jpg","assets/cnc-2.jpg","assets/cnc-3.png"],
  },
  {
    id:"other", cover:"assets/proj-other.jpg", wide:true, year:"2019–2024",
    title:{en:"Other Works",zh:"其他作品"},
    tags:{en:"Selected Explorations",zh:"精选探索"},
    subtitle:{en:"A collection of experiments, sketches and side explorations.",zh:"一组实验、草图与日常探索的合集。"},
    role:{en:"Various",zh:"多角色"},
    type:{en:"Selected Works",zh:"精选作品"},
    tools:"Mixed Media",
    body:[
      {en:"A selection of smaller projects, material experiments and design explorations made along the way.",
       zh:"沿途完成的一些小项目、材料实验与设计探索的精选。"},
      {en:"These works capture the curiosity and play behind the more developed projects.",
       zh:"这些作品记录了那些成熟项目背后的好奇心与玩心。"},
    ],
    gallery:["assets/proj-other.jpg","assets/other-2.jpg","assets/other-3.jpg"],
  },
];
