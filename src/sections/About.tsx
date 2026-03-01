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
     <style>{`
  .about-photo-col {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
  .about-divider-v {
    width: 4px;
    background-color: #000000;
    display: none;
  }
  .about-divider-h {
    width: 100%;
    height: 4px;
    background-color: #000000;
    margin-top: 4rem;
    margin-bottom: 4rem;
    display: block;
  }
  .about-bio-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex: 1;
  }
  .about-bio-col p {
    max-width: 520px;
  }
  .about-layout {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  @media (min-width: 768px) {
    .about-layout {
      flex-direction: row;
    }
    .about-photo-col {
      justify-content: flex-end;
      padding-right: 5rem;
      padding-bottom: 0;
    }
    .about-divider-v {
      display: block;
      align-self: stretch;
    }
    .about-divider-h {
      display: none;
    }
    .about-bio-col {
      align-items: flex-start;
      text-align: left;
      padding-left: 5rem;
    }
  }
`}</style>

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
      <div className="w-full max-w-6xl px-6 md:px-8">
        <div
          className={`about-layout transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >

          {/* Photo */}
          <div className="about-photo-col">
            <div>
              <div
                className="border-4 border-primary-black shadow-[8px_8px_0px_#000000]"
                style={{ width: '280px', height: '340px', overflow: 'hidden' }}
              >
                <img
                  src={audePhoto}
                  alt="Aude Bibidibabidibubi"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 10%'
                  }}
                />
              </div>
              <div
                className="border-4 border-t-0 border-primary-black bg-primary-green shadow-[8px_8px_0px_#000000] px-4 py-3"
                style={{ width: '280px' }}
              >
                <p className="font-permanent-marker text-xl text-primary-black text-center">
                  Aude Bibidibabidibubi
                </p>
              </div>
            </div>
          </div>

          {/* Vertical divider — desktop */}
          <div className="about-divider-v"></div>

          {/* Horizontal divider — mobile */}
          <div className="about-divider-h"></div>

          {/* Bio */}
          <div className="about-bio-col">
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