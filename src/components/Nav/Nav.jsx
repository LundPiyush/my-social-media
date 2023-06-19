import React from "react";
import { useAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";
import userimage from "../../assets/userimage.png";
const Nav = () => {
  const { authState } = useAuth();
  console.log("authState: ", authState);
  return (
    <div className="flex justify-between sticky top-0 z-10 shadow-2xl border-b-2 bg-white">
      <div>left</div>
      {authState?.isLoggedIn && (
        <div>{authState?.user?.firstName + authState?.user?.lastName}</div>
      )}
      <Link
        to={authState?.isLoggedIn ? "/" : "/login"}
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
