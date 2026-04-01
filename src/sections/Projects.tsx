import { useNavigate } from "react-router-dom";
import vespaPhoto from "../assets/images/VespaBand.webp";
import offbeatPhoto from "../assets/images/OffbeatAffairBand.webp";
import veePhoto from "../assets/images/Veegreen2.webp";

const projects = [
  {
    id: "vespa",
    name: "Vespa",
    slug: "/projects/vespa",
    image: vespaPhoto,
  },
  {
    id: "offbeat-affair",
    name: "Offbeat Affair",
    slug: "/projects/offbeat-affair",
    image: offbeatPhoto,
  },
  {
    id: "tba",
    name: "Coming Soon",
    slug: "/projects/tba",
    image: null,
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
          padding: 6rem 4rem 0;
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
          transition: box-shadow 0.3s ease;
          height: 520px;
        }
        .project-card:hover {
          box-shadow: 14px 14px 0px #000000;
        }
        .project-card-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center top;
          transition: transform 0.4s ease;
        }
        .project-card:hover .project-card-bg {
         transform: scale(1.05);
        }
        .project-overlay-square {
          position: absolute;
          inset: 0;
          background-color: rgba(251, 56, 122, 0.3);
          transform: scale(0);
          transform-origin: center center;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1;
        }
        .project-card:hover .project-overlay-square {
          transform: scale(1);
        }
        @keyframes zoomfront {
          0%   { transform: translate(-50%, -50%) scale(0.2); opacity: 0; }
          60%  { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
          80%  { transform: translate(-50%, -50%) scale(0.95); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1.0); opacity: 1; }
        }
        .project-name {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.2);
          opacity: 0;
          z-index: 2;
          font-family: 'Permanent Marker', cursive;
          font-size: 2.5rem;
          color: #6bf7c9;
          text-align: center;
          line-height: 1.2;
          width: 80%;
          transition: none;
        }
        .project-card:hover .project-name {
          animation: zoomfront 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Veegreen card */
        .veegreen-card-new {
          position: relative;
          border: 4px solid #000000;
          box-shadow: 8px 8px 0px #000000;
          overflow: hidden;
          cursor: pointer;
          transition: box-shadow 0.3s ease;
          height: 280px;
          max-width: 700px;
          margin: 0 auto;
        }
        .veegreen-card-new:hover {
          box-shadow: 14px 14px 0px #000000;
        }
        .veegreen-card-new:hover .project-card-bg {
          transform: scale(1.05);
        }
        .veegreen-overlay-square {
          position: absolute;
          inset: 0;
          background-color: rgba(251, 56, 122, 0.3);
          transform: scale(0);
          transform-origin: center center;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1;
        }
        .veegreen-card-new:hover .veegreen-overlay-square {
          transform: scale(1);
        }
        .veegreen-card-name {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.2);
          opacity: 0;
          z-index: 2;
          font-family: 'Permanent Marker', cursive;
          font-size: 2.5rem;
          color: #6bf7c9;
          text-align: center;
          line-height: 1.1;
          white-space: nowrap;
          transition: none;
        }
        .veegreen-card-new:hover .veegreen-card-name {
          animation: zoomfront 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .veegreen-card-label {
          position: absolute;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Shantell Sans', cursive;
          font-weight: 700;
          font-size: 0.875rem;
          color: #ffffff;
          white-space: nowrap;
          z-index: 1;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
          transition: opacity 0.2s ease;
        }
        .veegreen-card-new:hover .veegreen-card-label {
          opacity: 0;
        }
        .projects-divider {
          width: 100%;
          height: 4px;
          background-color: #000000;
          margin: 5rem 0 3rem;
        }
        .projects-divider-bottom {
          width: 100%;
          height: 4px;
          background-color: #000000;
          margin: 3rem 0 0 0;
        }
        .projects-sub-label {
          font-family: 'Permanent Marker', cursive;
          font-size: 1.5rem;
          color: #000000;
          margin-bottom: 2rem;
        }
        @media (min-width: 768px) {
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
        <h2 className="font-permanent-marker text-6xl md:text-8xl text-primary-black text-center">
          PROJECTS
        </h2>

        {/* Spacer */}
        <div className="w-full h-20"></div>

        {/* Music projects grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => navigate(project.slug)}
            >
              <div
                className="project-card-bg"
                style={{
                  backgroundImage: project.image
                    ? `url(${project.image})`
                    : project.gradient,
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                }}
              />
              <div className="project-overlay-square" />
              <p className="project-name">{project.name}</p>
            </div>
          ))}
        </div>

        {/* Divider + Veegreen */}
        <div className="projects-divider"></div>
        <p className="projects-sub-label text-center">Beyond the Music</p>

        {/* Veegreen card */}
        <div
          className="veegreen-card-new"
          onClick={() => window.open("https://www.veegreen.fr/", "_blank")}
        >
          <div
            className="project-card-bg"
            style={{
              backgroundImage: `url(${veePhoto})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          />
          <div className="veegreen-overlay-square" />
          <p className="veegreen-card-name">Veegreen</p>
          <p className="veegreen-card-label">
            Sustainable online shop — branding, strategy & web.
          </p>
        </div>

      </div>

      <div className="projects-divider-bottom"></div>

    </section>
  );
};

export default Projects;