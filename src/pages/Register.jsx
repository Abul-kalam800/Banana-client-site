import React, { use, useState } from "react";
import { AuthContex } from "../provider/AuthContex";
import Swal from "sweetalert2";
import { GoogleAuthProvider } from "firebase/auth";
import { NavLink } from "react-router";

const Register = () => {
  const { error, setError } = useState([]);
  const { creatUser, singinWithgoogle, uptoProfile, user, setUser } =
    use(AuthContex);
  const googleProvider = new GoogleAuthProvider();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const name = formData.get("name");
    const photo = formData.get("photo");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password, name, photo);

    if(name.length <5){
       Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Name Must digit 5 charcter or longer",
          showConfirmButton: false,
          timer: 1500,
        });
        return
    }
    // password validation
    if (password.length < 8) {
    Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Must inclued at least 8 digit or longer",
          showConfirmButton: false,
          timer: 1500,
        });
      return;
    }

    if (!/[A-Z]/.test(password)) {
    Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Must inculed  one uppercase",
          showConfirmButton: false,
          timer: 1500,
        });
      return;
    }
    if (!/[a-z]/.test(password)) {
     Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Must include one lowercse",
          showConfirmButton: false,
          timer: 1500,
        });
      return;
    }
    if (!/[0-9]/.test(password)) {
       Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Must include al least one nubmer",
          showConfirmButton: false,
          timer: 1500,
        });
      return;
    }
    if (!/[!@#$%^&*]/.test(password)) {
       Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Must include one special charector",
          showConfirmButton: false,
          timer: 1500,
        });
    }

    // setError(error);

    creatUser(email, password)
      .then((result) => {
        console.log(result.user);

        // updateprofile
        uptoProfile({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            const userProfile = { ...user, displayName: name, photoURL: photo };
            setUser(userProfile);
          })
          .catch((error) => {
            console.log(error);
          });
        // aleart successfully
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your successfully registerd",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Oops rong something",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleGoogleRegister = () => {
    singinWithgoogle(googleProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 mb-14 mt-5">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4">
        <h1 className="text-3xl font-semibold text-center">Register Now!</h1>
        <div className="card-body">
          <form
            onSubmit={handleRegister}
            className="form grid grid-cols-1 space-y-3"
          >
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter Your Name"
              required
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Photo</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo URL"
              required
            />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <p>
              Already have an account go{" "}
              <NavLink to="/login" className="text-blue-700">
                Login
              </NavLink>
            </p>
            <button className="btn btn-neutral mt-4 w-full">Register</button>
          </form>
          <div className="flex justify-center items-center gap-7">
            <div className=" border-2 w-6/12"></div>
            <p className="text-2xl">or</p>
            <div className="border-2 w-6/12"></div>
          </div>
          <button
            className="btn bg-white text-black border-[#e5e5e5]"
            onClick={handleGoogleRegister}
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
