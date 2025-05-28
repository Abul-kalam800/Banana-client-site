import React, { use, useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContex } from "../provider/AuthContex";
import userImg from "../assets/usser.png";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import logo from "../assets/logob.png"
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user } = useContext(AuthContex);
  const links = (
    <>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/exploreguarden">
        <li>Explore Gardeners</li>
      </NavLink>
      <NavLink to="/browestips">
        <li>Browse Tips</li>
      </NavLink>
      <NavLink to="/sharegardentips">
        <li>Share a Garden Tip</li>
      </NavLink>
      <NavLink to="/sharetipsall">
        <li> My-tips</li>
      </NavLink>
    </>
  );
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState("light");

  const toogleBtn = () => {
    if (show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setShow(show == true ? false : true);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your successfully Logout",
          showConfirmButton: false,

          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("logout");
  };
  return (
    <div className="bg-blue-400  w-full mt-4">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-74 h-74 p-2 shadow mb-10"
            >
              <NavLink to="/" className="mb-5">
                <li>Home</li>
              </NavLink>
              <NavLink to="/exploreguarden" className="mb-5">
                <li>Explore Gardeners</li>
              </NavLink>
              <NavLink to="/browestips" className="mb-5">
                <li>Browse Tips</li>
              </NavLink>
              <NavLink to="/sharegardentips" className="mb-5">
                <li>Share a Garden Tip</li>
              </NavLink>
              <NavLink to="/sharetipsall" className="mb-5">
                <li> My-tips</li>
              </NavLink>
            </ul>
          </div>

          <a href=""> 
            <img src={logo} className="w-14"/>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-6 items-center font-semibold">
            {links}
          </ul>
        </div>

        <div className="navbar-end flex gap-5 ">
          <button onClick={toggleTheme} className="cursor-pointer" data-tooltip-id="my-tooltop" data-tooltip-content='Dark and light mood'>
            {show ? <FiSun size={34} /> : <FaMoon size={34} />}
          </button>
          <Tooltip id="my-tooltop"></Tooltip>
          <div>
            {user ? (
              <div className="relative group inline-block ">
                <div>
                  <img
                    className="w-10 bg-red h-10 cursor-pointer"
                    src={user.photoURL}
                    alt=""
                  />
                </div>
                <h1
                  className="absolute top-full left-1/2 translate-x-[-50%] mt-2 
                             text-black  rounded  px-2 py-1 font-bold bg-white
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                            whitespace-nowrap z-10"
                >
                  {user.displayName}
                </h1>
              </div>
            ) : (
              <img className="w-10" src={userImg} alt="" />
            )}
          </div>
          {user ? (
            <button className="cursor-pointer bg-green-600 p-2 font-semibold" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="btn">
                Login
              </Link>
              <Link to="/register" className="btn hidden md:flex">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
