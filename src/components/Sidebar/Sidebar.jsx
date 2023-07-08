import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CreatePostModal from "../CreatePostModal/CreatePostModal";
const Sidebar = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal ? <CreatePostModal setModal={setModal} /> : <></>}
      <div className="flex flex-col border-r-2 min-h-screen">
        <div className="flex flex-col dark:bg-black sticky md:flex-row md:justify-evenly md:fixed md:w-full md:min-h-0 md:bottom-0 md:z-20 md:pt-2.5 md:items-end bg-white">
          <NavLink
            to="/"
            className="flex space-x-2 py-4 px-8 hover:bg-primary-color hover:text-white sm:flex-col sm:items-center">
            <HomeIcon />
            <p className="">Home</p>
          </NavLink>
          <NavLink
            to="/explore"
            className="flex space-x-2 py-4 px-8 hover:bg-primary-color hover:text-white sm:flex-col sm:items-center">
            <ExploreIcon />
            <p>Explore</p>
          </NavLink>
          <NavLink className="hidden md:block md:px-8 md:py-4">
            <AddCircleOutlineIcon />
            <p>Add</p>
          </NavLink>
          <NavLink
            to="/bookmarks"
            className="flex space-x-2 py-4 px-8 hover:bg-primary-color hover:text-white sm:flex-col sm:items-center">
            <BookmarkIcon />
            <p>Bookmarks</p>
          </NavLink>
          <NavLink
            to="/liked-posts"
            className="flex py-4 px-8 hover:bg-primary-color hover:text-white sm:flex-col sm:items-center">
            <FavoriteIcon />
            <p className="text-left px-2 w-[7rem] ml-0">Liked Posts</p>
          </NavLink>
        </div>
        <div className="flex mx-2 md:hidden">
          <button
            className="w-full py-2 px-4 mt-4 bg-primary-color text-white font-semibold shadow-md hover:bg-primary-color focus:outline-none focus:ring-2 focus:ring-primary-color focus:ring-opacity-75"
            onClick={() => setModal(true)}>
            Post
          </button>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
