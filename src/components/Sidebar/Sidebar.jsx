import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Sidebar = () => {
  return (
    <div className="flex flex-col border-r-2 min-h-screen">
      <div className="flex flex-col sticky md:flex-row md:justify-evenly md:fixed md:w-full md:min-h-0 md:bottom-0 md:z-20 md:pt-2.5 md:items-end bg-white">
        <NavLink
          to="/"
          className="flex space-x-2 py-4 px-8 hover:bg-primary-color hover:text-white">
          <HomeIcon />
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/explore"
          className="flex space-x-2 py-4 px-8 hover:bg-primary-color hover:text-white">
          <ExploreIcon />
          <p>Explore</p>
        </NavLink>
        <div className="hidden md:block">
          <p>+</p>
        </div>
        <NavLink
          to="/bookmarks"
          className="flex space-x-2 py-4 px-8 hover:bg-primary-color hover:text-white">
          <BookmarkIcon />
          <p>Bookmarks</p>
        </NavLink>
        <NavLink
          to="/liked-posts"
          className="flex space-x-2 py-4 px-8 hover:bg-primary-color hover:text-white">
          <FavoriteIcon />
          <p className="text-left w-[7rem]">Liked Posts</p>
        </NavLink>
      </div>
      <div className="flex mx-2 md:hidden">
        <button
          className="w-full py-2 px-4 mt-4 bg-primary-color text-white font-semibold shadow-md hover:bg-primary-color focus:outline-none focus:ring-2 focus:ring-primary-color focus:ring-opacity-75"
          onClick={() => {}}>
          Post
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
