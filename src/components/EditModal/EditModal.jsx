import React, { useState } from "react";
import { useUsers } from "../../context/user-context";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

const EditModal = ({ user, setShowModal }) => {
  const { editUser } = useUsers();
  const [editUserData, setEditUserData] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    username: user?.username,
    bio: user?.bio,
    avatarUrl: user?.avatarUrl,
    website: user?.website,
  });
  const updateHandler = () => {
    editUser(editUserData);
    setShowModal({ type: "", modal: false });
  };
  return (
    <div className="flex justify-center items-center bg-modal-background fixed inset-0 z-10">
      <div className="flex flex-col bg-white px-2 py-4 w-1/4 dark:bg-dark-mode">
        <div className="mb-2">
          <p className="text-2xl">Edit Profile</p>
        </div>
        <hr />
        <div className="flex justify-start items-start mt-2">
          <p className="pl-2 pr-16">Avatar</p>
          <img
            src={editUserData?.avatarUrl}
            alt={user?.username}
            className="rounded-full h-10 w-10"
          />
          <label>
            <CameraAltOutlinedIcon
              className="mt-6 hover:cursor-pointer"
              fontSize="medium"
            />
            <input
              type="file"
              className="hidden"
              accept="/image*"
              onChange={(e) => {
                setEditUserData({
                  ...editUserData,
                  avatarUrl: URL.createObjectURL(e.target.files[0]),
                });
              }}
            />
          </label>
        </div>
        <div className="flex justify-start items-start mt-2">
          <p className="pl-2 pr-16">Name</p>
          <p type="text">{user?.firstName + " " + user?.lastName}</p>
        </div>
        <div className="flex justify-start items-start my-2">
          <p className="pl-2 pr-8">Username</p>
          <p type="text">{user?.username}</p>
        </div>
        <div className="flex justify-start items-start my-2">
          <label className="pl-2">
            Bio
            <input
              type="text"
              onChange={(e) =>
                setEditUserData({ ...editUserData, bio: e.target.value })
              }
              value={editUserData?.bio}
              className="ml-20 px-2 py-1 border-2 w-64 rounded-md dark:bg-dark-mode"
            />
          </label>
        </div>
        <div className="flex justify-start items-start my-2">
          <label className="pl-2">
            Website
            <input
              type="text"
              onChange={(e) =>
                setEditUserData({ ...editUserData, website: e.target.value })
              }
              value={editUserData?.website}
              className="ml-12 px-2 py-1 border-2 w-64 rounded-md dark:bg-dark-mode"
            />
          </label>
        </div>
        <div className="flex justify-around items-center mt-6 mb-2">
          <button
            onClick={updateHandler}
            className="bg-primary-color text-white shadow-md p-2 h-10 rounded-xl focus:cursor-pointer hover:bg-white hover:text-primary-color hover:border-primary-color hover:border">
            Update
          </button>
          <button
            onClick={() => setShowModal({ type: "", modal: false })}
            className="bg-primary-color text-white shadow-md p-2 h-10 rounded-xl focus:cursor-pointer hover:bg-white hover:text-primary-color hover:border-primary-color hover:border">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
