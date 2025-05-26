import React from "react";

const GardenProfile = ({ gardenProfile }) => {
  console.log(gardenProfile);
  const { gardeners_name, status, image, experiences } = gardenProfile;
  
  
  return  <>
   <div className="p-5 text-center bg-green-100 rounded-2xl">
     <div className="w-40 h-40 rounded-full bg-gray-100 mx-auto mb-5 object-cover object-center">
        <img src={image} alt="gardenerprofile" className="object-cover w-full h-full rounded-full" />
    </div>
    <h3 className="text-xl font-semibold mb-5">{gardeners_name}</h3>
    <p className=" mb-3 font-bold ">{status}</p>
    <p className="text-gray-500">{experiences}</p>
   </div>
  </>
};

export default GardenProfile;
