import { useState, useEffect, useRef } from "react";
import type { Service } from "../types";

type ServiceDetailCard = Service & {
  color: string;
  hoverColor: string;
  description: string[];
};

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const handleMouseEnter = (id: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => setHoveredCard(id), 300);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setHoveredCard(null);
  };

  const services: ServiceDetailCard[] = [
    {
      id: "marketing-seo",
      title: "Marketing SEO",
      color: "bg-primary-pink",
      hoverColor: "hover:bg-second-pink",
      description: [
        "Our Marketing SEO services are designed to elevate your brand's online presence and drive organic traffic to your website. We combine cutting-edge SEO strategies with creative marketing approaches to ensure your content reaches the right audience at the right time.",
        "From keyword research and on-page optimization to link building and content strategy, we provide comprehensive SEO solutions tailored to your business goals. Our team stays ahead of search engine algorithm updates to keep your brand visible and competitive in the digital landscape.",
      ],
    },
    {
      id: "playlist-pitching",
      title: "Playlist Pitching / PR",
      color: "bg-third-pink",
      hoverColor: "hover:bg-fourth-pink",
      description: [
        "Break through the noise with our professional playlist pitching and PR services. We leverage our extensive network of playlist curators, music journalists, and industry influencers to get your music in front of the right ears and amplify your reach across streaming platforms.",
        "Our strategic approach combines targeted playlist submissions with compelling press releases and media outreach. We craft your story, pitch to key tastemakers, and secure placements that drive streams, build fanbase, and establish your credibility in the music industry.",
      ],
    },
    {
      id: "website-creation",
      title: "Website Creation / Optimization",
      color: "bg-fifth-pink",
      hoverColor: "hover:bg-sixth-pink",
      description: [
        "Your website is your digital home, and we make sure it's both beautiful and functional. Our web creation and optimization services deliver stunning, user-friendly websites that convert visitors into fans and customers. We design with your brand identity in mind, ensuring every element tells your story.",
        "Beyond aesthetics, we optimize for performance, speed, mobile responsiveness, and SEO. Whether you need a brand new website from scratch or want to revamp your existing site, we create digital experiences that engage your audience and drive measurable results.",
      ],
    },
    {
      id: "paid-media",
      title: "Paid Media",
      color: "bg-sixth-pink",
      hoverColor: "hover:bg-seventh-pink",
      description: [
        "Maximize your ROI with our strategic paid media campaigns. We create and manage targeted advertising across platforms like Facebook, Instagram, Google Ads, and TikTok to reach your ideal audience and achieve your marketing objectives. Our data-driven approach ensures every dollar spent delivers value.",
        "From campaign strategy and creative development to continuous optimization and detailed reporting, we handle every aspect of your paid media efforts. We test, analyze, and refine to consistently improve performance and help you scale your marketing impact efficiently.",
      ],
    },
    {
      id: "personalised-services",
      title: "Personalised Services",
      color: "bg-fourth-pink",
      hoverColor: "hover:bg-fifth-pink",
      description: [
        "No two artists or brands are the same, and neither are our solutions. Our personalised services are built around your unique needs, goals, and vision. Whether you're an emerging artist looking for your first breakthrough or an established brand ready to scale, we craft a strategy that fits you perfectly.",
        "From one-on-one consultations to fully bespoke campaign packages, we take the time to understand your world before we start building yours. Tell us where you want to go — we'll figure out the best way to get you there.",
      ],
    },
  ];

  const isHovered = (id: string) => hoveredCard === id;

  const firstRow = services.slice(0, 4);
  const lastCard = services[4];

  const CardContent = ({ service }: { service: ServiceDetailCard }) => (
    <div
      className={`${service.color} ${service.hoverColor} rounded-lg border-4 border-primary-black relative z-10 overflow-hidden shadow-[6px_6px_0px_#000000] ${
        isHovered(service.id)
          ? "shadow-[2px_2px_0px_#000000] translate-x-1 translate-y-1 transition-all duration-700 ease-in-out"
          : "transition-all duration-400 ease-in-out"
      }`}
    >
      <div
        className={`flex flex-col items-center justify-center px-10 transition-all duration-700 ease-in-out ${
          isHovered(service.id) ? "pt-8 pb-5" : "h-48"
        }`}
      >
        <h2
          className={`font-permanent-marker text-primary-black text-center leading-tight transition-all duration-700 ease-in-out w-full ${
            isHovered(service.id)
              ? "text-xl md:text-2xl pb-4 border-b-4 border-primary-black"
              : "text-2xl md:text-3xl"
          }`}
        >
          {service.title}
        </h2>
      </div>

      <div
        className={`flex justify-center transition-all duration-500 ease-in-out ${
          isHovered(service.id)
            ? "opacity-0 max-h-0 overflow-hidden"
            : "opacity-100 max-h-16 pb-8"
        }`}
      >
        <svg
          className="w-8 h-8 text-primary-black"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>

      <div
        className={`overflow-hidden ${
          isHovered(service.id)
            ? "max-h-[600px] opacity-100 transition-all duration-700 ease-in-out"
            : "max-h-0 opacity-0 transition-all duration-[400ms] ease-in-out"
        }`}
      >
        <div className="px-10 pb-10 space-y-6">
          {service.description.map((paragraph, pIndex) => (
            <p
              key={pIndex}
              className="font-shantell-sans text-base md:text-lg font-bold text-primary-black leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-second-pink">
      <div className="w-full h-32"></div>

      <div className="w-full flex justify-center px-4 md:px-8">
        <h1
          className={`font-permanent-marker text-6xl md:text-8xl text-primary-green text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          OUR SERVICES
        </h1>
      </div>

      <div className="w-full h-20"></div>

      <div className="w-full flex justify-center px-8 md:px-16">
        <div className="w-full max-w-6xl flex flex-col" style={{ gap: "2.5rem" }}>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "2.5rem" }}>
            {firstRow.map((service, index) => (
              <div
                key={service.id}
                onMouseEnter={() => handleMouseEnter(service.id)}
                onMouseLeave={handleMouseLeave}
                className={`relative w-full ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                style={{
                  transitionDelay: `${index * 400}ms`,
                  transition: "opacity 1s, transform 1s",
                }}
              >
                <CardContent service={service} />
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div
              onMouseEnter={() => handleMouseEnter(lastCard.id)}
              onMouseLeave={handleMouseLeave}
              className={`relative w-full md:w-1/2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{
                transitionDelay: `${4 * 400}ms`,
                transition: "opacity 1s, transform 1s",
              }}
            >
              <CardContent service={lastCard} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-24"></div>
      <div className="w-full h-1 bg-primary-black"></div>
    </div>
  );
};

export default ServicesPage;


