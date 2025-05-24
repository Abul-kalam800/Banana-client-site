import React from "react";
import { useLoaderData } from "react-router";
import Singletips from "../componets/Singletips";

const Mytips = () => {
  const tipsData = useLoaderData();
  console.log(tipsData);

  const handleDelet = e=>{
    console.log('delet')

  }
  return (
    <div>
      <h1 className="text-3xl text-center font-semibold mt-5">My Own Tips</h1>
      <p className="text-xl w-6/12 mx-auto text-center my-5">
        This page is my own opinion. What you want and what you want to delet
        from this page .so read kindy and check whice you want keep and updated{" "}
      </p>

      <div className="w-11/12 mx-auto ">
        <thead className="table flex items-center ml-auto">
          <tr>
            <th>Photo</th>
            <th>Favorite Color</th>
            <th>Update</th>
            <th>Delet</th>
            <th>Details</th>
           
          </tr>
        </thead>
        {tipsData.map((tips) => (
          <Singletips tips={tips} handleDelet></Singletips>
        ))}
      </div>
    </div>
  );
};

export default Mytips;
