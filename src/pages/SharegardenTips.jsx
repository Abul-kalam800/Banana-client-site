import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContex } from "../provider/AuthContex";
import { useTypewriter } from "react-simple-typewriter";

const SharegardenTips = () => {
  const {user}=useContext(AuthContex)
  const handleFrom = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const gardenData = Object.fromEntries(formData.entries());
    console.log(gardenData);

    fetch("http://localhost:3000/sharetips", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(gardenData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after store db ", data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your tips is succesfully added",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };

   const [text] = useTypewriter({
    words: ['Garden'],
    loop: 0,
     typeSpeed:70,
      deleteSpeed:50,
       delaySpeed:1000,
  })
  return (
    <div className="w-11/12 mx-auto md:p-20">
      <h1 className="text-3xl md:text-6xl font-semibold text-center mb-5">
        Share <span className="text-green-500">{text}</span> trips
      </h1>

      <div>
        <form onSubmit={handleFrom}>
          <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 mx-auto  gap-6">
            <fieldset className="fieldset">
              <label className="label">Title</label>
              <input
                type="text"
                name="title"
                className="input w-full"
                placeholder="Title"
                required
              />
            </fieldset>
            <fieldset className="fieldset">
              <label>Plant type topic</label>
              <input
                type="text"
                name="plant"
                className="input w-full"
                placeholder=" Plant Type/Topic"
                required
              />
            </fieldset>
            <fieldset className="fieldset">
              <label>Difficulty Level</label>

              <select name="selected" className="select w-full  ">
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </fieldset>
            <fieldset className="fieldset">
              <label>Description</label>
              <input
                type="text"
                name="Description"
                className="input w-full"
                placeholder="Type here"
                required
              />
            </fieldset>
            <fieldset className="fieldset">
              <label>Category</label>
              <select name="category" className="select w-full">
                <option> Composting</option>
                <option> Plant Care</option>
                <option> Vertical Gardening</option>
              </select>
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Abilability</label>
              <select name="abilibilty" className="select w-full">
                <option> Public</option>
                <option> Hidden</option>
              </select>
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Image url</label>
              <input
                type="text"
                name="photo"
                className="input w-full "
                placeholder="Images url"
                required
              />
            </fieldset>
            <fieldset>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder={user.email}
                readOnly
              />
            </fieldset>
          </div>

          <input
            type="submit"
            className="cursor-pointer input w-full my-5 rounded-full bg-green-600"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default SharegardenTips;
