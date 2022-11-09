import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import AllServices from "../Pages/Home/AllServices/AllServices";
import ServiceDetails from "../Pages/Home/AllServices/ServiceDetails";
import Home from "../Pages/Home/Home";
import Login from "../Shared/Login/Login";
import Register from "../Shared/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => fetch('http://localhost:5000/services')
            },
            {
                path: '/allservices',
                element: <AllServices></AllServices>
            },
            {
                path: '/serviceDetails',
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])
export default router;