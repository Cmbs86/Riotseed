import { useState, useEffect } from 'react';
import heroBanner from '../assets/images/hero-banner.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-primary-black opacity-30"></div>
      </div>

      {/* Main content - overlaying the image */}
      <div className="relative z-10 text-center px-4 md:px-8">
        {/* Business name */}
        <h1 
          className={`font-permanent-marker text-6xl md:text-8xl lg:text-9xl text-sixth-green mb-6 transition-all duration-1500 ease-out drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[200%]'
          }`}
        >
          RIOTSEED
        </h1>

        {/* Tagline */}
        <p 
          className={`font-shantell-sans text-2xl md:text-4xl lg:text-5xl text-sixth-green transition-all duration-1000 delay-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Your Creative Marketing Partner
        </p>

        {/* CTA Button - brutalist: hard shadow + pressed on hover */}
        <button
          onClick={() => {
            const element = document.getElementById('services');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`mt-12 px-8 py-4 bg-sixth-green text-primary-black font-permanent-marker text-xl md:text-2xl rounded-lg border-4 border-primary-black transform transition-all duration-300 shadow-[6px_6px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-1 hover:translate-y-1 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          Let's Work Together
        </button>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
    </section>
  );
};

export default Hero;