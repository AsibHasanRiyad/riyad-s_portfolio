import { ProjectCarousel } from "./ProjectCarousel";

const MyProject = () => {
  return (
    <div className="grid items-center justify-between grid-cols-2 gap-20 py-6 text-white lg:mx-6 md:py-10 lg:py-20">
      <div className="col-span-1 ">
        <h1 className="flex items-center justify-start text-5xl font-bold text-center text-transparent bg-gradient-to-br bg-clip-text from-indigo-500 via-purple-500 to-pink-500">
          My Projects
        </h1>
        <p className="py-6 text-justify ">Discover dynamic React apps, intuitive mobile experiences, and innovative design. My projects blend cutting-edge technology for impactful and user-centric results.</p>
      </div>
      <div className="col-span-1 ">
        <ProjectCarousel />
      </div>
    </div>
  );
};

export default MyProject;
