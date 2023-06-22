import React from "react";
import Nav from "../../components/Nav/Nav";
import Sidebar from "../../components/Sidebar/Sidebar";
import { usePosts } from "../../context/posts-context";
import Post from "../../components/Post/Post";
import Suggestion from "../../components/Suggestions/Suggestion";

const Explore = () => {
  const {
    postsData: { posts },
  } = usePosts();

  return (
    <>
      <Nav />
      <div className="h-calculate_nav overflow-hidden">
        <div className="flex justify-between h-calculate_nav">
          <Sidebar />
          <div className="flex flex-col gap-0 overflow-y-scroll">
            {posts?.map((post) => (
              <Post {...post} key={post._id} />
            ))}
          </div>
          <div className="min-w-[20rem] p-4 border-2 border-red-100 h-calculate_nav lg:hidden">
            <Suggestion />
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
