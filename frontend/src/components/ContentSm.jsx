import React from "react";
import PostCard from "./PostCard";

const ContentSm = ({ darkMode }) => {
  return (
    <div className={`${darkMode ? "bg-gray-500" : "bg-white"} md:hidden`}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default ContentSm;
