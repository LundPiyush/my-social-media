import React from "react";
import { useUsers } from "../../context/user-context";
import { useNavigate } from "react-router-dom";

const SearchModal = ({ searchText, setShowSearchModal, setSearchText }) => {
  const {
    usersData: { users },
  } = useUsers();
  const navigate = useNavigate();
  const filteredUsers = users.filter((user) => {
    return user?.firstName.toLowerCase().startsWith(searchText.toLowerCase());
  });

  return (
    <div className="absolute inset-0 z-10 top-10">
      <button
        className="absolute right-16 top-2 dark:text-dark-mode"
        onClick={() => setShowSearchModal(false)}>
        ╳
      </button>
      {filteredUsers?.length > 0 && searchText?.length > 0 ? (
        <>
          {filteredUsers.map((filterUser) => (
            <div
              onClick={() => {
                navigate(`/profile/${filterUser?.username}`);
                setShowSearchModal(false);
                setSearchText("");
              }}
              key={filterUser?._id}
              className="flex justify-between p-2 border-2 border-gray-200 rounded-md ml-[2%] mr-[8%] bg-white hover:cursor-pointer dark:text-dark-mode">
              <div className="flex gap-2">
                <img
                  src={filterUser?.avatarUrl}
                  alt={filterUser?.username}
                  className="h-12"
                />
                <div className="flex flex-col justify-center items-start">
                  <p>{filterUser?.firstName + " " + filterUser?.lastName}</p>
                  <p>@{filterUser?.username}</p>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : searchText?.length > 0 ? (
        <div
          to="/"
          className="flex justify-between p-2 border-2 border-gray-200 rounded-md ml-[2%] mr-[8%] bg-white dark:text-dark-mode">
          No user found
        </div>
      ) : null}
    </div>
  );
};

export default SearchModal;
