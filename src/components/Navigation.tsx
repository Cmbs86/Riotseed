// import { Link } from 'react-router-dom';

const Navigation = () => {
  // Smooth scroll function for same-page navigation
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex gap-8">
      <button
        onClick={() => scrollToSection('hero')}
        className="font-shantell-sans text-primary-black hover:text-fifth-black transition-colors text-lg font-bold"
      >
        Start
      </button>
      <button
        onClick={() => scrollToSection('services')}
        className="font-shantell-sans text-primary-black hover:text-fifth-black transition-colors text-lg font-bold"
      >
        Services
      </button>
      <button
        onClick={() => scrollToSection('projects')}
        className="font-shantell-sans text-primary-black hover:text-fifth-black transition-colors text-lg font-bold"
      >
        Projects
      </button>
      <button
        onClick={() => scrollToSection('about')}
        className="font-shantell-sans text-primary-black hover:text-fifth-black transition-colors text-lg font-bold"
      >
        About
      </button>
    </nav>
  );
}

export default Navigation;