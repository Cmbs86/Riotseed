import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinkClass = "font-shantell-sans text-primary-black hover:text-fifth-black transition-colors text-lg font-bold";

  return (
    <nav className="flex gap-8 items-center">
      <button onClick={() => handleNavClick('hero')} className={navLinkClass}>
        Start
      </button>
      <button onClick={() => handleNavClick('services')} className={navLinkClass}>
        Services
      </button>
      <button onClick={() => handleNavClick('projects')} className={navLinkClass}>
        Projects
      </button>
      <button onClick={() => handleNavClick('about')} className={navLinkClass}>
        About
      </button>
      <a href="mailto:hello@riotseed.com" className={navLinkClass}>
        Get in Touch
      </a>
    </nav>
  );
};

export default Navigation;