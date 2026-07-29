import { useMemo, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { services } from "../data/services";
import { renderTitle } from "../utils/renderTitle";
import NotFoundMessage from "../components/NotFoundMessage";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const service = useMemo(
    () => services.find((item) => item.slug === slug),
    [slug],
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToServices = () => {
    navigate("/");

    setTimeout(() => {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  if (!service) {
    return (
      <NotFoundMessage
        title="Service not found"
        message="“Wrong stage? Let's get you back on track.”"
        onBackClick={handleBackToServices}
        backLabel="Back to services"
      />
    );
  }


  return (
    <section className="min-h-screen bg-second-pink">
      {/* Space for fixed header */}
      <div className="h-24 md:h-32 lg:h-38 w-full" />

      {/* Page Title */}
      <div className="w-full min-h-28 md:min-h-36 flex items-center justify-center">
        <h1 className="font-permanent-marker text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-black text-center leading-none">
          OUR SERVICES
        </h1>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-16">
        <div className="w-full flex justify-center">
          {/* FLEX COLUMN WRAPPER */}
          <div className="w-full max-w-230 min-h-[60vh] flex flex-col items-center">
            <div className="h-6 md:h-10 lg:h-12 w-full" />

            {/* CARD */}
            <article
              className="
                w-full max-w-[92vw] sm:max-w-170 lg:max-w-190
                bg-sixth-pink
                border-t-2 border-r-6 border-l-2 border-b-6 border-primary-black
                rounded-lg
                shadow-[5px_5px_0px_#000000] md:shadow-[8px_8px_0px_#000000]
                px-5 pt-8 pb-12
                sm:px-8 sm:pt-10 sm:pb-14
                md:px-14 md:pt-16 md:pb-20
              "
            >
              <h2 className="font-permanent-marker  text-2xl sm:text-3xl md:text-4xl text-primary-black text-center leading-tight mb-8 md:mb-10">
                {renderTitle(service.title)}
              </h2>

              <div className="w-full h-1.5 md:h-2 bg-primary-black mb-8 md:mb-12" />

              <div className="h-3 md:h-6 w-full" />

              <div className="flex flex-col items-center gap-6 md:gap-8">
                {service.description.map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-plus-jakarta-sans text-base sm:text-lg md:text-xl font-bold text-primary-black leading-relaxed text-center max-w-lg md:max-w-152"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="h-6 md:h-8 w-full" />
            </article>

            <div className="h-14 md:h-20 w-full" />

            <button
              onClick={handleBackToServices}
              className="
                font-permanent-marker text-xl
                text-primary-black
                bg-primary-green
                border-t-2 border-r-4 border-l-2 border-b-4 border-primary-black
                rounded-lg
                w-50 h-13
                flex items-center justify-center
                shadow-[5px_5px_0px_#000000]
                hover:shadow-[2px_2px_0px_#000000]
                hover:translate-x-0.75
                hover:translate-y-0.75
                transition-all duration-500
              "
            >
              Back to Services
            </button>
          </div>
        </div>

        <div className="h-24 md:h-32 w-full" />
      </div>

      <div className="w-full h-1 bg-primary-black" />
    </section>
  );
};

export default ServiceDetail;