import React from "react";
import { PiClipboard } from "react-icons/pi";

const Gardenar = ({ gardener }) => {

  return (
    <div className="p-5 bg-green-400 rounded-2xl ">
      <div className=" h-50 rounded-2xl mb-5 bg-red-200  object-center object-cover">
        <img src={gardener.image} alt="imge" className="object-cover h-full w-full rounded-2xl " />
      </div>
      <h2 className="text-xl font-semibold mb-3">{gardener.gardeners_name}</h2>
      <p><span className="font-semibold">Age: </span>{gardener.age}</p>
      <p><span className="font-semibold">Gender: </span>{gardener.gender}</p>
      <p><span className="font-semibold">Total Shared-Tips: </span>{gardener.total_shared_tips}</p>
      <p><span className="font-semibold">Status: </span>{gardener.status}</p>
      <p><span className="font-semibold">Other-Info: </span>{gardener.other_info}</p>
      <p><span className="font-semibold">Experience: </span>{gardener.experiences}</p>
    </div>
  );
};

export default Gardenar;
