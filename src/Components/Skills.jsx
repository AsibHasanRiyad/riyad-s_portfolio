// // import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./CSS/style.css";

// // import required modules
// import { Autoplay, Navigation } from "swiper/modules";
// import { useEffect, useState } from "react";
// import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
// import { SiJavascript, SiTailwindcss } from "react-icons/si";

// export default function Skills() {
//   const [frontEnd, setFrontEnd] = useState([]);
//   const [backEnd, setBackEnd] = useState([]);
//   const [others, setOthers] = useState([]);
//   useEffect(() => {
//     fetch("frontend.json")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setFrontEnd(data);
//       });
//   }, []);
//   useEffect(() => {
//     fetch("backend.json")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setBackEnd(data);
//       });
//   }, []);
//   useEffect(() => {
//     fetch("others.json")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setOthers(data);
//       });
//   }, []);
//   return (
//     <div className=" text-gray-200">
//       <div className=" text-center">
//         <h1 className=" max-w-xl mx-auto my-6 flex gap-2 items-center justify-center text-white font-light w-fit text-xl cursor-pointer border border-gray-200 rounded-full px-4 py-2 ">
//           {" "}
//           My Skills
//         </h1>
//         <p className=" max-w-5xl text-base text-justify mx-auto text-[#848484] ">
//           Lorem ipsum dolor sit, amet Lorem ipsum dolor sit amet consectetur
//           adipisicing elit. Veniam magnam, soluta fugiat laborum nostrum,
//           ducimus fugit! Lorem ipsum, dolor sit amet consectetur adipisicing
//           elit.
//         </p>
//       </div>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 3500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={false}
//         modules={[Autoplay, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <div className=" bg-transparent  h-full w-full py-5">
//             <h1 className="  text-2xl md:text-3xl lg:text-5xl mb-5 lg:mb-10">
//               Frontend
//             </h1>
//             <div className=" grid grid-cols-4 gap-10 w-3/4 mx-auto">
//               {frontEnd.map((data) => (
//                 <div
//                   className="  text-2xl flex gap-4 items-center justify-center "
//                   key={data.name}
//                 >
//                   <div className=" w-12">
//                     <img src={data.image} alt="" />
//                   </div>
//                   <h1 className=" hidden lg:block">{data.name}</h1>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="  h-full w-full py-5 md:py-10">
//             <h1 className="  text-2xl md:text-3xl lg:text-5xl mb-5 lg:mb-10">
//               Backend
//             </h1>
//             <div className=" grid grid-cols-4 gap-10 w-3/4 mx-auto">
//               {backEnd.map((data) => (
//                 <div
//                   className=" text-xs lg:text-2xl flex gap-4 items-center justify-center"
//                   key={data.name}
//                 >
//                   <div className="w-12">
//                     <img src={data.image} alt="" />
//                   </div>
//                   <h1 className=" hidden lg:block">{data.name}</h1>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className=" bg-transparent h-full w-full py-10">
//             <h1 className="  text-2xl md:text-3xl lg:text-5xl mb-5 lg:mb-10">
//               Others
//             </h1>
//             <div className=" grid grid-cols-4 gap-10 w-3/4 mx-auto">
//               {others.map((data) => (
//                 <div
//                   className="  text-2xl flex gap-4 items-center justify-center"
//                   key={data.name}
//                 >
//                   <div className=" w-12">
//                     <img src={data.image} alt="" />
//                   </div>
//                   <h1 className=" hidden lg:block">{data.name}</h1>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//       {/* <div className=" grid grid-cols-8 gap-6 my-6">
//         {frontEnd.map((item) => (
//           <div key={item.name}>
//             <div className=" flex items-center gap-2 border w-fit h-fit px-3 py-3 rounded-full border-gray-200">
//               <img className=" w-12 h-12" src={item.image} alt="" />

//             </div>
//           </div>
//         ))}
//       </div> */}
//       {/* <div className=" grid grid-cols-4 gap-6 my-6">
//         {backEnd.map((item) => (
//           <div  key={item.name}>
//             <div className=" flex items-center gap-2">
//               <img className=" w-12" src={item.image} alt="" />
//               <h1>{item.name}</h1>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className=" grid grid-cols-4 gap-6 my-6">
//         {others.map((item) => (
//           <div  key={item.name}>
//             <div className=" flex items-center gap-2">
//               <img className=" w-12" src={item.image} alt="" />
//               <h1>{item.name}</h1>
//             </div>
//           </div>
//         ))}
//       </div> */}

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FaCss3, FaHome, FaHtml5 } from "react-icons/fa";
import PersonalInfo from "./PersonalInfo";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <div>
        <h1 className="text-transparent bg-gradient-to-br bg-clip-text from-indigo-500 via-purple-500 to-pink-500 text-5xl text-center py-10 font-bold">
          About Me
        </h1>
      </div>
      <Box sx={{ display: 'inline-block', border: '1px solid #ccc', borderRadius: '44px' }}>
        <Box sx={{ borderColor: "transparent", borderBottom:'none' }}>
          <Tabs
            sx={{
              "& .Mui-selected": {
                color: "white",
                bgcolor: "#A456F6",
                margin:'4px',
                borderRadius: "44px",
              },
            }}
            TabIndicatorProps={{sx:{height: 0}}}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab label="Personal Info " {...a11yProps(0)} sx={{ color: "White" }} />
            <Tab label="Qualification" {...a11yProps(1)} sx={{ color: "White" }} />
            <Tab label="Skills" {...a11yProps(2)} sx={{ color: "White" }} />
          </Tabs>
        </Box>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <PersonalInfo />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className=" text-6xl grid grid-cols-5 text-white gap-5">
          <FaCss3 />
          <FaCss3 />
          <FaCss3 />
          <FaCss3 />
          <FaCss3 />
          <FaCss3 />
          <FaCss3 />
          <FaCss3 />
          <FaCss3 />
          <FaCss3 />
          <h1> <FaHome /> </h1>
         
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className=" text-6xl grid grid-cols-5 text-white gap-5">
          <FaHtml5 />
          <FaHtml5 />
          <FaHtml5 />
          <FaHtml5 />
          <FaHtml5 />
          <FaHtml5 />
          <FaHtml5 />
          <FaHtml5 />
          <FaHtml5 />
          <FaHtml5 />
        </div>
      </CustomTabPanel>
    </Box>
  );
}
