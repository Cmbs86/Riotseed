import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const LEAVE_ANIMATION_MS = 650;

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [leavingCard, setLeavingCard] = useState<string | null>(null);
  const leaveTimeoutRef = useRef<number | null>(null);

  const handleMouseEnter = (id: string) => {
    if (leaveTimeoutRef.current) {
      window.clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }

    setLeavingCard((current) => (current === id ? null : current));
    setHoveredCard(id);
  };

  const handleMouseLeave = (id: string) => {
    setHoveredCard((current) => (current === id ? null : current));
    setLeavingCard(id);

    if (leaveTimeoutRef.current) {
      window.clearTimeout(leaveTimeoutRef.current);
    }

    leaveTimeoutRef.current = window.setTimeout(() => {
      setLeavingCard((current) => (current === id ? null : current));
      leaveTimeoutRef.current = null;
    }, LEAVE_ANIMATION_MS);
  };

  const getCardClassName = (id: string, isWide = false) => {
    const base = isWide ? "veegreen-card-new" : "project-card";
    const hovered = hoveredCard === id ? " is-hovered" : "";
    const leaving = leavingCard === id ? " is-leaving" : "";
    return `${base}${hovered}${leaving}`;
  };

  const getBackgroundStyle = (project: (typeof projects)[number]) => ({
    backgroundImage: project.image ? `url(${project.image})` : project.gradient,
    backgroundSize: "cover",
    backgroundPosition: project.bgPosition ?? "center center",
    backgroundRepeat: "no-repeat",
  });

  const mainProjects = projects.filter((project) => project.category === "music");
  const veegreenProject = projects.find((project) => project.slug === "veegreen");

  return (
    <section id="projects" className="w-full bg-second-pink">
      <style>{`
        .projects-inner {
          max-width: 1320px;
          margin: 0 auto;
          padding: 5rem 4rem 0;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .project-card,
        .veegreen-card-new {
        width: 100%;
          display: block;
          position: relative;
          border: 4px solid #000000;
          box-shadow: 8px 8px 0px #000000;
          overflow: hidden;
          cursor: pointer;
          isolation: isolate;
          background-color: #000000;
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }

        .project-card {
          height: 460px;
        }

        .veegreen-card-new {
          height: 250px;
          max-width: 680px;
          margin: 0 auto;
        }

        .project-card.is-hovered,
        .veegreen-card-new.is-hovered {
          box-shadow: 14px 14px 0px #000000;
        }

        .project-card.is-leaving,
        .veegreen-card-new.is-leaving {
          animation: shadowLeave 0.65s ease-out forwards;
        }

        .project-bg-base,
        .project-bg-glitch-cyan,
        .project-bg-glitch-pink {
          position: absolute;
          inset: 0;
          transition: opacity 0.2s ease, transform 0.25s ease, filter 0.25s ease;
        }

        .project-bg-base {
          z-index: 0;
          transform: scale(1.02);
          filter: brightness(0.88) contrast(1.05);
        }

        .project-bg-glitch-cyan,
        .project-bg-glitch-pink {
          opacity: 0;
          mix-blend-mode: screen;
          pointer-events: none;
          z-index: 1;
        }

        .project-bg-glitch-cyan {
          filter: hue-rotate(180deg) saturate(1.6) brightness(1.15);
        }

        .project-bg-glitch-pink {
          filter: hue-rotate(315deg) saturate(1.6) brightness(1.08);
        }

        .project-card.is-hovered .project-bg-base,
        .veegreen-card-new.is-hovered .project-bg-base {
          transform: scale(1.05);
          filter: brightness(0.75) contrast(1.12);
        }

        .project-card.is-hovered .project-bg-glitch-cyan,
        .veegreen-card-new.is-hovered .project-bg-glitch-cyan {
          animation: imageGlitchCyanIn 0.55s steps(2, end) forwards;
        }

        .project-card.is-hovered .project-bg-glitch-pink,
        .veegreen-card-new.is-hovered .project-bg-glitch-pink {
          animation: imageGlitchPinkIn 0.55s steps(2, end) forwards;
        }

        .project-card.is-leaving .project-bg-glitch-cyan,
        .veegreen-card-new.is-leaving .project-bg-glitch-cyan {
          animation: imageGlitchCyanOut 0.65s steps(2, end) forwards;
        }

        .project-card.is-leaving .project-bg-glitch-pink,
        .veegreen-card-new.is-leaving .project-bg-glitch-pink {
          animation: imageGlitchPinkOut 0.65s steps(2, end) forwards;
        }

        .project-card::after,
        .veegreen-card-new::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(251, 56, 122, 0.10);
          opacity: 0;
          transition: opacity 0.2s ease;
          z-index: 2;
          pointer-events: none;
        }

        .project-card.is-hovered::after,
        .veegreen-card-new.is-hovered::after {
          opacity: 1;
        }

        .project-card.is-leaving::after,
        .veegreen-card-new.is-leaving::after {
          opacity: 0.12;
          transition: opacity 0.65s ease-out;
        }

        .project-name,
        .veegreen-card-name {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 4;
          font-family: 'Permanent Marker', cursive;
          color: #6bf7c9;
          text-align: center;
          line-height: 1.1;
          opacity: 0;
          pointer-events: none;
          text-shadow: 3px 3px 0 #000000;
        }

        .project-name {
          width: 84%;
          font-size: clamp(2rem, 3vw, 2.8rem);
        }

        .veegreen-card-name {
          width: 84%;
          font-size: clamp(2.1rem, 3vw, 3rem);
          white-space: nowrap;
        }

        .project-name::before,
        .project-name::after,
        .veegreen-card-name::before,
        .veegreen-card-name::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          opacity: 0;
          pointer-events: none;
        }

        .project-name::before,
        .veegreen-card-name::before {
          color: #7df9ff;
          text-shadow: -2px 0 0 rgba(125, 249, 255, 0.75);
        }

        .project-name::after,
        .veegreen-card-name::after {
          color: #ff4fd8;
          text-shadow: 2px 0 0 rgba(255, 79, 216, 0.75);
        }

        .project-card.is-hovered .project-name,
        .veegreen-card-new.is-hovered .veegreen-card-name {
          animation: nameRevealIn 0.32s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .project-card.is-hovered .project-name::before,
        .veegreen-card-new.is-hovered .veegreen-card-name::before {
          animation: textGlitchLeftIn 0.4s steps(2, end) forwards;
        }

        .project-card.is-hovered .project-name::after,
        .veegreen-card-new.is-hovered .veegreen-card-name::after {
          animation: textGlitchRightIn 0.4s steps(2, end) forwards;
        }

        .project-card.is-leaving .project-name,
        .veegreen-card-new.is-leaving .veegreen-card-name {
          animation: nameRevealOut 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .project-card.is-leaving .project-name::before,
        .veegreen-card-new.is-leaving .veegreen-card-name::before {
          animation: textGlitchLeftOut 0.65s steps(2, end) forwards;
        }

        .project-card.is-leaving .project-name::after,
        .veegreen-card-new.is-leaving .veegreen-card-name::after {
          animation: textGlitchRightOut 0.65s steps(2, end) forwards;
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
          z-index: 3;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
          transition: opacity 0.2s ease;
        }

        .veegreen-card-new.is-hovered .veegreen-card-label {
          opacity: 0;
        }

        .veegreen-card-new.is-leaving .veegreen-card-label {
          opacity: 0.65;
          transition: opacity 0.65s ease-out;
        }

        .projects-divider {
          width: 100%;
          height: 4px;
          background-color: #000000;
          margin: 4rem 0 2.5rem;
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

        @keyframes shadowLeave {
          0% { box-shadow: 16px 16px 0px #000000; }
          35% { box-shadow: 14px 14px 0px #000000; }
          70% { box-shadow: 11px 11px 0px #000000; }
          100% { box-shadow: 8px 8px 0px #000000; }
        }

        @keyframes nameRevealIn {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.78); }
          65% { opacity: 1; transform: translate(-50%, -50%) scale(1.08); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }

        @keyframes nameRevealOut {
          0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          22% { opacity: 1; transform: translate(-50%, -50%) scale(1.06) skewX(-4deg); }
          55% { opacity: 0.75; transform: translate(-50%, -50%) scale(0.96) skewX(3deg); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0.78) skewX(0deg); }
        }

        @keyframes textGlitchLeftIn {
          0% { opacity: 0; transform: translate(0, 0); }
          35% { opacity: 0.9; transform: translate(-5px, -1px); }
          100% { opacity: 0.45; transform: translate(-2px, 0); }
        }

        @keyframes textGlitchRightIn {
          0% { opacity: 0; transform: translate(0, 0); }
          35% { opacity: 0.9; transform: translate(5px, 1px); }
          100% { opacity: 0.45; transform: translate(2px, 0); }
        }

        @keyframes textGlitchLeftOut {
          0% { opacity: 0.45; transform: translate(-2px, 0); }
          25% { opacity: 0.95; transform: translate(-10px, 2px); }
          55% { opacity: 0.65; transform: translate(-6px, -1px); }
          100% { opacity: 0; transform: translate(0, 0); }
        }

        @keyframes textGlitchRightOut {
          0% { opacity: 0.45; transform: translate(2px, 0); }
          25% { opacity: 0.95; transform: translate(10px, -2px); }
          55% { opacity: 0.65; transform: translate(6px, 1px); }
          100% { opacity: 0; transform: translate(0, 0); }
        }

        @keyframes imageGlitchCyanIn {
          0% { opacity: 0; transform: translate(0, 0); clip-path: inset(0 0 0 0); }
          20% { opacity: 0.75; transform: translate(-10px, 0); clip-path: inset(8% 0 58% 0); }
          45% { opacity: 0.55; transform: translate(-6px, 0); clip-path: inset(48% 0 18% 0); }
          70% { opacity: 0.4; transform: translate(-4px, 0); clip-path: inset(72% 0 6% 0); }
          100% { opacity: 0.22; transform: translate(-3px, 0); clip-path: inset(0 0 0 0); }
        }

        @keyframes imageGlitchPinkIn {
          0% { opacity: 0; transform: translate(0, 0); clip-path: inset(0 0 0 0); }
          20% { opacity: 0.75; transform: translate(10px, 0); clip-path: inset(62% 0 8% 0); }
          45% { opacity: 0.55; transform: translate(6px, 0); clip-path: inset(18% 0 42% 0); }
          70% { opacity: 0.4; transform: translate(4px, 0); clip-path: inset(4% 0 72% 0); }
          100% { opacity: 0.22; transform: translate(3px, 0); clip-path: inset(0 0 0 0); }
        }

        @keyframes imageGlitchCyanOut {
          0% { opacity: 0.22; transform: translate(-3px, 0); clip-path: inset(0 0 0 0); }
          18% { opacity: 0.7; transform: translate(-14px, 2px); clip-path: inset(8% 0 62% 0); }
          42% { opacity: 0.5; transform: translate(-9px, -1px); clip-path: inset(52% 0 16% 0); }
          68% { opacity: 0.35; transform: translate(-6px, 1px); clip-path: inset(18% 0 46% 0); }
          100% { opacity: 0; transform: translate(0, 0); clip-path: inset(0 0 0 0); }
        }

        @keyframes imageGlitchPinkOut {
          0% { opacity: 0.22; transform: translate(3px, 0); clip-path: inset(0 0 0 0); }
          18% { opacity: 0.7; transform: translate(14px, -2px); clip-path: inset(64% 0 8% 0); }
          42% { opacity: 0.5; transform: translate(9px, 1px); clip-path: inset(16% 0 50% 0); }
          68% { opacity: 0.35; transform: translate(6px, -1px); clip-path: inset(44% 0 20% 0); }
          100% { opacity: 0; transform: translate(0, 0); clip-path: inset(0 0 0 0); }
        }

            @media (max-width: 767px) {
  .projects-inner {
    padding: 5rem 1.25rem 0;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .project-card {
    width: 100%;
    height: 420px;
  }

  .veegreen-card-new {
    width: 100%;
    height: 220px;
  }
}

             @media (max-width: 819px) {
          .projects-inner {
            padding: 5rem 1.25rem 0;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            justify-items: center;
          }

          .project-card {
            width: min(100%, 360px);
            height: 460px;
          }

          .veegreen-card-new {
            width: min(100%, 360px);
            height: 220px;
          }

          .veegreen-card-label {
            white-space: normal;
            width: 80%;
            text-align: center;
            bottom: 1rem;
          }
        }

        @media (min-width: 820px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }

          .project-card {
            width: auto;
            max-width: none;
            margin: 0;
            height: 360px;
          }

          .projects-inner {
            padding: 5rem 2rem 0;
          }
        }

        @media (min-width: 1024px) {
          .projects-grid {
            gap: 2.75rem;
          }

          .project-card {
            height: 400px;
          }

          .projects-inner {
            padding: 5rem 3rem 0;
          }
        }

        @media (min-width: 1280px) {
          .projects-grid {
            gap: 3rem;
          }

          .project-card {
            height: 440px;
          }

          .projects-inner {
            padding: 5rem 4rem 0;
          }
        }

        @media (min-width: 1536px) {
          .project-card {
            height: 460px;
          }

          .projects-inner {
            max-width: 1320px;
          }
        }
      `}</style>

      <div className="projects-inner">
        <h2 className="font-permanent-marker text-5xl md:text-7xl text-primary-black text-center">
          PROJECTS
        </h2>

        <div className="w-full h-16"></div>

        <div className="projects-grid">
          {mainProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className={getCardClassName(project.id)}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={() => handleMouseLeave(project.id)}
            >
              <div className="project-bg-base" style={getBackgroundStyle(project)} />
              <div className="project-bg-glitch-cyan" style={getBackgroundStyle(project)} />
              <div className="project-bg-glitch-pink" style={getBackgroundStyle(project)} />

              <p className="project-name" data-text={project.title}>
                {project.title}
              </p>
            </Link>
          ))}
        </div>

        <div className="projects-divider"></div>

        <p className="projects-sub-label text-center">Beyond the Music</p>

        {veegreenProject && (
          <Link
            to={`/projects/${veegreenProject.slug}`}
            className={getCardClassName(veegreenProject.id, true)}
            onMouseEnter={() => handleMouseEnter(veegreenProject.id)}
            onMouseLeave={() => handleMouseLeave(veegreenProject.id)}
          >
            <div className="project-bg-base" style={getBackgroundStyle(veegreenProject)} />
            <div className="project-bg-glitch-cyan" style={getBackgroundStyle(veegreenProject)} />
            <div className="project-bg-glitch-pink" style={getBackgroundStyle(veegreenProject)} />

            <p className="veegreen-card-name" data-text={veegreenProject.title}>
              {veegreenProject.title}
            </p>

            <p className="veegreen-card-label ">
              Sustainable online shop — branding, strategy & web.
            </p>
          </Link>
        )}
      </div>

      <div className="projects-divider-bottom"></div>
    </section>
  );
};

export default Projects;