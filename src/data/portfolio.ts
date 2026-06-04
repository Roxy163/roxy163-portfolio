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
  aiReport:
    "https://www.notion.so/20-AI-AI-360efea89c2e8025a1fad69c3ad9f9ba?source=copy_link",
};

export const profile = {
  name: "Roxy163",
  location: "武汉本地或远程",
  targetRoles: ["AI应用产品助理", "AI应用搭建", "AI产品运营", "初级AI产品工程"],
  headline: "我把用户问题拆成AI应用，并做成可运行MVP",
  positioning: "不是纯算法背景，而是产品理解 + AI工具协同 + 前端交付的AI应用实践者",
  summary:
    "本科土木工程，做过用户运营和玻璃幕墙建模设计。现在用已上线的AI应用、AI产品横测报告和RAG/Agent原型计划，证明自己能把真实场景拆成可演示、可复盘、可迭代的AI产品。",
  proofIntro: "目前最能证明我的三件事",
  contactLine: "欢迎联系我交流AI应用产品、AI应用搭建、产品助理或AI产品运营相关机会。",
};

export const heroProofs = [
  {
    title: "已上线AI应用MVP",
    detail:
      "塔罗研习阁已支持在线体验、访客模式、注册用户、云端数据同步、AI识图与解读，能展示从想法到上线的闭环。",
  },
  {
    title: "可验证的AI产品分析",
    detail:
      "横测21款AI产品，按4类真实任务和7个评价维度比较，沉淀出工具适配、边界识别和协同工作流。",
  },
  {
    title: "清楚的转型路径",
    detail:
      "把用户运营的反馈理解、幕墙建模的复杂交付经验，迁移到AI应用产品助理和AI应用搭建工作里。",
  },
];

export const capabilityMatrix: CapabilityProof[] = [
  {
    title: "清晰定位",
    target: "AI应用产品 / 产品助理 / 应用搭建",
    evidence:
      "首页直接说明目标岗位、转型路径和一句话定位：用AI把用户问题做成可运行MVP。",
    nextProof:
      "简历、自我介绍、GitHub README保持同一条主线，避免同时包装成算法、设计、运营多个方向。",
  },
  {
    title: "AI应用能力",
    target: "Prompt、模型API、RAG、Agent、评估与边界",
    evidence:
      "塔罗App已接入Gemini API，包含AI识图和解读；API通过Netlify Function代理，横测报告覆盖RAG/Agent/AI编程工具。",
    nextProof:
      "补一个垂直行业RAG问答Demo，并放出测试问题、失败案例和输出评估表。",
  },
  {
    title: "产品能力",
    target: "用户、痛点、MVP验证、反馈转需求",
    evidence:
      "每个项目都写清楚为什么做、做了什么、完成度、证明能力和下一步，不只罗列技术名词。",
    nextProof:
      "为塔罗App补一页复盘：目标用户、核心场景、用户反馈、需求优先级和下一版迭代。",
  },
  {
    title: "工程交付能力",
    target: "React、TypeScript、Firebase、Netlify、部署安全",
    evidence:
      "塔罗App使用React/TypeScript/Firebase/Netlify；已做Auth、Firestore、Storage和Gemini代理层。",
    nextProof:
      "补架构图、部署说明、构建记录和3分钟演示视频，让工程能力更容易被招聘方检查。",
  },
  {
    title: "作品包装能力",
    target: "在线Demo、源码、截图、Prompt、评估、迭代记录",
    evidence:
      "作品集已经集中展示在线Demo、源码、Notion报告和目标岗位证据链。",
    nextProof:
      "把截图、原始Prompt、失败样例、评估表和用户反馈做成可公开查看的证据包。",
  },
];

export const aiApplicationSkills: AISkill[] = [
  {
    title: "Prompt设计与任务拆解",
    status: "已具备",
    evidence: "AI产品横测围绕长文总结、项目包装、功能清单、边界说明等任务做对比。",
    next: "补充3组原始Prompt、模型输出和人工修订记录。",
  },
  {
    title: "模型API与代理层",
    status: "已具备",
    evidence: "塔罗App通过Gemini API完成图像识别和智能解读，并使用Netlify Function保护密钥。",
    next: "把代理层的限流、CORS、错误处理写进README。",
  },
  {
    title: "RAG / 知识库问答",
    status: "进行中",
    evidence: "横测报告已比较Dify、FastGPT、Coze等知识库产品，准备结合幕墙/AI产品资料做垂直问答。",
    next: "先做一个小知识库，准备10条标准测试问题和命中/未命中样例。",
  },
  {
    title: "Agent / 工作流编排",
    status: "进行中",
    evidence: "已梳理Coze原型方向，理解Bot、意图、流程节点和知识库的组合方式。",
    next: "补一个能演示的Coze Bot，展示任务流、节点截图和失败兜底逻辑。",
  },
  {
    title: "输出评估与安全边界",
    status: "已具备",
    evidence: "横测报告记录幻觉、夸大、错误引用、任务跑偏等风险，并坚持项目包装不编造。",
    next: "把评估维度做成公开表格：事实可靠性、可执行性、边界意识、交互成本。",
  },
  {
    title: "部署与工程协同",
    status: "已具备",
    evidence: "作品集和塔罗App均已上线，能使用Codex协助本地开发、调试、构建和页面迭代。",
    next: "在仓库中补齐README、环境变量示例、部署步骤和常见问题。",
  },
];

export const projects: Project[] = [
  {
    id: "tarot-app",
    title: "塔罗研习阁：AI辅助自我探索记录工具",
    label: "Featured Case",
    status: "已上线，支持访客模式和注册用户云端同步",
    featured: true,
    image: "/images/tarot-app-placeholder.png",
    imageFallback: "图片待补充：塔罗研习阁截图",
    imageAlt: "塔罗研习阁App截图占位",
    why:
      "情绪记录和自我复盘的启动成本较高，年轻用户需要一个更轻、更愿意打开的入口。塔罗牌只是交互载体，核心是用AI解读降低表达和整理成本。",
    did:
      "从0到1完成MVP：需求定义、功能拆解、React/TypeScript前端、Firebase Auth/Firestore/Storage、Netlify部署、Gemini API识图与解读。AI调用不直接暴露在前端，而是通过Netlify Function代理，并加入CORS、鉴权和基础限流。",
    progress:
      "已上线可体验。当前支持访客模式、注册登录、云端数据同步、AI解读、情绪记录、牌义注解、灵数设置和移动端适配。",
    proves: [
      "0→1产品闭环",
      "AI模型API接入",
      "Firebase全栈",
      "API安全意识",
      "移动端交付",
      "MVP迭代意识",
    ],
    missing: ["产品架构图", "3分钟演示视频", "用户反馈→需求清单", "AI输出评估样例"],
    next:
      "补一页项目复盘：目标用户、核心场景、验证方式、用户反馈、下一版优先级；同时补架构图和演示视频。",
    tags: ["React", "TypeScript", "Firebase", "Gemini API", "Netlify", "AI产品MVP"],
    links: [
      { label: "在线体验", href: "https://tarot-pavilion.netlify.app" },
      { label: "源码", href: "https://github.com/Roxy163/tarot-app" },
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
    why:
      "AI产品岗位不只要求会用工具，还要能判断不同产品在具体任务中的适配度、优势边界和失败场景。",
    did:
      "体验21款AI产品（通用助手、AI搜索、RAG/知识库、Agent、AI编程），围绕长文总结、项目包装、功能清单、AI边界说明4个真实任务做横向比较，并按7个维度评价。",
    progress:
      "已形成公开报告，覆盖21款产品×4类任务×7维度评价，并沉淀出ChatGPT/Claude/DeepSeek/Codex/秘塔/Coze的协同工作流。",
    proves: ["产品体验分析", "任务适配判断", "工具边界识别", "结构化报告", "评估框架设计"],
    missing: ["典型任务对比截图", "原始Prompt", "失败输出样例", "公开评分表"],
    next: "补充3-5组典型任务的Prompt、输出样例、失败案例和评分截图，让测试过程更容易被验证。",
    tags: ["产品分析", "21款AI横测", "任务适配", "7维评价", "工具工作流"],
    links: [{ label: "查看Notion完整报告", href: links.aiReport }],
  },
  {
    id: "coze-rag-agent",
    title: "垂直行业RAG / Coze Agent原型",
    label: "In Progress",
    status: "进行中：优先做小场景可演示Demo",
    image: "/images/coze-agent-placeholder.png",
    imageFallback: "图片待补充：RAG/Agent原型截图",
    imageAlt: "Coze RAG Agent作品截图占位",
    why:
      "补齐知识库问答、Agent和工作流设计类作品，让AI应用搭建能力有更直接的演示入口，也把过往幕墙建模经验转成差异化场景。",
    did:
      "已确定优先方向：从小知识库问答开始，围绕资料整理、问题命中、无法回答时的兜底表达、测试问题集和输出评估表搭建。",
    progress:
      "处于原型规划和资料准备阶段，暂不包装成已完成项目。作品集会持续展示需求文档、流程图、测试问题和Demo链接。",
    proves: ["RAG意识", "Agent方向探索", "垂直场景选择", "知识库问答设计", "工作流拆解"],
    missing: ["需求文档", "知识库材料", "流程图/节点截图", "Demo链接", "测试问题集"],
    next:
      "先完成一个可演示Bot：上传小规模资料，设计10条测试问题，记录命中、误答、拒答和下一版优化。",
    tags: ["Coze", "RAG", "Agent", "知识库问答", "垂直行业AI"],
    links: [],
  },
];

export const portfolioProofChecklist: ProofChecklistItem[] = [
  {
    item: "在线Demo",
    status: "已具备",
    detail: "塔罗研习阁和个人作品集均已部署到公网，可直接发给招聘方体验。",
  },
  {
    item: "源码仓库",
    status: "已具备",
    detail: "GitHub已放出项目入口，后续要补更清晰的README和项目复盘链接。",
  },
  {
    item: "项目截图",
    status: "待补强",
    detail: "作品集已预留截图位，需要补首页、AI解读、登录同步、移动端等关键截图。",
  },
  {
    item: "架构图 / 流程图",
    status: "待补强",
    detail: "建议补塔罗App技术架构图、AI调用链路图、RAG原型流程图。",
  },
  {
    item: "Prompt与输出样例",
    status: "待补强",
    detail: "补原始Prompt、模型输出、人工修订和最终页面效果，证明不是只会“问AI”。",
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
    transfer: "使用ChatGPT、Claude、DeepSeek、Codex、秘塔、Coze等工具完成调研、搭建和复盘。",
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
    tool: "Coze",
    role: "原型搭建",
    useCase: "Bot原型、知识库问答、工作流编排和Agent方向探索。",
    output: "可演示Bot、流程节点、知识库应用雏形和测试问题集。",
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
  coreConclusion: "AI产品之间不是强弱关系，而是任务适配关系：选工具要看任务，不是看名气",
  findings: [
    "通用AI助手（ChatGPT/Claude/Codex）最适合信息整理、方案生成和求职材料打磨",
    "AI搜索（秘塔/Perplexity）适合查资料和核验事实，适合放在调研与事实校验阶段",
    "RAG/知识库（Dify/FastGPT/Coze）适合基于固定资料回答问题，关键是资料质量和测试问题设计",
    "Agent/编程工具（Codex/Replit/Bolt）适合Demo搭建、代码修改和MVP推进",
    "项目包装任务中要警惕夸大和编造，作品集必须把已完成、进行中、待补强说清楚",
  ],
  screenshots: [
    {
      title: "测试框架与任务设计",
      path: "/images/ai-report-method.png",
      alt: "AI产品横测测试框架截图",
      fallback: "图片待补充：测试框架与任务设计",
    },
    {
      title: "产品对比与评分表",
      path: "/images/ai-report-comparison.png",
      alt: "AI产品对比评分表截图",
      fallback: "图片待补充：产品对比与评分表",
    },
    {
      title: "工具协同工作流",
      path: "/images/ai-report-workflow.png",
      alt: "AI工具协同工作流截图",
      fallback: "图片待补充：工具协同工作流",
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
      detail: "沉淀ChatGPT、Claude、DeepSeek、Codex、秘塔、Coze按任务分工的协作方式。",
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
    title: "把塔罗App补成完整项目案例",
    detail: "补目标用户、核心场景、架构图、AI调用链路、截图、演示视频、反馈和下一版优先级。",
  },
  {
    title: "完成一个垂直行业RAG / Coze Demo",
    detail: "选择小知识库场景，准备资料、意图、流程节点、10条测试问题和命中/失败样例。",
  },
  {
    title: "整理AI横测证据包",
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
