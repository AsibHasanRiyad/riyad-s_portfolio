import {
  FaCalendarAlt,
  FaGraduationCap,
  FaHome,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const PersonalInfo = () => {
  return (
    <div className=" text-gray-200">
      <h1 className=" text-4xl font-semibold mb-3">Web Developer</h1>
      <p className=" max-w-xl text-[#D5D5D3]">
        On a continual quest for learning, I leverage a strong work ethic to
        apply my React development skills
      </p>
      <div className=" grid grid-cols-2 text-[#D5D5D3] gap-4 mt-4">
        <div className=" flex items-center gap-2">
          <FaUser className=" text-[#A456F6]" />
          <p>Asib Hasan Riyad</p>
        </div>
        <div className=" flex items-center gap-2">
          <HiMail className=" text-[#A456F6]" />
          <p>asibhasanriyad@gmail.com</p>
        </div>
        <div className=" flex items-center gap-2">
          <FaGraduationCap className=" text-[#A456F6]" />
          <p>Masters in Eee</p>
        </div>
        <div className=" flex items-center gap-2">
          <FaPhone className=" text-[#A456F6]" />
          <p>+8801568260699</p>
        </div>
        <div className=" flex items-center gap-2">
          <FaCalendarAlt className=" text-[#A456F6]" />
          <p>Born on 15 Dec, 1998</p>
        </div>
        <div className=" flex items-center gap-2">
          <FaHome className=" text-[#A456F6]" />
          <p> Mirpur, Dhaka</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
