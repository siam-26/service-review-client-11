import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import AllServicesMain from "../Pages/Home/AllServices/AllServicesMain";
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
                path: '/allservicess',
                element: <AllServicesMain></AllServicesMain>,
                loader: async () => fetch('http://localhost:5000/allServices'),

            }
            ,
            {
                path: '/allservices/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/allServices/${params.id}`)
                }
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