import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import AllServicesMain from "../Pages/Home/AllServices/AllServicesMain";
import ServiceDetails from "../Pages/Home/AllServices/ServiceDetails";
import Home from "../Pages/Home/Home";
import Login from "../Shared/Login/Login";
import MySpecificReviews from "../Shared/Navbar/MySpecificReviews/MySpecificReviews";
import Register from "../Shared/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => fetch('https://hmas-food-server.vercel.app/services')
            },
            {
                path: '/services',
                element: <AllServicesMain></AllServicesMain>,
                loader: async () => fetch('https://hmas-food-server.vercel.app/allServices'),

            }
            ,
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => {
                    return fetch(`https://hmas-food-server.vercel.app/allServices/${params.id}`)
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
            },
            {
                path: '/reviewsMy',
                element: <MySpecificReviews></MySpecificReviews>
            }

        ]
    }
])
export default router;