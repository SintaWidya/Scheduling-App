import React, { useState } from "react";
import { HiMenuAlt3, HiOutlineDatabase } from "react-icons/hi";
import { FiHome } from "react-icons/fi";
import { AiOutlineForm } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const menus = [
    { name: "Home", link: "/", icon: FiHome },
    { name: "Tambah Jadwal", link: "/tambah-jadwal", icon: AiOutlineForm },
    {
      name: "Jadwal",
      link: "/jadwal",
      icon: HiOutlineDatabase,
    },
  ];

  const [open, setOpen] = useState(true);

  const handleOpne = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`bg-[#AFAFAF] min-h-screen ${
        open ? "w-72" : "w-16"
      } duration-500 text-gray-100 px-4`}
    >
      <div
        className={`${
          !open && "opacity-0 overflow-hidden"
        } text-center font-bold text-2xl m-4`}
      >
        SIPENRA
      </div>
      <div className="py-3 flex justify-end">
        <HiMenuAlt3 size={26} className="cursor-pointer" onClick={handleOpne} />
      </div>
      <div className="mt-4 flex flex-col gap-4 relative">
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            className="flex item-center text-sm gap-3.5 font-medium p-2 hover:bg-[#8D8C8C] rounded-md"
          >
            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
            <h2
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
