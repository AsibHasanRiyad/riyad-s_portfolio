import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";


const MainRoutes = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout />,
        errorElement:<ErrorPage />,
        children:([
            {
                path:'/',
            element:<Home />
            }
        ])
    }
])

export default MainRoutes;