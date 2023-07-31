import React from "react";
import { BsThreeDotsVertical, BsChat } from "react-icons/bs";
import {
  FaRetweet,
  FaRegComment,
  FaRegHeart,
  FaEye,
  FaShareNodes,
} from "react-icons/fa6";

const PostContent = () => {
  return (
    <>
      <div className="flex flex-col">
        {/* FIRST LINE WITH DETAILS ACCOUNT */}
        <div className="flex flex-row justify-between items-center space-x-2">
          <div className="flex items-center space-x-2">
            <h1 className="font-bold text-black dark:text-white">UserName</h1>
            <p className="text-gray-400">@username</p>
            <p className="text-gray-400">· 1d</p>
          </div>
          <BsThreeDotsVertical className="text-gray-400" />
        </div>
        {/* texto content */}
        <div>
          <p className="text-gray-800 dark:text-slate-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem reiciendis cum laborum doloremque quam optio quidem
            incidunt consequuntur
          </p>
        </div>
        {/* image content */}
        <div className="w-full h-auto mt-1">
          <img
            src="https://loremflickr.com/380/380"
            alt="img-post"
            className="rounded-2xl"
          />
        </div>
        {/* icons content */}
        <div className="flex flex-row justify-between mt-2">
          <div className="flex flex-row items-center space-x-1">
            <FaRegComment className="text-gray-700 dark:text-gray-300" />
            <p className="text-gray-700 dark:text-gray-300">2,523</p>
          </div>
          <div className="flex flex-row items-center space-x-1">
            <FaRetweet className="text-gray-700 dark:text-gray-300" />
            <p className="text-gray-700 dark:text-gray-300">4,239</p>
          </div>
          <div className="flex flex-row items-center space-x-1">
            <FaRegHeart className="text-gray-700 dark:text-gray-300" />
            <p className="text-gray-700 dark:text-gray-300">73,6K</p>
          </div>
          <div className="flex flex-row items-center space-x-1">
            <FaEye className="text-gray-700 dark:text-gray-300" />
            <p className="text-gray-700 dark:text-gray-300">1.9M</p>
          </div>
          <div className="flex flex-row items-center space-x-1">
            <FaShareNodes className="text-gray-700 dark:text-gray-300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostContent;
