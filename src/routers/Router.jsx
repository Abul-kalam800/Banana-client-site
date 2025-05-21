import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Register";
import Register from "../pages/Register";

export const router = createBrowserRouter([
    {
        path:'/',
        Component:HomeLayout,
        children:[
            {
                path:'/',
                index:true,
                Component:Home
            },
            {
                path:'/login',
                Component:Login
            },
            {
                path:'/register',
                Component:Register
            }
        ]
    }
 ])