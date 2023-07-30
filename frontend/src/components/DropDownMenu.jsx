import React, { useState } from "react";
import { CiSquareChevDown } from "react-icons/ci";
const DropDownMenu = ({
  title,
  options,
  index,
  openDropdownIndex,
  setOpenDropdownIndex,
}) => {
  const isOpen = index === openDropdownIndex;

  const toggleDropdown = () => {
    setOpenDropdownIndex(isOpen ? null : index);
  };

  return (
    <div className="">
      <button
        className="flex justify-between w-full font-semibold text-gray-700 dark:text-white"
        onClick={toggleDropdown}
      >
        {title}
        <CiSquareChevDown className="text-2xl stroke-1 text-gray-700 dark:text-white" />
      </button>
      <ul
        className={`${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        } mt-1 overflow-hidden bg-white shadow-lg py-2 px-4 rounded-lg dark:bg-gray-600 transition-all duration-300`}
      >
        {options.map((option) => (
          <li
            className="cursor-pointer hover:bg-gray-100 p-1 dark:text-white dark:hover:bg-gray-400"
            key={option}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownMenu;
