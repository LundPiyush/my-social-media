import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { usersReducer } from "../reducers/users-reducer";
import {
  editUserService,
  followUserService,
  getAllUsersService,
  getUserProfileDetailsService,
  unFollowUserService,
} from "../services/usersService";
import { USERS } from "../utils/actionTypes";
import { useAuth } from "./auth-context";

const UsersContext = createContext(null);

export const UsersProvider = ({ children }) => {
  const { authState } = useAuth();
  const [usersData, usersDispatch] = useReducer(usersReducer, {
    users: [],
  });
  if (usersData?.users.length === 4 && localStorage.getItem("user")) {
    usersDispatch({ type: USERS.SIGN_UP, payload: authState?.user });
  }
  const [user, setUser] = useState({});

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

  const getUserProfileDetails = async (username) => {
    try {
      const { data, status } = await getUserProfileDetailsService(username);
      if (status === 200) {
        setUser(data?.user);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const editUser = async (user) => {
    try {
      const { data, status } = await editUserService(user, authState?.token);
      if (status === 201) {
        setUser(data?.user);
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
      if (status === 200 || status === 201) {
        usersDispatch({
          type: USERS.UPDATE_FOLLOWERS,
          payload: data?.followUser,
        });
        usersDispatch({ type: USERS.UPDATE_FOLLOWING, payload: data?.user });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const unFollowUser = async (username) => {
    const followerId = usersData?.users?.find(
      (user) => user?.username === username
    );
    try {
      const { data, status } = await unFollowUserService(
        followerId?._id,
        authState?.token
      );
      if (status === 200 || status === 201) {
        usersDispatch({
          type: USERS.UPDATE_FOLLOWERS,
          payload: data?.followUser,
        });
        usersDispatch({ type: USERS.UPDATE_FOLLOWING, payload: data?.user });
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line
  }, []);

  const getProfileCount = (username) => {
    const currentUser = usersData?.users?.find(
      (user) => user?.username === username
    );
    return {
      followers: currentUser?.followers,
      following: currentUser?.following,
    };
  };
  return (
    <UsersContext.Provider
      value={{
        usersData,
        followUser,
        unFollowUser,
        getProfileCount,
        editUser,
        user,
        getUserProfileDetails,
      }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);
