 import React from 'react';
 
 const UpdateTips = () => {
    return (
        <div className="w-11/12 mx-auto md:p-20">
      <h1 className="text-3xl mb-5 md:text-6xl font-semibold text-center">
        Update tips
      </h1>

      <div>
        <form onSubmit=''>
          <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 mx-auto  gap-6">
            <fieldset className="fieldset">
              <label className="label">Title</label>
              <input
                type="text"
                name="title"
                className="input w-full"
                placeholder="Title"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label>Plant type topic</label>
              <input
                type="text"
                name="plant"
                className="input w-full"
                placeholder=" Plant Type/Topic"
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
              />
            </fieldset>
            <fieldset>
              <label className="label">Email & name</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Email & Name"
                readOnly
              />
            </fieldset>
          </div>

          <input
            type="submit"
            className="input w-full my-5 rounded-full bg-green-200"
            value="Update"
          />
        </form>
      </div>
    </div>
    );
 };
 
 export default UpdateTips;