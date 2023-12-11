/* eslint-disable react/prop-types */


const ProjectSlider = ({data}) => {
  return (
    <div className=" overflow-hidden shadow-xl">
    <img src={data.image} alt="" />
  </div>
  );
};

export default ProjectSlider;