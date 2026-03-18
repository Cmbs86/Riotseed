import { useState, useEffect } from "react";
import audePhoto from "../assets/images/Aude.webp";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about" className="w-full bg-third-pink relative">
      <style>{`
        .about-photo-col {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          padding: 4rem 2rem;
        }
        .about-divider-absolute {
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
          padding: 4rem 2rem;
        }
        .about-bio-inner {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 480px;
        }
        .about-layout {
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }
        .about-header-mobile {
          display: block;
          text-align: center;
          padding-top: 4rem;
        }
        .about-header-desktop {
          display: none;
        }
        @media (min-width: 768px) {
          .about-divider-absolute {
            display: block;
            position: absolute;
            left: calc(50% - 2px);
            top: 0;
            bottom: 0;
            width: 4px;
            background-color: #000000;
          }
          .about-divider-h {
            display: none;
          }
          .about-layout {
            flex-direction: row;
            max-width: 1400px;
            margin: 0 auto;
            width: 100%;
          }
          .about-photo-col {
            flex: 1;
            justify-content: center;
            padding: 8rem 4rem;
          }
          .about-bio-col {
            flex: 1;
            align-items: center;
            text-align: left;
            padding: 4rem 5rem 4rem 6rem;
            justify-content: center;
          }
          .about-bio-inner {
            max-width: 520px;
          }
          .about-header-mobile {
            display: none;
          }
          .about-header-desktop {
            display: block;
            margin-bottom: 3rem;
          }
        }
        @media (min-width: 1920px) {
          .about-layout {
            max-width: 2400px;
          }
          .about-photo-col {
            padding: 10rem 6rem;
          }
          .about-bio-col {
            padding: 6rem 7rem 8rem 8rem;
          }
          .about-bio-inner {
            max-width: 500px;
          }
        }
      `}</style>

      {/* Absolute vertical divider — desktop only, always full height */}
      <div className="about-divider-absolute"></div>

      {/* Mobile header */}
      <div className="about-header-mobile">
        <h2 className={`font-permanent-marker text-5xl text-primary-black text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}>
          ABOUT
        </h2>
      </div>

      <div className="block md:hidden h-8"></div>

      {/* Split layout */}
      <div className="w-full">
        <div
          className={`about-layout transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          {/* Photo */}
          <div className="about-photo-col">
            <div>
              <div
                className="border-4 border-primary-black shadow-[8px_8px_0px_#000000]"
                style={{ width: "280px", height: "340px", overflow: "hidden" }}
              >
                <img
                  src={audePhoto}
                  alt="Aude Bibidibabidibubi"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 10%",
                  }}
                />
              </div>
              <div
                className="border-4 border-t-0 border-primary-black bg-primary-green shadow-[8px_8px_0px_#000000] px-4 py-3"
                style={{ width: "280px" }}
              >
                <p className="font-permanent-marker text-xl text-primary-black text-center">
                  Aude Bibidibabidibubi
                </p>
              </div>
            </div>
          </div>

          {/* Horizontal divider — mobile only */}
          <div className="about-divider-h"></div>

          {/* Bio */}
          <div className="about-bio-col">
            <h2 className={`about-header-desktop font-permanent-marker text-5xl md:text-7xl text-primary-black transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}>
              ABOUT
            </h2>
            <div className="about-bio-inner">
              <p className="font-shantell-sans text-base md:text-lg font-bold text-primary-black leading-relaxed">
                I don't do things by halves — and I don't do boring. With years of
                experience tearing through the music and creative industries, I
                built Riotseed to give artists and brands the raw, unapologetic
                strategy they actually deserve.
              </p>
              <p className="font-shantell-sans text-base md:text-lg font-bold text-primary-black leading-relaxed">
                I believe the best marketing doesn't feel like marketing at all —
                it feels like a movement. Whether it's getting your track on the
                right playlist, building a website that actually converts, or
                crafting a campaign that cuts through the noise, I bring the same
                obsessive energy to every project.
              </p>
              <p className="font-shantell-sans text-base md:text-lg font-bold text-primary-black leading-relaxed">
                Ready to make some noise? Let's go. 🖤
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="block md:hidden h-8"></div>
   <div className="w-full h-1 bg-primary-black"></div>
    </section>
  );
};

export default About;