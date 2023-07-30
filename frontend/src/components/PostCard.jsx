import React from "react";
import UserImg from "./postComponents/UserImg";
import PostContent from "./postComponents/PostContent";

const PostCard = () => {
  return (
    <>
      <div className="border border-b-1 border-gray-400"></div>
      <div className="p-4 bg-white dark:bg-slate-400">
        <div className="grid grid-cols-7">
          <div className="col-span-1">
            <UserImg />
          </div>
          <div className="col-span-6">
            <PostContent />
          </div>
        </div>
      </div>
      <div className="border border-b-1 border-gray-400 dark:border-slate-300"></div>
    </>
  );
};

export default PostCard;
