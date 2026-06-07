const AgencyPitch = () => {
  return (
    <section id="agency-pitch" className="w-full bg-second-pink">
      {/* TOP SPACER */}
      <div className="w-full h-8 sm:h-10 md:h-14 lg:h-28"></div>

      {/* CENTER WRAPPER */}
      <div className="w-full flex justify-center">
        {/* WIDTH CONTAINER */}
        <div className="w-[82%] sm:w-[78%] md:w-[72%] lg:w-full lg:max-w-4xl">
          {/* MAIN BOX */}
          <div className="bg-primary-green border-4 border-primary-black rounded-lg shadow-[5px_5px_0px_#000000] md:shadow-[8px_8px_0px_#000000] lg:shadow-[12px_12px_0px_#000000] flex justify-center">
            <div className="w-[84%] sm:w-[82%] md:w-[78%] lg:w-full lg:max-w-3xl flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {/* TOP INNER SPACER */}
              <div className="w-full h-5 sm:h-6 md:h-7 lg:h-4"></div>

              <p className="font-plus-jakarta-sans text-sm sm:text-base md:text-lg lg:text-2xl font-normal text-primary-black leading-relaxed">
                You write the songs, play the shows, book the gigs, and handle
                everything yourself.
              </p>

              <p className="font-plus-jakarta-sans text-sm sm:text-base md:text-lg lg:text-2xl font-normal text-primary-black leading-relaxed">
                But getting heard online takes more than talent, it takes a
                strategy.
              </p>

              <h2 className="font-permanent-marker text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-black leading-tight">
                That’s where we come in.
              </h2>

              <p className="font-plus-jakarta-sans text-sm sm:text-base md:text-lg lg:text-2xl font-normal text-primary-black leading-relaxed">
                Riotseed is a Berlin-based music marketing agency for punk,
                alternative, underground, and independent bands across Germany
                and France: social media, ads, PR, playlists, SEO, websites,
                EPKs.
              </p>

              <p className="font-plus-jakarta-sans text-sm sm:text-base md:text-lg lg:text-2xl font-medium text-primary-black leading-relaxed">
                All built around your goals and your budget.
              </p>

              <p className="font-plus-jakarta-sans text-sm sm:text-base md:text-lg lg:text-2xl font-extrabold text-primary-black leading-relaxed">
                No inflated promises. No agency bullshit. Just real impact for
                real bands.
              </p>

              <p className="font-permanent-marker text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-black leading-tight">
                Plant the seed. Watch it riot.
              </p>

              {/* BOTTOM INNER SPACER */}
              <div className="w-full h-5 sm:h-6 md:h-7 lg:h-6"></div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SPACER */}
       <div className="w-full h-8 sm:h-10 md:h-14 lg:h-28"></div>
      <div className="w-full h-1 bg-primary-black"></div>
    </section>
  );
};

export default AgencyPitch;