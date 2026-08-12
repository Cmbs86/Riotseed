import { Helmet } from "react-helmet-async";
import Hero from "../sections/Hero";
import AgencyPitch from "../sections/AgencyPitch";
import Services from "../sections/Services";
import Projects from "../sections/Projects";
import About from "../sections/About";

const pageTitle = "Music Marketing for DIY & Independent Bands | Riotseed";
const pageDescription =
  "Berlin-based music marketing agency for punk, alternative & underground bands. Social media, PR, playlists, ads, SEO, websites & EPKs. Germany & France.";
const canonicalUrl = "https://riotseed.com";
const ogTitle = "Riotseed — Music Marketing for DIY & Independent Bands";
const ogDescription =
  "Berlin-based music marketing for punk, alternative & underground bands. Real impact. No bullshit.";
const ogImage = "https://riotseed.com/images/riotseed-banner-new-smaller.webp";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      <Hero />
      <AgencyPitch />
      <Services />
      <Projects />
      <About />
    </div>
  );
};

export default Home;
