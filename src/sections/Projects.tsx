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
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          transform: perspective(800px) translateZ(0px);
          height: 520px;
        }
        .project-card:hover {
          transform: perspective(800px) translateZ(30px) scale(1.03);
          box-shadow: 14px 14px 0px #000000;
        }
        .project-card-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center top;
          transition: transform 0.5s ease;
        }
        @keyframes distort {
          0%   { transform: scale(1);                                filter: blur(0px); }
          20%  { transform: scale(1.06) skewX(1.5deg);              filter: blur(2px); }
          40%  { transform: scale(1.04) skewX(-1deg) skewY(0.5deg); filter: blur(1px); }
          60%  { transform: scale(1.07) skewX(0.5deg);              filter: blur(2px); }
          80%  { transform: scale(1.05) skewX(-0.5deg);             filter: blur(1px); }
          100% { transform: scale(1.05);                            filter: blur(0px); }
        }
        .project-card:hover .project-card-bg,
        .veegreen-card-new:hover .project-card-bg {
          animation: distort 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .project-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .project-overlay-circle {
          position: absolute;
          width: 0;
          height: 0;
          border-radius: 50%;
          background-color: rgba(251, 56, 122, 0.3);
          transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                      height 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .project-card:hover .project-overlay-circle {
          width: 300%;
          height: 300%;
        }
        .project-name {
          position: relative;
          z-index: 2;
          font-family: 'Permanent Marker', cursive;
          font-size: 3.5rem;
          color: #6bf7c9;
          text-align: center;
          line-height: 1.1;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.3s ease 0.2s, transform 0.3s ease 0.2s;
          padding: 0 1rem;
        }
        .project-card:hover .project-name {
          opacity: 1;
          transform: translateY(0);
        }

        /* Veegreen card */
        .veegreen-card-new {
          position: relative;
          border: 4px solid #000000;
          box-shadow: 8px 8px 0px #000000;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          transform: perspective(800px) translateZ(0px);
          height: 280px;
          max-width: 700px;
          margin: 0 auto;
        }
        .veegreen-card-new:hover {
          transform: perspective(800px) translateZ(30px) scale(1.03);
          box-shadow: 14px 14px 0px #000000;
        }
        .veegreen-overlay-circle {
          position: absolute;
          width: 0;
          height: 0;
          border-radius: 50%;
          background-color: rgba(107, 247, 201, 0.3);
          transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                      height 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .veegreen-card-new:hover .veegreen-overlay-circle {
          width: 300%;
          height: 300%;
        }
        .veegreen-card-name {
          position: relative;
          z-index: 2;
          font-family: 'Permanent Marker', cursive;
          font-size: 3.5rem;
          color: #fb387a;
          text-align: center;
          line-height: 1.1;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.3s ease 0.2s, transform 0.3s ease 0.2s;
          padding: 0 1rem;
        }
        .veegreen-card-new:hover .veegreen-card-name {
          opacity: 1;
          transform: translateY(0);
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
          font-size: 2.5rem;
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
              <div className="project-overlay">
                <div className="project-overlay-circle" />
                <p className="project-name">{project.name}</p>
              </div>
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
          <div className="project-overlay">
            <div className="veegreen-overlay-circle" />
            <p className="veegreen-card-name">Veegreen</p>
          </div>
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