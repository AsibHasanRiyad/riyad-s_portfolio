import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import ProjectSlider from "./ProjectSlider";

const projectData = [
  {
    image:
      "https://i.ibb.co/0sRDvSw/Pink-Blue-Powerful-Sunrise-Over-the-Sea-Quote-Instagram-Post.png",
    name: "Connectopia",
    category: "React js",
    details:
      "On a continual quest for learning, I leverage a strong work ethic to apply my React development skills",
    Link: "/",
    gitHub: "/",
  },
  {
    image:
      "https://i.ibb.co/pXQGNtC/Pink-Blue-Powerful-Sunrise-Over-the-Sea-Quote-Instagram-Post-1.png",
    name: "Connectopia",
    category: "React js",
    details:
      "On a continual quest for learning, I leverage a strong work ethic to apply my React development skills",
    Link: "/",
    gitHub: "/",
  },
  {
    image:
      "https://i.ibb.co/kyzHgyn/Pink-Blue-Powerful-Sunrise-Over-the-Sea-Quote-Instagram-Post-2.png",
    name: "Connectopia",
    category: "React js",
    details:
      "On a continual quest for learning, I leverage a strong work ethic to apply my React development skills",
    Link: "/",
    gitHub: "/",
  },
];

const Projects = () => {
  return (
    <section className="relative  pb-48">
      <div className=" container mx-auto ">
        <div className=" max-w-[400px] mx-auto lg:mx-0 text-center lg:text-left mb-12 lg:h-[400px] flex flex-col justify-center  items-center lg:items-start ">
          <h1 className=" text-transparent bg-gradient-to-br bg-clip-text from-indigo-500 via-purple-500 to-pink-500 text-5xl font-semibold">ALl Project</h1>
          <p className=" text-xl text-gray-200 py-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
            voluptate?
          </p>
        </div>
        {/* slide */}
       <div className="lg:max-w-[800px] lg:absolute right-0 top-0">
       <Swiper className=" h-[480px]"
       slidesPerView={1}
       breakpoints={{640:{
        slidesPerView : 2
       }}}
       spaceBetween={30}
       modules={[Pagination]}
       pagination={{clickable:true}}
       >
            {
                projectData.map((data, index) => <SwiperSlide key={index}> 
                <ProjectSlider data={data} />
                </SwiperSlide> )
            }
        </Swiper>
       </div>
      </div>
    </section>
  );
};

export default Projects;
