import { useCallback, useState } from "react";

export const ProjectCarousel = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
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
  const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? projectData.length - 1 : currentSlider - 1);
  const nextSlider = useCallback(() => setCurrentSlider((currentSlider) => currentSlider === projectData.length - 1 ? 0 : currentSlider + 1), [projectData.length]);


  return (
    <div className="h-40 w-full md:h-[370px] lg:h-[440px] relative rounded-lg overflow-hidden">
        {/* arrow left */}
        <button onClick={prevSlider} className="absolute z-50 flex items-center justify-center w-6 h-6 bg-white rounded-full top-1/2 left-3 md:w-8 md:h-8">
          <svg className="w-4 h-4 md:w-6 md:h-6 icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
        </button>
        {/* arrow right */}
        <button onClick={nextSlider} className="absolute z-50 flex items-center justify-center w-6 h-6 bg-white rounded-full top-1/2 right-3 md:w-8 md:h-8">
          <svg className="w-4 h-4 md:w-6 md:h-6 icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
        </button>
        {/* dots */}
        <div className="absolute z-50 flex items-center justify-center w-full gap-1 rounded-full bottom-4">
          {projectData.map((data, inx) => (
            <button key={data.name} onClick={() => setCurrentSlider(inx)} className={`rounded-full duration-500 bg-white ${currentSlider === inx ? "w-8" : "wz-2"} h-2`}></button>
          ))}
        </div>
        {/* Carousel container */}
        <div className="flex duration-500 ease-linear transform-gpu" style={{ transform: `translateX(-${currentSlider * 100}%)`}}>
          {/* sliders */}
          {projectData.map((data, inx) => (
            <img key={data} src={data.image} className="min-w-full rounded-lg h-60 bg-black/20 sm:h-96 md:h-[540px] object-cover" alt={`Slider - ${inx + 1}`}/>
          ))
          }
        </div>
    </div>
  );
};
