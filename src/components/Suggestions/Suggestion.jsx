import React, { useEffect, useState } from "react";
import { useUsers } from "../../context/user-context";
import { useAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";

const Suggestion = () => {
  const {
    usersData: { users },
  } = useUsers();
  const { authState } = useAuth();
  const { followUser } = useUsers();
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const currentUser = users.filter(
      (user) => user?._id === authState?.user?._id
    );
    setSuggestions(
      users?.filter(
        (user) =>
          user?._id !== currentUser[0]?._id &&
          !currentUser[0]?.following?.find(
            (curUser) => curUser?._id === user?._id
          )
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users, authState]);
  return (
    <div>
      <h3 className="font-bold text-start">Suggestion for you</h3>
      <hr className="my-2 border-1 border-primary-color" />
      {suggestions?.map((user) => (
        <div key={user?._id} className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <img
              width={35}
              className="rounded-full"
              src={user?.avatarUrl}
              alt={user?.username?.slice(0, 1).toUpperCase()}
            />
            <Link to={`/profile/${user?.username}`} className="font-medium">
              {user?.firstName} {user?.lastName}
            </Link>
          </div>
          <button
            onClick={() => followUser(user?._id)}
            className="bg-primary-color text-white font-semibold shadow-md px-4 py-2 my-2 rounded-3xl focus:cursor-pointer">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default Suggestion;
