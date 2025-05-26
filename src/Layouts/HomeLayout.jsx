import '../App.css'
import React from "react";
import Navbar from "../componets/Navbar";
import { Outlet } from "react-router";
import Footer from '../componets/Footer';


const HomeLayout = () => {
  return (
    <div>
        <nav className='w-11/12 mx-auto'>

      <Navbar></Navbar>
        </nav>
      <Outlet></Outlet>
      <footer className='bg-gray-700 '>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
