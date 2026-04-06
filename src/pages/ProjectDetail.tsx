import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = useMemo(
    () => projects.find((item) => item.slug === slug),
    [slug]
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
      {/* top spacer */}
      <div className="h-32 w-full" />

      {/* main centered wrapper */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
        {/* hero block */}
        <div className="flex flex-col items-center text-center">
          <h1 className="font-permanent-marker text-5xl md:text-7xl lg:text-8xl text-primary-black">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="mt-4 font-shantell-sans text-lg md:text-xl font-bold text-primary-black">
              {project.subtitle}
            </p>
          )}

          <div className="h-12 w-full" />

          <div className="w-full max-w-5xl border-4 border-primary-black shadow-[8px_8px_0px_#000000] overflow-hidden bg-third-black">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover"
              />
            ) : (
              <div
                className="w-full h-[280px] md:h-[420px] lg:h-[520px]"
                style={{ background: project.gradient ?? "#1a1a1a" }}
              />
            )}
          </div>
        </div>

        {/* spacer */}
        <div className="h-20 w-full" />

        {/* info + description */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[1.5fr_0.9fr] gap-10 items-start">
            {/* description */}
            <div className="w-full flex justify-center lg:justify-start">
              <div className="w-full max-w-3xl space-y-6 text-center lg:text-left">
                {project.description?.map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-shantell-sans text-base md:text-lg font-bold text-primary-black leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* side block */}
            <div className="w-full flex justify-center lg:justify-end">
              <div className="w-full max-w-md space-y-6">
                {hasInfo && (
                  <div className="border-4 border-primary-black bg-primary-pink shadow-[8px_8px_0px_#000000] px-6 py-6 text-center lg:text-left">
                    <h2 className="font-permanent-marker text-3xl md:text-4xl text-primary-black mb-6 text-center">
                      Info
                    </h2>

                    <div className="space-y-3">
                      {project.info?.pr && (
                        <p className="font-shantell-sans text-base md:text-lg font-bold text-primary-black">
                          <span className="font-permanent-marker">PR:</span>{" "}
                          {project.info.pr}
                        </p>
                      )}

                      {project.info?.label && (
                        <p className="font-shantell-sans text-base md:text-lg font-bold text-primary-black">
                          <span className="font-permanent-marker">Label:</span>{" "}
                          {project.info.label}
                        </p>
                      )}

                      {project.info?.contact && (
                        <p className="font-shantell-sans text-base md:text-lg font-bold text-primary-black">
                          <span className="font-permanent-marker">Contact:</span>{" "}
                          {project.info.contact}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {hasSocials && (
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    {project.socials?.instagram && (
                      <a
                        href={project.socials.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="font-shantell-sans font-bold text-primary-black border-4 border-primary-black px-5 py-2 shadow-[4px_4px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#000000] transition-all duration-200"
                      >
                        Instagram
                      </a>
                    )}

                    {project.socials?.spotify && (
                      <a
                        href={project.socials.spotify}
                        target="_blank"
                        rel="noreferrer"
                        className="font-shantell-sans font-bold text-primary-black border-4 border-primary-black px-5 py-2 shadow-[4px_4px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#000000] transition-all duration-200"
                      >
                        Spotify
                      </a>
                    )}

                    {project.socials?.website && (
                      <a
                        href={project.socials.website}
                        target="_blank"
                        rel="noreferrer"
                        className="font-shantell-sans font-bold text-primary-black border-4 border-primary-black px-5 py-2 shadow-[4px_4px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#000000] transition-all duration-200"
                      >
                        Website
                      </a>
                    )}

                    {project.socials?.facebook && (
                      <a
                        href={project.socials.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="font-shantell-sans font-bold text-primary-black border-4 border-primary-black px-5 py-2 shadow-[4px_4px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#000000] transition-all duration-200"
                      >
                        Facebook
                      </a>
                    )}

                    {project.socials?.tiktok && (
                      <a
                        href={project.socials.tiktok}
                        target="_blank"
                        rel="noreferrer"
                        className="font-shantell-sans font-bold text-primary-black border-4 border-primary-black px-5 py-2 shadow-[4px_4px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#000000] transition-all duration-200"
                      >
                        TikTok
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* spotify */}
        {project.spotifyEmbed && (
          <>
            <div className="h-20 w-full" />

            <div className="w-full flex justify-center">
              <div className="w-full max-w-4xl">
                <h2 className="font-permanent-marker text-4xl md:text-5xl text-primary-black text-center mb-8">
                  Listen
                </h2>

                <div className="border-4 border-primary-black shadow-[8px_8px_0px_#000000] overflow-hidden">
                  <iframe
                    src={project.spotifyEmbed}
                    width="100%"
                    height="352"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="block w-full"
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {/* bottom spacer */}
        <div className="h-24 w-full" />
      </div>

      {/* bottom border */}
      <div className="w-full h-1 bg-primary-black" />
    </section>
  );
};

export default ProjectDetail;