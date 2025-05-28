import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import BrowstipsCard from "../componets/BrowstipsCard";
import { useTypewriter } from "react-simple-typewriter";

const BrowesTips = () => {
  // const gardenTips = useLoaderData();

  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/sharetipsfilter?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => setFilterData(data));
  }, [search]);


 
  const [text] = useTypewriter({
    words: ["tips"],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <div>
      <h1 className="text-center text-6xl font-semibold mt-20">
        Browes <span className="text-green-500">{text}</span>{" "}
      </h1>

      <div className=" w-11/12  mx-auto mt-10 ">
        <div className="w-9/12 mx-auto ">
          <input
            type=" text"
            name="search"
            className="mb-2 w-full border-2 p-3 rounded-2xl"
            placeholder="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-green-500 h-10">
              <tr>
                <th>Photo</th>
                <th>Title</th>
                <th>Category</th>
                <th>Diffculity</th>
                <th>Button</th>
              </tr>
            </thead>
            <tbody>
              {filterData.map((gardentip) => (
                <BrowstipsCard
                  key={gardentip._id}
                  gardentip={gardentip}
                ></BrowstipsCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BrowesTips;
