import React from "react";
import { Tooltip } from "react-tooltip";

const GardenProfile = ({ gardenProfile }) => {
  

  const { gardeners_name, status, image, experiences } = gardenProfile;
  
  
  return  <>
   <div className="p-5 text-center bg-green-600 rounded-2xl" data-tooltip-id="My-tooltip" data-tooltip-content={gardeners_name}>
     <div className="w-40 h-40 rounded-full bg-gray-100 mx-auto mb-5 object-cover object-center">
        <img src={image} alt="gardenerprofile" className="object-cover w-full h-full rounded-full"  />
    </div>
    <h3 className="text-xl font-semibold mb-5">{gardeners_name}</h3>
    <p className=" mb-3 font-bold ">{status}</p>
    <p className="">{experiences}</p>
   </div>
   <Tooltip id="My-tooltip"></Tooltip>
  </>
};

export default GardenProfile;
