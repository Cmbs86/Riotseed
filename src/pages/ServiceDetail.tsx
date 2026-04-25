import { useMemo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { services } from "../data/services";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = useMemo(
    () => services.find((item) => item.slug === slug),
    [slug],
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      {/* Fixed-header spacer, same idea as ProjectDetail */}
      <div className="h-52 md:h-60 lg:h-64 w-full" />

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[920px] flex flex-col items-center">
            <h1 className="font-permanent-marker text-6xl md:text-8xl text-primary-black text-center leading-none mb-16">
              OUR SERVICES
            </h1>

            <article className="w-full max-w-[680px] bg-primary-pink border-4 border-primary-black rounded-lg shadow-[8px_8px_0px_#000000] px-7 py-10 md:px-12 md:py-14">
              <h2 className="font-permanent-marker text-4xl md:text-6xl text-primary-black text-center leading-tight mb-8">
                {service.title}
              </h2>

              <p className="font-shantell-sans text-lg md:text-2xl font-bold text-primary-black text-center leading-relaxed max-w-[34rem] mx-auto mb-10">
                {service.teaser}
              </p>

              <div className="w-full h-1 bg-primary-black mb-10" />

              <div className="flex flex-col items-center gap-7">
                {service.description.map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-shantell-sans text-base md:text-lg font-bold text-primary-black leading-relaxed text-center max-w-[32rem]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="flex justify-center mt-12">
                <Link
                  to="/"
                  className="font-permanent-marker text-xl text-primary-black bg-primary-green border-4 border-primary-black rounded-lg px-6 py-3 shadow-[5px_5px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-100"
                >
                  Back to Services
                </Link>
              </div>
            </article>
          </div>
        </div>

        <div className="h-24 md:h-28 w-full" />
      </div>

      <div className="w-full h-1 bg-primary-black" />
    </section>
  );
};

export default ServiceDetail;