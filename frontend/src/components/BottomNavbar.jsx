import React from "react";
import { CiHome, CiSearch, CiBellOn, CiMail, CiAvocado } from "react-icons/ci";

const BottomNavbar = () => {
  return (
    <>
      <div className="fixed bottom-0 bg-white dark:bg-gray-700 w-full h-14 md:hidden">
        <div className="border border-b-1 border-red-400 dark:hidden"></div>
        <div className="flex items-center justify-between px-3 h-full">
          <div className="">
            <CiHome className="stroke-1 text-4xl text-red-500 cursor-pointer" />
          </div>
          <div className="">
            <CiSearch className="stroke-1 text-4xl text-red-500 cursor-pointer" />
          </div>
          <div className="">
            <CiAvocado className="stroke-1 text-4xl text-red-500 cursor-pointer" />
          </div>
          <div className="">
            <CiBellOn className="stroke-1 text-4xl text-red-500 cursor-pointer" />
          </div>
          <div className="">
            <CiMail className="stroke-1 text-4xl text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavbar;
