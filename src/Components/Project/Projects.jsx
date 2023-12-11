import ProjectSlider from "./ProjectSlider";


const Projects = () => {
    return (
        <div className=" flex justify-between items-center my-10">
            <div className=" text-5xl text-violet-600">
                <h1>Latest Project</h1>
            </div>
            <div className=" w-1/2">
                <ProjectSlider />
            </div>
        </div>
    );
};

export default Projects;