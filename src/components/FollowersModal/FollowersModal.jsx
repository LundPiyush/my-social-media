import React from "react";
import { useUsers } from "../../context/user-context";

const FollowersModal = ({ user, setShowModal, type }) => {
  const { getProfileCount, unFollowUser } = useUsers();
  const { followers, following } = getProfileCount(user);
  return (
    <div className="flex justify-center items-center  bg-modal-background fixed inset-0 z-10">
      <div className="flex flex-col bg-white px-2 py-4 min-w-[20rem] dark:bg-dark-mode">
        <div className="mb-2 flex ">
          <p className="text-xl capitalize mx-auto">
            {type === "FOLLOWERS" ? "Followers List" : "Following List"}
          </p>
          <button
            onClick={() => setShowModal({ type: "", modal: false })}
            className="">
            ╳
          </button>
        </div>
        <hr />
        {type === "FOLLOWERS" ? (
          <ul>
            {followers.length === 0 ? (
              <p className="text-lg mt-4">{user} have no followers</p>
            ) : (
              followers?.map((followUser) => (
                <div
                  key={followUser?._id}
                  className="flex justify-between pr-2 items-center">
                  <div className="flex justify-start px-2 items-center mt-6 mb-2">
                    <img
                      alt={followUser?.username}
                      src={followUser?.avatarUrl}
                      className="w-12 rounded-full"
                    />
                    <div className="flex flex-col justify-start items-center">
                      <p>
                        {followUser?.firstName + " " + followUser?.lastName}
                      </p>
                      <p>@{followUser?.username}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </ul>
        ) : (
          <ul>
            {following.length === 0 ? (
              <p className="text-lg mt-4">{user} don't follow anyone</p>
            ) : (
              following?.map((followUser) => (
                <div
                  key={followUser?._id}
                  className="flex justify-between pr-2 items-center">
                  <div className="flex justify-start px-2 items-center mt-6 mb-2">
                    <img
                      alt={followUser?.username}
                      src={followUser?.avatarUrl}
                      className="w-12 rounded-full"
                    />
                    <div className="flex flex-col justify-start items-start">
                      <p>
                        {followUser?.firstName + " " + followUser?.lastName}
                      </p>
                      <p>@{followUser?.username}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => unFollowUser(followUser?.username)}
                    className="border-2 px-4">
                    Remove
                  </button>
                </div>
              ))
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FollowersModal;
