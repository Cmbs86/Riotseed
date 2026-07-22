import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import { renderTitle } from "../utils/renderTitle";

const cardColors = [
  "bg-primary-pink hover:bg-second-pink",
  "bg-third-pink hover:bg-fourth-pink",
  "bg-fifth-pink hover:bg-sixth-pink",
  "bg-sixth-pink hover:bg-seventh-pink",
  "bg-fourth-pink hover:bg-fifth-pink",
  "bg-primary-pink hover:bg-second-pink",
];

const Services = () => {
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

    const section = document.getElementById("services");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="services"
      className="flex flex-col items-center bg-second-pink"
    >
      <div className="w-full h-16 md:h-20"></div>

      <div className="w-full flex justify-center px-4">
        <h2
          className={`font-permanent-marker text-4xl md:text-5xl lg:text-6xl text-primary-black text-center transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          OUR SERVICES
        </h2>
      </div>

      <div className="w-full h-12 md:h-16"></div>

      <div className="w-full max-w-[350px] sm:max-w-[420px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1400px] px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 items-stretch">
          {services.map((service, index) => (
            <div
              key={service.slug}
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                willChange: "transform",
              }}
            >
              <Link
                to={`/services/${service.slug}`}
                className={`group relative z-10 flex flex-col h-full ${cardColors[index]} border-primary-black border-t border-r-4 border-b-4 border-l-4 rounded-xl shadow-[10px_10px_0px_#000000] hover:shadow-[3px_3px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] cursor-pointer`}
                style={{
                  transition:
                    "transform 0.45s ease-out, background-color 0.45s ease-out, box-shadow 0.3s ease-out",
                }}
              >
                <div className="flex flex-col flex-1 py-6 px-4">

                  <div className="flex items-center justify-center min-h-[72px] mb-4">
                    <h3 className="font-permanent-marker text-base md:text-lg xl:text-xl text-primary-black text-center leading-snug">
                      {renderTitle(service.title)}
                    </h3>
                  </div>

                  <div className="flex-1 flex items-start justify-center">
                    <p className="font-plus-jakarta-sans text-sm md:text-base font-semibold text-primary-black text-center leading-relaxed w-[90%]">
                      {service.teaser}
                    </p>
                  </div>

                  <div className="flex justify-center pt-6 transition-all duration-500 ease-out group-hover:translate-y-1 group-hover:scale-110">
                    <svg
                      className="w-7 h-7 text-primary-black"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </div>

                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-12 md:h-14"></div>

      <div className="w-full flex justify-center px-4">
        <div className={`${isVisible ? "animate-bounce" : ""}`}>
          <p
            className={`font-shantell-sans text-base md:text-xl text-primary-black text-center transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Click to learn more about our services
          </p>
        </div>
      </div>

      <div className="w-full h-16 md:h-20"></div>
      <div className="w-full h-1 bg-primary-black"></div>
    </section>
  );
};

export default Services;