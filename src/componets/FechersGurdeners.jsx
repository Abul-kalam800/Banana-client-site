import React from "react";
import GardenProfile from "./GardenProfile";

const FechersGurdeners = ({fethersGardeners }) => {
  

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-5xl text-center my-14">Gurdener featears</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {fethersGardeners.map((gardenProfile =>
          <GardenProfile key={gardenProfile._id} gardenProfile={gardenProfile}></GardenProfile>
        ))}
      </div>
    </div>
  );
};

export default FechersGurdeners;
