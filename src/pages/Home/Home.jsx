import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Suggestion from "../../components/Suggestions/Suggestion";
import Post from "../../components/Post/Post";
import { useAuth } from "../../context/auth-context";
import { useUsers } from "../../context/user-context";
import { usePosts } from "../../context/posts-context";

const Home = () => {
  const [sortbyLikes, setSortbyLikes] = useState(false);
  const [sortbyDate, setSortbyDate] = useState(false);
  const { authState } = useAuth();
  const { usersData } = useUsers();
  const {
    postsData: { posts },
  } = usePosts();

  let userFeed = [];
  const currentUser = usersData?.users?.find(
    ({ _id }) => _id === authState?.user?._id
  );
  const currentUserFollowing = currentUser?.following?.map(
    ({ username }) => username
  );

  const feedPosts = posts?.filter(({ username }) =>
    currentUserFollowing?.includes(username)
  );
  userFeed = [
    ...feedPosts,
    ...posts?.filter(({ username }) => username === authState?.user?.username),
  ];
  userFeed = userFeed.reverse();
  if (sortbyLikes) {
    userFeed = userFeed.sort((a, b) => b.likes.likeCount - a.likes.likeCount);
  }
  if (sortbyDate) {
    userFeed = userFeed.sort(
      (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
    );
  }

  return (
    <>
      <div className="h-calculate_nav overflow-hidden">
        <div className="flex justify-between h-calculate_nav">
          <Sidebar />
          <div className="flex flex-col gap-0 overflow-y-scroll w-[100%]">
            {userFeed.length > 0 ? (
              userFeed?.map((post) => <Post {...post} key={post?._id} />)
            ) : (
              <p className="text-3xl my-auto text-primary-color">
                Please follow someone or post something!
              </p>
            )}
          </div>
          <div className="min-w-[20rem] p-4 border-2 h-calculate_nav lg:hidden">
            <div className="flex justify-around mb-4">
              <button
                onClick={() => setSortbyLikes((prev) => !prev)}
                className="border-2 px-2 py-1 rounded-lg border-gray-300">
                {!sortbyLikes ? `🔥 Trending` : `🔥 Original`}
              </button>
              <button
                onClick={() => setSortbyDate((prev) => !prev)}
                className="border-2 px-2 py-1 rounded-lg border-gray-300">
                {!sortbyDate ? `⭐️ Latest` : `⭐️ Former`}
              </button>
            </div>
            <Suggestion />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
