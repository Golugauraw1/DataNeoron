import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const DetailTable = ({ data, handleUpdate, handleDelete }) => {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-bold my-4">All Form Details</h2>
      <table className="table-auto w-full border-collapse">
        <thead className="bg-black text-white">
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Number</th>
            <th className="border px-4 py-2">UpdateCount</th>
            <th className="border px-4 py-2">Update</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((data) => (
              <tr key={data._id}>
                <td className="border px-4 py-2">{data.userName}</td>
                <td className="border px-4 py-2">{data.email}</td>
                <td className="border px-4 py-2">{data.mobileNumber}</td>
                <td className="border px-4 py-2">{data.updateCount}</td>

                <td className="border px-4 py-2 flex justify-center">
                  <button
                    className="mr-2 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full"
                    onClick={() => handleUpdate(data)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full"
                    onClick={() => handleDelete(data)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailTable;
