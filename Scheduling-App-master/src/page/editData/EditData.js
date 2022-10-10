import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Sidebar from "../../component/sidebar/Sidebar";
import { UPDATE_SCHEDULE } from "../../graphql/mutation/Mutation";
import { GET_SCHEDULE } from "../../graphql/query/Query";

export default function EditData() {
  const params = useParams();
  const { id } = params;

  const [updateData, setUpdateData] = useState({
    divisi: "",
    tanggal: "",
    ruangan: "",
    keperluan: "",
  });

  const [updateSchedule, { loading, error }] = useMutation(UPDATE_SCHEDULE, {
    onCompleted: () => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data berhasil diupdate",
        showConfirmButton: false,
        timer: "1500",
      });
    },
    refetchQueries: [GET_SCHEDULE],
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({ ...updateData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSchedule({
      variables: {
        id: id,
        divisi: updateData.divisi,
        tanggal: updateData.tanggal,
        ruangan: updateData.ruangan,
        keperluan: updateData.keperluan,
      },
    });
  };

  return (
    <div className="bg-[#D9D9D9] flex">
      <Sidebar />
      <div className="m-auto flex items-center justify-center">
        <form className="p-5 md:p-0" onSubmit={handleSubmit}>
          <h2 className="text-center mb-5 text-3xl font-bold">
            Edit Data Jadwal
          </h2>
          <div className="mb-3 text-xl">
            <label className="font-semibold">Divisi</label>
            <input
              className="mt-2 bg-gray-100 outline-none w-full px-2 py-1 rounded-md shadow-sm border hover:border-blue-400 focus:border-blue-400"
              type="text"
              name="divisi"
              value={updateData.divisi}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 text-xl">
            <label className="font-semibold">Tanggal</label>
            <input
              className="mt-2 bg-gray-100 outline-none w-full px-2 py-1 rounded-md shadow-sm border hover:border-blue-400 focus:border-blue-400"
              type="date"
              name="tanggal"
              value={updateData.tanggal}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 text-xl">
            <label className="font-semibold">Ruangan</label>
            <select
              className="mt-2 bg-gray-100 outline-none w-full px-2 py-1 rounded-md shadow-sm border hover:border-blue-400 focus:border-blue-400"
              name="ruangan"
              value={updateData.ruangan}
              onChange={handleChange}
            >
              <option>Pilih salah satu</option>
              <option value={"Ruangan 1"}>Ruangan 1</option>
              <option value={"Ruangan 2"}>Ruangan 2</option>
            </select>
          </div>
          <div className="mb-3 text-xl">
            <label className="font-semibold">Keperluan</label>
            <textarea
              className="mt-2 bg-gray-100 outline-none w-full px-2 py-1 rounded-md shadow-sm border hover:border-blue-400 focus:border-blue-400"
              type="text"
              name="keperluan"
              rows="4"
              value={updateData.keperluan}
              onChange={handleChange}
            />
          </div>
          <button className="mt-3 w-full rounded-lg bg-blue-500 hover:bg-blue-600 shadow-md py-2 px-4 text-gray-200 duration-100 font-semibold text-xl">
            Edit
          </button>
        </form>
      </div>
    </div>
  );
}
