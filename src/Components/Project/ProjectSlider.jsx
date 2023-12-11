/* eslint-disable react/prop-types */

import { FaGithub, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectSlider = ({ data }) => {
  return (
    <div >
      <div className=" w-full h-[280px]">
        <img
          className="   w-[247px] h-[270px] bottom-0 shadow-2xl"
          src={data.image}
          alt=""
        />
      </div>
      <div className=" px-2 py-2 h-full">
        <h4 className=" text-2xl text-gray-200 font-semibold mb-2">
          {data.name}
        </h4>
        <p className=" text-gray-300">{data.details}</p>
        <div className=" flex items-center gap-5 text-4xl mt-4 text-gray-300">
          <Link className=" text-4xl" to={data.gitHub}>
          <FaGithub></FaGithub>
          </Link>
          <Link to={data.live}>
          <FaLink className=" text-4xl"></FaLink>
          </Link>
        </div>
      </div>
     </div>
  );
};

export default ProjectSlider;
