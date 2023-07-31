import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaMagnifyingGlass,
  FaEllipsisVertical,
  FaCakeCandles,
  FaCalendarDays,
} from "react-icons/fa6";
import { PiCalendarCheckThin, PiCakeThin } from "react-icons/pi";
import ProfileImg from "../assets/img/userProfile.jpeg";
import PostCard from "../components/PostCard";

const Profile = () => {
  return (
    <>
      <div className="overflow-y-auto h-screen">
        <div className="flex flex-col bg-white dark:bg-gray-700 md:hidden">
          {/* BANNER And Buttons */}
          <div className="h-36 p-4 w-auto bg-blue-500 flex flex-row justify-between">
            <div className="">
              <Link to="/">
                <FaArrowLeft className="h-8 w-8 bg-slate-600 rounded-full p-2 text-white" />
              </Link>
            </div>
            <div className="flex space-x-3">
              <FaMagnifyingGlass className="h-8 w-8 bg-slate-600 rounded-full p-2 text-white" />
              <FaEllipsisVertical className="h-8 w-8 bg-slate-600 rounded-full p-2 text-white" />
            </div>
          </div>
          {/* Profile Picture & button edit*/}
          <div className="flex flex-row justify-between px-4 h-8">
            <div>
              <img
                src={ProfileImg}
                className="rounded-full h-20 w-20 border-2 border-white dark:border-gray-700 relative -top-10"
              />
            </div>
            <div className="mt-2">
              <p className="px-3 py-1 border border-gray-400 rounded-3xl dark:bg-gray-700 dark:text-white">
                Edit profile
              </p>
            </div>
          </div>
          {/* Profile Name & Details & follows*/}
          <div className="flex flex-col p-4">
            <div className="font-bold text-lg dark:text-white">
              UserName Surname
            </div>
            <div className="text-gray-500 text-sm dark:text-gray-300">
              @UserName
            </div>
            {/* JOIN DETAILS */}
            <div className="mt-6 flex flex-row space-x-7">
              <div className="flex space-x-1 items-center text-gray-500 dark:text-gray-300">
                <PiCakeThin />
                <span>Born 22 February 1992</span>
              </div>
              <div className="flex space-x-1 items-center text-gray-500 dark:text-gray-300">
                <PiCalendarCheckThin />
                <span>Joined July 2001</span>
              </div>
            </div>
            {/* FOLLOWS */}
            <div className="mt-2 flex flex-row space-x-3">
              <div className="flex space-x-1">
                <span className="font-bold dark:text-white">101</span>
                <span className="text-gray-500 dark:text-gray-300">
                  Following
                </span>
              </div>
              <div className="flex space-x-1">
                <span className="font-bold dark:text-white">50</span>
                <span className="text-gray-500 dark:text-gray-300">
                  Followers
                </span>
              </div>
            </div>
          </div>
          {/* Navigation horizontal bar */}
          <div className="flex flex-row justify-between px-4">
            <span className="bg-gray-300 px-4 py-2 rounded-full font-bold cursor-pointer dark:text-white dark:bg-gray-500">
              Tweets
            </span>
            <span className="cursor-pointer px-4 py-2 rounded-full font-bold dark:text-gray-400">
              Replies
            </span>
            <span className="cursor-pointer px-4 py-2 rounded-full font-bold dark:text-gray-400">
              Highlights
            </span>
            <span className="cursor-pointer px-4 py-2 rounded-full font-bold dark:text-gray-400">
              Media
            </span>
            {/* <span className="cursor-pointer px-4 py-2 rounded-full font-bold dark:text-gray-400">
            Like
          </span> */}
          </div>
          <div className="border-b-2 mt-1"></div>

          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </>
  );
};

export default Profile;
