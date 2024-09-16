import { Element } from "react-scroll";
import Contact from "../../Components/Contact";
import Experience from "../../Components/Experience";
import Hero from "../../Components/Hero";
import MyServices from "../../Components/MyServices";
import Projects from "../../Components/Project/Projects";
import About from "../../Components/About";
// import MyProject from "../../Components/MyProject/MyProject";
import { TimelineDemo } from "../../Components/Project/TimelineProject";
import "./Home.css";
import { MyProject } from "../../Components/MyProject";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* journey */}
      <div className="hidden mt-20 mb-10 lg:block" name="journey">
        {/* <Experience /> */}
        <TimelineDemo />
      </div>
      <MyProject />
      <div className="block mt-20 mb-10 lg:hidden" name="journey">
        <Experience />
        {/* <TimelineDemo /> */}
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
      <MyProject />
      {/* contact */}
      <div name="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
