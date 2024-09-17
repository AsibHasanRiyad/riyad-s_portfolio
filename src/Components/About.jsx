import Header from "../utils/Header";
import { AboutMe } from "./AboutMe";

const About = () => {
  return (
    <div className="px-4 lg:px-0">
      <div name="about" className="pt-0 md:pt-10">
        <Header header={"About Me"} />
      </div>
      <div className="grid items-center justify-between grid-cols-1 pb-6 lg:grid-cols-2 md:pb-0">
        <div className="flex justify-center ">
          <img
            className="mb-10 w-72 lg:w-96 lg:mb-0"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-easing="ease-in-sine"
            src="https://i.ibb.co/B32PZs1/c2c59f267df6e4f35fc630252dd2016d-sticker.png"
            alt=""
          />
        </div>
        {/* <Skills /> */}
        <AboutMe />
      </div>
    </div>
  );
};

export default About;
