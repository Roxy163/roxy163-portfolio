// 用户以后主要改这里：
// 1. 修改个人介绍、目标岗位、城市和联系方式：profile / links
// 2. 修改项目内容、图片路径、Demo/GitHub/报告链接：projects
// 3. 修改AI工具工作流、经历迁移和30天计划：tools / experiences / nextActions

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
};

export const links = {
  resumePdf: "/resume.pdf",
  email: "ry-dakeai@foxmail.com",
  wechat: "【待补充】",
  github: "【待补充】",
  portfolio: "【待补充】",
  aiReport:
    "https://www.notion.so/20-AI-AI-360efea89c2e8025a1fad69c3ad9f9ba?source=copy_link",
};

export const profile = {
  name: "Roxy163",
  location: "武汉本地或远程",
  targetRoles: ["AI应用产品", "AI产品助理", "AI应用搭建", "AI产品运营"],
  headline: "我用AI把想法做成可运行MVP，正在转向AI应用产品",
  positioning: "相信动手比空想有用，用AI把想法变成产品的转行者",
  summary:
    "本科土木工程，做过用户运营和玻璃幕墙建模设计。现在把用户反馈理解、复杂项目交付和AI工具协同，转化成可展示的AI应用产品作品。",
  proofIntro: "目前最能证明我的三件事",
  contactLine: "欢迎联系我交流AI应用产品、AI应用搭建或产品助理相关机会。",
};

export const heroProofs = [
  {
    title: "塔罗记录App MVP",
    detail: "已具备基础功能，使用AI协同生成代码，并用Supabase实现登录功能。",
  },
  {
    title: "20+款AI产品横测",
    detail: "围绕具体任务体验20+款AI产品，形成公开可读的产品横测报告和工具分工沉淀。",
  },
  {
    title: "Coze/RAG/Agent作品",
    detail: "计划中或进行中，用于补齐知识库问答、Agent和工作流设计案例。",
  },
];

export const projects: Project[] = [
  {
    id: "tarot-app",
    title: "网页端塔罗记录App",
    label: "Featured Case",
    status: "MVP已具备基础功能，尚未正式上线",
    featured: true,
    image: "/images/tarot-app-placeholder.png",
    imageFallback: "图片待补充：塔罗记录App截图",
    imageAlt: "网页端塔罗记录App截图占位",
    why: "想验证一个个人想法，能否借助AI工具从需求描述推进到可运行的网页端MVP。",
    did: "使用AI协同生成代码，并用Supabase实现登录功能，完成基础功能MVP。",
    progress: "当前已经具备基础功能，但尚未正式上线；截图、Demo、GitHub和项目复盘仍需补充。",
    proves: ["AI协同开发", "从想法到MVP", "基础登录能力接入", "持续迭代意识"],
    missing: ["真实项目截图", "Demo链接", "GitHub链接", "项目复盘"],
    next: "补充功能范围、关键页面截图、遇到的问题和下一版计划。",
    tags: ["MVP搭建", "AI编程", "Supabase", "网页端应用"],
    links: [
      { label: "Demo【待补充】", href: "#", placeholder: true },
      { label: "GitHub【待补充】", href: "#", placeholder: true },
      { label: "项目复盘【待补充】", href: "#", placeholder: true },
    ],
  },
  {
    id: "ai-products-report",
    title: "20+款AI产品体验横测报告",
    label: "Product Analysis",
    status: "报告已公开在Notion",
    image: "/images/ai-products-report-placeholder.png",
    imageFallback: "图片待补充：AI产品横测报告截图",
    imageAlt: "20款以上AI产品体验横测报告截图占位",
    why: "希望判断不同AI产品在具体任务中的适配度、优势边界和工具分工，而不是只停留在功能介绍。",
    did: "体验20+款AI产品，围绕长文总结、项目包装、AI产品功能清单、AI边界说明等任务进行横向比较。",
    progress: "已形成公开报告，覆盖20+款AI产品、多类测试任务和工具分工沉淀。",
    proves: ["产品体验分析", "任务适配判断", "工具边界意识", "结构化表达"],
    missing: ["报告截图", "典型输出截图", "原始Prompt"],
    next: "补充3-5组典型输出截图和原始Prompt，让测试过程更容易被招聘方验证。",
    tags: ["产品分析", "AI工具横测", "任务适配", "报告沉淀"],
    links: [
      { label: "打开Notion报告", href: links.aiReport },
      { label: "对比案例【待补充】", href: "#", placeholder: true },
    ],
  },
  {
    id: "coze-rag-agent",
    title: "Coze / RAG / Agent作品",
    label: "In Progress",
    status: "计划中 / 进行中",
    image: "/images/coze-agent-placeholder.png",
    imageFallback: "图片待补充：Coze/RAG/Agent原型截图",
    imageAlt: "Coze RAG Agent作品截图占位",
    why: "补齐知识库问答、Agent和工作流设计类作品，让AI应用搭建能力有更直接的演示入口。",
    did: "当前处于方向选择和原型规划阶段，候选方向包括AI求职助手、AI产品知识库Bot、垂直行业知识库问答助手。",
    progress: "计划中或进行中，尚不能写成已完成项目。",
    proves: ["RAG意识", "Agent方向探索", "知识库问答设计", "工作流拆解"],
    missing: ["需求文档", "知识库材料", "流程图/截图", "Demo链接"],
    next: "优先确定一个小场景，完成可演示Bot或知识库问答原型。",
    tags: ["Coze", "RAG", "Agent", "知识库问答"],
    links: [
      { label: "Demo【待补充】", href: "#", placeholder: true },
      { label: "流程图【待补充】", href: "#", placeholder: true },
    ],
  },
];

export const experiences: Experience[] = [
  {
    source: "用户运营",
    transfer: "接触用户反馈、需求理解和运营转化。",
    productValue: "能从使用场景出发，把反馈整理成问题、需求和可验证假设。",
  },
  {
    source: "玻璃幕墙建模设计",
    transfer: "经历复杂项目交付、细节把控和多方协作。",
    productValue: "能适应反复修改和跨角色沟通，重视交付细节与版本推进。",
  },
  {
    source: "AI应用实践",
    transfer: "使用ChatGPT、Claude、DeepSeek、Codex、秘塔、Coze等工具完成调研、搭建和复盘。",
    productValue: "能把AI工具放进具体工作流，推进产品分析、MVP搭建和材料沉淀。",
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
    role: "长文整理",
    useCase: "长文本理解、报告整理、产品体验材料归纳和复杂逻辑梳理。",
    output: "长文总结、对比维度、报告大纲和分析段落。",
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
    output: "可运行代码、组件结构、样式文件和调试反馈。",
  },
  {
    tool: "秘塔",
    role: "资料检索",
    useCase: "资料检索、信息核对、参考材料收集和早期调研。",
    output: "搜索线索、资料摘要和引用入口。",
  },
  {
    tool: "Coze",
    role: "原型搭建",
    useCase: "Bot原型、知识库问答、工作流编排和Agent方向探索。",
    output: "可演示Bot、流程节点和知识库应用雏形。",
  },
];

export const reportSnapshot: ReportSnapshot = {
  title: "20+款AI产品体验横测：面向AI应用产品助理岗位的工具适配分析",
  url: links.aiReport,
  summary:
    "围绕长文总结、项目包装、AI产品功能清单、AI边界说明等任务，比较不同AI产品在真实任务里的适配度、边界和分工方式。",
  coverImage: "/images/ai-report-cover.png",
  cover: {
    title: "20+款AI产品体验横测",
    subtitle: "面向AI应用产品助理岗位的工具适配分析",
    keywords: ["任务适配", "技术边界", "工具分工", "求职准备"],
    conclusion: "AI产品不是强弱关系，而是任务适配关系",
  },
  coreConclusion: "AI产品不是强弱关系，而是任务适配关系",
  findings: [
    "AI产品不是强弱关系，而是任务适配关系",
    "不同类型AI产品应该按任务分工使用",
    "AI产品经理要能识别工具边界和失败场景",
  ],
  screenshots: [
    {
      title: "测试方法",
      path: "/images/ai-report-method.png",
      alt: "AI产品横测测试方法表截图",
      fallback: "测试方法截图待补充",
    },
    {
      title: "产品对比",
      path: "/images/ai-report-comparison.png",
      alt: "AI产品横测产品对比表截图",
      fallback: "产品对比截图待补充",
    },
    {
      title: "工具工作流",
      path: "/images/ai-report-workflow.png",
      alt: "6个AI工具工作流表截图",
      fallback: "工具工作流截图待补充",
    },
  ],
  abilities: [
    {
      title: "产品分析能力",
      detail: "能按任务场景比较AI产品",
    },
    {
      title: "边界意识",
      detail: "能识别幻觉、夸大、跑偏等风险",
    },
    {
      title: "工具协同能力",
      detail: "能沉淀6个AI工具工作流",
    },
  ],
};

export const nextActions: NextAction[] = [
  {
    title: "梳理AI产品竞品与功能差异",
    detail: "围绕目标任务整理功能清单、适用场景和体验差异，形成轻量对比表。",
  },
  {
    title: "整理用户反馈并转成需求清单",
    detail: "把反馈归类为问题、场景、影响范围和可能方案，辅助产品判断优先级。",
  },
  {
    title: "用Coze搭建简单Bot或知识库问答原型",
    detail: "先做小场景验证，补齐意图、知识库、流程节点和测试问题。",
  },
  {
    title: "用AI工具辅助产出产品材料",
    detail: "协助完成PRD草稿、原型说明、测试用例、运营材料或项目复盘。",
  },
  {
    title: "协助推进MVP验证和复盘",
    detail: "记录验证目标、用户反馈、问题清单和下一版迭代建议。",
  },
];

export const contactItems = [
  { label: "邮箱", value: links.email },
  { label: "微信", value: links.wechat },
  { label: "GitHub / 作品链接", value: links.github },
  { label: "简历PDF", value: links.resumePdf },
];
