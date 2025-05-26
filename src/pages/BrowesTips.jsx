import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import BrowstipsCard from "../componets/BrowstipsCard";

const BrowesTips = () => {
  const gardenTips = useLoaderData();

  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState();
  useEffect(() => {
    fetch(`http://localhost:3000/sharetipsfilter?filterParams=${search}`)
      .then((res) => res.json())
      .then((data) => setFilterData(data));
    console.log("kalam");
  }, [search]);

  console.log(filterData);
  console.log(search);
  return (
    <div>
      <h1 className="text-center text-6xl font-semibold mt-20">Browes tips</h1>

      <div className=" w-11/12  mx-auto mt-20 ">
        <div className="w-9/12 mx-auto ">
          <input
            type=" text"
            name="search"
            className="mb-9 border-2 p-3 rounded-2xl "
            placeholder="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <table className="w-full  overflow-x-auto">
          <thead className="bg-green-300 h-10">
            <tr>
              <th>Photo</th>
              <th>Title</th>
              <th>Category</th>
              <th>Diffculity</th>
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
