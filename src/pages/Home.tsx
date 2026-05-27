import Hero from "../sections/Hero";
import AgencyPitch from "../sections/AgencyPitch";
import Services from "../sections/Services";
import Projects from "../sections/Projects";
import About from "../sections/About";

const Home = () => {
  return (
    <div>
      <Hero />
      <AgencyPitch />
      <Services />
      <Projects />
      <About />
    </div>
  );
};

export default Home;
