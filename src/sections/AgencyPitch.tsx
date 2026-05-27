const AgencyPitch = () => {
  return (
    <section id="agency-pitch" className="w-full bg-second-pink">
      {/* TOP SPACER */}
      <div className="w-full h-24 md:h-32"></div>

      {/* CENTER WRAPPER */}
      <div className="w-full flex justify-center px-4 md:px-8">
        {/* WIDTH CONTAINER */}
        <div className="w-full max-w-5xl">
          {/* MAIN BOX */}
          <div className="bg-sixth-green border-4 border-primary-black rounded-lg shadow-[8px_8px_0px_#000000] px-6 md:px-12 py-12 md:py-16 flex justify-center">
            <div className="w-full max-w-4xl flex flex-col">
              {/* TOP INNER SPACER */}
              <div className="w-full h-10 md:h-16"></div>

              {/* BLOCK 1 */}
              <div className="w-full">
                <p className="font-shantell-sans text-xl md:text-3xl text-primary-black leading-relaxed">
                  You write the songs, play the shows, book the gigs, and handle
                  everything yourself.
                </p>
              </div>
              {/* BLOCK 2 */}
              <div className="w-full mt-10">
                <p className="font-shantell-sans text-xl md:text-3xl text-primary-black leading-relaxed">
                  But getting heard online takes more than talent, it takes a
                  strategy.
                </p>
              </div>
              {/* BLOCK 3 */}
              <div className="w-full mt-14">
                <h2 className="font-permanent-marker text-4xl md:text-6xl text-primary-black">
                  That’s where we come in.
                </h2>
              </div>
              {/* BLOCK 4 */}
              <div className="w-full mt-10">
                <p className="font-shantell-sans text-lg md:text-2xl text-primary-black leading-relaxed">
                  Riotseed is a Berlin-based music marketing agency for punk,
                  alternative, underground, and independent bands across Germany
                  and France: social media, ads, PR, playlists, SEO, websites,
                  EPKs.
                </p>
              </div>
              {/* BLOCK 5 */}
              <div className="w-full mt-10">
                <p className="font-shantell-sans text-lg md:text-2xl text-primary-black leading-relaxed">
                  All built around your goals and your budget.
                </p>
              </div>
              {/* BLOCK 6 */}
              <div className="w-full mt-14">
                <p className="font-shantell-sans text-xl md:text-3xl font-bold text-primary-black leading-relaxed">
                  No inflated promises. No agency bullshit. Just real impact for
                  real bands.
                </p>
              </div>
              {/* BLOCK 7 */}
              <div className="w-full mt-16">
              <p className="font-permanent-marker text-4xl md:text-6xl text-primary-black">
                Plant the seed. Watch it riot.
              </p></div>
              
              {/* BOTTOM INNER SPACER */}
              <div className="w-full h-10 md:h-16"></div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SPACER */}
      <div className="w-full h-24 md:h-32"></div>
    </section>
  );
};

export default AgencyPitch;
