import { useNavigate, useLocation } from "react-router-dom";

type NavigationProps = {
  isScrolled: boolean;
};

const Navigation = ({ isScrolled }: NavigationProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinkClass = `font-permanent-marker text-primary-black font-bold hover:text-primary-green transition-all duration-700 hover:-translate-y-[3px] ${
    isScrolled ? "text-lg" : "text-xl"
  }`;

  return (
    <nav
      className={`flex items-center transition-all duration-700 ${
        isScrolled ? "gap-6" : "gap-8"
      }`}
    >
      <button onClick={() => handleNavClick("hero")} className={navLinkClass}>
        Start
      </button>

      <button onClick={() => handleNavClick("services")} className={navLinkClass}>
        Services
      </button>

      <button onClick={() => handleNavClick("projects")} className={navLinkClass}>
        Projects
      </button>

      <button onClick={() => handleNavClick("about")} className={navLinkClass}>
        About
      </button>

      <a href="mailto:aude@riotseed.com" className={navLinkClass}>
        Get in Touch
      </a>
    </nav>
  );
};

export default Navigation;