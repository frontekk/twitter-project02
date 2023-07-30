import React from "react";

const DesktopSize = () => {
  return (
    <>
      <div className="hidden md:block ">
        <div className="grid grid-cols-4">
          <div className="bg-red-500 h-screen">left</div>
          <div className="bg-blue-500 h-screen col-span-2">center</div>
          <div className="bg-green-500 h-screen">right</div>
        </div>
      </div>
    </>
  );
};

export default DesktopSize;
