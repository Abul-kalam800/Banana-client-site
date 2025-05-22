import React, { use } from "react";
import { AuthContex } from "../provider/AuthContex";

const Register = () => {
  const { creatUser } = use(AuthContex);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get('email')
    const password = formData.get('password')
    console.log(email,password)


    creatUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
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
            />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
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
