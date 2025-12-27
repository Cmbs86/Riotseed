import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-second-pink transition-all duration-500 ease-in-out ${
      isScrolled ? 'py-2' : 'py-6'
    }`}>
      <div className="w-full px-12 md:px-16 lg:px-20 xl:px-24 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center ml-4 transition-all duration-500 ease-in-out">
          <div className={`bg-primary-green flex items-center justify-center rounded-lg border-4 border-primary-black transition-all duration-500 ease-in-out ${
            isScrolled ? 'w-16 h-16' : 'w-24 h-24'
          }`}>
            <span className={`font-permanent-marker text-primary-black transition-all duration-500 ease-in-out ${
              isScrolled ? 'text-lg' : 'text-2xl'
            }`}>
              LOGO
            </span>
          </div>
        </Link>

        {/* Navigation - Hidden at top, appears on scroll */}
        <div className={`transition-all duration-500 ease-in-out ${
          isScrolled ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'
        }`}>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;