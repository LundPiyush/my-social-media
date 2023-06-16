import React from "react";
import Nav from "../../components/Nav/Nav";
import Sidebar from "../../components/Sidebar/Sidebar";
import { usePosts } from "../../context/posts-context";

const Explore = () => {
  const {
    postsData: { posts },
  } = usePosts();
  return (
    <>
      <Nav />
      <div className="flex justify-between">
        <Sidebar />
        <div>
          {posts?.map((post) => (
            <div className="" key={post._id}>
              {post?.content}
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Explore;
