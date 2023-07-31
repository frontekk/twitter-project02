import React from "react";
import ErrorMessage from "../assets/img/ErrorMessage.svg";
const DesktopSize = () => {
  return (
    <>
      <div className="hidden md:block ">
        {/* <div className="grid grid-cols-4">
          <div className="bg-red-500 h-screen">left</div>
          <div className="bg-blue-500 h-screen col-span-2">center</div>
          <div className="bg-green-500 h-screen">right</div>
        </div> */}
        <div className="bg-blue-500 flex flex-col justify-center items-center h-screen">
          <img src={ErrorMessage} className="h-1/2 w-1/2" />
          <p className="text-4xl text-white mt-2">
            It seems like you’re on a Desktop device.
          </p>
          <p className="text-2xl text-blue-200">
            Try again on a Mobile device.
          </p>
        </div>
      </div>
    </>
  );
};

export default DesktopSize;
