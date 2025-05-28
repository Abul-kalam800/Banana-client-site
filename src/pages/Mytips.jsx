import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Singletips from "../componets/Singletips";
import { useTypewriter } from "react-simple-typewriter";

const Mytips = () => {
  const tip = useLoaderData();
 
  const [tipsData,setTipsData]=useState(tip)


   const [text] = useTypewriter({
    words: ['Tips'],
    loop: 0,
     typeSpeed:70,
      deleteSpeed:50,
       delaySpeed:1000,
  })
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="md:text-6xl text-center font-semibold mt-5 text-4xl">My Own <span className="text-green-500">{text}</span></h1>
      <p className="md:w-9/12 mx-auto text-center my-5">
        This page is my own opinion. What you want and what you want to delet
        from this page .so read kindy and check whice you want keep and updated,This page is you can some new added what is  you know the best option,What we are missing .
      </p>

      <div className="my-10">
        <table className="md:w-full bg-base-300 border">
          <thead className="bg-green-400 h-12">
            <tr className="  font-semibold">
              <th>Photo</th>
              <th>Title</th>
              <th>Update</th>
              <th>Delet</th>
             
            </tr>
          </thead>
            <tbody>
          {tipsData.map((tips) => (
            <Singletips key={tips._id} tips={tips}setTipsData={setTipsData}tipsData={tipsData} ></Singletips>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mytips;
