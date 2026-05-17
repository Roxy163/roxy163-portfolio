import { useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Download,
  Github,
  Mail,
  MapPin,
  MessageCircle,
  PanelTop,
  Sparkles,
  UserRound,
} from "lucide-react";
import {
  contactItems,
  experiences,
  heroProofs,
  links,
  nextActions,
  profile,
  projects,
  reportSnapshot,
  tools,
  type Project,
} from "./data/portfolio";

const navItems = [
  { label: "作品", href: "#projects" },
  { label: "经历迁移", href: "#experience" },
  { label: "工具流", href: "#workflow" },
  { label: "30天", href: "#next" },
  { label: "联系", href: "#contact" },
];

const contactIconMap = {
  邮箱: Mail,
  微信: MessageCircle,
  "GitHub / 作品链接": Github,
  简历PDF: Download,
};

function ProjectVisual({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="project-visual">
      {!failed ? (
        <img src={project.image} alt={project.imageAlt} onError={() => setFailed(true)} />
      ) : (
        <div className="image-fallback">
          <PanelTop size={26} aria-hidden="true" />
          <strong>{project.imageFallback}</strong>
          <span>{project.image}</span>
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

function ReportImage({
  path,
  alt,
  fallback,
  variant = "screenshot",
}: {
  path: string;
  alt: string;
  fallback: string;
  variant?: "cover" | "screenshot";
}) {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return <img src={path} alt={alt} onError={() => setFailed(true)} />;
  }

  if (variant === "cover") {
    return (
      <div className="report-cover-placeholder">
        <span>Research Case</span>
        <h4>{reportSnapshot.cover.title}</h4>
        <p>{reportSnapshot.cover.subtitle}</p>
        <div>
          {reportSnapshot.cover.keywords.map((keyword) => (
            <strong key={keyword}>{keyword}</strong>
          ))}
        </div>
        <em>{reportSnapshot.cover.conclusion}</em>
      </div>
    );
  }

  return (
    <div className="report-shot-placeholder">
      <PanelTop size={22} aria-hidden="true" />
      <strong>{fallback}</strong>
      <span>{path}</span>
    </div>
  );
}

function FeaturedCase({ project }: { project: Project }) {
  return (
    <article className="featured-case">
      <div className="case-content">
        <div className="case-kicker">
          <span>{project.label}</span>
          <span>{project.status}</span>
        </div>
        <h3>{project.title}</h3>
        <div className="case-grid">
          <div>
            <h4>我为什么做</h4>
            <p>{project.why}</p>
          </div>
          <div>
            <h4>我做了什么</h4>
            <p>{project.did}</p>
          </div>
          <div>
            <h4>当前完成到哪里</h4>
            <p>{project.progress}</p>
          </div>
          <div>
            <h4>下一步补什么</h4>
            <p>{project.next}</p>
          </div>
        </div>
        <div className="case-proof">
          <h4>这个作品证明</h4>
          <div className="tag-row">
            {project.proves.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <ProjectLinks project={project} />
      </div>
      <ProjectVisual project={project} />
    </article>
  );
}

function CompactCase({ project }: { project: Project }) {
  return (
    <article className="compact-case">
      <ProjectVisual project={project} />
      <div className="compact-case-body">
        <div className="case-kicker">
          <span>{project.label}</span>
          <span>{project.status}</span>
        </div>
        <h3>{project.title}</h3>
        <dl className="case-notes">
          <div>
            <dt>为什么做</dt>
            <dd>{project.why}</dd>
          </div>
          <div>
            <dt>做了什么</dt>
            <dd>{project.did}</dd>
          </div>
          <div>
            <dt>证明能力</dt>
            <dd>{project.proves.join(" / ")}</dd>
          </div>
          <div>
            <dt>待补充</dt>
            <dd>{project.missing.join(" / ")}</dd>
          </div>
        </dl>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export function App() {
  const [featuredProject, ...secondaryProjects] = projects;

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="回到首页">
          <span className="brand-mark">AI</span>
          <span>
            <strong>{profile.name} · 产品作品集</strong>
            <small>{profile.location}</small>
          </span>
        </a>
        <nav className="nav" aria-label="主导航">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
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
                查看作品集
              </a>
              <a className="button secondary" href="#contact">
                <Mail size={18} aria-hidden="true" />
                查看简历 / 联系我
              </a>
            </div>
          </div>

          <aside className="evidence-panel" aria-label={profile.proofIntro}>
            <div className="panel-heading">
              <span>{profile.proofIntro}</span>
              <h2>不是口号，是目前能展示的证据</h2>
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
            <h2 id="projects-title">代表作品：先看我做过什么</h2>
            <p>
              作品卡片按产品案例组织：为什么做、做了什么、完成到哪里、证明什么能力、下一步补什么。
            </p>
          </div>

          <FeaturedCase project={featuredProject} />
          <div className="compact-case-grid">
            {secondaryProjects.map((project) => (
              <CompactCase project={project} key={project.id} />
            ))}
          </div>

          <article className="report-snapshot" aria-labelledby="report-snapshot-title">
            <div className="report-main-card">
              <div className="report-main-copy">
                <p className="eyebrow">Research Report</p>
                <h3 id="report-snapshot-title">{reportSnapshot.title}</h3>
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
              <div className="report-cover">
                <ReportImage
                  path={reportSnapshot.coverImage}
                  alt={reportSnapshot.cover.title}
                  fallback={reportSnapshot.cover.title}
                  variant="cover"
                />
                <div className="test-framework" style={{ marginTop: "1rem" }}>
                  <div style={{ marginBottom: "0.75rem" }}>
                    <strong style={{ display: "block", marginBottom: "0.4rem", fontSize: "0.85rem" }}>测试任务</strong>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {reportSnapshot.testFramework.tasks.map(t => (
                        <span key={t} style={{ background: "#e8f0fe", padding: "0.2rem 0.6rem", borderRadius: "4px", fontSize: "0.8rem" }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginBottom: "0.75rem" }}>
                    <strong style={{ display: "block", marginBottom: "0.4rem", fontSize: "0.85rem" }}>产品分类</strong>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {reportSnapshot.testFramework.categories.map(c => (
                        <span key={c} style={{ background: "#e8f5e9", padding: "0.2rem 0.6rem", borderRadius: "4px", fontSize: "0.8rem" }}>{c}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <strong style={{ display: "block", marginBottom: "0.4rem", fontSize: "0.85rem" }}>评价维度</strong>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {reportSnapshot.testFramework.dimensions.map(d => (
                        <span key={d} style={{ background: "#fff3e0", padding: "0.2rem 0.6rem", borderRadius: "4px", fontSize: "0.8rem" }}>{d}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className="report-findings" aria-label="关键发现">
              <h4>关键发现</h4>
              <div>
                {reportSnapshot.findings.map((item, index) => (
                  <article key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </section>

            {reportSnapshot.screenshots.length > 0 && (
              <section className="report-screenshots" aria-label="证据截图区">
                <h4>证据截图区</h4>
                <div>
                  {reportSnapshot.screenshots.map((shot) => (
                    <article className="report-shot-card" key={shot.path}>
                      <div className="report-shot-media">
                        <ReportImage path={shot.path} alt={shot.alt} fallback={shot.fallback} />
                      </div>
                      <strong>{shot.title}</strong>
                    </article>
                  ))}
                </div>
              </section>
            )}

            <section className="report-abilities" aria-label="这份报告证明什么能力">
              <h4>这份报告证明什么能力</h4>
              <div>
                {reportSnapshot.abilities.map((item) => (
                  <article key={item.title}>
                    <strong>{item.title}</strong>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </section>
          </article>
        </section>

        <section className="section experience-section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <p className="eyebrow">Transfer</p>
            <h2 id="experience-title">我的能力如何从经历中迁移而来</h2>
            <p>不把过往经历包装成夸张成果，只说明它们如何支撑AI产品助理和AI应用搭建工作。</p>
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

        <section className="section workflow-section" id="workflow" aria-labelledby="workflow-title">
          <div className="section-heading">
            <p className="eyebrow">AI Workflow</p>
            <h2 id="workflow-title">AI工具工作流：按任务分工，而不是堆工具名</h2>
            <p>这些工具对应调研、拆解、搭建、复盘等不同工作阶段，后续可以继续补具体案例。</p>
          </div>
          <div className="tool-board">
            {tools.map((tool) => (
              <article className="tool-row" key={tool.tool}>
                <div>
                  <span>{tool.role}</span>
                  <h3>{tool.tool}</h3>
                </div>
                <p>{tool.useCase}</p>
                <strong>{tool.output}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="section next-section" id="next" aria-labelledby="next-title">
          <div className="section-heading">
            <p className="eyebrow">First 30 Days</p>
            <h2 id="next-title">我能在入职前30天交付什么</h2>
            <p>按初级AI产品 / 产品助理的合理边界来写：能帮团队把信息整理清楚，把小原型跑起来。</p>
          </div>
          <div className="next-layout">
            <div className="next-summary">
              <Sparkles size={22} aria-hidden="true" />
              <h3>我会优先做清楚、可复用、能被团队接着用的材料。</h3>
              <p>不承诺夸张结果，重点是把调研、需求、原型、测试和复盘推进成可交付物。</p>
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
                {contactItems.filter(item => item.value && item.value !== "" && !item.value.includes("待补充")).map((item) => {
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
                  <ArrowUpRight size={18} aria-hidden="true" />
                  GitHub
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
