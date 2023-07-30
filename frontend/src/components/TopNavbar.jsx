import React from "react";
import userProfileImage from "../assets/img/userProfile.jpeg";
import { BiDumbbell } from "react-icons/bi";

const TopNavbar = ({ openSideMenu }) => {
  return (
    <>
      <div className="p-3 md:hidden bg-white dark:bg-gray-700">
        <div className="flex flex-row">
          <div className="self-start">
            <button onClick={openSideMenu} className="flex items-center mt-1">
              <img
                src={userProfileImage}
                alt="User Profile"
                className="rounded-full w-9 h-9"
              />
            </button>
          </div>
          <div className="mx-auto">
            <button className="flex items-center">
              <BiDumbbell className="w-12 h-12 text-red-500" />
            </button>
          </div>
        </div>
      </div>
      <div className="border border-b-1 border-red-400 dark:hidden md:hidden"></div>
    </>
  );
};

export default TopNavbar;
