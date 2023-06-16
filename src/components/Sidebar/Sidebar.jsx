import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Sidebar = () => {
  return (
    <div className="flex flex-col grow-0">
      <div className="flex flex-col border-2 border-black sticky top-0">
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
          <p>Liked Posts</p>
        </NavLink>
      </div>
      <div className="flex">
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
