// import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { HiDownload } from "react-icons/hi";
import HeroMarquee from "./HeroMarquee";
import { FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className=" mt-4 lg:mt-10">
      <div className=" flex justify-center items-center">
        <div>
          {/* Profile picture Section */}
          <div className=" w-full">
            <div className=" flex justify-center items-center">
              <img
                className=" rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 w-52"
                src="https://i.ibb.co/sVb0qhb/IMG-6494-removebg.png"
                alt=""
              />
            </div>
          </div>

          {/* Description Section */}
          <div className=" text-[#F1F2F5] ">
            <div className=" w-full  space-y-2 lg:space-y-4 text-center">
              <h1 className=" text-2xl md:text-5xl lg:text-6xl font-bold leading-8 md:leading-[50px] lg:leading-[60px] mt-5">
                {" "}
                <span className=" text-transparent bg-gradient-to-br bg-clip-text from-indigo-500 via-purple-500 to-pink-500">
                  Hello, I&apos;m Riyad,{" "}
                </span>{" "}
                Web <br />{" "}
                <span className=" text-2xl md:text-4xl lg:text-5xl">
                  Developer from Bangladesh
                </span>{" "}
              </h1>
              {/* <h1 className=" text-gray-100 text-sm md:text-base lg:text-2xl flex gap-5 ">
              Hi I&apos;m Working With
              <div className=" text-[#848484]">
                <Typewriter
                  options={{
                    strings: [
                      "HTML",
                      "CSS",
                      "Java Script",
                      "React",
                      "Node js",
                      "Express js",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </h1> */}
              {/* about */}
              <h1 className=" text-xs md:text-base mx-auto max-w-xl my-6">
              Passionate web developer dedicated to crafting interactive digital experiences. Expert in cutting-edge technologies, committed to turning ideas into innovative online solutions.
              </h1>

              <div className=" flex items-center gap-5 max-w-max mx-auto">
                <Link
                  target="blank"
                  to="https://www.linkedin.com/in/asibhasan/"
                >
                  <h1 className=" my-6 flex gap-2 items-center justify-center  font-light w-fit text-xl cursor-pointer border border-gray-200 rounded-full px-4 py-2 transform hover:scale-110 transition duration-500 ease-out hover:bg-gray-200 hover:text-black">
                    {" "}
                    <FaLinkedin></FaLinkedin> LinkedIn
                  </h1>
                </Link>
                <Link
                  target="blank"
                  to="https://drive.google.com/file/d/1_UOF7253b_o-VdBjycVfPv2nsHkHBY5z/view?fbclid=IwAR3m-x2T2hsmSIqAI2Dtv2hM4ynPra3DemNVqRWlwOVz6pnuJUqhZwDaELE"
                >
                  <a
                    download={true}
                    href="https://drive.google.com/u/3/uc?id=14J9VoBYHSJ7TpoyGnQQxSGuOQh1YyD5K&export=download"
                    className=" my-6 flex gap-2 items-center justify-center  font-light w-fit text-xl cursor-pointer border border-gray-200 rounded-full px-4 py-2 transform hover:scale-110 transition duration-500 ease-out hover:bg-gray-200 hover:text-black"
                  >
                    {" "}
                    <HiDownload></HiDownload> Resume
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeroMarquee></HeroMarquee>
    </div>
  );
};

export default Hero;
