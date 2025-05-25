import React from "react";
import { useLoaderData } from "react-router";
import Singletips from "../componets/Singletips";

const Mytips = () => {
  const tipsData = useLoaderData();
  console.log(tipsData);


  
  return (
    <div>
      <h1 className="text-3xl text-center font-semibold mt-5">My Own Tips</h1>
      <p className="text-xl w-6/12 mx-auto text-center my-5">
        This page is my own opinion. What you want and what you want to delet
        from this page .so read kindy and check whice you want keep and updated{" "}
      </p>

      <div className="w-11/12 mx-auto ">
        <table className="w-full mx-auto overflow-x-auto">
          <thead className="bg-green-300 h-12">
            <tr className=" text-xl font-semibold">
              <th>Photo</th>
              <th>Title</th>
              <th>Update</th>
              <th>Delet</th>
             
            </tr>
          </thead>
            <tbody>
          {tipsData.map((tips) => (
            <Singletips key={tips._id} tips={tips} ></Singletips>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mytips;
