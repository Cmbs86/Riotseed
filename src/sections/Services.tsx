import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/services";

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

      <div className="w-full max-w-[1180px] 2xl:max-w-[1320px] px-5 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className={`group ${cardColors[index]} py-8 px-5 rounded-lg border-4 border-primary-black shadow-[6px_6px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-1 hover:translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{
                transition:
                  "opacity 1s, transform 0.45s ease-out, background-color 0.45s ease-out, box-shadow 0.3s ease-out",
                transitionDelay: `${index * 150}ms, 0s, 0s, 0s`,
              }}
            >
              <div className="grid h-full min-h-[210px] lg:min-h-[220px] grid-rows-[72px_1fr_32px] items-start">
                <h3 className="font-permanent-marker text-base md:text-lg xl:text-xl text-primary-black text-center transition-transform duration-500 ease-out group-hover:-translate-y-1 leading-none flex items-center justify-center h-full">
                  {service.title}
                </h3>

                <p className="font-shantell-sans text-xs md:text-sm font-bold text-primary-black text-center leading-relaxed mt-3 flex items-start justify-center">
                  {service.teaser}
                </p>

                <div className="mt-4 flex justify-center transition-all duration-500 ease-out group-hover:translate-y-1 group-hover:scale-110">
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
