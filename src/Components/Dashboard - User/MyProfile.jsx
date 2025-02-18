// import { useContext, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { MyPostCard } from "./MyPostCard";
// import { AuthContext } from "../../Providers/AuthProvider";
// import { MyPostHeader } from "./MyPostHeader";

export const MyProfile = () => {
  const { myPosts } = useOutletContext();

  return (
    <div className="">
      <div>
        <h3 className="p-4 text-xl ">Recent Posts</h3>
        <hr className="h-px bg-gray-300 border-0" />
        <div className="flex flex-col gap-4 my-4">
          {myPosts.map((post, index) => (
            <MyPostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};
