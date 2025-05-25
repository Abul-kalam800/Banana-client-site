import React from "react";
import GardenProfile from "./GardenProfile";

const FechersGurdeners = ({ data }) => {
  console.log(data);

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-5xl text-center mt-24">Gurdener featears</h1>
      <div>
        {data.map((gardenProfile) => (
          <GardenProfile></GardenProfile>
        ))}
      </div>
    </div>
  );
};

export default FechersGurdeners;
