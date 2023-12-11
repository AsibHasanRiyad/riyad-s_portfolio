import { Element } from "react-scroll";
import Contact from "../../Components/Contact";
import Experience from "../../Components/Experience";
import Hero from "../../Components/Hero";
import MyServices from "../../Components/MyServices";
import Projects from "../../Components/Project/Projects";
import About from "../../Components/About";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* journey */}
      <div name="journey">
        <Experience />
      </div>
      {/* about */}
      <About />
      {/* Services */}
      <div name="services">
        <MyServices />
      </div>
      {/* projects */}
      <Element name="projects" className=" py-28">
        <Projects />
      </Element>
      {/* contact */}
      <div name="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
