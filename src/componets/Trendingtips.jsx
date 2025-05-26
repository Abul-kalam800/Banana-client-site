import React, { useEffect, useState } from "react";
import TrendingCard from "./TrendingCard";

const Trendingtips = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/trendingtips")
      .then((res) => res.json())
      .then((data) =>
        //      console.log(data)
        setTrending(data)
      );
  }, []);
  console.log(trending);
  return (
    <div className="w-11/12 mx-auto mt-14">
      <h1 className="text-center font-semibold text-4xl my-14">Trending Tips</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {
        trending.map(trendigTip => <TrendingCard trendigTip={trendigTip}></TrendingCard>)
        }
      </div>
    </div>
  );
};

export default Trendingtips;
