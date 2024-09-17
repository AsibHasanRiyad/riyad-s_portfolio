import { FaFigma } from "react-icons/fa";
import { IoLogoAppleAr } from "react-icons/io5";
import { SiEbox } from "react-icons/si";
import Header from "../utils/Header";
const MyServices = () => {
  const services = [
    {
      title: "Web Development",
      icon: <SiEbox />,
      Description:
        "Crafting dynamic websites with React for responsive frontend and Node.js with MongoDB/Mongoose for efficient backends.",
    },
    {
      title: "Web Design",
      icon: <IoLogoAppleAr />,
      Description:
        "Crafting captivating web designs that blend aesthetics with functionality for a standout online presence.",
    },
    {
      title: "Figma to HTML",
      icon: <FaFigma />,
      Description:
        "Turning Figma designs into pixel-perfect HTML. Elevate your visuals with seamless, responsive, and code-optimized web solutions.",
    },
  ];
  return (
    <div>
      <Header header={" My Services"} />

      {/* card */}

      <div className="flex justify-center mt-5 ">
        <div className="grid justify-between grid-cols-1 gap-20 my-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className=" w-64 h-64 lg:w-72 lg:h-72  border-[#9B58F5] border relative rounded-md p-2 shadow  shadow-[#9B58F5] transform hover:scale-110 transition duration-500 ease-out cursor-pointer  "
            >
              <div className=" flex justify-center -top-5 right-21 bg-[#161513] px-3 absolute text-5xl text-[#9b58f5]">
                {service.icon}
              </div>
              <h1 className="mt-8 text-xl font-semibold text-center text-white lg:text-2xl ">
                {service.title}
              </h1>
              <p className="px-2 my-3 text-sm text-center text-gray-200 lg:my-5 lg:text-base ">
                {service.Description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyServices;
