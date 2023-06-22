import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { usersReducer } from "../reducers/users-reducer";
import {
  followUserService,
  getAllUsersService,
} from "../services/usersService";
import { USERS } from "../utils/actionTypes";
import { useAuth } from "./auth-context";

const UsersContext = createContext(null);

export const UsersProvider = ({ children }) => {
  const { authState } = useAuth();
  const [usersData, usersDispatch] = useReducer(usersReducer, { users: [] });
  const getAllUsers = async () => {
    try {
      const { data, status } = await getAllUsersService();
      if (status === 200) {
        usersDispatch({ type: USERS.INITIALIZE, payload: data?.users });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const followUser = async (followerId) => {
    try {
      const { data, status } = await followUserService(
        followerId,
        authState?.token
      );
      usersDispatch({
        type: USERS.UPDATE_FOLLOWERS,
        payload: data?.followUser,
      });
      usersDispatch({ type: USERS.UPDATE_FOLLOWING, payload: data?.user });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <UsersContext.Provider value={{ usersData, followUser }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);
