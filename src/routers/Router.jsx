import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Register";
import Register from "../pages/Register";
import SharegardenTips from "../pages/SharegardenTips";
import Exploregardeners from "../pages/Exploregardeners";
import BrowesTips from "../pages/BrowesTips";

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
                path:'/sharegardentips',
                Component:SharegardenTips
            },
            {
                path:'/exploreguarden',
                Component:Exploregardeners
            },
            {
                path:'/browestips',
                Component:BrowesTips

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