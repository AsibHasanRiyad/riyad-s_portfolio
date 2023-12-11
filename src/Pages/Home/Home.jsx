import { Element } from "react-scroll";
import Contact from "../../Components/Contact";
import Experience from "../../Components/Experience";
import Hero from "../../Components/Hero";
import MyServices from "../../Components/MyServices";
import Projects from "../../Components/Project/Projects";
import Skills from "../../Components/Skills";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* journey */}
      <div name="journey" >
        <Experience />
      </div>
      {/* about */}
      <div name="about" className=" pt-10 pb-5">
        <h1 className="text-transparent bg-gradient-to-br bg-clip-text from-indigo-500 via-purple-500 to-pink-500 text-5xl text-center py-10 font-bold">
          About Me
        </h1>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 items-center justify-between pb-20">
        <div className=" flex justify-center">
          <img
            className=" w-72 lg:w-96 mb-10 lg:mb-0"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-easing="ease-in-sine"
            src="https://i.ibb.co/B32PZs1/c2c59f267df6e4f35fc630252dd2016d-sticker.png"
            alt=""
          />
        </div>
        <Skills />
      </div>
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
