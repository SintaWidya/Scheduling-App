import { useQuery } from "@apollo/client";
import React from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import { Table } from "../../component/table/Table";
import { GET_SCHEDULE } from "../../graphql/query/Query";

export default function DataCollection() {
  const { loading, error, data } = useQuery(GET_SCHEDULE);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    alert("Error");
    return null;
  }

  return (
    <div className="bg-[#D9D9D9] flex">
      <Sidebar />
      <div className="m-auto flex items-center">
        <div className="p-5 md:p-0">
          <h2 className="text-center mb-5 text-3xl font-bold">Tabel Jadwal</h2>
          <Table data={data} />
        </div>
      </div>
    </div>
  );
}
