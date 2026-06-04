// 用户以后主要改这里：
// 1. 修改个人介绍、目标岗位、城市和联系方式：profile / links
// 2. 修改项目内容、图片路径、Demo/GitHub/报告链接：projects
// 3. 修改岗位匹配、AI应用能力、经历迁移和30天计划：capabilityMatrix / aiApplicationSkills / experiences / nextActions

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
  featured?: boolean;
  image: string;
  imageFallback: string;
  imageAlt: string;
  why: string;
  did: string;
  progress: string;
  proves: string[];
  missing: string[];
  next: string;
  tags: string[];
  links: ProjectLink[];
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
  nextProof: string;
};

export type AISkill = {
  title: string;
  status: string;
  evidence: string;
  next: string;
};

export type ProofChecklistItem = {
  item: string;
  status: "已具备" | "进行中" | "待补强";
  detail: string;
};

export type ToolFlow = {
  tool: string;
  role: string;
  useCase: string;
  output: string;
};

export type Experience = {
  source: string;
  transfer: string;
  productValue: string;
};

export type NextAction = {
  title: string;
  detail: string;
};

export type ReportSnapshot = {
  title: string;
  url: string;
  summary: string;
  coverImage: string;
  cover: {
    title: string;
    subtitle: string;
    keywords: string[];
    conclusion: string;
  };
  coreConclusion: string;
  findings: string[];
  screenshots: Array<{
    title: string;
    path: string;
    alt: string;
    fallback: string;
  }>;
  abilities: Array<{ title: string; detail: string }>;
  testFramework: {
    tasks: string[];
    categories: string[];
    dimensions: string[];
  };
};

export const links = {
  resumePdf: "/resume.pdf",
  email: "ry-dakeai@foxmail.com",
  wechat: "juben6868",
  github: "https://github.com/Roxy163",
  portfolio: "https://roxy163.netlify.app",
  tarotApp: "https://tarot-pavilion.netlify.app",
  difyAssistant: "https://udify.app/chat/yE8PgcVCb2t5jOIp",
  aiReport:
    "https://www.notion.so/20-AI-AI-360efea89c2e8025a1fad69c3ad9f9ba?source=copy_link",
};

export const profile = {
  name: "Roxy163",
  location: "武汉本地或远程",
  targetRoles: ["AI应用产品助理", "AI应用搭建", "AI产品运营", "初级AI产品工程"],
  headline: "AI应用产品助理作品集",
  positioning: "用产品理解、AI工具协同和前端交付，把想法推进成可体验的AI应用。",
  summary:
    "这个站点只展示四个招聘方能直接检查的东西：塔罗研习阁 App、20+ AI软件测评文档、塔罗知识库问答助手，以及这个作品集网站本身。每个作品都写清楚我做了什么、现在完成到哪里、它能证明什么能力。",
  proofIntro: "四个可验证展示物",
  contactLine: "欢迎联系我交流AI应用产品、AI应用搭建、产品助理或AI产品运营相关机会。",
};

export const heroProofs = [
  {
    title: "塔罗研习阁 App",
    detail: "已部署到 Netlify，展示从需求拆解、AI识图解读、用户体系到云端同步的MVP闭环。",
  },
  {
    title: "20+ AI软件测评文档",
    detail: "用真实任务横测21款AI产品，沉淀任务适配、工具边界和产品分析方法。",
  },
  {
    title: "塔罗知识库问答助手",
    detail: "用 Dify 做垂直知识库问答，展示RAG资料整理、提示词边界和测试验证意识。",
  },
  {
    title: "个人作品集网站",
    detail: "用 React + TypeScript 组织作品证据链，让招聘方能快速判断岗位匹配度。",
  },
];

export const projects: Project[] = [
  {
    id: "tarot-app",
    title: "塔罗研习阁：AI塔罗记录与自我探索 App",
    label: "AI App MVP",
    status: "已部署到 Netlify，可在线体验",
    featured: true,
    image: "/images/tarot-app/home.png",
    imageFallback: "待补真实截图：首页、AI解读、登录同步、移动端",
    imageAlt: "塔罗研习阁 App 首页与AI解读功能截图",
    why:
      "情绪记录和自我复盘的启动成本较高，我把塔罗牌作为轻量入口，让用户更愿意表达问题并沉淀记录。",
    did:
      "完成从需求定义、功能拆解到前端实现和部署的MVP；接入 Gemini API 做识图与解读，并通过代理层保护密钥。",
    progress:
      "已支持访客模式、注册登录、云端同步、AI解读、牌义注解、灵数设置和移动端适配。",
    proves: ["0→1产品闭环", "AI模型API接入", "前端交付", "数据同步", "移动端适配", "上线部署"],
    missing: ["产品架构图", "3分钟演示视频", "用户反馈→需求清单", "AI输出评估样例"],
    next:
      "补项目复盘页：目标用户、核心场景、AI调用链路、用户反馈、下一版优先级和演示视频。",
    tags: ["React", "TypeScript", "Firebase", "Gemini API", "Netlify", "AI产品MVP"],
    links: [
      { label: "在线体验", href: links.tarotApp },
      { label: "源码", href: "https://github.com/Roxy163/tarot-app" },
    ],
  },
  {
    id: "ai-products-report",
    title: "20+ AI软件测评文档：任务适配与产品边界分析",
    label: "Product Research",
    status: "Notion 报告已公开",
    image: "/images/ai-report-cover.png",
    imageFallback: "待补真实截图：报告封面、评分表、典型输出对比",
    imageAlt: "20款以上AI产品体验测评报告截图",
    why:
      "AI产品岗位不只看会不会用工具，还看能不能判断不同产品在具体任务里的适配度、优势和边界。",
    did:
      "体验21款AI产品，围绕4类真实任务做横向比较，并用7个维度记录任务完成度、结构化能力、边界意识和事实可靠性。",
    progress:
      "已形成公开文档，覆盖通用助手、AI搜索、RAG/知识库、Agent、AI编程与应用搭建工具。",
    proves: ["产品体验分析", "竞品横测", "评估框架设计", "工具边界识别", "结构化表达"],
    missing: ["典型任务对比截图", "原始Prompt", "失败输出样例", "公开评分表"],
    next:
      "补3-5组原始Prompt、模型输出、人工判断和评分截图，让测试过程更容易被招聘方复核。",
    tags: ["21款AI横测", "4类任务", "7维评价", "产品分析", "工具工作流"],
    links: [{ label: "查看Notion报告", href: links.aiReport }],
  },
  {
    id: "tarot-dify-assistant",
    title: "塔罗研习阁助手：Dify 知识库问答助手",
    label: "RAG Case",
    status: "已上线，可公开体验",
    image: "/images/dify-assistant/chat-answer.png",
    imageFallback: "塔罗研习阁助手问答截图",
    imageAlt: "塔罗研习阁助手回答愚人牌逆位问题的截图",
    why:
      "塔罗学习资料容易分散，学习者查正逆位、复盘方法和边界问题时，需要一个可检索、可追问的入口。",
    did:
      "用 Dify 搭建聊天助手，整理塔罗研习资料为知识库，配置模型、Embedding、召回和提示词边界。",
    progress:
      "已发布公开体验链接，并完成牌义问答、边界问题和知识库页面的截图证据。",
    proves: ["Dify应用搭建", "RAG知识库整理", "Prompt边界", "问答测试", "垂直场景产品化"],
    missing: ["完整测试题集", "失败样例记录", "召回命中截图", "知识库分段迭代说明"],
    next:
      "补10条标准测试问题，记录命中、误答、拒答和下一版优化；补知识库分段与提示词迭代说明。",
    tags: ["Dify", "RAG", "知识库问答", "Prompt边界", "AI应用搭建"],
    links: [{ label: "在线体验", href: links.difyAssistant }],
    screenshots: [
      {
        title: "牌义问答",
        path: "/images/dify-assistant/chat-answer.png",
        alt: "塔罗研习阁助手回答愚人牌逆位含义",
      },
      {
        title: "边界回答",
        path: "/images/dify-assistant/boundary-answer.png",
        alt: "塔罗研习阁助手回答塔罗不能确定预测未来",
      },
      {
        title: "知识库配置",
        path: "/images/dify-assistant/knowledge-card.png",
        alt: "Dify中的塔罗研习知识库卡片",
      },
    ],
  },
  {
    id: "portfolio-site",
    title: "Roxy163 个人作品集网站：招聘方阅读路径设计",
    label: "Portfolio Site",
    status: "已部署到 Netlify，持续迭代中",
    image: "/images/portfolio-site/preview-desktop.png",
    imageFallback: "当前站点就是作品：信息架构、响应式页面、作品证据链",
    imageAlt: "Roxy163 个人作品集网站桌面端预览",
    why:
      "转型求职最容易散乱，我需要一个能把项目、文档、助手和能力证据集中呈现的入口。",
    did:
      "用 React + TypeScript 搭建作品集，把四个展示物按招聘方阅读顺序组织，并补充状态、链接、能力标签和下一步计划。",
    progress:
      "站点已上线，可作为投递入口；当前版本重点优化信息层级、截图归位和移动端阅读。",
    proves: ["信息架构", "前端实现", "响应式设计", "作品包装", "持续迭代"],
    missing: ["更完整的项目复盘链接", "真实产品截图补齐", "简历与站点文案统一"],
    next:
      "持续把每个项目的复盘、截图、Prompt、评估表和演示视频接入对应卡片，形成可验证证据包。",
    tags: ["React", "TypeScript", "Vite", "Netlify", "Portfolio"],
    links: [
      { label: "在线访问", href: links.portfolio },
      { label: "GitHub", href: links.github },
    ],
  },
];

export const capabilityMatrix: CapabilityProof[] = [
  {
    title: "清晰定位",
    target: "AI应用产品 / 产品助理 / 应用搭建",
    evidence:
      "首页直接说明目标岗位、四个展示物和一句话定位，避免把自己包装成算法、设计、运营多个方向。",
    nextProof:
      "让简历、自我介绍、GitHub README 和面试讲述都围绕同一条主线：AI应用产品助理。",
  },
  {
    title: "AI应用能力",
    target: "Prompt、模型API、RAG、评估与边界",
    evidence:
      "塔罗 App 接入 Gemini API；Dify 助手完成知识库问答；AI横测报告记录工具边界和失败风险。",
    nextProof:
      "补原始Prompt、失败样例、召回命中截图和AI输出评估表，让AI能力更容易被验证。",
  },
  {
    title: "产品分析能力",
    target: "用户场景、竞品分析、MVP验证",
    evidence:
      "每个项目都写清为什么做、做了什么、完成到哪里、证明能力和下一步补强。",
    nextProof:
      "为塔罗 App 补目标用户、核心场景、用户反馈、需求优先级和下一版迭代方案。",
  },
  {
    title: "工程交付能力",
    target: "React、TypeScript、Firebase、Netlify、部署安全",
    evidence:
      "作品集与塔罗 App 已上线，能把前端、数据同步、模型调用和部署连成可体验产品。",
    nextProof:
      "补架构图、部署说明、构建记录和3分钟演示视频，让工程链路一眼可查。",
  },
  {
    title: "作品包装能力",
    target: "在线Demo、源码、截图、Prompt、评估、复盘",
    evidence:
      "当前站点已把在线Demo、源码、Notion报告、Dify助手和求职证据集中展示。",
    nextProof:
      "把截图、原始Prompt、失败样例、评估表和用户反馈继续归档到对应项目卡片。",
  },
];

export const aiApplicationSkills: AISkill[] = [
  {
    title: "Prompt设计与任务拆解",
    status: "已具备",
    evidence: "AI横测围绕长文总结、项目包装、功能清单、边界说明等任务做对比。",
    next: "补3组原始Prompt、模型输出和人工修订记录。",
  },
  {
    title: "模型API与代理层",
    status: "已具备",
    evidence: "塔罗 App 通过 Gemini API 完成图像识别和智能解读，并用代理层保护密钥。",
    next: "把限流、CORS、错误处理和密钥保护写进项目复盘。",
  },
  {
    title: "RAG / 知识库问答",
    status: "已具备",
    evidence: "Dify 助手把塔罗学习资料整理成知识库，支持牌义、正逆位、复盘和边界问题回答。",
    next: "补测试题集、未命中样例和知识库分段迭代记录。",
  },
  {
    title: "Agent / 工作流编排",
    status: "进行中",
    evidence: "已完成 Dify 聊天助手形态，理解知识库、提示词、召回设置和发布链接的组合方式。",
    next: "后续补工作流或Agent节点版本，展示任务流、节点截图和失败兜底逻辑。",
  },
  {
    title: "输出评估与安全边界",
    status: "已具备",
    evidence: "横测报告记录幻觉、夸大、错误引用、任务跑偏等风险，坚持项目包装不编造。",
    next: "把评估维度做成公开表格：事实可靠性、可执行性、边界意识、交互成本。",
  },
  {
    title: "部署与工程协同",
    status: "已具备",
    evidence: "作品集和塔罗 App 均已上线，能使用 Codex 协助本地开发、调试、构建和页面迭代。",
    next: "在仓库中补齐README、环境变量示例、部署步骤和常见问题。",
  },
];

export const portfolioProofChecklist: ProofChecklistItem[] = [
  {
    item: "在线Demo",
    status: "已具备",
    detail: "塔罗研习阁、塔罗研习阁助手和个人作品集均已部署到公网，可直接发给招聘方体验。",
  },
  {
    item: "源码仓库",
    status: "已具备",
    detail: "GitHub 已放出项目入口，后续要补更清晰的 README 和项目复盘链接。",
  },
  {
    item: "项目截图",
    status: "进行中",
    detail: "Dify 助手截图已归位；塔罗 App 和AI横测报告还需要补真实页面、评分表和移动端截图。",
  },
  {
    item: "架构图 / 流程图",
    status: "待补强",
    detail: "建议补塔罗 App 技术架构图、AI调用链路图、RAG原型流程图。",
  },
  {
    item: "Prompt与输出样例",
    status: "进行中",
    detail: "Dify 助手已形成提示词和输出样例，后续补人工修订记录、失败样例和最终评估表。",
  },
  {
    item: "失败案例与评估表",
    status: "待补强",
    detail: "把幻觉、错误引用、任务跑偏等失败案例纳入评估，展示边界意识。",
  },
  {
    item: "用户反馈与迭代记录",
    status: "进行中",
    detail: "把反馈整理成问题、场景、优先级和下一版方案，体现产品助理能力。",
  },
];

export const experiences: Experience[] = [
  {
    source: "用户运营",
    transfer: "接触用户反馈、内容表达、转化路径和日常沟通。",
    productValue: "能从使用场景出发，把反馈整理成问题、需求、影响范围和可验证假设。",
  },
  {
    source: "玻璃幕墙建模设计",
    transfer: "经历复杂项目交付、反复修改、细节校对和多方协作。",
    productValue: "能适应跨角色沟通和版本推进，适合做产品需求整理、原型验收和交付跟进。",
  },
  {
    source: "AI应用实践",
    transfer: "使用 ChatGPT、Claude、DeepSeek、Codex、秘塔、Dify 等工具完成调研、搭建和复盘。",
    productValue: "能把AI工具放进具体工作流，推进产品分析、MVP搭建、测试评估和材料沉淀。",
  },
];

export const tools: ToolFlow[] = [
  {
    tool: "ChatGPT",
    role: "思路拆解",
    useCase: "产品思路、页面文案、需求说明、复盘框架和任务规划。",
    output: "结构化提纲、PRD草稿、问题清单和表达优化。",
  },
  {
    tool: "Claude",
    role: "长文整理 / 风险审查",
    useCase: "长文本理解、报告整理、产品体验材料归纳、边界检查和夸大表述识别。",
    output: "长文总结、对比维度、报告大纲、风险提示和表达校正。",
  },
  {
    tool: "DeepSeek",
    role: "方案推理",
    useCase: "中文任务推理、代码辅助、方案对比和快速验证。",
    output: "实现建议、代码片段、任务拆解和备选方案。",
  },
  {
    tool: "Codex",
    role: "代码推进",
    useCase: "前端项目生成、代码修改、调试、组件拆分和本地项目推进。",
    output: "可运行代码、组件结构、样式文件、构建检查和调试反馈。",
  },
  {
    tool: "秘塔 / Perplexity",
    role: "资料检索",
    useCase: "资料检索、信息核对、参考材料收集和早期调研。",
    output: "搜索线索、资料摘要、引用入口和事实核验结果。",
  },
  {
    tool: "Dify",
    role: "知识库问答搭建",
    useCase: "垂直资料整理、知识库导入、提示词边界、召回测试和公开WebApp发布。",
    output: "可体验的塔罗研习阁助手、知识库截图、问答样例和边界问题回答。",
  },
];

export const reportSnapshot: ReportSnapshot = {
  title: "20+款AI软件测评：面向AI应用产品助理岗位的工具适配分析",
  url: links.aiReport,
  summary:
    "围绕长文总结、项目包装、AI产品功能清单、AI边界说明等任务，比较不同AI产品在真实任务里的适配度、边界和分工方式。",
  coverImage: "/images/ai-report-cover.png",
  cover: {
    title: "20+款AI软件测评",
    subtitle: "面向AI应用产品助理岗位的工具适配分析",
    keywords: ["任务适配", "技术边界", "工具分工", "求职准备"],
    conclusion: "AI产品不是强弱关系，而是任务适配关系",
  },
  coreConclusion: "AI产品之间不是强弱关系，而是任务适配关系：选工具要看任务，不是看名气。",
  findings: [
    "通用AI助手适合信息整理、方案生成和求职材料打磨。",
    "AI搜索适合查资料和核验事实，应该放在调研与事实校验阶段。",
    "RAG/知识库适合基于固定资料回答问题，关键是资料质量和测试问题设计。",
    "AI编程和应用搭建工具适合Demo搭建、代码修改和MVP推进。",
    "项目包装任务中要警惕夸大和编造，作品集必须把已完成、进行中、待补强说清楚。",
  ],
  screenshots: [
    {
      title: "测试框架与任务设计",
      path: "/images/ai-report-method.png",
      alt: "AI产品横测测试框架截图",
      fallback: "待补截图：测试框架与任务设计",
    },
    {
      title: "产品对比与评分表",
      path: "/images/ai-report-comparison.png",
      alt: "AI产品对比评分表截图",
      fallback: "待补截图：产品对比与评分表",
    },
    {
      title: "工具协同工作流",
      path: "/images/ai-report-workflow.png",
      alt: "AI工具协同工作流截图",
      fallback: "待补截图：工具协同工作流",
    },
  ],
  abilities: [
    {
      title: "产品分析能力",
      detail: "能按任务场景对21款AI产品分类比较，不只给主观感受，而是拆成可复用评价维度。",
    },
    {
      title: "边界意识",
      detail: "能识别幻觉、夸大、错误引用、任务跑偏等风险，在项目包装中坚持不编造不夸大。",
    },
    {
      title: "工具协同能力",
      detail: "沉淀 ChatGPT、Claude、DeepSeek、Codex、秘塔、Dify 按任务分工的协作方式。",
    },
    {
      title: "结构化表达",
      detail: "21款产品×4类任务×7维度的测试框架，可迁移到竞品分析、产品体验和需求评审。",
    },
  ],
  testFramework: {
    tasks: ["长文总结", "项目包装", "AI产品功能清单", "AI边界说明"],
    categories: ["通用AI助手 8款", "AI搜索 2款", "RAG/知识库 3款", "Agent/智能体 2款", "AI编程/应用搭建 7款"],
    dimensions: ["任务完成度", "结构化能力", "可执行性", "边界意识", "事实可靠性", "交互成本", "差异化"],
  },
};

export const nextActions: NextAction[] = [
  {
    title: "把塔罗 App 补成完整项目案例",
    detail: "补目标用户、核心场景、架构图、AI调用链路、截图、演示视频、反馈和下一版优先级。",
  },
  {
    title: "把 Dify 知识库助手补成完整 RAG 案例",
    detail: "补资料来源、分段策略、提示词迭代、10条测试问题和命中/失败样例。",
  },
  {
    title: "整理 AI 横测证据包",
    detail: "补原始Prompt、输出样例、评分表和失败案例，让报告从“读后感”升级为“测试记录”。",
  },
  {
    title: "统一简历、作品集和自我介绍",
    detail: "所有材料都围绕AI应用产品助理：产品理解、AI工具协同、MVP交付、评估边界。",
  },
  {
    title: "准备面试讲述脚本",
    detail: "每个项目用2分钟讲清楚：问题、方案、AI怎么用、遇到什么坑、如何迭代。",
  },
];

export const contactItems = [
  { label: "邮箱", value: links.email },
  { label: "微信", value: links.wechat },
  { label: "GitHub / 作品链接", value: links.github },
  { label: "简历PDF", value: links.resumePdf },
];
