import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-second-pink transition-all duration-700 ease-in-out ${
        isScrolled ? 'py-2' : 'py-6'
      }`}>
        <div className="max-w-[96%] mx-auto flex items-center justify-between">
          {/* Logo wrapper */}
          <div className="flex w-32 h-32 md:w-36 md:h-32 lg:w-40 lg:h-36 justify-around items-center"> 
            <Link to="/" className="flex items-center transition-all duration-700 ease-in-out">
              {/* Brutalist: hard shadow on logo box */}
              <div className={`bg-primary-green flex items-center justify-center rounded-lg border-4 border-primary-black transition-all duration-700 ease-in-out shadow-[4px_4px_0px_#000000] ${
                isScrolled ? 'w-16 h-16' : 'w-24 h-24'
              }`}>
                <span className={`font-permanent-marker text-primary-black transition-all duration-700 ease-in-out ${
                  isScrolled ? 'text-lg' : 'text-2xl'
                }`}>
                  Logo
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:block transition-all duration-700 ease-in-out ${
            isScrolled ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'
          }`}>
            <Navigation />
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center z-50"
            aria-label="Toggle menu"
          >
            <span className={`w-7 h-0.5 bg-primary-green transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`} />
            <span className={`w-7 h-0.5 bg-primary-green transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`} />
            <span className={`w-7 h-0.5 bg-primary-green transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-second-pink z-40 md:hidden transition-all duration-500 ease-in-out ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              const element = document.getElementById('hero');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="font-permanent-marker text-4xl text-primary-green hover:text-second-green transition-colors"
          >
            Start
          </button>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              const element = document.getElementById('services');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="font-permanent-marker text-4xl text-primary-green hover:text-second-green transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              const element = document.getElementById('projects');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="font-permanent-marker text-4xl text-primary-green hover:text-second-green transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              const element = document.getElementById('about');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="font-permanent-marker text-4xl text-primary-green hover:text-second-green transition-colors"
          >
            About
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;