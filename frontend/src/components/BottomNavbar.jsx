// import React from "react";
// import { CiHome, CiSearch, CiBellOn, CiMail, CiAvocado } from "react-icons/ci";

// const BottomNavbar = (scrollDirection) => {
//   const navbarClassName =
//     scrollDirection === "down"
//       ? "animate-fade-out fixed bottom-0 bg-white dark:bg-gray-700 w-full h-14 md:hidden"
//       : "animate-fade-in fixed bottom-0 bg-white dark:bg-gray-700 w-full h-14 md:hidden";

//   return (
//     <>
//       <div className={navbarClassName}>
//         <div className="fixed bottom-0 bg-white dark:bg-gray-700 w-full h-14 md:hidden">
//           <div className="border border-b-1 border-red-400 dark:border-slate-600"></div>
//           <div className="flex items-center justify-between px-3 h-full">
//             <div className="">
//               <CiHome className="stroke-1 text-4xl text-red-500 cursor-pointer" />
//             </div>
//             <div className="">
//               <CiSearch className="stroke-1 text-4xl text-red-500 cursor-pointer" />
//             </div>
//             <div className="">
//               <CiAvocado className="stroke-1 text-4xl text-red-500 cursor-pointer" />
//             </div>
//             <div className="">
//               <CiBellOn className="stroke-1 text-4xl text-red-500 cursor-pointer" />
//             </div>
//             <div className="">
//               <CiMail className="stroke-1 text-4xl text-red-500 cursor-pointer" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BottomNavbar;
import React from "react";
import { CiHome, CiSearch, CiBellOn, CiMail, CiAvocado } from "react-icons/ci";

const BottomNavbar = ({ scrollDirection }) => {
  const navbarClassName = scrollDirection === "down" ? "slide-out" : "slide-in";
  return (
    <div className={`bottom-navbar ${navbarClassName}`}>
      <div className="border border-b-1 border-red-400 dark:border-slate-600"></div>
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
  );
};

export default BottomNavbar;
