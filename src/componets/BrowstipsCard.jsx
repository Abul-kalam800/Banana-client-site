import React from "react";
import { Link } from "react-router";

const BrowstipsCard = ({ gardentip }) => {
  const { _id, title, category, photo } = gardentip;

  return (
    <tr className="text-center">
      <td className="text-center">
        <div className="mask mask-squircle h-12 w-12">
          <img src={photo} alt="Avatar Tailwind CSS Component" />
        </div>
      </td>
      <td>
        <div>{title}</div>
      </td>
      <td>
        <div>{category}</div>
      </td>

      <td>
        <div  className="rounded-xl bg-green-300 lg:p-4 ">
          <Link to={`/tipdetails/${_id}`}>see more</Link>
        </div>
      </td>
    </tr>
  );
};

export default BrowstipsCard;
