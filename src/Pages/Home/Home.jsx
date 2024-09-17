import Contact from "../../Components/Contact";

import Hero from "../../Components/Hero";
import MyServices from "../../Components/MyServices";

import About from "../../Components/About";
import { TimelineDemo } from "../../Components/Project/TimelineProject";
import "./Home.css";
import { MyProject } from "../../Components/MyProject";

const Home = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Hero />
      {/* journey */}
      <div className="mt-20 mb-10 " name="journey">
        {/* <Experience /> */}
        <TimelineDemo />
      </div>

      {/* about */}
      <About />
      {/* Services */}
      <div name="services">
        <MyServices />
      </div>
      {/* projects */}
      {/* <Element name="projects" className="py-10 md:py-14 lg:py-28">
        <Projects />
      </Element> */}
      <div name="projects">
        <MyProject />
      </div>
      {/* contact */}
      <div name="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
