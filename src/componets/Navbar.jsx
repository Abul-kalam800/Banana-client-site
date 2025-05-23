import React, { use, useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContex } from "../provider/AuthContex";
import userImg from "../assets/usser.png";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";

const Navbar = () => {
  const { user } = useContext(AuthContex);
  const links = (
    <>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink>
        <li>Explore Gardeners</li>
      </NavLink>
      <NavLink>
        <li>Browse Tips</li>
      </NavLink>
      <NavLink>
        <li>Share a Garden Tip</li>
      </NavLink>
    </>
  );

  console.log(user);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("signout successfull");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("logout");
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Banana</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-6 items-center font-semibold">
            {links}
          </ul>
        </div>

        <div className="navbar-end flex gap-5">
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
            <button className="cursor-pointer" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="btn">
                Login
              </Link>
              <Link to="/register" className="btn">
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
