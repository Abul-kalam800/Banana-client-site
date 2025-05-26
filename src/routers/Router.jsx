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
import UpdateTips from "../componets/UpdateTips";
import Page404 from "../pages/Page404";
import Loading from "../pages/Loading";
import PrivetRouter from "../PrivetRouter/PrivetRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <Page404></Page404>,
    children: [
      {
        path: "/",
        index: true,
        hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch("http://localhost:3000/gardenerfeachers"),
        Component: Home,
      },
      {
        path: "/sharegardentips",
        Component: SharegardenTips,
      },
      {
        path: "/exploreguarden",
        hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch("http://localhost:3000/profiles"),
        Component: Exploregardeners,
      },
      {
        path: "/browestips",
        hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch("http://localhost:3000/sharetipsfilter"),
        Component: BrowesTips,
      },
      {
        path: "/tipdetails/:id",
        hydrateFallbackElement: <Loading></Loading>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/sharetips/${params.id}`),
        element:<PrivetRouter><Tipdetails></Tipdetails></PrivetRouter>,
      },
      {
        path: "/sharetipsall",
        hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch("http://localhost:3000/sharetips"),

        element:<PrivetRouter><Mytips></Mytips></PrivetRouter>,
      },
      {
        path: "/updated/:id",
        hydrateFallbackElement: <Loading></Loading>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/sharetips/${params.id}`),
       element:<PrivetRouter><UpdateTips></UpdateTips></PrivetRouter>
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
