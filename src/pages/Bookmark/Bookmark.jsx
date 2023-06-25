import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Post from "../../components/Post/Post";
import Suggestion from "../../components/Suggestions/Suggestion";
import { useBookmark } from "../../context/bookmark-context";
import { usePosts } from "../../context/posts-context";

const Bookmark = () => {
  const {
    bookmarkData: { bookmark },
  } = useBookmark();
  const {
    postsData: { posts },
  } = usePosts();

  return (
    <>
      <div className="h-calculate_nav overflow-hidden">
        <div className="flex justify-between h-calculate_nav">
          <Sidebar />
          {bookmark?.length !== 0 ? (
            <div className="flex flex-col gap-0 overflow-y-scroll w-[100%]">
              {bookmark?.map((postId) => (
                <Post
                  key={postId}
                  {...posts?.find((post) => post._id === postId)}
                />
              ))}
            </div>
          ) : (
            <p className="text-3xl text-primary-color m-auto">
              No post added to Bookmark yet!
            </p>
          )}
          <div className="min-w-[20rem] p-4 border-2 h-calculate_nav lg:hidden">
            <Suggestion />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookmark;
