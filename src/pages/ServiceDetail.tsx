import { useMemo, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { services } from "../data/services";

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
      <section className="min-h-screen bg-second-pink flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-permanent-marker text-4xl md:text-6xl text-primary-black mb-6">
            Service not found
          </h1>

          <Link
            to="/"
            className="font-shantell-sans text-lg md:text-xl font-bold text-primary-black underline"
          >
            Back to home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-second-pink">
      {/* Space for fixed header */}
      <div className="h-28 w-full" />

      {/* Page Title */}
      <div className="w-full min-h-[12rem] flex items-center justify-center">
        <h1 className="font-permanent-marker text-6xl md:text-8xl text-primary-black text-center leading-none">
          OUR SERVICES
        </h1>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-16">
        <div className="w-full flex justify-center">
          {/* FLEX COLUMN WRAPPER (this is the key fix) */}
          <div className="w-full max-w-[920px] min-h-[60vh] flex flex-col items-center">
            {/* CARD */}
            <article className="w-full max-w-[760px] bg-primary-pink border-4 border-primary-black rounded-lg shadow-[8px_8px_0px_#000000] px-8 pt-12 pb-20 md:px-14 md:pt-16 md:pb-24">
              <h2 className="font-permanent-marker text-4xl md:text-5xl text-primary-black text-center leading-tight mb-10">
                {service.title}
              </h2>

              <div className="w-full h-1 bg-primary-black mb-12" />

              <div className="flex flex-col items-center gap-8">
                {service.description.map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-sedgwick-ave text-base md:text-xl font-bold text-primary-black leading-relaxed text-center max-w-[38rem]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>

            {/* FLEXIBLE SPACE (pushes button down) */}
            <div className="flex-1 min-h-[6rem] md:min-h-[8rem]" />

            {/* BUTTON */}
            <button
              onClick={handleBackToServices}
              className="
    font-permanent-marker text-xl
    text-primary-black
    bg-primary-green
    border-4 border-primary-black
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

        {/* FOOTER SPACING (same idea as ProjectDetail) */}
        <div className="h-24 md:h-32 w-full" />
      </div>

      {/* Bottom border */}
      <div className="w-full h-1 bg-primary-black" />
    </section>
  );
};

export default ServiceDetail;
