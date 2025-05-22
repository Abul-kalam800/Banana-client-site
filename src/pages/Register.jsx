import React, { use, useState } from "react";
import { AuthContex } from "../provider/AuthContex";
import Swal from "sweetalert2";

const Register = () => {
  const { error, setError } = useState([]);
  const { creatUser } = use(AuthContex);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const name = formData.get("name");
    const phto = formData.get("photo");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password, name, phto);

    // password validation
    if (password.length < 8) {
      alert("Password must be 8 charectors");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      alert("Must include at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      alert("Must include at least one lowercase letter.");
      return;
    }
    if (!/[0-9]/.test(password)) {
      alert("Must include at least one number.");
      return;
    }
    if (!/[!@#$%^&*]/.test(password)) {
      alert("Must include at least one special character (!@#$%^&*).");
    }
    elrs;
    setError(error);

    creatUser(email, password)
      .then((result) => {
        console.log(result.user);

        // aleart successfully
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero bg-base-200">
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
            <button className="btn btn-neutral mt-4 w-full">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
