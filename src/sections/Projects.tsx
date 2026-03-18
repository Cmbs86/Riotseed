import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: "vespa",
    name: "Vespa",
    origin: "Warsaw, Poland",
    slug: "/projects/vespa",
    gradient: "linear-gradient(135deg, #2a2a2a 0%, #4a4a4a 50%, #1a1a1a 100%)",
  },
  {
    id: "offbeat-affair",
    name: "Offbeat Affair",
    origin: "Berlin, Germany",
    slug: "/projects/offbeat-affair",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #3a3a5c 50%, #0a0a1a 100%)",
  },
  {
    id: "tba",
    name: "Coming Soon",
    origin: "TBA",
    slug: "/projects/tba",
    gradient: "linear-gradient(135deg, #2a1a1a 0%, #5c3a3a 50%, #1a0a0a 100%)",
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="w-full bg-third-pink">
      <style>{`
        .projects-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 6rem 4rem 8rem;
        }
        .projects-header {
          font-family: 'Permanent Marker', cursive;
          font-size: 5rem;
          color: #000000;
          margin-bottom: 4rem;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        .project-card {
          position: relative;
          border: 4px solid #000000;
          box-shadow: 8px 8px 0px #000000;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          transform: perspective(800px) translateZ(0px);
          height: 420px;
        }
        .project-card:hover {
          transform: perspective(800px) translateZ(30px) scale(1.03);
          box-shadow: 14px 14px 0px #000000;
        }
        .project-card-bg {
          position: absolute;
          inset: 0;
          transition: transform 0.5s ease;
        }
        .project-card:hover .project-card-bg {
          transform: scale(1.05);
        }
        .project-overlay {
          position: absolute;
          inset: 0;
          background-color: #fb387a;
          transform: translateY(100%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          padding: 2rem;
        }
        .project-card:hover .project-overlay {
          transform: translateY(0%);
        }
        .project-name {
          font-family: 'Permanent Marker', cursive;
          font-size: 2.5rem;
          color: #000000;
          text-align: center;
          line-height: 1.1;
        }
        .project-origin {
          font-family: 'Shantell Sans', cursive;
          font-weight: 700;
          font-size: 1rem;
          color: #000000;
          text-align: center;
        }
        .project-cta {
          font-family: 'Shantell Sans', cursive;
          font-weight: 700;
          font-size: 0.875rem;
          color: #000000;
          border: 3px solid #000000;
          padding: 0.5rem 1.5rem;
          margin-top: 0.5rem;
          transition: background-color 0.1s, color 0.1s;
        }
        .project-cta:hover {
          background-color: #000000;
          color: #fb387a;
        }
        .projects-divider {
          width: 100%;
          height: 4px;
          background-color: #000000;
          margin: 5rem 0 3rem;
        }
        .projects-sub-label {
          font-family: 'Permanent Marker', cursive;
          font-size: 1.5rem;
          color: #000000;
          margin-bottom: 2rem;
        }
        .veegreen-card {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          border: 4px solid #000000;
          box-shadow: 6px 6px 0px #000000;
          background-color: #000000;
          padding: 1rem 2rem;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.1s;
        }
        .veegreen-card:hover {
          box-shadow: 2px 2px 0px #000000;
          transform: translate(4px, 4px);
        }
        .veegreen-name {
          font-family: 'Permanent Marker', cursive;
          font-size: 1.75rem;
          color: #6bf7c9;
        }
        .veegreen-arrow {
          font-size: 1.5rem;
          color: #6bf7c9;
        }
        .veegreen-desc {
          font-family: 'Shantell Sans', cursive;
          font-weight: 700;
          font-size: 0.9rem;
          color: #000000;
          margin-top: 1rem;
          max-width: 400px;
        }
        @media (min-width: 768px) {
          .projects-header {
            font-size: 7rem;
          }
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2.5rem;
          }
        }
        @media (min-width: 1920px) {
          .projects-inner {
            max-width: 1800px;
          }
        }
      `}</style>

      <div className="projects-inner">

        {/* Header */}
        <h2 className="projects-header">PROJECTS</h2>

        {/* Music projects grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => navigate(project.slug)}
            >
              {/* Background gradient placeholder */}
              <div
                className="project-card-bg"
                style={{ background: project.gradient }}
              />

              {/* Grain texture overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
                opacity: 0.4,
              }} />

              {/* Pink hover overlay */}
              <div className="project-overlay">
                <p className="project-name">{project.name}</p>
                <p className="project-origin">{project.origin}</p>
                <span className="project-cta">View Project →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Divider + Veegreen */}
        <div className="projects-divider"></div>
        <p className="projects-sub-label">Beyond the Music</p>

<div>
  <button
    onClick={() => window.open('https://www.veegreen.fr/', '_blank')}
    className="veegreen-card"
  >
    <span className="veegreen-name">Veegreen</span>
    <span className="veegreen-arrow">↗</span>
  </button>
  <p className="veegreen-desc">
    Sustainable online shop — branding, strategy & web.
  </p>
</div>
</div>
    </section>
  );
};

export default Projects;