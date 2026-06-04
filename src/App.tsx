import { useEffect, useState } from "react";
import {
  ArrowUp,
  ArrowUpRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  Download,
  FileText,
  Github,
  Globe2,
  LayoutDashboard,
  Mail,
  MapPin,
  MessageCircle,
  PanelTop,
  Sparkles,
  UserRound,
} from "lucide-react";
import {
  aiApplicationSkills,
  capabilityMatrix,
  contactItems,
  experiences,
  heroProofs,
  links,
  nextActions,
  portfolioProofChecklist,
  profile,
  projects,
  reportSnapshot,
  tools,
  type Project,
} from "./data/portfolio";

const navItems = [
  { label: "作品", href: "#projects" },
  { label: "能力证据", href: "#proof" },
  { label: "经历迁移", href: "#experience" },
  { label: "30天计划", href: "#next" },
  { label: "联系", href: "#contact" },
];

const contactIconMap = {
  邮箱: Mail,
  微信: MessageCircle,
  "GitHub / 作品链接": Github,
  简历PDF: Download,
};

const projectIconMap = {
  "tarot-app": Sparkles,
  "ai-products-report": FileText,
  "tarot-dify-assistant": BookOpenCheck,
  "portfolio-site": LayoutDashboard,
};

function ProjectVisual({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  const Icon = projectIconMap[project.id as keyof typeof projectIconMap] ?? PanelTop;

  return (
    <div className="project-visual" data-project={project.id}>
      {!failed ? (
        <img src={project.image} alt={project.imageAlt} onError={() => setFailed(true)} loading="lazy" />
      ) : (
        <div className="visual-fallback">
          <Icon size={28} aria-hidden="true" />
          <span>{project.label}</span>
          <strong>{project.imageFallback}</strong>
          <small>{project.tags.slice(0, 4).join(" / ")}</small>
        </div>
      )}
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  if (project.links.length === 0) return null;

  return (
    <div className="case-links">
      {project.links.map((link) => (
        <a
          className={link.placeholder ? "text-link muted-link" : "text-link"}
          href={link.href}
          key={link.label}
          aria-disabled={link.placeholder}
          target={link.placeholder ? undefined : "_blank"}
          rel={link.placeholder ? undefined : "noreferrer"}
        >
          {link.label}
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

function ProjectScreenshots({ project }: { project: Project }) {
  if (!project.screenshots?.length) return null;

  return (
    <div className="case-screenshots" aria-label={`${project.title}截图证据`}>
      <span>截图证据</span>
      <div>
        {project.screenshots.map((shot) => (
          <figure key={shot.path}>
            <img src={shot.path} alt={shot.alt} loading="lazy" />
            <figcaption>{shot.title}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = projectIconMap[project.id as keyof typeof projectIconMap] ?? PanelTop;

  return (
    <article className="project-card">
      <ProjectVisual project={project} />
      <div className="project-card-body">
        <div className="case-kicker">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{project.label}</span>
          <strong>{project.status}</strong>
        </div>
        <h3>
          <Icon size={21} aria-hidden="true" />
          {project.title}
        </h3>
        <p className="project-why">{project.why}</p>

        <div className="project-evidence">
          <div>
            <span>我做了什么</span>
            <p>{project.did}</p>
          </div>
          <div>
            <span>现在完成到哪里</span>
            <p>{project.progress}</p>
          </div>
        </div>

        <div className="tag-row" aria-label={`${project.title}能力标签`}>
          {project.proves.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="project-next">
          <span>下一步补强</span>
          <p>{project.next}</p>
        </div>

        <ProjectScreenshots project={project} />
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

function ReportBrief() {
  return (
    <article className="report-brief" aria-labelledby="report-brief-title">
      <div className="report-copy">
        <p className="eyebrow">Research Method</p>
        <h3 id="report-brief-title">{reportSnapshot.title}</h3>
        <p>{reportSnapshot.summary}</p>
        <div className="report-conclusion">
          <span>核心结论</span>
          <strong>{reportSnapshot.coreConclusion}</strong>
        </div>
        <a className="button secondary" href={reportSnapshot.url} target="_blank" rel="noreferrer">
          查看Notion全文
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>

      <div className="report-framework">
        <div>
          <strong>4类测试任务</strong>
          <div className="mini-tag-row">
            {reportSnapshot.testFramework.tasks.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div>
          <strong>产品范围</strong>
          <div className="mini-tag-row">
            {reportSnapshot.testFramework.categories.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div>
          <strong>7个评价维度</strong>
          <div className="mini-tag-row">
            {reportSnapshot.testFramework.dimensions.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function ProofSection() {
  return (
    <section className="section proof-section" id="proof" aria-labelledby="proof-title">
      <div className="section-heading">
        <p className="eyebrow">Role Fit</p>
        <h2 id="proof-title">招聘方关心的能力，分别对应哪些证据</h2>
        <p>这里不堆“我会什么”，而是把能力放回可检查的作品和下一步补强动作里。</p>
      </div>

      <div className="capability-list">
        {capabilityMatrix.map((item, index) => (
          <article className="capability-item" key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{item.title}</h3>
              <strong>{item.target}</strong>
            </div>
            <p>{item.evidence}</p>
            <p>{item.nextProof}</p>
          </article>
        ))}
      </div>

      <div className="proof-grid">
        <section aria-label="AI应用能力栈">
          <h3>AI应用能力栈</h3>
          <div className="ai-skill-grid">
            {aiApplicationSkills.map((skill) => (
              <article className="ai-skill-card" key={skill.title}>
                <div>
                  <strong>{skill.title}</strong>
                  <span>{skill.status}</span>
                </div>
                <p>{skill.evidence}</p>
                <small>{skill.next}</small>
              </article>
            ))}
          </div>
        </section>

        <section aria-label="求职证据包">
          <h3>求职证据包状态</h3>
          <div className="proof-checklist">
            {portfolioProofChecklist.map((item) => (
              <article className="proof-item" data-status={item.status} key={item.item}>
                <div>
                  <strong>{item.item}</strong>
                  <span>{item.status}</span>
                </div>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="workflow-panel" aria-labelledby="workflow-title">
        <div>
          <p className="eyebrow">AI Workflow</p>
          <h3 id="workflow-title">工具流按任务分工，而不是堆工具名</h3>
        </div>
        <div className="tool-board">
          {tools.map((tool) => (
            <article className="tool-row" key={tool.tool}>
              <div>
                <span>{tool.role}</span>
                <h4>{tool.tool}</h4>
              </div>
              <p>{tool.useCase}</p>
              <strong>{tool.output}</strong>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

export function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "proof", "experience", "next", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      setShowBackToTop(window.scrollY > 520);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="回到首页">
          <span className="brand-mark">AI</span>
          <span>
            <strong>{profile.name} · AI应用作品集</strong>
            <small>{profile.location}</small>
          </span>
        </a>
        <nav className="nav" aria-label="主导航">
          {navItems.map((item) => (
            <a
              href={item.href}
              key={item.href}
              className={activeSection === item.href.replace("#", "") ? "active" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <MapPin size={16} aria-hidden="true" />
              {profile.location}
            </p>
            <h1>{profile.headline}</h1>
            <p className="hero-summary">{profile.summary}</p>

            <div className="role-strip" aria-label="目标岗位">
              <span>目标岗位</span>
              <div>
                {profile.targetRoles.map((role) => (
                  <strong key={role}>{role}</strong>
                ))}
              </div>
            </div>

            <div className="positioning-note">
              <span>一句话定位</span>
              <p>{profile.positioning}</p>
            </div>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                <BriefcaseBusiness size={18} aria-hidden="true" />
                查看四个作品
              </a>
              <a className="button secondary" href="#contact">
                <Mail size={18} aria-hidden="true" />
                简历 / 联系方式
              </a>
            </div>
          </div>

          <aside className="evidence-panel" aria-label={profile.proofIntro}>
            <div className="panel-heading">
              <span>{profile.proofIntro}</span>
              <h2>先让招聘方知道该看什么</h2>
            </div>
            <ol className="evidence-list">
              {heroProofs.map((item, index) => (
                <li key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </section>

        <section className="section projects-section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <p className="eyebrow">Portfolio</p>
            <h2 id="projects-title">四个展示物：从可体验产品到分析文档</h2>
            <p>
              阅读顺序建议：先点在线Demo和报告，再看每个项目的能力标签和待补证据。截图只放在对应项目下面，避免材料混在一起。
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard project={project} index={index} key={project.id} />
            ))}
          </div>

          <ReportBrief />
        </section>

        <ProofSection />

        <section className="section experience-section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <p className="eyebrow">Transfer</p>
            <h2 id="experience-title">过往经历如何迁移到 AI 产品助理工作</h2>
            <p>不把过往经历包装成夸张成果，只说明它们如何支撑用户理解、复杂交付和AI应用实践。</p>
          </div>
          <div className="transfer-timeline">
            {experiences.map((item, index) => (
              <article className="transfer-item" key={item.source}>
                <span className="timeline-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.source}</h3>
                  <p>{item.transfer}</p>
                  <strong>{item.productValue}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section next-section" id="next" aria-labelledby="next-title">
          <div className="section-heading">
            <p className="eyebrow">First 30 Days</p>
            <h2 id="next-title">入职前30天，我会优先补齐这些可交付物</h2>
            <p>按初级AI产品 / 产品助理的合理边界来写：把调研、需求、原型、测试和复盘推进成可复用材料。</p>
          </div>
          <div className="next-layout">
            <div className="next-summary">
              <Sparkles size={22} aria-hidden="true" />
              <h3>重点不是夸张承诺，而是把信息整理清楚，把小原型跑起来。</h3>
              <p>这些动作能直接补强当前作品集，也能迁移到团队里的产品助理工作。</p>
            </div>
            <ol className="next-list">
              {nextActions.map((item) => (
                <li key={item.title}>
                  <BadgeCheck size={18} aria-hidden="true" />
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section about-contact-section" id="contact" aria-labelledby="contact-title">
          <div className="about-contact-grid">
            <article className="about-card">
              <p className="eyebrow">About</p>
              <h2>关于我</h2>
              <p>
                我的本科专业是土木工程，过往经历包括用户运营和玻璃幕墙建模设计。当前转型方向是AI应用产品、AI产品助理、AI应用搭建和AI产品运营。
              </p>
              <p>
                目前我用作品集证明三件事：能分析AI产品，能借助AI工具推进MVP，能把过往用户理解和复杂交付经验迁移到产品工作里。
              </p>
            </article>

            <article className="contact-card">
              <p className="eyebrow">Contact</p>
              <h2 id="contact-title">简历与联系</h2>
              <p>{profile.contactLine}</p>
              <div className="contact-list">
                {contactItems
                  .filter((item) => item.value && item.value !== "" && !item.value.includes("待补充"))
                  .map((item) => {
                    const Icon = contactIconMap[item.label as keyof typeof contactIconMap] ?? UserRound;
                    return (
                      <div className="contact-item" key={item.label}>
                        <Icon size={18} aria-hidden="true" />
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                      </div>
                    );
                  })}
              </div>
              <div className="contact-actions">
                <a className="button primary" href={links.resumePdf} download>
                  <Download size={18} aria-hidden="true" />
                  下载简历PDF
                </a>
                <a className="button secondary" href={links.github} target="_blank" rel="noreferrer">
                  <Globe2 size={18} aria-hidden="true" />
                  GitHub / 作品链接
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>

      {showBackToTop && (
        <button type="button" className="back-to-top" onClick={scrollToTop} aria-label="返回顶部">
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}
