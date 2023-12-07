import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className=" bg-black px-4 md:px-8 lg:px-20">
            <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;