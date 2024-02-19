
import Skills from "./Skills";
const About = () => {
  return (
    <div>
      <div name="about" className="pt-0 pb-5  lg:pt-10">
        <h1 className="py-4 text-5xl font-bold text-center text-transparent bg-gradient-to-br bg-clip-text from-indigo-500 via-purple-500 to-pink-500 lg:py-10">
          About Me
        </h1>
      </div>
      <div className="grid items-center justify-between grid-cols-1 pb-6  lg:grid-cols-2 md:pb-10 lg:pb-20">
        <div className="flex justify-center ">
          <img
            className="mb-10  w-72 lg:w-96 lg:mb-0"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-easing="ease-in-sine"
            src="https://i.ibb.co/B32PZs1/c2c59f267df6e4f35fc630252dd2016d-sticker.png"
            alt=""
          />
        </div>
        <Skills />
      </div>
    </div>
  );
};

export default About;
