import React from "react";

const Gardenar = ({ gardener }) => {
  console.log(gardener);
  return (
    <div className="p-5 bg-green-200 text-center ">
      <div className="w-20 h-20 rounded-full mb-5 bg-red-200 mx-auto">
        <img src={gardener.image} alt="imge" />
      </div>
      <h2>{gardener.gardeners_name}</h2>
      <p>{gardener.experiences}</p>
      <p>{gardener.status}</p>
    </div>
  );
};

export default Gardenar;
