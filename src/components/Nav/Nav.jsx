import React, { useState } from "react";
import { useAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";
import userimage from "../../assets/userimage.png";
import MenuIcon from "@mui/icons-material/Menu";
import SearchModal from "../SearchModal/SearchModal";
const Nav = () => {
  const { authState } = useAuth();
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const toggleHandler = () => {};
  return (
    <div className="flex justify-between items-center sticky top-0 z-10 shadow-xl border-b-2 bg-white">
      <div className="flex items-center mx-10">
        <MenuIcon onClick={() => toggleHandler()} className="cursor-pointer" />
        <p className="text-2xl ml-2">OneSocial</p>
      </div>
      <div className="relative">
        <input
          type="text"
          className="border border-solid border-gray-300 rounded-l-full w-[38rem] lg:w-[25rem] md:w-[15rem] py-2 px-5 "
          placeholder="Search User"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="border border-gray-300 rounded-r-full py-2 px-5 bg-gray-100"
          onClick={() => setShowSearchModal((prev) => !prev)}>
          🔍
        </button>
        {showSearchModal ? (
          <SearchModal
            searchText={searchText}
            setShowSearchModal={setShowSearchModal}
            setSearchText={setSearchText}
          />
        ) : null}
      </div>

      <Link
        to={
          authState?.isLoggedIn
            ? `/profile/${authState?.user?.username}`
            : "/login"
        }
        className="self-center mx-4 my-4">
        <span className="bg-blue-500">
          {authState?.isLoggedIn ? (
            <img
              src={authState?.user?.avatarUrl}
              alt={authState?.user?.firstName}
              width={40}
              className="rounded-full"
            />
          ) : (
            <img src={userimage} alt="Adarsh" width={40} />
          )}
        </span>
      </Link>
    </div>
  );
};

export default Nav;
