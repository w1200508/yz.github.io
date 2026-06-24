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
                zh:"朱烨晨 —— 一位游走于实体产品、数字体验与研究之间的设计师,从概念到每一处细节。" },
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
    id:"stingray", cover:"assets/stingray-shot3.png", wide:true, year:"2025",
    title:{en:"Stingray Exhibit",zh:"黄貂鱼互动展项"},
    tags:{en:"Interactive Exhibit · Virginia Aquarium",zh:"互动展项 · 弗吉尼亚水族馆"},
    subtitle:{en:"An interactive tail mechanism that lets visitors feel how a stingray moves.",
              zh:"一套互动尾部机构,让观众亲手感受黄貂鱼的游动方式。"},
    role:{en:"Exhibit Design · Rhino 3D · Fabrication · Electronics",zh:"展项设计 · Rhino 建模 · 制作 · 电子"},
    type:{en:"Interactive Exhibit",zh:"互动展项"},
    tools:"Rhino · Carpentry · Arduino · Mechanism",
    body:[
      {en:"As Exhibits Technician II at the Virginia Aquarium, I designed an interactive stingray-tail mechanism that visualizes biological movement through tactile, hands-on engagement.",
       zh:"作为弗吉尼亚水族馆的展项技师 II,我设计了一套互动黄貂鱼尾部机构,通过亲手触动,把生物的运动方式直观地呈现给观众。"},
      {en:"I led the digital design — building the full 3D model in Rhino to define structure, proportions and fabrication details — then built the display enclosure with the team and independently wired and integrated the electronics for reliable on-site operation.",
       zh:"我主导了数字设计——在 Rhino 中搭建完整三维模型,确定结构、比例与制作细节——随后与团队一起从零搭建展示外壳,并独立完成电子元件的接线与集成,确保现场长期稳定运行。"},
    ],
    gallery:["assets/stingray-shot3.png","assets/stingray-shot2.png","assets/stingray-2.jpg","assets/stingray-3.jpg","assets/stingray-shot1.png","assets/stingray-slide26.jpg"],
  },
  {
    id:"camera", cover:"assets/camera-1.jpg", wide:false, year:"2025",
    title:{en:"Live Camera Exhibit",zh:"实时摄像展项"},
    tags:{en:"Interactive Exhibit · Virginia Aquarium",zh:"互动展项 · 弗吉尼亚水族馆"},
    subtitle:{en:"A remote pan-tilt camera that brings visitors eye-to-eye with live animals.",
              zh:"一套远程云台摄像系统,让观众与活体动物“面对面”。"},
    role:{en:"Exhibit Design · Embedded Systems · Fabrication",zh:"展项设计 · 嵌入式系统 · 制作"},
    type:{en:"Interactive Exhibit",zh:"互动展项"},
    tools:"ESP32 · RS-485 · PTZ Camera",
    body:[
      {en:"A remote-controlled pan-tilt camera system for live animal observation, letting visitors steer the view across the main tank.",
       zh:"一套可远程操控的云台摄像系统,用于观察活体动物,让观众自由转动视角、纵览主缸。"},
      {en:"I integrated an ESP32 microcontroller with PTZ camera hardware over an RS-485 serial bus, wrote the embedded control firmware, and designed the enclosure and motion mechanism for sealed, always-on operation.",
       zh:"我通过 RS-485 串行总线,把 ESP32 微控制器与云台摄像硬件集成在一起,编写嵌入式控制固件,并设计了可密封、长期常开运行的外壳与运动机构。"},
    ],
    gallery:["assets/camera-1.jpg","assets/camera-2.jpg","assets/camera-3.jpg","assets/camera-4.jpg"],
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
      {en:"Plantform pairs a network of sensors with a digital platform, visualizing a plant's living environment so it can be monitored remotely across different areas of a park.",
       zh:"Plantform 把一套传感器网络与一个数字平台结合起来,将植物的生长环境可视化,从而实现对公园不同区域的远程监测。"},
      {en:"Applied to a park scenario, the data both informs stakeholders' planning decisions and creates a new experiential mode for visitors — deepening our understanding of how ecological processes connect to the way we live.",
       zh:"应用于公园场景时,这些数据既能为相关方的规划决策提供依据,也为访客创造了一种全新的体验方式——加深我们对生态过程与生活方式之间联系的理解。"},
    ],
    gallery:["assets/proj-plantform.jpg","assets/plantform-2.jpg","assets/plantform-3.jpg"],
  },
  {
    id:"brainco", cover:"assets/proj-brainco.jpg", wide:false, year:"2021",
    title:{en:"Easleep — Sleep Wearable",zh:"Easleep 睡眠可穿戴"},
    tags:{en:"Wearable · BrainCo Internship",zh:"可穿戴 · BrainCo 实习"},
    subtitle:{en:"A smart wearable that eases the body and mind into sleep.",zh:"一款帮助身心进入睡眠的智能可穿戴设备。"},
    role:{en:"UX / Industrial Design Intern",zh:"UX / 工业设计实习生"},
    type:{en:"Wearable / Internship",zh:"可穿戴 / 实习"},
    tools:"Rhino · CMF · DFM",
    body:[
      {en:"Easleep promotes sleep by combining precise EEG data collection, personalized cranial electrotherapy stimulation (CES) and sleep-inducing sound waves — addressing both the physical and auditory paths into rest.",
       zh:"Easleep 通过精准的脑电(EEG)数据采集、个性化的经颅微电流刺激(CES)与助眠声波相结合来促进睡眠——同时从身体与听觉两条路径帮助入睡。"},
      {en:"During my internship at BrainCo I drove the early-stage industrial design across the full cycle: a competitive teardown of five devices, 20+ form explorations and three Rhino CAD iterations resolved the form against a tight hardware envelope.",
       zh:"在 BrainCo 实习期间,我主导了早期工业设计的完整流程:拆解五款竞品、20 多个造型探索与三轮 Rhino 建模迭代,在紧凑的硬件空间内确定了形态。"},
      {en:"Note: this shows only the design iterations I worked on during the internship, not the final released product.",
       zh:"说明:此处仅展示我实习期间参与的设计迭代,并非产品最终上市形态。"},
    ],
    gallery:["assets/proj-brainco.jpg","assets/brainco-2.jpg","assets/brainco-3.jpg"],
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
      {en:"Plant Interfaces imagines a future where living plants become part of our connected world — using their leaves as capacitive touch sensors and their bioelectrical signals as a medium for interaction.",
       zh:"植物界面设想了一个万物互联的未来:活体植物成为其中的一部分——以叶片作为电容触摸传感器,以自身的生物电信号作为交互媒介。"},
      {en:"PlantMIDI turns a plant into a musical instrument, converting its bioelectrical conductivity into sound; PlantLamp uses the same leaves as a touch control for a multi-sensory lamp that responds to heart rate with breathing light and calming scent.",
       zh:"PlantMIDI 把植物变成乐器,将其生物电导率转化为声音;PlantLamp 则用同样的叶片作为触控,做成一盏多感官灯具——它随心率以“呼吸般”的脉动光与舒缓香气回应使用者。"},
      {en:"The research was presented as 'Cultivating a Green Interface', blending biology, electronics and interaction design.",
       zh:"该研究以《培育绿色界面》为题对外发表,融合了生物、电子与交互设计。"},
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
      {en:"Dream of Butterfly is an interactive projection-mapping installation built around an AI-generated butterfly video, inspired by Zhuang Zhou's ancient question — am I a man who dreamt of being a butterfly, or a butterfly dreaming it is a man?",
       zh:"《梦蝶》是一件围绕 AI 生成蝴蝶影像构建的互动投影映射装置,灵感源自庄周的千年叩问——究竟是我梦见自己变成蝴蝶,还是蝴蝶梦见自己成了我?"},
      {en:"Across sight, sound and smell, the work blurs the boundary between self and illusion: when the viewer sinks into the dream, slow music plays and calming lavender is released; when they return to reality, the music quickens and a sobering scent of lemon takes over.",
       zh:"作品在视觉、听觉与嗅觉之间模糊“自我”与“幻象”的边界:当观者沉入梦境,音乐缓缓流淌,释放令人安定的薰衣草香;当观者回到现实,音乐转急,代之以清醒提神的柠檬气息。"},
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
      {en:"Made at MIT Media Lab with Dr. Adam Haar Horowitz, Inflatable Pajama is one of the prototypes built to incubate and alter dreams — applying targeted pressure to leg and arm pressure points during REM sleep to explore whether tactile cues can shape dream content.",
       zh:"在 MIT 媒体实验室与 Adam Haar Horowitz 博士合作完成。充气睡衣是一系列“孵化并改变梦境”原型之一,在 REM 睡眠期对腿部与手臂的压点施加定向压力,探索触觉线索能否影响梦的内容。"},
      {en:"The inflatable patterns were inspired by the textures of a starfish, evoking the moist, velvety touch of five gentle appendages on the skin. The piece was exhibited at MIT Museum Studio as part of the Dream Hotel exhibition (Boston, 2022).",
       zh:"充气纹样的灵感来自海星表面的肌理,试图唤起五条柔软触手轻抚皮肤时那种湿润、丝绒般的触感。作品作为“梦境旅馆”展览的一部分,在 MIT 博物馆工作室展出(波士顿,2022)。"},
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
    title:{en:"CNC Lamp Base",zh:"CNC 灯具底座"},
    tags:{en:"Lighting · Fabrication",zh:"灯具 · 数字制造"},
    subtitle:{en:"A turned lamp base shaped by, and for, CNC milling.",zh:"一件为 CNC 加工而生、由 CNC 塑形的灯具底座。"},
    role:{en:"Design · CNC Fabrication",zh:"设计 · CNC 制造"},
    type:{en:"Lighting / Fabrication",zh:"灯具 / 数字制造"},
    tools:"Rhino · CNC Milling · Woodworking",
    body:[
      {en:"Made in the RISD CNC class, this lamp base was designed around the possibilities and constraints of CNC milling — from a precise digital model to the finished, machined form.",
       zh:"完成于 RISD 的 CNC 课程,这件灯具底座围绕 CNC 铣削的可能性与限制来设计——从精确的数字模型,到最终被机器加工出的实体。"},
      {en:"The work follows the full path of digital fabrication: modeling tool paths in Rhino, milling the form, and refining the surface and joinery by hand.",
       zh:"项目走完了数字制造的完整链路:在 Rhino 中规划刀路、铣削成型,再手工打磨表面与接合细节。"},
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
