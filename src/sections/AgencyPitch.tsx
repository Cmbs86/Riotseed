const AgencyPitch = () => {
  return (
    <section id="agency-pitch" className="w-full bg-second-pink">
      {/* TOP SPACER */}
      <div className="w-full h-24 md:h-32"></div>

      {/* CENTER WRAPPER */}
      <div className="w-full flex justify-center">
        {/* WIDTH CONTAINER */}
        <div className="w-[88%] lg:w-full lg:max-w-4xl">
          {/* MAIN BOX */}
          <div className="bg-primary-green border-4 border-primary-black rounded-lg shadow-[6px_6px_0px_#000000] md:shadow-[12px_12px_0px_#000000] flex justify-center">
            <div className="w-[82%] lg:w-full lg:max-w-3xl flex flex-col gap-6 md:gap-8">
              {/* TOP INNER SPACER */}
              <div className="w-full h-8 md:h-4"></div>

              <p className="font-plus-jakarta-sans text-base lg:text-2xl font-normal text-primary-black leading-relaxed">
                You write the songs, play the shows, book the gigs, and handle
                everything yourself.
              </p>

              <p className="font-plus-jakarta-sans text-base lg:text-2xl font-normal text-primary-black leading-relaxed">
                But getting heard online takes more than talent, it takes a
                strategy.
              </p>

              <h2 className="font-permanent-marker text-3xl lg:text-5xl text-primary-black ">
                That’s where we come in.
              </h2>

              <p className="font-plus-jakarta-sans text-base lg:text-2xl font-normal text-primary-black leading-relaxed">
                Riotseed is a Berlin-based music marketing agency for punk,
                alternative, underground, and independent bands across Germany
                and France: social media, ads, PR, playlists, SEO, websites,
                EPKs.
              </p>

              <p className="font-plus-jakarta-sans text-base lg:text-2xl font-medium text-primary-black leading-relaxed">
                All built around your goals and your budget.
              </p>

              <p className="font-plus-jakarta-sans text-base lg:text-2xl font-extrabold text-primary-black leading-relaxed">
                No inflated promises. No agency bullshit. Just real impact for
                real bands.
              </p>

              <p className="font-permanent-marker text-3xl lg:text-5xl text-primary-black">
                Plant the seed. Watch it riot.
              </p>

              {/* BOTTOM INNER SPACER */}
              <div className="w-full h-8 md:h-6"></div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SPACER */}
      <div className="w-full h-24 md:h-32"></div>
      <div className="w-full h-1 bg-primary-black"></div>
    </section>
  );
};

export default AgencyPitch;


