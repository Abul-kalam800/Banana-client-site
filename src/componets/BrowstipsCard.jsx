import React from "react";
import { Link } from "react-router";

const BrowstipsCard = ({ gardentip }) => {
  
  const { _id, title, category, photo, selected } = gardentip;

  return (
    <tr className="text-center">
      <td className="text-center">
        <div className="rounded-full bg-red-200 md:w-30 object-cover mx-auto">
          <img src={photo} alt="Avatar" />
        </div>
      </td>
      <td>
        <div>{title}</div>
      </td>
      <td>
        <div>{category}</div>
      </td>
      <td>
        <div>{selected}</div>
      </td>
      <td>
        <div className="rounded-xl bg-green-600 lg:p-2 ">
          <Link to={`/tipdetails/${_id}`}>see more</Link>
        </div>
      </td>
    </tr>
  );
};

export default BrowstipsCard;
