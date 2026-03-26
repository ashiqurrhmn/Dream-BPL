import React from "react";
import navImg from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="cursor-pointer">
            <img src={navImg} alt="Logo" className="h-12 w-12" />
          </a>
        </div>
        <div className="flex gap-6 items-center">
            <div className="hidden md:flex md:gap-6 ">
            <a href="" className="text-[#131313]">Home</a>
            <a href="" className="text-[#131313]">Fixture</a>
            <a href="" className="text-[#131313]">Teams</a>
            <a href="" className="text-[#131313]">Schedules</a>
            </div>
          <h3 className="bg-gray-200 font-bold px-2 py-3 rounded-lg">
            Balance: 5000$
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
