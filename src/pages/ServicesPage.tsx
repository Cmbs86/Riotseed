import { useState, useEffect } from 'react';

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'marketing-seo',
      title: 'Marketing SEO',
      color: 'bg-primary-pink',
      hoverColor: 'hover:bg-second-pink',
      description: [
        'Our Marketing SEO services are designed to elevate your brand\'s online presence and drive organic traffic to your website. We combine cutting-edge SEO strategies with creative marketing approaches to ensure your content reaches the right audience at the right time.',
        'From keyword research and on-page optimization to link building and content strategy, we provide comprehensive SEO solutions tailored to your business goals. Our team stays ahead of search engine algorithm updates to keep your brand visible and competitive in the digital landscape.'
      ]
    },
    {
      id: 'playlist-pitching',
      title: 'Playlist Pitching / PR',
      color: 'bg-third-pink',
      hoverColor: 'hover:bg-fourth-pink',
      description: [
        'Break through the noise with our professional playlist pitching and PR services. We leverage our extensive network of playlist curators, music journalists, and industry influencers to get your music in front of the right ears and amplify your reach across streaming platforms.',
        'Our strategic approach combines targeted playlist submissions with compelling press releases and media outreach. We craft your story, pitch to key tastemakers, and secure placements that drive streams, build fanbase, and establish your credibility in the music industry.'
      ]
    },
    {
      id: 'website-creation',
      title: 'Website Creation / Optimization',
      color: 'bg-fifth-pink',
      hoverColor: 'hover:bg-sixth-pink',
      description: [
        'Your website is your digital home, and we make sure it\'s both beautiful and functional. Our web creation and optimization services deliver stunning, user-friendly websites that convert visitors into fans and customers. We design with your brand identity in mind, ensuring every element tells your story.',
        'Beyond aesthetics, we optimize for performance, speed, mobile responsiveness, and SEO. Whether you need a brand new website from scratch or want to revamp your existing site, we create digital experiences that engage your audience and drive measurable results.'
      ]
    },
    {
      id: 'paid-media',
      title: 'Paid Media',
      color: 'bg-sixth-pink',
      hoverColor: 'hover:bg-seventh-pink',
      description: [
        'Maximize your ROI with our strategic paid media campaigns. We create and manage targeted advertising across platforms like Facebook, Instagram, Google Ads, and TikTok to reach your ideal audience and achieve your marketing objectives. Our data-driven approach ensures every dollar spent delivers value.',
        'From campaign strategy and creative development to continuous optimization and detailed reporting, we handle every aspect of your paid media efforts. We test, analyze, and refine to consistently improve performance and help you scale your marketing impact efficiently.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-second-pink">
      {/* Top spacer */}
      <div className="w-full h-32"></div>

      {/* Page Header */}
      <div className="w-full flex justify-center px-4 md:px-8">
        <h1 
          className={`font-permanent-marker text-6xl md:text-8xl text-primary-green text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          OUR SERVICES
        </h1>
      </div>

      {/* Spacer */}
      <div className="w-full h-20"></div>

      {/* Services Cards Grid */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: `${index * 400}ms`,
                transition: 'opacity 1s, transform 1s'
              }}
            >
              {/* Card */}
              <div className={`${service.color} ${service.hoverColor} py-10 px-8 rounded-lg border-4 border-primary-black transition-all duration-700 ease-out hover:shadow-2xl relative z-10`}>
                {/* Card Header - Always Visible */}
                <div className="flex flex-col items-center justify-center min-h-[220px]">
                  <h2 className="font-permanent-marker text-2xl md:text-3xl text-primary-black text-center leading-tight">
                    {service.title}
                  </h2>
                  
                  {/* Arrow indicator */}
                  <div className={`mt-8 transition-transform duration-700 ease-out ${
                    hoveredCard === service.id ? 'rotate-180' : ''
                  }`}>
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
                </div>

                {/* Expanded Content - Slides down from card */}
                <div className={`overflow-hidden transition-all duration-700 ease-out ${
                  hoveredCard === service.id ? 'max-h-[600px] opacity-100 mt-6' : 'max-h-0 opacity-0'
                }`}>
                  <div className="space-y-4 pt-6 border-t-2 border-primary-black">
                    {service.description.map((paragraph, pIndex) => (
                      <p 
                        key={pIndex}
                        className="font-shantell-sans text-base text-primary-black leading-relaxed text-left"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="w-full h-24"></div>
    </div>
  );
};

export default ServicesPage;