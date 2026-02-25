import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
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

    const section = document.getElementById('services');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const services = [
    {
      id: 'marketing-seo',
      title: 'Marketing SEO',
      color: 'bg-primary-pink',
      hoverColor: 'hover:bg-second-pink',
    },
    {
      id: 'playlist-pitching-pr',
      title: 'Playlist Pitching / PR',
      color: 'bg-third-pink',
      hoverColor: 'hover:bg-fourth-pink',
    },
    {
      id: 'website-creation',
      title: 'Website Creation / Optimization',
      color: 'bg-fifth-pink',
      hoverColor: 'hover:bg-sixth-pink',
    },
    {
      id: 'paid-media',
      title: 'Paid Media',
      color: 'bg-sixth-pink',
      hoverColor: 'hover:bg-seventh-pink',
    },
  ];

  return (
    <section 
      id="services" 
      className="flex flex-col items-center bg-third-pink"
    >
      {/* Top spacer */}
      <div className="w-full h-24"></div>

      {/* Header wrapper */}
      <div className="w-full flex justify-center">
        <h2 
          className={`font-permanent-marker text-5xl md:text-7xl text-primary-black text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          OUR SERVICES
        </h2>
      </div>

      {/* Spacer between header and cards */}
      <div className="w-full h-20"></div>

      {/* Cards wrapper */}
      <div className="w-full max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.id}
              to="/services"
              className={`group ${service.color} ${service.hoverColor} py-10 px-8 rounded-lg border-4 border-primary-black shadow-[6px_6px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transition: 'opacity 1s, transform 0.5s ease-out, background-color 0.5s ease-out, box-shadow 0.3s ease-out',
                transitionDelay: `${index * 400}ms, 0s, 0s, 0s`
              }}
            >
              <div className="flex flex-col items-center justify-center h-full min-h-[220px]">
                <h3 className="font-permanent-marker text-2xl md:text-3xl text-primary-black text-center transition-transform duration-500 ease-out group-hover:-translate-y-2 leading-tight">
                  {service.title}
                </h3>
                
                {/* Arrow indicator */}
                <div className="mt-8 transition-all duration-500 ease-out group-hover:translate-y-1 group-hover:scale-110">
                  <svg 
                    className="w-8 h-8 text-primary-black" 
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

      {/* Spacer between cards and tagline */}
      <div className="w-full h-16"></div>

      {/* Tagline wrapper */}
      <div className="w-full flex justify-center">
        <div className={`${isVisible ? 'animate-bounce' : ''}`}>
          <p 
            className={`font-shantell-sans text-xl md:text-2xl text-primary-black text-center transition-all duration-1000 delay-1200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Click to learn more about our services
          </p>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="w-full h-24"></div>

    </section>
  );
};

export default Services;