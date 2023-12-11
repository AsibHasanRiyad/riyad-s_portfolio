import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import PersonalInfo from "./PersonalInfo";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiVisualstudiocode,
} from "react-icons/si";
import Achievement from "./Achievement";

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
      <Box
        sx={{
          display: "inline-block",
          border: "1px solid #ccc",
          borderRadius: "44px",
          maxWidth: "100%",
          overflow: "hidden",
        }}
      >
        <Box sx={{ borderColor: "transparent", borderBottom: "none" }}>
          <Tabs
            sx={{
              "& .Mui-selected": {
                color: "Black",
                bgcolor: "#A456F6",
                margin: "4px",
                borderRadius: "44px",
              },
            }}
            TabIndicatorProps={{ sx: { height: 0 } }}
            value={value}
            onChange={handleChange}
            aria-label="basic scrollable auto tabs example"
            centered
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              label="Personal Info "
              {...a11yProps(0)}
              sx={{ color: "White" }}
            />
            <Tab
              label="Skills"
              {...a11yProps(1)}
              sx={{ color: "White" }}
            />
            <Tab label="Achievements" {...a11yProps(2)} sx={{ color: "White" }} />
          </Tabs>
        </Box>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <PersonalInfo />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-easing="ease-in-sine"
        >
          <h1 className=" text-gray-300 text-3xl my-5">Tools I use everyday</h1>
          <div className=" text-3xl grid grid-cols-1 md:grid-cols-3 text-gray-300 gap-5 md:gap-20">
            <div>
              <h1 className=" text-xl">Frontend</h1>
              <hr className=" my-4" />
              <div className=" flex flex-wrap gap-6">
                <FaHtml5 />
                <FaCss3 />
                <SiJavascript />
                <FaReact />
                <SiTailwindcss />
                <FaBootstrap />
              </div>
            </div>
            <div>
              <h1 className=" text-xl">Backend</h1>
              <hr className=" my-4" />
              <div className=" flex gap-6">
                <FaNodeJs />
                <SiExpress />
                <SiMongodb />
              </div>
            </div>
            {/* Tools */}
            <div className=" text-gray-300 ">
              <h1 className=" text-xl">Tools</h1>
              <hr className=" my-4" />
              <div className=" text-3xl flex gap-7">
                <SiVisualstudiocode />
                <FaFigma />
              </div>
            </div>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Achievement />
      </CustomTabPanel>
    </Box>
  );
}
