import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUsers } from "../../context/user-context";
import { getUserProfileDetailsService } from "../../services/usersService";
import Sidebar from "../../components/Sidebar/Sidebar";
import Suggestion from "../../components/Suggestions/Suggestion";
import Post from "../../components/Post/Post";
import { usePosts } from "../../context/posts-context";
import { useAuth } from "../../context/auth-context";
import LogoutIcon from "@mui/icons-material/Logout";

const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});

  const [postCount, setPostCount] = useState(0);
  const { authState } = useAuth();
  const { getProfileCount } = useUsers();
  const {
    postsData: { posts },
  } = usePosts();
  const getUserProfileDetails = async (username) => {
    try {
      const { data, status } = await getUserProfileDetailsService(username);
      if (status === 200) {
        setUser(data?.user);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserProfileDetails(username);
    setPostCount(posts.filter((post) => post?.username === username).length);
  }, [username, posts]);
  return (
    <>
      <div className="h-calculate_nav overflow-hidden">
        <div className="flex justify-between h-calculate_nav">
          <Sidebar />

          <div className="flex flex-col gap-0 overflow-y-scroll w-[100%]">
            <div className="flex border-2 m-auto p-4 my-3 gap-2 w-[60%] mx-auto xl:w-[70%] lg:w-[90%] lg:mx-8">
              <img
                src={user?.avatarUrl}
                className="rounded-full w-20 h-20"
                alt={user?.username}
              />
              <div className="flex flex-col text-start w-[100%] gap-1">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <h4 className="font-medium">
                      {user?.firstName} {user?.lastName}
                    </h4>
                    <h5 className="hover:underline">@{user?.username}</h5>
                  </div>
                  {authState?.user?.username === username ? (
                    <button className="border-2 min-w-[6rem] rounded-md h-[2rem]">
                      Edit Profile
                    </button>
                  ) : (
                    <button className="border-2 min-w-[6rem] rounded-md h-[2rem]">
                      Following
                    </button>
                  )}
                </div>

                <div className="flex justify-between items-center my-2">
                  <p>Bio content goes here</p>
                  <LogoutIcon
                    className="hover:cursor-pointer"
                    onClick={() => {}}
                  />
                </div>
                <div className="flex justify-between">
                  <p>Posts</p>
                  <p>Followers</p>
                  <p>Following</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="ml-3">{postCount}</p>
                  <p className="mr-6">
                    {getProfileCount(username)?.followers?.length}
                  </p>
                  <p className="mr-6">
                    {getProfileCount(username)?.following?.length}
                  </p>
                </div>
              </div>
            </div>
            {posts?.length > 0
              ? posts?.map((post) => {
                  return post?.username === username ? (
                    <Post {...post} key={post._id} />
                  ) : null;
                })
              : null}
          </div>
          <div className="min-w-[20rem] p-4 border-2 h-calculate_nav lg:hidden">
            <Suggestion />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
