import { type CSSProperties, useEffect, useRef, useState } from "react";
import {
  ArrowUp,
  ArrowUpRight,
  BookOpenCheck,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
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
  X,
  ZoomIn,
  PlayCircle,
} from "lucide-react";
import {
  capabilityMatrix,
  contactItems,
  heroProofs,
  links,
  profile,
  projects,
  type Project,
} from "./data/portfolio";

const navItems = [
  { label: "作品", href: "#projects" },
  { label: "能力", href: "#proof" },
  { label: "联系", href: "#contact" },
];

const contactIconMap = {
  邮箱: Mail,
  微信: MessageCircle,
  "GitHub / 作品链接": Github,
  简历Word: Download,
};

const projectIconMap = {
  "tarot-app": Sparkles,
  "ai-products-report": FileText,
  "tarot-dify-assistant": BookOpenCheck,
  "portfolio-site": LayoutDashboard,
};

const heroStats = [
  { value: "4", label: "个可打开作品", detail: "App / 报告 / 助手 / 作品集" },
  { value: "21", label: "款AI产品实测", detail: "从长文解读任务切入" },
  { value: "2", label: "个上线AI应用", detail: "塔罗 App 与 Dify 问答助手" },
];

type ProjectScreenshot = NonNullable<Project["screenshots"]>[number];
type LightboxState = {
  images: ProjectScreenshot[];
  index: number;
};

function ProjectVisual({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const Icon = projectIconMap[project.id as keyof typeof projectIconMap] ?? PanelTop;

  return (
    <div className="project-visual" data-project={project.id}>
      {!failed && project.image ? (
        <>
          {!loaded && (
            <div className="visual-loading">
              <Icon size={28} aria-hidden="true" />
              <span>加载中...</span>
            </div>
          )}
          <img
            src={project.image}
            alt={project.imageAlt}
            onError={() => setFailed(true)}
            onLoad={() => setLoaded(true)}
            loading="lazy"
            width={800}
            height={420}
          />
        </>
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

function ExpandableText({
  children,
  className,
  lines = 2,
}: {
  children: string;
  className?: string;
  lines?: number;
}) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const checkOverflow = () => {
      if (expanded) {
        setCanExpand(true);
        return;
      }

      setCanExpand(element.scrollHeight > element.clientHeight + 1);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [children, expanded, lines]);

  return (
    <div className="expandable-copy">
      <p
        className={`${className ?? ""} expandable-text${expanded ? " expanded" : ""}`.trim()}
        ref={textRef}
        style={{ "--line-count": lines } as CSSProperties}
      >
        {children}
      </p>
      {canExpand && (
        <button
          className="expand-toggle"
          type="button"
          onClick={() => setExpanded((current) => !current)}
        >
          {expanded ? "收起" : "展开"}
        </button>
      )}
    </div>
  );
}

function ImageLightbox({
  state,
  onStep,
  onClose,
}: {
  state: LightboxState | null;
  onStep: (direction: -1 | 1) => void;
  onClose: () => void;
}) {
  const touchStartX = useRef<number | null>(null);
  const image = state?.images[state.index] ?? null;
  const canStep = Boolean(state && state.images.length > 1);

  useEffect(() => {
    if (!state) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onStep(-1);
      if (event.key === "ArrowRight") onStep(1);
    };

    document.body.classList.add("has-lightbox");
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("has-lightbox");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [state, onClose, onStep]);

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(deltaX) < 42) return;
    onStep(deltaX > 0 ? -1 : 1);
  };

  if (!state || !image) return null;

  return (
    <div
      className="image-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={image.title}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0].clientX;
      }}
      onTouchEnd={handleTouchEnd}
    >
      <button className="lightbox-backdrop" type="button" onClick={onClose} aria-label="关闭预览" />
      <figure className="lightbox-content">
        <button className="lightbox-close" type="button" onClick={onClose} aria-label="关闭预览">
          <X size={18} aria-hidden="true" />
        </button>
        {canStep && (
          <>
            <button
              className="lightbox-nav lightbox-prev"
              type="button"
              onClick={() => onStep(-1)}
              aria-label="查看上一张截图"
            >
              <ChevronLeft size={24} aria-hidden="true" />
            </button>
            <button
              className="lightbox-nav lightbox-next"
              type="button"
              onClick={() => onStep(1)}
              aria-label="查看下一张截图"
            >
              <ChevronRight size={24} aria-hidden="true" />
            </button>
          </>
        )}
        <img src={image.path} alt={image.alt} />
        <figcaption>
          {image.title}
          {canStep && (
            <span>
              {state.index + 1} / {state.images.length}
            </span>
          )}
        </figcaption>
      </figure>
    </div>
  );
}

function ProjectScreenshots({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (images: ProjectScreenshot[], index: number) => void;
}) {
  if (!project.screenshots?.length) return null;

  return (
    <div
      className="case-screenshots"
      data-project={project.id}
      aria-label={`${project.title}展示图`}
    >
      <span>展示图</span>
      <div>
        {project.screenshots.map((shot, index) => (
          <figure key={shot.path}>
            <button
              className="screenshot-button"
              type="button"
              onClick={() => onOpen(project.screenshots ?? [], index)}
              aria-label={`放大查看：${shot.title}`}
            >
              <img
                src={shot.path}
                alt={shot.alt}
                loading="lazy"
                width={450}
                height={800}
              />
              <span aria-hidden="true">
                <ZoomIn size={15} />
              </span>
            </button>
            <figcaption>{shot.title}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function ProjectSummary({ points }: { points?: string[] }) {
  if (!points?.length) return null;

  return (
    <div className="project-summary">
      <span>站内摘要</span>
      <ul>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectVideo({ project }: { project: Project }) {
  if (!project.video) return null;

  return (
    <div className="project-video">
      <div className="project-video-copy">
        <span>演示视频</span>
        <strong>{project.video.title}</strong>
        <p>{project.video.description}</p>
        <a className="text-link" href={project.video.href} target="_blank" rel="noreferrer">
          去B站观看
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
      <a
        className="video-cover"
        href={project.video.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`在B站观看：${project.video.title}`}
      >
        <img src={project.video.cover} alt={project.video.coverAlt} loading="lazy" />
        <span>
          <PlayCircle size={34} aria-hidden="true" />
          B站观看
        </span>
      </a>
    </div>
  );
}

function ProjectProcess({ steps }: { steps: string[] }) {
  if (steps.length === 0) return null;

  return (
    <details className="project-process">
      <summary>真实过程</summary>
      <ol>
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </details>
  );
}

function ProjectCard({
  project,
  index,
  onOpenScreenshot,
}: {
  project: Project;
  index: number;
  onOpenScreenshot: (images: ProjectScreenshot[], index: number) => void;
}) {
  const Icon = projectIconMap[project.id as keyof typeof projectIconMap] ?? PanelTop;
  const hasSummary = Boolean(project.summaryPoints?.length);

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
        <ExpandableText className="project-why" lines={2}>
          {project.why}
        </ExpandableText>
        <ProjectLinks project={project} />

        <ProjectSummary points={project.summaryPoints} />

        {!hasSummary && (
          <div className="project-evidence">
            <div>
              <span>核心产出</span>
              <ExpandableText lines={2}>{project.did}</ExpandableText>
            </div>
            <div>
              <span>当前状态</span>
              <ExpandableText lines={2}>{project.progress}</ExpandableText>
            </div>
          </div>
        )}

        <div className="tag-row" aria-label={`${project.title}相关能力`}>
          {project.proves.slice(0, 4).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <ProjectProcess steps={project.process} />

        <ProjectVideo project={project} />

        <ProjectScreenshots project={project} onOpen={onOpenScreenshot} />
      </div>
    </article>
  );
}

function ProofSection() {
  return (
    <section className="section proof-section" id="proof" aria-labelledby="proof-title">
      <div className="section-heading">
        <p className="eyebrow">Practice</p>
        <h2 id="proof-title">AI应用产品的工作方式</h2>
        <p>围绕真实任务拆需求、搭初版、做测试，再把问题、边界和下一步记录清楚。</p>
      </div>

      <div className="capability-list">
        {capabilityMatrix.slice(0, 4).map((item, index) => (
          <article className="capability-item" key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{item.title}</h3>
              <strong>{item.target}</strong>
            </div>
            <ExpandableText lines={3}>{item.evidence}</ExpandableText>
          </article>
        ))}
      </div>
    </section>
  );
}

export function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [lightboxState, setLightboxState] = useState<LightboxState | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "proof", "contact"];
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

  const openLightbox = (images: ProjectScreenshot[], index: number) => {
    if (images.length === 0) return;
    setLightboxState({ images, index });
  };

  const stepLightbox = (direction: -1 | 1) => {
    setLightboxState((current) => {
      if (!current) return current;
      const nextIndex = (current.index + direction + current.images.length) % current.images.length;
      return { ...current, index: nextIndex };
    });
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
            <p className="hero-summary">{profile.positioning}</p>

            <div className="hero-focus" aria-label="现在关注的方向">
              <div>
                <span>现在关注的方向</span>
                <strong>{profile.targetRoles.slice(0, 3).join(" / ")}</strong>
              </div>
              <p>{profile.summary}</p>
            </div>

            <div className="hero-stats" aria-label="近期整理">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                  <small>{stat.detail}</small>
                </div>
              ))}
            </div>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                <BriefcaseBusiness size={18} aria-hidden="true" />
                看代表作品
              </a>
              <a className="button secondary" href="#contact">
                <Mail size={18} aria-hidden="true" />
                简历 / 联系方式
              </a>
            </div>
          </div>

          <aside className="evidence-panel" aria-label={profile.proofIntro}>
            <div className="panel-heading">
              <span>近期实践</span>
              <h2>最近把想法落到这几件事里</h2>
            </div>
            <ol className="evidence-list">
              {heroProofs.slice(0, 3).map((item, index) => (
                <li key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <ExpandableText lines={2}>{item.detail}</ExpandableText>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </section>

        <section className="section projects-section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <p className="eyebrow">Portfolio</p>
            <h2 id="projects-title">最近做过的东西</h2>
            <p>
              它们还在继续变好，但已经能看出我怎样理解问题、组织工具、把想法做成可体验的东西。
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard
                project={project}
                index={index}
                key={project.id}
                onOpenScreenshot={openLightbox}
              />
            ))}
          </div>
        </section>

        <ProofSection />

        <section className="section about-contact-section" id="contact" aria-labelledby="contact-title">
          <div className="about-contact-grid">
            <article className="about-card">
              <p className="eyebrow">About</p>
              <h2>关于我</h2>
              <p>
                我专注AI应用产品实践，熟悉从想法描述、需求拆解、AI协作搭建、测试记录到上线展示的过程。
              </p>
              <p>
                我希望把AI工具放进真实任务里，持续做出可体验的小产品、清楚的测评记录和可复盘的迭代过程。
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
                <a
                  className="button primary"
                  href={links.resumeDocx}
                  download
                  aria-label="下载Roxy163的简历Word文件"
                >
                  <Download size={18} aria-hidden="true" />
                  下载简历Word
                </a>
                <a
                  className="button secondary"
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="访问Roxy163的GitHub查看作品链接"
                >
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

      <ImageLightbox
        state={lightboxState}
        onStep={stepLightbox}
        onClose={() => setLightboxState(null)}
      />
    </div>
  );
}
