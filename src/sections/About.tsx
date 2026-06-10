import { useState, useEffect } from "react";
import audePhoto from "../assets/images/aude-leteurtre.webp";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
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
    <section id="about" className="w-full bg-second-pink relative">
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-primary-black" />
      <div className="block h-12 lg:h-20 w-full" />

      <div className="block lg:hidden text-center">
        <h2
          className={`font-permanent-marker text-5xl md:text-6xl text-primary-black transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          ABOUT
        </h2>
      </div>

      <div className="block lg:hidden h-8" />

      <div className="w-full">
        <div
          className={`flex flex-col lg:flex-row items-stretch w-full max-w-450 2xl:max-w-600 mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="flex flex-1 items-start justify-center px-8 py-16 lg:px-16 lg:pt-32 lg:pb-16 2xl:px-24 2xl:pt-40 2xl:pb-24">
            <div className="lg:h-[92%]">
              <div className="lg:sticky lg:top-40">
                <div className="w-75 h-92.5 lg:w-[320px] lg:h-100 overflow-hidden border-4 border-primary-black shadow-[8px_8px_0px_#000000]">
                  <img
                    src={audePhoto}
                    alt="Aude"
                    className="w-full h-full object-cover object-[left_center]"
                  />
                </div>

                <div className="w-75 lg:w-[320px] border-4 border-t-0 border-primary-black bg-primary-green shadow-[8px_8px_0px_#000000] px-4 py-3">
                  <p className="font-permanent-marker text-xl text-primary-black text-center">
                    Aude
                  </p>
                </div>
                {/* Mobile / tablet spacer below image card */}
                <div className="block lg:hidden h-12" />
              </div>
            </div>
          </div>

          <div className="block lg:hidden w-full h-1 bg-primary-black my-16" />
          {/* needs to be fixed on mobile somehow... */}

          <div className="flex flex-1 flex-col justify-start items-center text-center lg:text-left px-8 py-16 lg:px-20 lg:pt-32 lg:pb-16 2xl:px-28 2xl:pt-40 2xl:pb-32">
            <h2
              className={`hidden lg:block font-permanent-marker text-5xl lg:text-7xl text-primary-black mb-12 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-10"
              }`}
            >
              ABOUT
            </h2>

            <div className="flex flex-col gap-6 max-w-120 lg:max-w-130 2xl:max-w-125 w-full">
              <div className="h-2 lg:h-4 w-full" />

              <p className="font-plus-jakarta-sans text-base lg:text-lg font-semibold text-primary-black leading-relaxed">
                I’m Aude! French, Berlin-based, full of tattoos, and obsessed
                with music since my teenage years when I first discovered punk
                and never looked back.
              </p>

              <p className="font-plus-jakarta-sans text-base lg:text-lg font-semibold text-primary-black leading-relaxed">
                12+ years in the industry, on every side of the table:
                independent punk labels (SideOneDummy, People Like You Records),
                national rock radio (OÜI FM), Viacom/MTV, Vice Media, and six
                years at Spotify managing marketing ad campaigns.
              </p>

              <p className="font-plus-jakarta-sans text-base lg:text-lg font-semibold ital text-primary-black leading-relaxed">
                But I never stopped being part of the scene. I play guitar in a
                FLINTA punk hardcore band, go to shows constantly, and moved to
                Berlin for the underground scene. There’s nowhere else like it.
              </p>

              <p className="font-plus-jakarta-sans text-base lg:text-lg font-semibold text-primary-black leading-relaxed">
                I built Riotseed because bands in development almost never have
                access to professional marketing. The budgets are too small, the
                agencies too expensive. I wanted to change that.
              </p>

              <p className="font-plus-jakarta-sans text-base lg:text-lg font-semibold text-primary-black leading-relaxed">
                Female-run. No corporate bullshit. If your music is real, your
                marketing should be too.
              </p>

              <p className="font-plus-jakarta-sans text-base lg:text-lg font-extrabold text-primary-black leading-relaxed">
                So, let’s plant the seed. And watch it riot!
              </p>

              <div className="h-10 lg:h-16 w-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden h-8" />
      <div className="w-full h-1 bg-primary-black" />
    </section>
  );
};

export default About;
