import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Skills from "../Components/Skills";


const MainRoutes = createBrowserRouter([
    {
        path:'/',
        element: <Navbar />,
        errorElement:<ErrorPage />,
        children:([
            {
                path:'/',
            element:<Hero />
            },
            {
                path:'/skills',
            element:<Skills />
            },
        ])
    }
])

export default MainRoutes;