import { useEffect, useRef } from "react";

type Project = {
  name: string;
  tagline: string;
  href: string;
  action: string;
  video: string;
  poster: string;
  theme: string;
  orientation: "portrait" | "landscape";
};

const projects: Project[] = [
  {
    name: "Rem",
    tagline: "A voice-first assistant that turns intent into action.",
    href: "https://apps.apple.com/us/app/rem-ai-personal-assistant/id6759550315",
    action: "View on App Store",
    video: "/media/rem-agenda.mp4",
    poster: "/media/rem-agenda.jpg",
    theme: "rem",
    orientation: "portrait",
  },
  {
    name: "Trove",
    tagline: "Save any recipe. Plan the week. Cook without the clutter.",
    href: "https://apps.apple.com/us/app/trove-save-plan-recipes/id6780378124",
    action: "View on App Store",
    video: "/media/trove-discover.mp4",
    poster: "/media/trove-discover.jpg",
    theme: "trove",
    orientation: "portrait",
  },
  {
    name: "Composa",
    tagline: "A design-native video editor for motion-minded creators.",
    href: "https://composa.app",
    action: "Visit Composa",
    video: "/media/composa-compose.mp4",
    poster: "/media/composa-compose.jpg",
    theme: "composa",
    orientation: "landscape",
  },
];

function ProjectVideo({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !reducedMotion.matches) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`project-visual project-visual--${project.theme}`}>
      <div className={`project-screen project-screen--${project.orientation}`}>
        <video
          ref={videoRef}
          aria-label={`${project.name} product preview`}
          loop
          muted
          playsInline
          poster={project.poster}
          preload="metadata"
        >
          <source src={project.video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Ade Studios home">
          ADE STUDIOS
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

        <section className="projects" aria-labelledby="projects-title">
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
                  <ProjectVideo project={project} />
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
