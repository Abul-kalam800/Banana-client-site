import React, { use } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContex } from "../provider/AuthContex";

const UpdateTips = () => {
  const {user}=use(AuthContex)
  const tipsData = useLoaderData();
  const {
    _id,
    title,
    category,
    plant,
    selected,
    Description,
    abilibilty,
    photo,
  } = tipsData;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateTips = Object.fromEntries(formData.entries());
    console.log(updateTips);
    fetch(`http://localhost:3000/sharetips/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateTips),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log("after update ", data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your succesfully updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto md:p-20">
      <h1 className="text-3xl mb-5 md:text-5xl font-semibold text-center">
        Update tips
      </h1>

      <div>
        <form onSubmit={handleUpdate}>
          <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 mx-auto  gap-6">
            <fieldset className="fieldset">
              <label className="label">Title</label>
              <input
                type="text"
                name="title"
                className="input w-full"
                placeholder="Title"
                defaultValue={title}
              />
            </fieldset>
            <fieldset className="fieldset">
              <label>Plant type topic</label>
              <input
                type="text"
                name="plant"
                className="input w-full"
                placeholder=" Plant Type/Topic"
                defaultValue={plant}
              />
            </fieldset>
            <fieldset className="fieldset">
              <label>Difficulty Level</label>

              <select
                name="selected"
                defaultValue={selected}
                className="select w-full  "
              >
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
                defaultValue={Description}
              />
            </fieldset>
            <fieldset className="fieldset">
              <label>Category</label>
              <select
                name="category"
                defaultValue={category}
                className="select w-full"
              >
                <option> Composting</option>
                <option> Plant Care</option>
                <option> Vertical Gardening</option>
              </select>
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Abilability</label>
              <select
                name="abilibilty"
                defaultValue={abilibilty}
                className="select w-full"
              >
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
                defaultValue={photo}
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
            className="input w-full my-5 rounded-full bg-green-400 cursor-pointer"
            value="Update"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateTips;
