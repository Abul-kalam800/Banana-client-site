import React from "react";
import { useLoaderData } from "react-router";
import Gardenar from "../componets/Gardenar";
import { useTypewriter } from "react-simple-typewriter";

const Exploregardeners = () => {
  const gardenarData = useLoaderData();
  const [text] = useTypewriter({
    words: ["Gurdeners"],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-center text-6xl mt-20 mb-10 font-semibold">Explore <span className="text-green-500">{text}</span> </h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto mb-10">
        {gardenarData.map((gardener) => (
          <Gardenar key={gardener._id} gardener={gardener}></Gardenar>
        ))}
      </div>
    </div>
  );
};

export default Exploregardeners;
