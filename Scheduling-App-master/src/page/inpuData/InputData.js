import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import Sidebar from "../../component/sidebar/Sidebar";
import { INSERT_SCHEDULE } from "../../graphql/mutation/Mutation";
import { GET_SCHEDULE } from "../../graphql/query/Query";

export default function InputData() {
  const formData = {
    divisi: "",
    tanggal: "",
    ruangan: "",
    keperluan: "",
  };

  const [data, setData] = useState(formData);
  const [insertSchedule, { loading }] = useMutation(INSERT_SCHEDULE, {
    onCompleted: () => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data berhasil ditambahkan",
        showConfirmButton: false,
        timer: "1500",
      });
    },
    refetchQueries: [GET_SCHEDULE],
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    insertSchedule({
      variables: {
        object: {
          divisi: data.divisi,
          tanggal: data.tanggal,
          ruangan: data.ruangan,
          keperluan: data.keperluan,
        },
      },
    });
  };

  return (
    <div className="bg-[#D9D9D9] flex">
      <Sidebar />
      <div className="m-auto flex items-center justify-center">
        <form className="p-5 md:p-0" onSubmit={handleSubmit}>
          <h2 className="text-center mb-5 text-3xl font-bold">
            Tambah Data Jadwal
          </h2>
          <div className="mb-3 text-xl">
            <label className="font-semibold">Divisi</label>
            <input
              className="mt-2 bg-gray-100 outline-none w-full px-2 py-1 rounded-md shadow-sm border hover:border-blue-400 focus:border-blue-400"
              type="text"
              name="divisi"
              value={data.divisi}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 text-xl">
            <label className="font-semibold">Tanggal</label>
            <input
              className="mt-2 bg-gray-100 outline-none w-full px-2 py-1 rounded-md shadow-sm border hover:border-blue-400 focus:border-blue-400"
              type="date"
              name="tanggal"
              value={data.tanggal}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 text-xl">
            <label className="font-semibold">Ruangan</label>
            <select
              className="mt-2 bg-gray-100 outline-none w-full px-2 py-1 rounded-md shadow-sm border hover:border-blue-400 focus:border-blue-400"
              name="ruangan"
              value={data.ruangan}
              onChange={handleChange}
            >
              <option>Pilih salah satu</option>
              <option value={"Ruangan Praja Utama"}>Ruangan Praja Utama</option>
              <option value={"Ruangan Praja Madya"}>Ruangan Praja Madya</option>
            </select>
          </div>
          <div className="mb-3 text-xl">
            <label className="font-semibold">Keperluan</label>
            <textarea
              className="mt-2 bg-gray-100 outline-none w-full px-2 py-1 rounded-md shadow-sm border hover:border-blue-400 focus:border-blue-400"
              type="text"
              rows="4"
              name="keperluan"
              value={data.keperluan}
              onChange={handleChange}
            />
          </div>
          <button className="mt-3 w-full rounded-lg bg-blue-500 hover:bg-blue-600 shadow-md py-2 px-4 text-gray-200 duration-100 font-semibold text-xl">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
