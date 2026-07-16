// 用户以后主要改这里：
// 1. 修改个人介绍、关注方向、城市和联系方式：profile / links
// 2. 修改项目内容、图片路径、Demo/GitHub/报告链接：projects
// 3. 修改能力整理：capabilityMatrix

export type ProjectLink = {
  label: string;
  href: string;
  placeholder?: boolean;
};

export type Project = {
  id: string;
  title: string;
  label: string;
  status: string;
  image: string;
  imageFallback: string;
  imageAlt: string;
  why: string;
  did: string;
  progress: string;
  process: string[];
  summaryPoints?: string[];
  proves: string[];
  tags: string[];
  links: ProjectLink[];
  video?: {
    title: string;
    description: string;
    href: string;
    cover: string;
    coverAlt: string;
  };
  screenshots?: Array<{
    title: string;
    path: string;
    alt: string;
  }>;
};

export type CapabilityProof = {
  title: string;
  target: string;
  evidence: string;
};

export const links = {
  resumeDocx: "/Roxy_AI产品助理.docx",
  email: "ry-dakeai@foxmail.com",
  wechat: "juben6868",
  github: "https://github.com/Roxy163",
  // portfolio: "https://roxy163.netlify.app",
  portfolio: "https://roxy163-portfolio.pages.dev",
  tarotApp: "https://tarot-pavilion.netlify.app",
  tarotDemoVideo:
    "https://www.bilibili.com/video/BV186N26FEYj/?spm_id_from=333.1387.homepage.video_card.click&vd_source=6e2c392c8c2299109120418017318712",
  difyAssistant: "https://udify.app/chat/yE8PgcVCb2t5jOIp",
  aiReport:
    "https://www.notion.so/20-AI-AI-360efea89c2e8025a1fad69c3ad9f9ba?source=copy_link",
};

export const profile = {
  name: "Roxy163",
  location: "武汉本地或远程",
  targetRoles: ["AI应用产品助理", "AI应用搭建", "产品助理"],
  headline: "AI应用产品助理作品集",
  positioning: "我擅长把一个想法说清楚、拆开来做，并借助AI工具推进成可体验的初版。",
  summary:
    "我长期围绕AI工具、应用搭建、产品测评和迭代记录做实践，用不断提问、测试和复盘的方式，把学习过程沉淀成可查看的作品。",
  proofIntro: "近期实践",
  contactLine: "欢迎联系我交流AI应用产品助理、AI应用搭建或产品助理相关机会。",
};

export const heroProofs = [
  {
    title: "塔罗研习阁 App",
    detail: "一个在AI辅助下反复搭建和迭代出来的塔罗记录 App，已经可以在线体验。",
  },
  {
    title: "20+ AI软件测评文档",
    detail: "从同一长文解读任务出发，把多个AI产品的输出、评分和个人判断整理成记录。",
  },
  {
    title: "塔罗知识库问答助手",
    detail: "自己整理部分塔罗资料，在Dify里做成一个基于资料回答的问答助手。",
  },
  {
    title: "个人作品集网站",
    detail: "在Codex辅助下，把分散的作品、截图、链接和实践过程整理成一个持续更新的网站。",
  },
];

export const projects: Project[] = [
  {
    id: "tarot-app",
    title: "塔罗研习阁：AI塔罗记录与自我探索 App",
    label: "AI App MVP",
    status: "已部署到 Netlify，可在线体验",
    image: "/images/covers/tarot-app-cover.png",
    imageFallback: "塔罗研习阁：AI塔罗记录与自我探索应用",
    imageAlt: "塔罗研习阁作品封面图，展示神秘紫色背景和塔罗牌元素",
    why:
      "用塔罗作为轻量入口，降低情绪记录和自我复盘的启动成本。",
    did:
      "从一句想法开始，用 ChatGPT、DeepSeek、Google AI Studio 和 Codex 辅助拆需求、生成方案、改页面、调问题，并持续迭代到可在线体验。",
    progress:
      "已支持访客模式、注册登录、云端同步、AI解读、牌义注解和移动端适配；云端同步目前需要在可访问相关服务的网络环境下使用。",
    process: [
      "先把想法讲给 ChatGPT、DeepSeek 等工具，请它们帮我梳理功能和提示词。",
      "早期用 Google AI Studio 做初版，发现无法满足后续需求后转到 Codex 继续推进。",
      "边使用边记录问题，再通过多轮对话、修改、测试，把登录、记录、AI解读、移动端等功能逐步补上。",
    ],
    proves: ["想法落地", "AI辅助开发", "持续迭代", "功能测试", "移动端适配", "上线部署"],
    tags: ["用户记录", "塔罗研习", "AI辅助解读", "云端同步"],
    links: [
      { label: "在线体验", href: links.tarotApp },
      { label: "B站演示视频", href: links.tarotDemoVideo },
    ],
    video: {
      title: "B站演示视频",
      description: "我录了一段视频，介绍塔罗研习阁的主要页面、使用流程和做这个 App 的过程。",
      href: links.tarotDemoVideo,
      cover: "/images/tarot-app/bilibili-cover.png",
      coverAlt: "B站视频封面：我用AI做了个塔罗记录App",
    },
    screenshots: [
      {
        title: "研习台首页",
        path: "/images/tarot-app/home-1.png",
        alt: "塔罗研习阁首页，展示今日手记入口和今日运势",
      },
      {
        title: "牌意小考与数据复盘",
        path: "/images/tarot-app/home-2.png",
        alt: "研习台功能区，展示快速占卜、牌意小考和数据统计",
      },
      {
        title: "抽牌手记",
        path: "/images/tarot-app/reading-1.png",
        alt: "抽牌手记页面，支持问题输入、日期选择和牌阵选择",
      },
      {
        title: "手记编辑",
        path: "/images/tarot-app/reading-2.png",
        alt: "手记编辑页面，支持主牌选择、补充解读视角和保存到本地",
      },
      {
        title: "典籍记录",
        path: "/images/tarot-app/library.png",
        alt: "典籍页面，展示历史占卜记录和AI综合解读",
      },
      {
        title: "执印入阁",
        path: "/images/tarot-app/login.png",
        alt: "登录页面，支持邮箱密码登录和访客模式",
      },
    ],
  },
  {
    id: "ai-products-report",
    title: "20+ AI软件测评文档：长文解读任务实测记录",
    label: "AI工具测评",
    status: "Notion 报告已公开",
    image: "/images/covers/ai-report-cover.png",
    imageFallback: "AI产品长文解读实测记录",
    imageAlt: "AI产品测评报告封面图，展示数据分析图表和雷达图",
    why:
      "我想知道不同AI产品面对同一个真实任务时，差异到底在哪里，而不是只看宣传或主观印象。",
    did:
      "先用长文解读任务实测21款AI产品，再从中选出9个表现较好的产品继续做其他任务测试；Codex辅助我整理总纲和记录结构。",
    progress:
      "Notion里已有评分表、原始Prompt和测评记录；目前内容偏长，下一步会整理成更适合网站阅读的摘要版。",
    process: [
      "先固定测试材料和Prompt，避免每个工具面对的题目不一样。",
      "测试时记录输出质量、阅读成本和我自己的判断，而不是只写好不好用。",
      "整理阶段用Codex帮我把零散记录收成总纲，再保留原始记录方便回看。",
    ],
    summaryPoints: [
      "测评范围：21款产品做长文解读，9款继续深入体验。",
      "保留材料：原始Prompt、评分表、输出记录和个人结论。",
      "下一步：把长文内容压缩成测试任务、典型发现、适合场景和个人结论。",
      "核心收获：不同AI产品不是简单强弱关系，更像任务适配关系。",
    ],
    proves: ["真实使用测评", "评分表整理", "Prompt记录", "工具差异观察", "结构化表达"],
    tags: ["AI实测", "长文解读", "评分表", "Prompt记录"],
    links: [{ label: "查看Notion报告", href: links.aiReport }],
    screenshots: [
      {
        title: "测评方法",
        path: "/images/ai-report-method.svg",
        alt: "AI产品测评方法截图，展示测试任务和记录方式",
      },
      {
        title: "对比记录",
        path: "/images/ai-report-comparison.svg",
        alt: "AI产品测评对比截图，展示不同工具输出差异",
      },
      {
        title: "整理流程",
        path: "/images/ai-report-workflow.svg",
        alt: "AI产品测评整理流程截图，展示Prompt、评分和结论沉淀",
      },
    ],
  },
  {
    id: "tarot-dify-assistant",
    title: "塔罗研习阁助手：Dify 知识库问答助手",
    label: "Dify Assistant",
    status: "已上线，可公开体验",
    image: "/images/covers/tarot-dify-cover.png",
    imageFallback: "塔罗知识库 · 智能问答助手",
    imageAlt: "塔罗研习阁助手封面图，展示Dify资料库问答界面和塔罗牌元素",
    why:
      "塔罗学习资料容易分散，我想做一个可检索、可追问的学习入口。",
    did:
      "自己整理部分塔罗资料作为资料库，在Dify里搭建问答助手；搭建和调试过程借助大语言模型辅助理解和操作。",
    progress:
      "已发布公开体验链接，并整理了问答和知识库页面截图。",
    process: [
      "先整理一部分塔罗相关资料，作为助手回答问题时参考的资料库。",
      "在Dify里完成问答助手搭建，操作和调试过程中用LLM辅助理解每一步。",
      "通过提问测试它是否基于资料回答，以及哪里需要补资料或调整提示词。",
    ],
    proves: ["资料整理", "Dify搭建", "提示词调整", "问答测试", "垂直场景尝试"],
    tags: ["牌义问答", "知识库检索", "边界意识", "学习辅助"],
    links: [{ label: "在线体验", href: links.difyAssistant }],
    screenshots: [
      {
        title: "知识库资料",
        path: "/images/dify-assistant/knowledge-card.png",
        alt: "Dify知识库资料截图，展示塔罗资料整理卡片",
      },
      {
        title: "问答效果",
        path: "/images/dify-assistant/chat-answer.png",
        alt: "Dify塔罗助手问答截图，展示基于资料的回答",
      },
      {
        title: "边界测试",
        path: "/images/dify-assistant/boundary-answer.png",
        alt: "Dify塔罗助手边界测试截图，展示助手回答边界",
      },
    ],
  },
  {
    id: "portfolio-site",
    title: "Roxy163 个人作品集网站：AI作品与实践整理",
    label: "Portfolio Site",
    status: "已部署到 Netlify，持续迭代中",
    image: "/images/covers/portfolio-cover.png",
    imageFallback: "作品集展示 · 实践记录",
    imageAlt: "个人作品集网站封面图，展示项目卡片和科技感设计",
    why:
      "把分散的项目、文档和助手整理成一个能持续更新的入口。",
    did:
      "在Codex辅助下搭建和迭代这个网站，自己负责内容取舍、表达调整、截图整理和整体呈现方向。",
    progress:
      "站点已上线；当前版本重点优化信息层级、截图归位和移动端阅读。",
    process: [
      "先把分散的作品、链接、截图和自我介绍放到一个页面里，确认整体阅读顺序。",
      "不断删除夸大或不准确的技术表述，改成真实的学习、实践和迭代过程。",
      "用Codex辅助修改页面结构、交互和样式，自己决定最终内容口径和呈现重点。",
    ],
    proves: ["内容整理", "AI协作开发", "表达调整", "截图归位", "持续迭代"],
    tags: ["作品集设计", "内容整理", "响应式", "实践记录"],
    links: [
      { label: "在线访问", href: links.portfolio },
      { label: "GitHub", href: links.github },
    ],
  },
];

export const capabilityMatrix: CapabilityProof[] = [
  {
    title: "AI应用方向感",
    target: "AI应用产品 / 产品助理 / 应用搭建",
    evidence:
      "持续围绕AI应用产品、产品助理和应用搭建做作品，重视从真实想法到可体验初版的过程。",
  },
  {
    title: "AI协作能力",
    target: "提问、拆解、测试、迭代",
    evidence:
      "塔罗 App、Dify助手和个人网站都不是一次做成的，而是在AI辅助下不断描述需求、发现问题、修改和复盘。",
  },
  {
    title: "需求拆解能力",
    target: "场景理解、功能拆分、MVP验证",
    evidence:
      "项目里会写清为什么做、解决什么问题、做了哪些功能，以及下一步如何继续验证。",
  },
  {
    title: "MVP搭建能力",
    target: "AI辅助搭建、部署、调试、记录",
    evidence:
      "作品集与塔罗 App 已上线；我能借助AI工具和教程，把页面、功能、部署和问题修复推进到可体验状态。",
  },
  {
    title: "产品测评与复盘",
    target: "评分表、Prompt、输出评估、结论沉淀",
    evidence:
      "AI软件测评保留了原始Prompt、评分表、输出记录和个人结论，也会在项目迭代里记录问题与调整。",
  },
];

export const contactItems = [
  { label: "邮箱", value: links.email },
  { label: "微信", value: links.wechat },
  { label: "GitHub / 作品链接", value: links.github },
  { label: "简历Word", value: links.resumeDocx },
];
