import React from "react";
import { MdDelete, MdEditSquare } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const Singletips = ({ tips, setTipsData, tipsData }) => {
  const { _id, photo, title } = tips;

  const handleDelet = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You wont to delet!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/sharetips/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remaintData = tipsData.filter(
                (tipsItem) => tipsItem._id != id
              );
              setTipsData(remaintData);
            }

            console.log("after data delet", data);
          });

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
    console.log("hello", id);
  };

  return (
    <tr className="text-center">
      <td className="text-center">
        <div className="mask mask-squircle w-full md:w-40 object-cover">
          <img src={photo} alt="Avatar Tailwind CSS Component" className="object-center" />
        </div>
      </td>
      <td>
        <p>{title}</p>
      </td>
      <td>
        <button>
          <Link to={`/updated/${_id}`} className="cursor-pointer text-center">
            <MdEditSquare size={24}></MdEditSquare>
          </Link>
        </button>
      </td>
      <td>
        <button onClick={() => handleDelet(_id)} className="cursor-pointer">
          <MdDelete size={24}></MdDelete>
        </button>
      </td>
    </tr>
  );
};

export default Singletips;
