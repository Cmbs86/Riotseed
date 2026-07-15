import { useState, useEffect } from "react";

import RiotseedBanner from "../assets/images/riotseed-banner-new-smaller.webp";
import RiotSeedBannerMobile from "../assets/images/riotseed-banner-mobile.webp";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-primary-black"
    >
      <div className="translate-y-4 md:translate-y-6 ">
        <img
          src={RiotseedBanner}
          srcSet={`${RiotSeedBannerMobile} 900w, ${RiotseedBanner} 1920w`}
          sizes="(max-width: 768px) 100vw, 1920px"
          alt="Riotseed banner"
          width={1920}
          height={1153}
          className="w-full h-auto block"
          fetchpriority="high"
        />
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="animate-bounce">
          <svg
            className="hidden lg:block w-8 h-8 text-primary-green drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
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
