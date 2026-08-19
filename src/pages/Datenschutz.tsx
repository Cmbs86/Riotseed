import { Helmet } from "react-helmet-async";
import { datenschutzContent } from "../data/datenschutzContent";

const pageTitle = "Datenschutz | Riotseed";
const pageDescription = "Datenschutzerklärung — Informationen zur Verarbeitung personenbezogener Daten bei Riotseed.";
const canonicalUrl = "https://riotseed.com/datenschutz";

const Datenschutz = () => {
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
          Datenschutz
        </h1>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-16">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-230 min-h-[40vh] flex flex-col items-center">
            <div className="h-6 md:h-10 lg:h-12 w-full" />

            <article
              className="
                prose prose-neutral max-w-[92vw] sm:max-w-170 lg:max-w-190 w-full

                prose-headings:font-plus-jakarta-sans
                prose-h2:text-2xl prose-h2:font-extrabold prose-h2:text-primary-black
                prose-h2:mt-12 prose-h2:mb-4 prose-h2:first:mt-0
                prose-h3:text-lg prose-h3:font-bold prose-h3:text-primary-black
                prose-h3:mt-7 prose-h3:mb-3

                prose-p:font-plus-jakarta-sans prose-p:font-medium prose-p:leading-relaxed
                prose-p:text-primary-black

                prose-li:font-plus-jakarta-sans prose-li:font-medium prose-li:leading-relaxed
                prose-li:text-primary-black prose-li:marker:text-primary-black

                prose-strong:font-bold prose-strong:text-primary-black

                prose-a:text-primary-black prose-a:underline prose-a:decoration-transparent
                prose-a:underline-offset-4 hover:prose-a:decoration-current
                prose-a:break-words

                [&_ul.index]:list-none [&_ul.index]:p-6 [&_ul.index]:my-6
                [&_ul.index]:bg-primary-green [&_ul.index]:border-2 [&_ul.index]:border-primary-black
                [&_ul.index]:rounded-lg
                [&_ul.index_li]:mb-2
                [&_ul.index_a.index-link]:no-underline [&_ul.index_a.index-link]:font-bold
                hover:[&_ul.index_a.index-link]:underline

                [&_ul.m-elements]:list-none [&_ul.m-elements]:pl-0
                [&_ul.m-elements>li]:mb-6

                [&_p.seal]:text-xs [&_p.seal]:text-third-black [&_p.seal]:mt-12
                [&_p.seal]:pt-6 [&_p.seal]:border-t-2 [&_p.seal]:border-primary-black
              "
              dangerouslySetInnerHTML={{ __html: datenschutzContent }}
            />

            <div className="h-14 md:h-20 w-full" />
          </div>
        </div>

        <div className="h-24 md:h-32 w-full" />
      </div>

      <div className="w-full h-1 bg-primary-black" />
    </section>
  );
};

export default Datenschutz;
