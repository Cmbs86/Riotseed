import { useState, useEffect } from "react";
import audePhoto from "../assets/images/Aude.webp";

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
      <div className="hidden lg:block h-16 lg:h-20 w-full" />

      <div className="block lg:hidden text-center pt-16">
        <h2
          className={`font-permanent-marker text-5xl md:text-6xl text-primary-black transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          ABOUT
        </h2>
      </div>

      <div className="block lg:hidden h-8" />

      <div className="w-full">
        <div
          className={`flex flex-col lg:flex-row items-stretch w-full max-w-[1400px] 2xl:max-w-[2400px] mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="flex flex-1 items-start justify-center px-8 py-16 lg:px-16 lg:pt-32 lg:pb-16 2xl:px-24 2xl:pt-40 2xl:pb-24">
            <div className="lg:h-[92%]">
              <div className="lg:sticky lg:top-40">
                <div className="w-[300px] h-[370px] lg:w-[320px] lg:h-[400px] overflow-hidden border-4 border-primary-black shadow-[8px_8px_0px_#000000]">
                  <img
                    src={audePhoto}
                    alt="Aude"
                    className="w-full h-full object-cover object-[center_10%]"
                  />
                </div>

                <div className="w-[300px] lg:w-[320px] border-4 border-t-0 border-primary-black bg-primary-green shadow-[8px_8px_0px_#000000] px-4 py-3">
                  <p className="font-permanent-marker text-xl text-primary-black text-center">
                    Aude
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="block lg:hidden w-full h-1 bg-primary-black my-16" />

          <div className="flex flex-1 flex-col justify-start items-center text-center lg:text-left px-8 py-16 lg:px-20 lg:pt-32 lg:pb-16 2xl:px-28 2xl:pt-40 2xl:pb-32">
            <h2
              className={`hidden lg:block font-permanent-marker text-5xl lg:text-7xl text-primary-black mb-12 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
              }`}
            >
              ABOUT
            </h2>

            <div className="flex flex-col gap-6 max-w-[480px] lg:max-w-[520px] 2xl:max-w-[500px] w-full">
              <div className="h-2 lg:h-4 w-full" />

              <p className="font-shantell-sans text-base lg:text-lg font-bold text-primary-black leading-relaxed">
                I’m Aude - French, Berlin-based, full of tattoos, and obsessed
                with music since my teenage years when I first discovered punk
                and never looked back.
              </p>

              <p className="font-shantell-sans text-base lg:text-lg font-bold text-primary-black leading-relaxed">
                I’ve spent 12+ years in the music industry, on pretty much every
                side of the table. I started at independent punk and rock labels
                - SideOneDummy and People Like You Records - Then moved to OÜI
                FM, France’s national rock radio, where I worked alongside
                labels, festivals like Hellfest and Rock en Seine, and built
                partnership programs from scratch. After that: Viacom/MTV, Vice
                Media, and six years at Spotify, where I managed 250+ campaigns
                a year and learned exactly how the biggest streaming platform in
                the world works from the inside.
              </p>

              <p className="font-shantell-sans text-base lg:text-lg font-bold text-primary-black leading-relaxed">
                But through all of that, I never stopped being part of the
                scene. I play guitar in a FLINTA punk hardcore band. I go to
                shows constantly: from Berlin basements to European festivals. I
                moved to Berlin because the underground music scene here is
                unlike anywhere else in the world. This city is where punk, DIY
                culture, and creative chaos collide. It felt like home from day
                one.
              </p>

              <p className="font-shantell-sans text-base lg:text-lg font-bold text-primary-black leading-relaxed">
                I built Riotseed because I saw a gap that kept bothering me:
                bands in development - the ones playing incredible music in
                small venues and booking their own tours - almost never have
                access to professional marketing. The budgets are too small, the
                agencies too expensive, and the tools too confusing. I wanted to
                change that.
              </p>

              <p className="font-shantell-sans text-base lg:text-lg font-bold text-primary-black leading-relaxed">
                Riotseed is a female-run agency that brings real industry
                experience to DIY and independent bands. No corporate bullshit,
                no inflated budgets. Just someone who knows the scene, knows the
                platforms, and knows how to make things happen for bands who
                deserve to be heard.
              </p>

              <p className="font-shantell-sans text-base lg:text-lg font-bold text-primary-black leading-relaxed">
                If your music is real, your marketing should be too.
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