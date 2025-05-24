import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Register";
import Register from "../pages/Register";
import SharegardenTips from "../pages/SharegardenTips";
import Exploregardeners from "../pages/Exploregardeners";
import BrowesTips from "../pages/BrowesTips";
import Tipdetails from "../pages/Tipdetails";
import Mytips from "../pages/Mytips";

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
                loader:()=>fetch('http://localhost:3000/sharetips'),
                Component:BrowesTips

            },
            {
                path:'/tipdetails/:id',
                loader: ({params})=> fetch(`http://localhost:3000/sharetips/${params.id}`),
                Component:Tipdetails
            },
            {
                path:'/sharetipsall',
                loader: ()=> fetch('http://localhost:3000/sharetipsall'),
                
                Component:Mytips
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