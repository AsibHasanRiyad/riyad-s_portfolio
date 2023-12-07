import Typewriter from "typewriter-effect";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div className=" py-4 md:py-10">
      <div className="min-h-[40vh] flex flex-col lg:flex-row gap-10 justify-center items-center ">
        <div className=" w-full lg:w-1/2 text-gray-200 space-y-2 lg:space-y-4">
          <h1 className=" text-2xl md:text-5xl lg:text-6xl font-bold ">
            Hi I&apos;m
          </h1>
          <h1 className=" text-2xl md:text-5xl lg:text-6xl font-medium">
            Asib Hasan Riyad
          </h1>
          <h1 className=" text-gray-100 text-sm md:text-base lg:text-2xl flex gap-5 ">
            Hi I&apos;m Working With
            <div className=" text-[#3ba461]">
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
          </h1>
          {/* about */}
          <h1 className=" text-gray-300 text-xs md:text-lg text-justify my-6">
            On a continual quest for learning, I leverage a strong work ethic to
            apply my React development skills. My focus is on assisting
            organizations in overcoming challenges and fostering growth.
          </h1>
          <Link
            target="blank"
            to="https://drive.google.com/file/d/1_UOF7253b_o-VdBjycVfPv2nsHkHBY5z/view?fbclid=IwAR3m-x2T2hsmSIqAI2Dtv2hM4ynPra3DemNVqRWlwOVz6pnuJUqhZwDaELE"
          >
            <h1 className=" my-6 flex gap-2 items-center justify-center text-black rounded w-fit text-xl cursor-pointer bg-white px-2 py-1 transform hover:scale-125 transition duration-500 ease-out hover:bg-[#3ba461] hover:text-gray-200">
              {" "}
              <FaCloudDownloadAlt></FaCloudDownloadAlt> Resume
            </h1>
          </Link>
        </div>
        <div className=" w-full lg:w-1/2 ">
          {/* <div className="avatar flex justify-end items-center rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.ibb.co/sVb0qhb/IMG-6494-removebg.png" />
          </div> */}
          <div className="avatar flex justify-center lg:justify-end items-center">
            <div className="w-3/4 md:w-1/2 lg:w-3/4 rounded-full ring-1 ring-success ring-offset-base-100">
              <img src="https://i.ibb.co/sVb0qhb/IMG-6494-removebg.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
