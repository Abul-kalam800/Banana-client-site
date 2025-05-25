import React from "react";
import { useLoaderData } from "react-router";
import BrowstipsCard from "../componets/BrowstipsCard";

const BrowesTips = () => {
  const gardenTips = useLoaderData();
  console.log(gardenTips);

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold">Browes tips</h1>

      <div className="w-11/12 mx-auto my-20">
        <table className="w-full">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Title</th>
              <th>Category</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
          {gardenTips.map((gardentip) => (
            <BrowstipsCard
              key={gardentip._id}
              gardentip={gardentip}
            ></BrowstipsCard>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowesTips;
