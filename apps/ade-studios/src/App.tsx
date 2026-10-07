import { useEffect, useRef, useState } from "react";

type Project = {
  name: string;
  tagline: string;
  href: string;
  action: string;
  cover: string;
  coverAlt: string;
  theme: string;
};

const projects: Project[] = [
  {
    name: "Rem",
    tagline: "A voice-first assistant that turns intent into action.",
    href: "https://apps.apple.com/us/app/rem-ai-personal-assistant/id6759550315",
    action: "View on App Store",
    cover: "/media/rem-cover.svg",
    coverAlt: "Rem blue assistant mark on a soft gray field",
    theme: "rem",
  },
  {
    name: "Trove",
    tagline: "Save any recipe. Plan the week. Cook without the clutter.",
    href: "https://apps.apple.com/us/app/trove-save-plan-recipes/id6780378124",
    action: "View on App Store",
    cover: "/media/trove-cover.jpg",
    coverAlt: "An illustrated Trove recipe book opened to seasonal picks",
    theme: "trove",
  },
  {
    name: "Composa",
    tagline: "A design-native video editor for motion-minded creators.",
    href: "https://composa.app",
    action: "Visit Composa",
    cover: "/media/composa-cover.png",
    coverAlt: "Composa video editor interface and wordmark",
    theme: "composa",
  },
];

function ProjectCover({ project }: { project: Project }) {
  return (
    <div className={`project-visual project-visual--${project.theme}`}>
      <img src={project.cover} alt={project.coverAlt} loading="lazy" />
    </div>
  );
}

function App() {
  const projectsRef = useRef<HTMLElement>(null);
  const [projectsInView, setProjectsInView] = useState(false);

  useEffect(() => {
    const section = projectsRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setProjectsInView(entry.isIntersecting),
      { rootMargin: "-20% 0px -65%", threshold: 0 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <header
        className={`site-header${projectsInView ? " site-header--open" : ""}`}
      >
        <a className="wordmark" href="#top" aria-label="Ade Studios home">
          <span className="wordmark-part wordmark-part--ade">ADE</span>
          <span className="wordmark-joint" aria-hidden="true" />
          <span className="wordmark-part wordmark-part--studios">STUDIOS</span>
        </a>
        <a className="header-contact" href="mailto:founders@adestudios.co">
          Contact
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">
              Products with a point of view,{" "}
              <br />
              built all the way through.
            </h1>
            <p>
              Ade Studios is an independent product studio creating thoughtful
              software across AI, creativity, and everyday life.
            </p>
          </div>
        </section>

        <section
          className="projects"
          aria-labelledby="projects-title"
          ref={projectsRef}
        >
          <div className="section-heading">
            <h2 id="projects-title">Projects</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <a
                  className="project-media-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.action}: ${project.name}`}
                >
                  <ProjectCover project={project} />
                </a>
                <div className="project-copy">
                  <h3>{project.name}</h3>
                  <p>{project.tagline}</p>
                  <a
                    className="project-action"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.action}
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <p>Independent product design &amp; engineering</p>
          <div className="footer-contact">
            <span>Contact</span>
            <a href="mailto:founders@adestudios.co">founders@adestudios.co</a>
          </div>
        </div>
        <p className="footer-wordmark" aria-label="Ade Studios">
          Ade Studios
        </p>
        <div className="footer-bottom">
          <p>© 2026 Ade Studios. All rights reserved.</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
