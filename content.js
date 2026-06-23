/* =====================================================================
   网站内容文件 —— 你以后只需要改这一个文件！
   ---------------------------------------------------------------------
   使用说明:
   1. 每个项目是一个 { ... } 大括号块,用逗号隔开。
   2. 改文字:把冒号后面引号 "..." 里的内容换成你的即可。
   3. 引号里如果要用引号,请用单引号 ' 或中文引号“”,不要再用 "。
   4. 加图片:先把图片放进 assets 文件夹(网页上可直接 Upload),
      然后在 gallery 的方括号 [ ] 里加一行 "assets/图片文件名",用逗号隔开。
   5. 加新项目:复制任意一个项目块,粘贴在最后一个 } 后面(记得加逗号),
      再把里面的内容改成新项目。id 必须是英文、唯一、不能有空格。
   6. 改完保存(网页上点 Commit changes),1~2 分钟后网站自动更新。
   ===================================================================== */

const SITE = {
  name:    "Yechen Zhu",                         // 你的名字
  role:    "Industrial & Interaction Designer",  // 你的头衔
  email:   "zhuyechen666@gmail.com",             // 联系邮箱
  heroLine:"Design",                             // 首页大标题第一行
  heroAccent:"that matters.",                    // 首页大标题斜体第二行
  intro:   "Yechen Zhu — a designer working between physical product, digital experience and research, from concept to crafted detail.",
};

/* ---------- 项目列表 ---------- */
const PROJECTS = [
  {
    id: "pajama",                                   // 英文唯一标识(详情页网址用)
    title: "Inflatable Pajama",                     // 项目标题
    tags: "Wearable · Product",                     // 标签/分类(显示在卡片右侧)
    year: "2022",                                   // 年份
    cover: "assets/proj-pajama.jpg",                // 首页封面图
    wide: true,                                     // true = 横向大卡片, false = 普通卡片
    subtitle: "A soft, inflatable garment exploring comfort, body and air.", // 详情页副标题
    role: "Concept · Design · Prototype",           // 你在项目中的角色
    type: "Wearable Design",                        // 项目类型
    tools: "3D Modeling · Sewing · Photography",    // 使用工具
    // 详情页正文段落(每段一行,用逗号隔开,可增可减)
    body: [
      "Inflatable Pajama reimagines sleepwear as a soft architecture around the body — a garment that breathes, expands and holds you.",
      "Through material experiments and physical prototyping, the project explores how air and inflation can create new forms of comfort and protection.",
    ],
    // 详情页图集(第一张通常用封面,后面是更多图)
    gallery: ["assets/proj-pajama.jpg", "assets/pajama-2.jpg", "assets/pajama-3.jpg"],
  },
  {
    id: "plantform",
    title: "Plantform",
    tags: "Product · Sustainability",
    year: "2021",
    cover: "assets/proj-plantform.jpg",
    wide: false,
    subtitle: "A growing system that brings nature back into everyday space.",
    role: "Industrial Design · Research",
    type: "Sustainable Product",
    tools: "CAD · Prototyping · CMF",
    body: [
      "Plantform is a modular growing system designed to make caring for plants intuitive, beautiful and sustainable.",
      "The form language balances organic and engineered surfaces, inviting people to build a small ecosystem of their own.",
    ],
    gallery: ["assets/proj-plantform.jpg", "assets/plantform-2.jpg", "assets/plantform-3.jpg"],
  },
  {
    id: "brainco",
    title: "BrainCo Sleep Mask",
    tags: "Wearable · Internship",
    year: "2023",
    cover: "assets/proj-brainco.jpg",
    wide: false,
    subtitle: "A neuro-wearable that helps the mind unwind into sleep.",
    role: "Design Intern — Industrial Design",
    type: "Wearable / Internship",
    tools: "Rendering · CMF · Engineering Collaboration",
    body: [
      "During my internship at BrainCo, I worked on the industrial design of a sleep mask integrating neuro-feedback technology.",
      "The work spanned form exploration, comfort studies, material selection and high-fidelity rendering for a real product pipeline.",
    ],
    gallery: ["assets/proj-brainco.jpg", "assets/brainco-2.png", "assets/brainco-3.png"],
  },
  {
    id: "plant",
    title: "Plant Interfaces",
    tags: "Interaction · Research",
    year: "2022",
    cover: "assets/proj-plant.jpg",
    wide: false,
    subtitle: "Tangible interfaces that let plants and people communicate.",
    role: "Interaction Design · Research",
    type: "Research / Interaction",
    tools: "Arduino · Sensors · Prototyping",
    body: [
      "Plant Interfaces investigates how living plants can become part of an interactive system — sensing, responding and expressing.",
      "The project blends biology, electronics and interaction design to question the boundary between the natural and the digital.",
    ],
    gallery: ["assets/proj-plant.jpg", "assets/plant-2.png", "assets/plant-3.jpg"],
  },
  {
    id: "emofirefly",
    title: "EmoFirefly",
    tags: "UX · Wellbeing",
    year: "2023",
    cover: "assets/proj-emofirefly.png",
    wide: false,
    subtitle: "A gentle companion for noticing and naming emotions.",
    role: "UX / UI · Concept",
    type: "Digital Experience",
    tools: "Figma · Prototyping · Research",
    body: [
      "EmoFirefly is a digital wellbeing concept that helps people slow down, reflect and care for their emotional state.",
      "The experience translates abstract feelings into a warm, living visual language inspired by fireflies.",
    ],
    gallery: ["assets/proj-emofirefly.png", "assets/emofirefly-2.jpg", "assets/emofirefly-3.png"],
  },
  {
    id: "brick",
    title: "Brick as Currency",
    tags: "Material · Speculative",
    year: "2022",
    cover: "assets/proj-brick.jpg",
    wide: true,
    subtitle: "Biocement research reimagining bricks as a unit of value.",
    role: "Material Research · Speculative Design",
    type: "Research / Material",
    tools: "Biomaterial · Casting · Exhibition",
    body: [
      "Brick as Currency is a speculative material research project exploring biocement — growing bricks from organic and mineral matter.",
      "By treating the brick as a form of currency, the project asks how material, labour and value could be re-imagined in a sustainable future.",
    ],
    gallery: ["assets/proj-brick.jpg", "assets/brick-2.jpg", "assets/brick-3.jpg"],
  },
  {
    id: "butterfly",
    title: "Dream of Butterfly",
    tags: "Immersive · Spatial",
    year: "2023",
    cover: "assets/proj-butterfly.png",
    wide: false,
    subtitle: "An immersive space between dreaming and waking.",
    role: "Spatial · Experience Design",
    type: "Immersive Installation",
    tools: "Spatial Design · Projection · Sound",
    body: [
      "Dream of Butterfly is an immersive spatial experience inspired by the classic question of what is real and what is dreamt.",
      "Light, projection and sound dissolve the room into a soft, shifting environment for the visitor to wander through.",
    ],
    gallery: ["assets/proj-butterfly.png", "assets/butterfly-2.jpg", "assets/butterfly-3.png"],
  },
  {
    id: "timer",
    title: "Pomodoro Timer",
    tags: "Product · CMF",
    year: "2021",
    cover: "assets/proj-timer.jpg",
    wide: false,
    subtitle: "A tactile object that makes focused time feel good.",
    role: "Industrial Design · CMF",
    type: "Product Design",
    tools: "Rhino · Keyshot · CMF",
    body: [
      "This Pomodoro Timer turns a productivity method into a calm, desk-friendly object you actually want to touch.",
      "Careful proportions, materials and finishes give the simple act of starting a timer a small sense of ritual.",
    ],
    gallery: ["assets/proj-timer.jpg", "assets/timer-2.jpg", "assets/timer-3.png"],
  },
  {
    id: "divcap",
    title: "Divcap",
    tags: "Industrial · Concept",
    year: "2019",
    cover: "assets/proj-divcap.png",
    wide: false,
    subtitle: "A deep-sea inspired industrial design concept.",
    role: "Industrial Design",
    type: "Concept Design",
    tools: "Sketching · 3D · Rendering",
    body: [
      "Divcap is an industrial design concept drawing on the forms and atmosphere of the deep sea.",
      "The project explores how an unfamiliar environment can inspire fresh product language and detail.",
    ],
    gallery: ["assets/proj-divcap.png", "assets/divcap-2.png"],
  },
  {
    id: "cnc",
    title: "CNC Lamp",
    tags: "Fabrication · Lighting",
    year: "2024",
    cover: "assets/proj-cnc.jpg",
    wide: false,
    subtitle: "A lamp shaped by, and for, digital fabrication.",
    role: "Design · Fabrication",
    type: "Lighting / Fabrication",
    tools: "Rhino · CNC · Woodworking",
    body: [
      "CNC Lamp is a lighting object designed around the possibilities and constraints of CNC machining.",
      "From digital model to milled material, the project follows the full path of making a physical thing.",
    ],
    gallery: ["assets/proj-cnc.jpg", "assets/cnc-2.jpg", "assets/cnc-3.png"],
  },
  {
    id: "other",
    title: "Other Works",
    tags: "Selected Explorations",
    year: "2019–2024",
    cover: "assets/proj-other.jpg",
    wide: true,
    subtitle: "A collection of experiments, sketches and side explorations.",
    role: "Various",
    type: "Selected Works",
    tools: "Mixed Media",
    body: [
      "A selection of smaller projects, material experiments and design explorations made along the way.",
      "These works capture the curiosity and play behind the more developed projects.",
    ],
    gallery: ["assets/proj-other.jpg", "assets/other-2.jpg", "assets/other-3.jpg"],
  },
];
