// import Typewriter from "typewriter-effect";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import HeroMarquee from "./HeroMarquee";


const Hero = () => {
  return (
    <div className=" h-screen mt-4 lg:mt-10">
      <div className=" flex justify-center items-center">
        <div>
          {/* Profile picture Section */}
          <div className=" w-full">
            <div className=" flex justify-center items-center">
              <img
                className=" rounded-full bg-[#D5D5D3] w-52"
                src="https://i.ibb.co/vdrjy75/c64d6ed15722ada3de2f3bf0677584cb-sticker.png"
                alt=""
              />
            </div>
            {/* <div className="avatar flex justify-center lg:justify-end items-center">
          <div className="w-3/4 md:w-1/2 lg:w-3/4 rounded-full ">
            <img src="https://i.ibb.co/pwN45bh/21004063-removebg.png" />
          </div>
        </div> */}
          </div>

          {/* Description Section */}
          <div className=" text-[#F1F2F5] ">
            <div className=" w-full  space-y-2 lg:space-y-4 text-center">
              <h1 className=" text-6xl font-bold leading-[60px] mt-5">
                {" "}
                <span className=" text-transparent bg-gradient-to-br bg-clip-text from-indigo-500 via-purple-500 to-pink-500">
                  Hello, I&apos;m Riyad,{" "}
                </span>{" "}
                Web <br />{" "}
                <span className=" text-5xl">Developer from Bangladesh</span>{" "}
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
                On a continual quest for learning, I leverage a strong work
                ethic to apply my React development skills. My focus is on
                assisting organizations in overcoming challenges and fostering
                growth.
              </h1>

              <div className=" flex items-center gap-5 max-w-max mx-auto">
                <Link
                  target="blank"
                  to="https://drive.google.com/file/d/1_UOF7253b_o-VdBjycVfPv2nsHkHBY5z/view?fbclid=IwAR3m-x2T2hsmSIqAI2Dtv2hM4ynPra3DemNVqRWlwOVz6pnuJUqhZwDaELE"
                >
                  <h1 className=" my-6 flex gap-2 items-center justify-center  font-light w-fit text-xl cursor-pointer border border-gray-200 rounded-full px-4 py-2 transform hover:scale-110 transition duration-500 ease-out hover:bg-gray-200 hover:text-black">
                    {" "}
                    <FaCloudDownloadAlt></FaCloudDownloadAlt> Resume
                  </h1>
                </Link>
                <Link
                  target="blank"
                  to="https://drive.google.com/file/d/1_UOF7253b_o-VdBjycVfPv2nsHkHBY5z/view?fbclid=IwAR3m-x2T2hsmSIqAI2Dtv2hM4ynPra3DemNVqRWlwOVz6pnuJUqhZwDaELE"
                >
                  <h1 className=" my-6 flex gap-2 items-center justify-center  font-light w-fit text-xl cursor-pointer border border-gray-200 rounded-full px-4 py-2 transform hover:scale-110 transition duration-500 ease-out hover:bg-gray-200 hover:text-black">
                    {" "}
                    <FaGithub></FaGithub> GitHub
                  </h1>
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
