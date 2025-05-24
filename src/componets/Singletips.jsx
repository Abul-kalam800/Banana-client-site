import React from "react";
import { MdDelete, MdEditSquare } from "react-icons/md";

const Singletips = ({ tips, handleDelet}) => {
  const { photo, title } = tips;

  return (
    <div className="overflow-x-auto">
      <table className="table w-full text-center">
        {/* head */}

        <tbody className="p-5 ">
          {/* row 1 */}
          <tr className="">
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img src={photo} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className=" ">
                <p className="font-bold">{title}</p>
              </div>
            </td>
            <td>
              <div className="text-center "><MdEditSquare size={30}></MdEditSquare></div>
            </td>
            <td>
             <button className="text-center
             ">
                 <MdDelete onClick={handleDelet}  size={30}></MdDelete>
             </button >
            </td>
            <th>
              <div className="">
                <button className="btn btn-ghost btn-xs">details</button>
              </div>
            </th>
          </tr>
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default Singletips;
