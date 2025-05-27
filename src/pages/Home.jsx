import React from "react";
import Banner from "../componets/Banner";
import FechersGurdeners from "../componets/FechersGurdeners";
import Trendingtips from "../componets/Trendingtips";
import { useLoaderData } from "react-router";
import Gallery from "../componets/Gallery";

const Home = () => {
  const fethersGardeners = useLoaderData();
 
  return (
    <div className="w-11/12 mx-auto">
      <Banner></Banner>
      <FechersGurdeners fethersGardeners={fethersGardeners}></FechersGurdeners>
    <Trendingtips></Trendingtips>
    <Gallery></Gallery>
    </div>
  );
};

export default Home;
