import React from "react";
import Post from "../../components/Post/Post";
import Suggestion from "../../components/Suggestions/Suggestion";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useAuth } from "../../context/auth-context";
import { usePosts } from "../../context/posts-context";

const LikedPosts = () => {
  const { authState } = useAuth();
  const {
    postsData: { posts },
  } = usePosts();
  //   const currentUser = usersData?.users?.find(
  //     ({ _id }) => _id === authState?.user?._id
  //   );
  const likedPosts = posts?.filter(({ likes }) => {
    return likes?.likedBy?.find(
      ({ username }) => username === authState?.user?.username
    );
  });
  return (
    <>
      <div className="h-calculate_nav overflow-hidden">
        <div className="flex justify-between h-calculate_nav">
          <Sidebar />
          <div className="flex flex-col gap-0 overflow-y-scroll w-[100%]">
            {likedPosts.length === 0 ? (
              <p className="text-3xl my-auto text-primary-color">
                You've not liked any posts yet !!!
              </p>
            ) : (
              likedPosts?.map((post) => <Post {...post} key={post._id} />)
            )}
          </div>
          <div className="min-w-[20rem] p-4 border-2 h-calculate_nav lg:hidden">
            <Suggestion />
          </div>
        </div>
      </div>
    </>
  );
};

export default LikedPosts;
