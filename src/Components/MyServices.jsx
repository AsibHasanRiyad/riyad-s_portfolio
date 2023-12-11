import { FaFigma } from "react-icons/fa";
import { IoLogoAppleAr } from "react-icons/io5";
import { SiEbox } from "react-icons/si";
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
      <h1 className="text-transparent bg-gradient-to-br bg-clip-text from-indigo-500 via-purple-500 to-pink-500 text-5xl text-center py-20 font-bold">
        My Services
      </h1>

      {/* card */}

      <div className=" flex justify-center">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-between my-5">
          {services.map((service) => (
            <div
              key={service.name}
              className=" w-52 h-52 border-[#9B58F5] border relative rounded-md p-2 shadow  shadow-[#9B58F5] transform hover:scale-110 transition duration-500 ease-out cursor-pointer  "
            >
              <div className=" flex justify-center -top-5 right-21 bg-[#161513] px-3 absolute text-5xl text-[#9b58f5]">
                {service.icon}
              </div>
              <h1 className=" text-white mt-8 text-center text-xl font-semibold">
                {service.title}
              </h1>
              <p className=" text-gray-200 text-center text-sm my-3 ">
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
