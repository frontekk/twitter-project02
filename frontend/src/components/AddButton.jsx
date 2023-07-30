import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
const AddButton = () => {
  return (
    <div className="fixed bottom-20 right-2 md:hidden">
      <AiOutlinePlus className="text-3xl text-white w-14 h-14 p-2 rounded-full bg-red-500 cursor-pointer" />
    </div>
  );
};

export default AddButton;
