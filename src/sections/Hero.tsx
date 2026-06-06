import { useState, useEffect } from "react";

import RiotseedBanner from "../assets/images/riotseed-banner-new-smaller.webp";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-primary-black"
    >
     <div className="translate-y-4 md:translate-y-6 lg:translate-y-8">
  <img
    src={RiotseedBanner}
    alt="Riotseed banner"
    className="w-full h-auto block"
  />
</div>

      {/* Dark overlay
      <div className="absolute inset-0 bg-primary-black opacity-20 pointer-events-none"></div> */}

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="animate-bounce">
          <svg
            className="w-8 h-8 text-primary-green drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-primary-black"></div>
    </section>
  );
};

export default Hero;