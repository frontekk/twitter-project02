import React, { useEffect, useState, useRef } from "react";
import {
  CiMenuKebab,
  CiUser,
  CiCircleCheck,
  CiBookmark,
  CiViewList,
  CiGlobe,
  CiSquareChevDown,
  CiDark,
  CiSun,
} from "react-icons/ci";
import userProfileImage from "../assets/img/userProfile.jpeg";
import useLockBodyScroll from "./useLockBodyScroll";

const SideNavbar = ({ isOpen, onClose, darkMode, isDarkMode }) => {
  const [closingAnimation, setClosingAnimation] = useState(false);
  const [isVisible, setIsVisible] = useState(isOpen);

  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true); // Show the SideNavbar when it is open or when the closing animation starts
      setClosingAnimation(false); // Reset closingAnimation when opening
    } else if (!closingAnimation) {
      setClosingAnimation(true); // Start the closing animation
      setTimeout(() => {
        setIsVisible(false); // Hide the SideNavbar after the closing animation is complete
      }, 300); // Adjust the delay to match the animation duration
    }
  }, [isOpen, closingAnimation, onClose]);

  return (
    <>
      {isVisible && (
        <div
          className={`${
            isOpen ? "animate-slide-in" : "animate-slide-out"
          } absolute left-0 top-0 h-screen w-4/5 bg-white dark:bg-gray-700`}
        >
          <div className=" p-4">
            {/* TOP USER AND SETTING */}
            <div className="flex flex-row justify-between items-center">
              <div>
                <img
                  src={userProfileImage}
                  alt="User Profile"
                  className="rounded-full w-11 h-11"
                />
              </div>
              <div className="h-8 w-8 flex items-center rounded-full border-2 border-black cursor-pointer dark:border-white">
                <CiMenuKebab className="text-2xl mx-auto stroke-1 dark:text-white" />
              </div>
            </div>
            {/* //USERNAME AND @NAME */}
            <div>
              <h1 className="text-2xl font-bold text-gray-700 dark:text-white">
                Username
              </h1>
              <h1 className="text-md text-gray-500">@name</h1>
            </div>
            {/* //Following and followers */}
            <div className="flex mt-4">
              <div className="flex flex-row space-x-1">
                <p className="font-semibold text-gray-700 dark:text-white">
                  101
                </p>
                <p className="text-gray-500">Following</p>
              </div>
              <div className="flex flex-row space-x-1 ml-2">
                <p className="font-semibold text-gray-700 dark:text-white">
                  26
                </p>
                <p className="text-gray-500">Followers</p>
              </div>
            </div>
            {/* Separation */}
            <div className="w-fill border-t border-gray-500 mt-5"></div>
            {/* OPTIONS */}
            <div className="mt-28">
              <div className="flex flex-row space-x-4 cursor-pointer">
                <CiUser className="text-2xl stroke-1 text-gray-700 dark:text-white" />
                <p className="font-semibold text-gray-700 dark:text-white">
                  Profile
                </p>
              </div>
              <div className="flex flex-row space-x-4 mt-3 cursor-pointer">
                <CiCircleCheck className="text-2xl stroke-1 text-gray-700 dark:text-white" />
                <p className="font-semibold text-gray-700 dark:text-white">
                  Twitter Blue
                </p>
              </div>
              <div className="flex flex-row space-x-4 mt-3 cursor-pointer">
                <CiBookmark className="text-2xl stroke-1 text-gray-700 dark:text-white" />
                <p className="font-semibold text-gray-700 dark:text-white">
                  Bookmarks
                </p>
              </div>
              <div className="flex flex-row space-x-4 mt-3 cursor-pointer">
                <CiViewList className="text-2xl stroke-1 text-gray-700 dark:text-white" />
                <p className="font-semibold text-gray-700 dark:text-white">
                  Lists
                </p>
              </div>
              <div className="flex flex-row space-x-4 mt-3 cursor-pointer">
                <CiGlobe className="text-2xl stroke-1 text-gray-700 dark:text-white" />
                <p className="font-semibold text-gray-700 dark:text-white">
                  Spaces
                </p>
              </div>
            </div>
            {/* Separation */}
            <div className="w-fill border-t border-gray-500 mt-28"></div>
            {/* options */}
            <div>
              {/* <div className="flex flex-row justify-between mt-5 cursor-pointer">
                <p className="font-semibold text-gray-700 dark:text-white">
                  Professional Tools
                </p>
                <CiSquareChevDown className="text-2xl stroke-1 text-gray-700 dark:text-white" />
              </div> */}
              <div className="mt-3 cursor-pointer">
                <div className="item">
                  <input
                    type="checkbox"
                    id="faq4"
                    className="peer appearance-none"
                  />
                  <label
                    htmlFor="faq4"
                    className="cursor-pointer grow justify-between flex flex-row"
                  >
                    <p>Professional Tools</p>
                    <CiSquareChevDown className="text-2xl stroke-1 text-gray-700 dark:text-white" />
                  </label>
                  <div className="content">
                    <p className="border-b bottom-1 border-gray-300">
                      Option 1
                    </p>
                  </div>
                  <div className="content">
                    <p className="border-b bottom-1 border-gray-300">
                      Option 2
                    </p>
                  </div>
                  <div className="content">
                    <p className="border-b bottom-1 border-gray-300">
                      Option 3
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="flex flex-row justify-between mt-3 cursor-pointer">
                <p className="font-semibold text-gray-700 dark:text-white">
                  Settings & Support
                </p>
                <CiSquareChevDown className="text-2xl stroke-1 text-gray-700 dark:text-white" />
              </div> */}
              <div className="mt-3 cursor-pointer">
                <div className="item">
                  <input
                    type="checkbox"
                    id="faq5"
                    className="peer appearance-none"
                  />
                  <label
                    htmlFor="faq5"
                    className=" cursor-pointer grow justify-between flex flex-row"
                  >
                    <p>Settings & Support</p>
                    <CiSquareChevDown className="text-2xl stroke-1 text-gray-700 dark:text-white" />
                  </label>
                  <div className="content ">
                    <p className="border-b bottom-1 border-gray-300">
                      Option 1
                    </p>
                  </div>
                  <div className="content">
                    <p className="border-b bottom-1 border-gray-300">
                      Option 2
                    </p>
                  </div>
                  <div className="content">
                    <p className="border-b bottom-1 border-gray-300">
                      Option 3
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* dark mode */}
            <div className="fixed bottom-4">
              {isDarkMode ? (
                <CiSun
                  className="stroke-1 w-8 h-8 text-gray-700 cursor-pointer dark:text-white"
                  onClick={darkMode}
                />
              ) : (
                <CiDark
                  className="stroke-1 w-8 h-8 text-gray-700 cursor-pointer dark:text-white"
                  onClick={darkMode}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideNavbar;
