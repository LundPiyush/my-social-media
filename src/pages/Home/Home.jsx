import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Suggestion from "../../components/Suggestions/Suggestion";
import Post from "../../components/Post/Post";
import { useAuth } from "../../context/auth-context";
import { useUsers } from "../../context/user-context";
import { usePosts } from "../../context/posts-context";

const Home = () => {
  //const [posts, setPosts] = useState([]);
  const { authState } = useAuth();
  const { usersData } = useUsers();
  const {
    postsData: { posts },
  } = usePosts();

  let userFeed = [];
  const currentUser = usersData?.users?.find(
    ({ _id }) => _id === authState?.user?._id
  );
  const currentUserFollowing = currentUser?.following.map(
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
  return (
    <>
      <div className="h-calculate_nav overflow-hidden">
        <div className="flex justify-between h-calculate_nav">
          <Sidebar />
          <div className="flex flex-col gap-0 overflow-y-scroll w-[100%]">
            {userFeed?.map((post) => (
              <Post {...post} key={post._id} />
            ))}
          </div>
          <div className="min-w-[20rem] p-4 border-2 h-calculate_nav lg:hidden">
            <Suggestion />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
