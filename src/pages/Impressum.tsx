import { Helmet } from "react-helmet-async";

const pageTitle = "Impressum | Riotseed";
const pageDescription = "Impressum — Angaben gemäß § 5 DDG für Riotseed, Berlin.";
const canonicalUrl = "https://riotseed.com/impressum";

const Impressum = () => {
  return (
    <section className="min-h-screen bg-second-pink">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Space for fixed header */}
      <div className="h-24 md:h-32 lg:h-38 w-full" />

      {/* Page Title */}
      <div className="w-full min-h-28 md:min-h-36 flex items-center justify-center">
        <h1 className="font-permanent-marker text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-black text-center leading-none">
          Impressum
        </h1>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-16">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-230 min-h-[78vh] md:min-h-[71vh] lg:min-h-[69vh] flex flex-col items-center">
            <div className="h-6 md:h-10 lg:h-12 w-full" />

            <article className="w-full max-w-[92vw] sm:max-w-170 lg:max-w-190 flex flex-col gap-6 font-plus-jakarta-sans text-base md:text-lg font-medium text-primary-black leading-relaxed">
              <p>Angaben gemäß § 5 DDG</p>

              <p>
                Aude Leteurtre
                <br />
                Riotseed
                <br />
                Wiener Straße 29
                <br />
                10999 Berlin
                <br />
                Deutschland
              </p>

              <div>
                <p className="font-permanent-marker text-xl md:text-2xl text-primary-black mb-2">
                  Kontakt
                </p>
                <p>
                  E-Mail: <a
                    href="mailto:aude@riotseed.com"
                    className="underline decoration-transparent underline-offset-4 hover:decoration-current transition-all duration-150"
                  >
                    aude@riotseed.com
                  </a>
                </p>
              </div>

              <div>
                <p className="font-permanent-marker text-xl md:text-2xl text-primary-black mb-2">
                  Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
                </p>
                <p>Aude Leteurtre, Anschrift wie oben</p>
              </div>

              <div>
                <p className="font-permanent-marker text-xl md:text-2xl text-primary-black mb-2">
                  Verbraucherstreitbeilegung
                </p>
                <p>
                  Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
                  vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </article>

            <div className="h-14 md:h-20 w-full" />
          </div>
        </div>

        <div className="h-24 md:h-32 w-full" />
      </div>

      <div className="w-full h-1 bg-primary-black" />
    </section>
  );
};

export default Impressum;
