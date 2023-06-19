import React from "react";
import Nav from "../../components/Nav/Nav";
import Sidebar from "../../components/Sidebar/Sidebar";
import { usePosts } from "../../context/posts-context";
import Post from "../../components/Post/Post";

const Explore = () => {
  const {
    postsData: { posts },
  } = usePosts();
  return (
    <>
      <Nav />
      <div className="flex justify-between">
        <Sidebar />
        <div className="flex flex-col gap-0">
          {posts?.map((post) => (
            <Post {...post} key={post._id} />
          ))}
        </div>
        <div className="">
          <h1>hello</h1>
        </div>
      </div>
    </>
  );
};

export default Explore;
