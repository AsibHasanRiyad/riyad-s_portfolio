import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FloatingDockDemo } from "../Components/FloatingDock";
// import { TracingBeam } from "../Components/ui/tr/acing-beam";

const MainLayout = () => {
  return (
    <div name="home" className=" bg-[#161513] ">
      <>
        <Navbar />
        <div className="px-4 md:px-8 lg:px-20">
          <Outlet></Outlet>
        </div>

        <Footer />
        <FloatingDockDemo />
      </>
    </div>
  );
};

export default MainLayout;
