import React from "react";
import { Link } from "react-router";

const BrowstipsCard = ({ gardentip }) => {
  const {_id, title, category, photo } = gardentip;

  return (
    <div className="">
      <table className="table">
        {/* head */}

        <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-2">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img src={photo} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="font-bold flex items-center">{title}</div>
            </td>
            <td>
              <div className="font-bold  flex items-center ml-auto mr-auto">{category}</div>
            </td>

            <td>
              <div className="flex items-center">
                <Link to={`/tipdetails/${_id}`} className="btn btn-ghost">see more</Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BrowstipsCard;
