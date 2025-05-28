import React from "react";
import GardenProfile from "./GardenProfile";
import { useTypewriter } from "react-simple-typewriter";

const FechersGurdeners = ({fethersGardeners }) => {
    const [text] = useTypewriter({
      words: ['Feathers'],
      loop: 0,
       typeSpeed:70,
        deleteSpeed:50,
         delaySpeed:1000,
    })
  

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-4xl text-center my-14 font-semibold">Gurdener <span className="text-green-500"> {text}</span> </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {fethersGardeners.map((gardenProfile =>
          <GardenProfile key={gardenProfile._id} gardenProfile={gardenProfile}></GardenProfile>
        ))}
      </div>
    </div>
  );
};

export default FechersGurdeners;
