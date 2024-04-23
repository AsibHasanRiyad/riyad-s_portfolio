// import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { HiDownload } from "react-icons/hi";
import HeroMarquee from "./HeroMarquee";
import { FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="mt-4 lg:mt-10">
      <div className="flex items-center justify-center ">
        <div>
          {/* Profile picture Section */}
          <div className="w-full ">
            <div className="flex items-center justify-center ">
              <img
                className="rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 w-52"
                src="https://i.ibb.co/JjhcHhG/436546569-3285276645106945-1806626773289945412-n-1.jpg"
                // src="https://i.ibb.co/sVb0qhb/IMG-6494-removebg.png"
                alt=""
              />
            </div>
          </div>

          {/* Description Section */}
          <div className=" text-[#F1F2F5] ">
            <div className="w-full space-y-2 text-center lg:space-y-4">
              <h1 className=" text-2xl md:text-5xl lg:text-6xl font-bold leading-8 md:leading-[50px] lg:leading-[60px] mt-5">
                {" "}
                <span className="text-transparent bg-gradient-to-br bg-clip-text from-indigo-500 via-purple-500 to-pink-500">
                  Hello, I&apos;m Riyad,{" "}
                </span>{" "}
                Web <br />{" "}
                <span className="text-2xl md:text-4xl lg:text-5xl">
                  Developer from Bangladesh
                </span>{" "}
              </h1>
              {/* <h1 className="flex gap-5 text-sm text-gray-100 md:text-base lg:text-2xl">
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
              <h1 className="max-w-xl mx-auto my-6 text-xs md:text-base">
              Passionate web developer dedicated to crafting interactive digital experiences. Expert in cutting-edge technologies, committed to turning ideas into innovative online solutions.
              </h1>

              <div className="flex items-center gap-5 mx-auto max-w-max">
                <Link
                  target="blank"
                  to="https://www.linkedin.com/in/asibhasan/"
                >
                  <h1 className="flex items-center justify-center gap-2 px-4 py-2 my-6 text-xl font-light transition duration-500 ease-out transform border border-gray-200 rounded-full cursor-pointer w-fit hover:scale-110 hover:bg-gray-200 hover:text-black">
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
                    className="flex items-center justify-center gap-2 px-4 py-2 my-6 text-xl font-light transition duration-500 ease-out transform border border-gray-200 rounded-full cursor-pointer w-fit hover:scale-110 hover:bg-gray-200 hover:text-black"
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
