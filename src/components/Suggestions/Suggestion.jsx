import React, { useEffect, useState } from "react";
import { useUsers } from "../../context/user-context";
import { useAuth } from "../../context/auth-context";

const Suggestion = () => {
  const {
    usersData: { users },
  } = useUsers();
  const { authState } = useAuth();
  const { followUser } = useUsers();
  const [suggestions, setSuggestions] = useState([]);
  console.log("authState", authState?.user);
  console.log(users[0]);
  useEffect(() => {
    setSuggestions(
      users?.filter(
        (user) =>
          user?._id !== authState?.user?._id &&
          !authState?.user?.following?.find(
            (currentUser) => currentUser?._id === user?._id
          )
      )
    );
  }, [users, authState]);

  return (
    <div>
      <h3 className="font-bold text-start">Suggestion for you</h3>
      <hr className="my-2 border-1 border-primary-color" />
      {suggestions?.map((user) => (
        <div key={user?._id} className="flex items-center justify-between">
          <p className="font-medium">
            {user?.firstName} {user?.lastName}
          </p>
          <button
            onClick={() => followUser(user?._id)}
            className="bg-primary-color text-white font-semibold shadow-md px-4 py-2 my-2 rounded-xl">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default Suggestion;
