import {
  FaBootstrap,
  FaCalendarAlt,
  FaCss3,
  FaFigma,
  FaGraduationCap,
  FaHome,
  FaHtml5,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaUser,
} from "react-icons/fa";
import { Tabs } from "../Components/ui/tabs";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiVisualstudiocode,
} from "react-icons/si";
import { HiMail } from "react-icons/hi";

export function AboutMe() {
  const tabs = [
    {
      title: "Personal Info",
      value: "personal",
      content: (
        <div className="relative w-full h-full p-10 overflow-hidden text-xl font-bold text-white rounded-2xl md:text-4xl bg-gradient-to-br from-purple-700 to-violet-900">
          <h1 className="mb-3 text-xl font-semibold md:text-2xl lg:text-4xl">
            Web Developer
          </h1>
          <p className=" max-w-xl text-sm md:text-lg text-[#D5D5D3]">
            On a continual quest for learning, I leverage a strong work ethic to
            apply my React development skills
          </p>
          <div className=" grid grid-cols-1 sm:grid-cols-2 text-[#D5D5D3] font-light text-sm md:text-lg gap-4 mt-4">
            <div className="flex items-center gap-2 ">
              <FaUser className=" text-[#A456F6]" />
              <p>Asib Hasan Riyad</p>
            </div>
            <div className="flex items-center gap-2 ">
              <HiMail className=" text-[#A456F6]" />
              <p>asibhasanriyad@gmail.com</p>
            </div>
            <div className="flex items-center gap-2 ">
              <FaGraduationCap className=" text-[#A456F6]" />
              <p>Bsc in EEE</p>
            </div>
            <div className="flex items-center gap-2 ">
              <FaPhone className=" text-[#A456F6]" />
              <p>+8801568260699</p>
            </div>
            <div className="flex items-center gap-2 ">
              <FaCalendarAlt className=" text-[#A456F6]" />
              <p>Born on 15 Dec, 1998</p>
            </div>
            <div className="flex items-center gap-2 ">
              <FaHome className=" text-[#A456F6]" />
              <p> Mirpur, Dhaka</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Skills",
      value: "services",
      content: (
        <div className="relative w-full h-full p-10 overflow-hidden text-xl font-bold text-white rounded-2xl md:text-4xl bg-gradient-to-br from-purple-700 to-violet-900">
          <h1 className="my-5 text-3xl text-gray-300 ">Tools I use everyday</h1>
          <div className="grid grid-cols-1 gap-5 text-3xl text-gray-300 md:grid-cols-3 md:gap-20">
            <div>
              <h1 className="text-xl ">Frontend</h1>
              <hr className="my-4 " />
              <div className="flex flex-wrap gap-6 ">
                <FaHtml5 />
                <FaCss3 />
                <SiJavascript />
                <FaReact />
                <SiTailwindcss />
                <FaBootstrap />
              </div>
            </div>
            <div>
              <h1 className="text-xl ">Backend</h1>
              <hr className="my-4 " />
              <div className="flex gap-6 ">
                <FaNodeJs />
                <SiExpress />
                <SiMongodb />
              </div>
            </div>
            {/* Tools */}
            <div className="hidden text-gray-300 md:block ">
              <h1 className="text-xl ">Tools</h1>
              <hr className="my-4 " />
              <div className="flex text-3xl gap-7">
                <SiVisualstudiocode />
                <FaFigma />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] lg:mt-10 md:h-[26rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mb-56 md:mb-20 lg:mb-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
