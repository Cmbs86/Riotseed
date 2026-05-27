import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

const InstagramIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const TikTokIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="w-8 h-8"
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
  </svg>
);

const SpotifyIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="w-8 h-8"
    fill="currentColor"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.623.623 0 0 1-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 0 1-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.623.623 0 0 1 .207.857zm1.224-2.723a.78.78 0 0 1-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 0 1-.973-.519.78.78 0 0 1 .519-.972c3.632-1.102 8.147-.568 11.234 1.328a.78.78 0 0 1 .257 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.937.937 0 1 1-.543-1.794c3.532-1.072 9.404-.865 13.115 1.338a.937.937 0 0 1-.954 1.612z" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="w-8 h-8"
    fill="currentColor"
  >
    <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6H16.7V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V11H7.2v3H10V22h3.5Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="w-8 h-8"
    fill="currentColor"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WebsiteIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a15 15 0 0 1 0 18" />
    <path d="M12 3a15 15 0 0 0 0 18" />
  </svg>
);

const BandcampIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="w-8 h-8"
    fill="currentColor"
  >
    <path d="M3 17.5 8.7 6.5H21v11H3Zm6.9-9.2-4.1 7.4h13.4V8.3H9.9Z" />
  </svg>
);

const socialIconClass =
  "text-primary-black hover:text-primary-green transition-all duration-100 hover:-translate-y-[3px]";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = useMemo(
    () => projects.find((item) => item.slug === slug),
    [slug],
  );

  if (!project) {
    return (
      <section className="min-h-screen bg-second-pink flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-permanent-marker text-4xl md:text-6xl text-primary-black mb-6">
            Project not found
          </h1>
          <p className="font-shantell-sans text-lg md:text-xl text-primary-black">
            This project page does not exist yet.
          </p>
        </div>
      </section>
    );
  }

  const description = project.description ?? [];
  const whatWeDid = project.whatWeDid ?? [];

  const results = project.results ?? [];

  const testimonial = project.testimonial;

  const hasInfo =
    project.info?.label || project.info?.pr || project.info?.contact;

  const socialLinks = {
    instagram: project.socials?.instagram,
    tiktok: project.socials?.tiktok,
    spotify: project.socials?.spotify,
    facebook: project.socials?.facebook,
    bandcamp: project.socials?.bandcamp,
    linkedin: project.socials?.linkedin,
    website: project.socials?.website,
  };

  const socialIcons = {
    instagram: <InstagramIcon />,
    tiktok: <TikTokIcon />,
    spotify: <SpotifyIcon />,
    facebook: <FacebookIcon />,
    bandcamp: <BandcampIcon />,
    linkedin: <LinkedInIcon />,
    website: <WebsiteIcon />,
  };

  const socialLabels = {
    instagram: "Instagram",
    tiktok: "TikTok",
    spotify: "Spotify",
    facebook: "Facebook",
    bandcamp: "Bandcamp",
    linkedin: "LinkedIn",
    website: "Website",
  };

  const socialOrder = project.socialOrder ?? [
    "instagram",
    "tiktok",
    "facebook",
    "linkedin",
    "website",
    "bandcamp",
    "spotify",
  ];

  const hasSocials = socialOrder.some((key) => {
    const socialKey = key as keyof typeof socialLinks;
    return Boolean(socialLinks[socialKey]);
  });

  return (
    <section className="min-h-screen bg-second-pink">
      <div className="h-40 md:h-44 lg:h-48 w-full" />

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-380">
            <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,500px)_minmax(0,500px)] gap-8 xl:gap-32 2xl:gap-48 project-detail-grid justify-center items-start">
              {/* LEFT COLUMN */}
              <div className="w-full xl:sticky xl:top-40 self-start">
                <div className="w-full border-4 border-primary-black shadow-[8px_8px_0px_#000000] overflow-hidden bg-third-black">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-85 sm:h-110 md:h-140 object-cover object-[center_5%]"
                    />
                  ) : (
                    <div
                      className="w-full h-85 sm:h-110 md:h-140"
                      style={{ background: project.gradient ?? "#1a1a1a" }}
                    />
                  )}
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="w-full h-full flex flex-col justify-start items-center lg:items-center gap-8 lg:gap-10">
                {/* Title */}
                <div className="text-center lg:text-left">
                  <h1 className="font-permanent-marker text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-primary-black leading-none mb-6 md:mb-8">
                    {project.title}
                  </h1>

                  {project.subtitle && (
                    <p className="font-sedgwick-ave-display text-center sm:text-lg md:text-lg font-bold text-primary-black mb-8 md:mb-10">
                      {project.subtitle}
                    </p>
                  )}
                </div>

                {/* Description */}
                {description.length > 0 && (
                  <div className="max-w-lg mx-auto flex flex-col items-center lg:items-start gap-5">
                    {description.map((paragraph, index) => (
                      <p
                        key={index}
                        className="font-shantell-sans text-base md:text-lg font-bold text-primary-black leading-relaxed text-center lg:text-left"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {/* What We Did Together */}
                {whatWeDid.length > 0 && (
                  <div className="max-w-lg mx-auto flex flex-col items-center lg:items-start gap-5">
                    <h2 className="font-permanent-marker text-3xl md:text-4xl text-primary-black text-center lg:text-left">
                      What we did together
                    </h2>

                    {whatWeDid.map((paragraph, index) => (
                      <p
                        key={index}
                        className="font-shantell-sans text-base md:text-lg font-bold text-primary-black leading-relaxed text-center lg:text-left"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {/* Results */}
                {results.length > 0 && (
                  <div className="max-w-lg mx-auto flex flex-col items-center lg:items-start gap-5">
                    <h2 className="font-permanent-marker text-3xl md:text-4xl text-primary-black text-center lg:text-left">
                      Results
                    </h2>

                    {results.map((paragraph, index) => (
                      <p
                        key={index}
                        className="font-shantell-sans text-base md:text-lg font-bold text-primary-black leading-relaxed text-center lg:text-left"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {/* Client Testimonial */}
                {testimonial && (
                  <div className="max-w-lg mx-auto flex flex-col items-center lg:items-start gap-5">
                    <h2 className="font-permanent-marker text-3xl md:text-4xl text-primary-black text-center lg:text-left">
                      Client testimonial
                    </h2>

                    <blockquote className="font-shantell-sans text-base md:text-lg font-bold text-primary-black leading-relaxed text-center lg:text-left">
                      “{testimonial.quote}”
                    </blockquote>

                    <p className="font-sedgwick-ave text-lg md:text-xl font-bold text-primary-black text-center lg:text-left">
                      — {testimonial.author}
                    </p>
                  </div>
                )}

                {/* Info */}
                {hasInfo && (
                  <div className="w-full flex justify-center">
                    <div className="w-full max-w-[400px] flex flex-col items-center gap-6">
                      <h2 className="font-permanent-marker text-3xl md:text-4xl text-primary-black text-center">
                        Info
                      </h2>

                      <div className="w-full min-h-63 border-4 bg-second-green border-primary-black shadow-[8px_8px_0px_#000000] px-6 md:px-8 py-6 md:py-8 flex items-center justify-center">
                        {/* CENTERED TABLE */}
                        <div className="inline-grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 items-center">
                          {project.info?.label && (
                            <>
                              <span className="font-permanent-marker text-left text-base md:text-xl text-third-black">
                                Label:
                              </span>

                              <span className="font-sedgwick-ave font-bold text-base md:text-xl text-third-black break-all">
                                {project.info.label}
                              </span>
                            </>
                          )}

                          {project.info?.contact && (
                            <>
                              <span className="font-permanent-marker text-left text-base md:text-xl text-third-black">
                                Contact:
                              </span>

                              <span className="font-sedgwick-ave font-bold text-base md:text-xl text-third-black break-all">
                                {project.info.contact}
                              </span>
                            </>
                          )}

                          {project.info?.download && (
                            <>
                              <span className="font-permanent-marker text-left text-base md:text-xl text-third-black">
                                Download:
                              </span>

                              <span className="font-sedgwick-ave font-bold text-base md:text-xl text-third-black break-all">
                                {project.info.download}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* Spotify */}
                {project.spotifyEmbed && (
                  <div className="w-full flex justify-center">
                    <div className="w-full max-w-120 flex flex-col items-center gap-6">
                      <h2 className="font-permanent-marker text-3xl md:text-4xl text-primary-black text-center">
                        Listen
                      </h2>

                      <div className="w-full border-4 border-primary-black shadow-[8px_8px_0px_#000000] overflow-hidden bg-black">
                        <iframe
                          src={project.spotifyEmbed}
                          width="100%"
                          height={
                            project.spotifyEmbed?.includes("artist")
                              ? 352
                              : project.spotifyEmbed?.includes("album")
                                ? 380
                                : 152
                          }
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                          className="block w-full"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Social Icons */}
                {hasSocials && (
                  <div className="w-full max-w-155 mx-auto flex flex-col items-center">
                    <div className="flex flex-wrap justify-center gap-6 md:gap-7">
                      {socialOrder.map((key) => {
                        const socialKey = key as keyof typeof socialLinks;
                        const href = socialLinks[socialKey];

                        if (!href) return null;

                        return (
                          <a
                            key={key}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={socialLabels[socialKey]}
                            className={socialIconClass}
                          >
                            {socialIcons[socialKey]}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="h-20 md:h-24 w-full" />
      </div>

      <div className="w-full h-1 bg-primary-black" />
    </section>
  );
};

export default ProjectDetail;
