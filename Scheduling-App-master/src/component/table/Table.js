import { useMutation } from "@apollo/client";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { DELETE_SCHEDULE } from "../../graphql/mutation/Mutation";
import { GET_SCHEDULE } from "../../graphql/query/Query";

export const Table = ({ data }) => {
  let navigate = useNavigate();

  const [deleteSchedule, { loading }] = useMutation(DELETE_SCHEDULE, {
    onCompleted: () => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data berhasil dihapus",
        showConfirmButton: false,
        timer: "1500",
      });
    },
    refetchQueries: [GET_SCHEDULE],
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="overflow-auto shadow">
      <table className="w-full text-base">
        <thead className="bg-gray-100">
          <td className="p-3 font-semibold tracking-wide text-left">Divisi</td>
          <td className="p-3 font-semibold tracking-wide text-left">Tanggal</td>
          <td className="p-3 font-semibold tracking-wide text-left">Ruangan</td>
          <td className="p-3 font-semibold tracking-wide text-left">
            Keperluan
          </td>
          <td></td>
        </thead>
        <tbody>
          {data?.Schedule.map((item) => (
            <tr key={item.id} className="bg-white">
              <td className="p-3 whitespace-nowrap w-32">{item.divisi}</td>
              <td className="p-3 whitespace-nowrap">{item.tanggal}</td>
              <td className="p-3 whitespace-nowrap w-28">{item.ruangan}</td>
              <td className="p-3 whitespace-nowrap w-56">{item.keperluan}</td>
              <td className="font-medium p-2">
                <button
                  onClick={() => navigate(`/edit-jadwal/${item.id}`)}
                  className="rounded-md bg-green-400 hover:bg-green-500 font-semibold py-2 px-3 text-gray-100 duration-100"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    deleteSchedule({ variables: { id: item.id } });
                  }}
                  className="rounded-md bg-red-400 hover:bg-red-500 font-semibold py-2 px-3 text-gray-100 duration-100 ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
