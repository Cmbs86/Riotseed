import { useState, useEffect } from 'react';
import audePhoto from '../assets/images/Aude.webp';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="about"
      className="flex flex-col items-center bg-third-pink"
    >
      {/* Top spacer */}
      <div className="w-full h-24"></div>

      {/* Header */}
      <div className="w-full flex justify-center">
        <h2
          className={`font-permanent-marker text-5xl md:text-7xl text-primary-black text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          ABOUT
        </h2>
      </div>

      {/* Spacer */}
      <div className="w-full h-20"></div>

      {/* Split layout */}
      <div className="w-full max-w-6xl px-4 md:px-8">
        <div
          className={`flex flex-col md:flex-row items-stretch transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >

          {/* Left — Photo */}
          <div className="flex-1 flex items-center justify-center pb-12 md:pb-0 md:pr-12">
            <div className="relative">
              {/* Brutalist photo card */}
              <div className="border-4 border-primary-black shadow-[8px_8px_0px_#000000] overflow-hidden w-72 h-96 md:w-80 md:h-[420px]">
                <img
                  src={audePhoto}
                  alt="Aude Bibidibabidibubi"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Name tag — brutalist label underneath photo */}
              <div className="mt-0 border-4 border-t-0 border-primary-black bg-primary-green shadow-[8px_8px_0px_#000000] px-4 py-3">
                <p className="font-permanent-marker text-xl text-primary-black text-center">
                  Aude Bibidibabidibubidi
                </p>
              </div>
            </div>
          </div>

          {/* Vertical divider — hidden on mobile */}
          <div className="hidden md:block w-1 bg-primary-black self-stretch"></div>

          {/* Horizontal divider — visible on mobile only */}
          <div className="block md:hidden w-full h-1 bg-primary-black mb-12"></div>

          {/* Right — Bio */}
          <div className="flex-1 flex flex-col items-start justify-center md:pl-12">
            <p className="font-shantell-sans text-base md:text-lg font-bold text-primary-black leading-relaxed mb-6">
              I don't do things by halves — and I don't do boring. With years of experience tearing through the music and creative industries, I built Riotseed to give artists and brands the raw, unapologetic strategy they actually deserve.
            </p>
            <p className="font-shantell-sans text-base md:text-lg font-bold text-primary-black leading-relaxed mb-6">
              I believe the best marketing doesn't feel like marketing at all — it feels like a movement. Whether it's getting your track on the right playlist, building a website that actually converts, or crafting a campaign that cuts through the noise, I bring the same obsessive energy to every project.
            </p>
            <p className="font-shantell-sans text-base md:text-lg font-bold text-primary-black leading-relaxed">
              Ready to make some noise? Let's go. 🖤
            </p>
          </div>

        </div>
      </div>

      {/* Bottom spacer */}
      <div className="w-full h-24"></div>
    </section>
  );
};

export default About;