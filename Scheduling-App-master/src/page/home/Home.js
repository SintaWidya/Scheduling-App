import React from "react";
import Sidebar from "../../component/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="bg-[#D9D9D9] flex">
      <Sidebar />
      <div className="m-auto flex items-center">
        <h1 className="font-bold text-lg text-center md:text-4xl">
          SISTEM INFORMASI PENJADWALAN
          <div>RUANG RAPAT</div>
        </h1>
      </div>
    </div>
  );
}
