import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import ProjectSlider from "./ProjectSlider";
// import { Element } from "react-scroll";

const projectData = [
  {
    image:
      "https://i.ibb.co/0sRDvSw/Pink-Blue-Powerful-Sunrise-Over-the-Sea-Quote-Instagram-Post.png",
    name: "Connectopia",
    category: "React js",
    details:
      "Technologies Used: React.js,Tailwind CSS,Framer Motion,Stripe, Node.js, Express.js, Mongoose, Firebase, GitHub.",
    Link: "https://connectopia-9e807.web.app/",
    gitHub: "https://github.com/AsibHasanRiyad/connectopia-client",
  },
  {
    image:
      "https://i.ibb.co/pXQGNtC/Pink-Blue-Powerful-Sunrise-Over-the-Sea-Quote-Instagram-Post-1.png",
    name: "Learnify",
    category: "React js",
    details:
      "Technologies Used: React.js,Tailwind CSS, React pdf, Node.js, Express.js, MongoDB, Firebase, GitHub.",
    Link: "https://horrible-root.surge.sh/",
    gitHub: "https://github.com/AsibHasanRiyad/learnify-client",
  },
  {
    image:
      "https://i.ibb.co/kyzHgyn/Pink-Blue-Powerful-Sunrise-Over-the-Sea-Quote-Instagram-Post-2.png",
    name: "Gadget Junction",
    category: "React js",
    details:
      "Technologies Used: React.js, Tailwind CSS,AOS Animation, Node.js, Express.js, MongoDB, Firebase, GitHub.",
    Link: "https://gadget-junction.web.app/",
    gitHub: "https://github.com/AsibHasanRiyad/gadget-junction-client",
  },
  {
    image:
      "https://i.ibb.co/P4xCkYt/Pink-Blue-Powerful-Sunrise-Over-the-Sea-Quote-Instagram-Post-3.png",
    name: "Uplift",
    category: "React js",
    details:
      "Technologies Used: React.js, Tailwind CSS,Daisy Ui, Firebase, GitHub.",
    Link: "https://uplift-b07d0.web.app/",
    gitHub: "https://github.com/AsibHasanRiyad/uplift",
  },
];

const Projects = () => {
  return (
    <div>
      <section className="relative">
        <div className=" container mx-auto ">
          <div className=" max-w-[400px] mx-auto lg:mx-0 text-center lg:text-left mb-12 lg:h-[400px] flex flex-col justify-center  items-center lg:items-start ">
            <h1 className=" text-transparent bg-gradient-to-br py-2 bg-clip-text from-indigo-500 via-purple-500 to-pink-500 text-5xl font-semibold">
              ALl Projects
            </h1>
            <p className=" text-base text-gray-200 py-4">
              Discover dynamic React apps, intuitive mobile experiences, and
              innovative design. My projects blend cutting-edge technology for
              impactful and user-centric results.
            </p>
          </div>
          {/* slide */}
          <div
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-easing="ease-in-sine"
            className="lg:max-w-[800px] lg:absolute right-0 top-0"
          >
            <Swiper
              className=" h-[480px]"
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
              }}
              spaceBetween={30}
              modules={[Pagination]}
            >
              {projectData.map((data, index) => (
                <SwiperSlide key={index}>
                  <ProjectSlider data={data} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
