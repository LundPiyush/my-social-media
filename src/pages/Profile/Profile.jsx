import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useUsers } from "../../context/user-context";
import Sidebar from "../../components/Sidebar/Sidebar";
import Suggestion from "../../components/Suggestions/Suggestion";
import Post from "../../components/Post/Post";
import { usePosts } from "../../context/posts-context";
import { useAuth } from "../../context/auth-context";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import EditModal from "../../components/EditModal/EditModal";
import FollowersModal from "../../components/FollowersModal/FollowersModal";

const Profile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [postCount, setPostCount] = useState(0);
  const { authState, logOutUser } = useAuth();
  const {
    getProfileCount,
    unFollowUser,
    followUser,
    user,
    getUserProfileDetails,
  } = useUsers();
  const {
    postsData: { posts },
  } = usePosts();
  const [showModal, setShowModal] = useState({ type: "", modal: false });
  useEffect(() => {
    getUserProfileDetails(username);
    setPostCount(posts.filter((post) => post?.username === username).length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, posts]);

  const editButtonHandler = () => {
    setShowModal({ type: "EDIT", modal: true });
  };
  return (
    <>
      {showModal.modal ? (
        showModal.type === "EDIT" ? (
          <EditModal
            user={user}
            setShowModal={setShowModal}
            type={showModal.type}
          />
        ) : showModal.type === "FOLLOWERS" ? (
          <FollowersModal
            user={username}
            setShowModal={setShowModal}
            type={showModal.type}
          />
        ) : (
          <FollowersModal
            user={username}
            setShowModal={setShowModal}
            type={showModal.type}
          />
        )
      ) : null}

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
                    <button
                      className="border-2 min-w-[6rem] rounded-md h-[2rem]"
                      onClick={() => editButtonHandler()}>
                      Edit Profile
                    </button>
                  ) : (
                    <button
                      onClick={() => followUser(user?._id)}
                      className="border-2 min-w-[6rem] rounded-md h-[2rem]">
                      Follow
                    </button>
                  )}
                </div>
                <div className="flex justify-between items-center my-2">
                  <p>{user?.bio}</p>
                  <Link to={user?.website}>{user?.website}</Link>
                  <div className="space-x-6">
                    {authState?.user?.username !== username ? (
                      <PersonRemoveIcon
                        fontSize="medium"
                        className="hover:cursor-pointer"
                        onClick={() => unFollowUser(username)}
                      />
                    ) : (
                      <LogoutIcon
                        className="hover:cursor-pointer"
                        fontSize="medium"
                        onClick={() => {
                          logOutUser();
                          navigate("/login");
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="flex justify-between">
                  <p>Posts</p>
                  <button
                    onClick={() =>
                      setShowModal({ type: "FOLLOWERS", modal: true })
                    }>
                    Followers
                  </button>
                  <button
                    onClick={() =>
                      setShowModal({ type: "FOLLOWING", modal: true })
                    }>
                    Following
                  </button>
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
            {posts?.length !== 0 ? (
              posts?.map((post) => {
                return post?.username === username ? (
                  <Post {...post} key={post._id} />
                ) : null;
              })
            ) : (
              <p>{username} you haven't posted any post yet !</p>
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

export default Profile;
