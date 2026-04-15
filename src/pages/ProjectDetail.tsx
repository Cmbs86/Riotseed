import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

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

  const hasInfo =
    project.info?.label || project.info?.pr || project.info?.contact;

  const hasSocials =
    project.socials?.instagram ||
    project.socials?.spotify ||
    project.socials?.website ||
    project.socials?.facebook ||
    project.socials?.tiktok;

  return (
    <section className="min-h-screen bg-second-pink">
      {/* top spacer for fixed header */}
      <div className="h-40 md:h-44 lg:h-48 w-full" />

      {/* centered page wrapper */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1220px]">
            <div className="grid grid-cols-1 lg:grid-cols-[560px_560px] gap-10 lg:gap-14 justify-center items-start">
              {/* LEFT COLUMN */}
              <div className="w-full lg:sticky lg:top-36 self-start">
                <div className="w-full border-4 border-primary-black shadow-[8px_8px_0px_#000000] overflow-hidden bg-third-black">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[360px] sm:h-[480px] md:h-[620px] object-cover"
                    />
                  ) : (
                    <div
                      className="w-full h-[360px] sm:h-[480px] md:h-[620px]"
                      style={{ background: project.gradient ?? "#1a1a1a" }}
                    />
                  )}
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="w-full h-full flex flex-col justify-start items-center lg:items-center gap-10 lg:gap-14">
                {/* Title */}
                <div className="text-center lg:text-left">
                  <h1 className="font-permanent-marker text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-black leading-none mb-8 md:mb-10">
                    {project.title}
                  </h1>

                  {project.subtitle && (
                    <p className="font-shantell-sans text-base sm:text-lg md:text-xl font-bold text-primary-black mb-12 md:mb-14">
                      {project.subtitle}
                    </p>
                  )}
                </div>

                {/* Description */}
                {description.length > 0 && (
                  <div className="max-w-130 mx-auto flex flex-col items-center lg:items-start gap-6">
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

                {/* Info */}
                {hasInfo && (
                  <div className="max-w-130 mx-auto flex flex-col items-center gap-6">
                    <h2 className="font-permanent-marker text-3xl md:text-4xl text-primary-black text-center lg:text-left">
                      Info
                    </h2>

                    <div className="border-4 border-primary-black  shadow-[8px_8px_0px_#000000] px-6 py-6">
                      <div className="space-y-4 text-center lg:text-center">
                        {project.info?.pr && (
                          <p className="font-shantell-sans text-base md:text-lg font-bold text-third-black">
                            <span className="font-permanent-marker">PR:</span>{" "}
                            {project.info.pr}
                          </p>
                        )}

                        {project.info?.label && (
                          <p className="font-shantell-sans text-base md:text-lg font-bold text-third-black">
                            <span className="font-permanent-marker">
                              Label:
                            </span>{" "}
                            {project.info.label}
                          </p>
                        )}

                        {project.info?.contact && (
                          <p className="font-shantell-sans text-base md:text-lg font-bold text-third-black wrap-break-words">
                            <span className="font-permanent-marker">
                              Contact:
                            </span>{" "}
                            {project.info.contact}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Spotify */}
                {project.spotifyEmbed && (
                  <div className="max-w-130 mx-auto flex flex-col items-center gap-6">
                    <h2 className="font-permanent-marker text-3xl md:text-4xl text-primary-black text-center lg:text-left">
                      Listen
                    </h2>

                    <div className="border-4 border-primary-black shadow-[8px_8px_0px_#000000] overflow-hidden bg-third-black">
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
                        className="block w-full rounded-xl"
                      />
                    </div>
                  </div>
                )}

                {/* Links */}
                {hasSocials && (
                  <div className="max-w-130 mx-auto flex flex-col items-center gap-6">
                    <h2 className="font-permanent-marker text-3xl md:text-4xl text-primary-black text-center lg:text-left">
                      Links
                    </h2>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                      {project.socials?.instagram && (
                        <a
                          href={project.socials.instagram}
                          target="_blank"
                          rel="noreferrer"
                          className="font-shantell-sans font-bold text-primary-black border-4 border-primary-black px-4 py-2 shadow-[4px_4px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#000000] transition-all duration-200"
                        >
                          Instagram
                        </a>
                      )}

                      {project.socials?.spotify && (
                        <a
                          href={project.socials.spotify}
                          target="_blank"
                          rel="noreferrer"
                          className="font-shantell-sans font-bold text-primary-black border-4 border-primary-black px-4 py-2 shadow-[4px_4px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#000000] transition-all duration-200"
                        >
                          Spotify
                        </a>
                      )}

                      {project.socials?.website && (
                        <a
                          href={project.socials.website}
                          target="_blank"
                          rel="noreferrer"
                          className="font-shantell-sans font-bold text-primary-black border-4 border-primary-black px-4 py-2 shadow-[4px_4px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#000000] transition-all duration-200"
                        >
                          Website
                        </a>
                      )}

                      {project.socials?.facebook && (
                        <a
                          href={project.socials.facebook}
                          target="_blank"
                          rel="noreferrer"
                          className="font-shantell-sans font-bold text-primary-black border-4 border-primary-black px-4 py-2 shadow-[4px_4px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#000000] transition-all duration-200"
                        >
                          Facebook
                        </a>
                      )}

                      {project.socials?.tiktok && (
                        <a
                          href={project.socials.tiktok}
                          target="_blank"
                          rel="noreferrer"
                          className="font-shantell-sans font-bold text-primary-black border-4 border-primary-black px-4 py-2 shadow-[4px_4px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#000000] transition-all duration-200"
                        >
                          TikTok
                        </a>
                      )}
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
