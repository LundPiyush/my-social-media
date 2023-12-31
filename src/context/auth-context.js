import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { authReducer } from "../reducers/auth-reducer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const initalAuthState = {
    token: localStorage?.getItem("token") || "",
    user: {},
    isLoggedIn: false,
  };
  const navigate = useNavigate();
  const [authState, authDispatch] = useReducer(authReducer, initalAuthState);

  const loginUser = async ({ username, password }) => {
    try {
      const response = await axios.post("/api/auth/login", {
        username,
        password,
      });
      const { data, status } = response;
      if (status === 200) {
        authDispatch({ type: "SET_TOKEN", payload: data?.encodedToken });
        authDispatch({ type: "SET_USER", payload: data?.foundUser });
        authDispatch({ type: "SET_IS_LOGGED_IN", payload: true });
        localStorage.setItem("token", data?.encodedToken);
        toast.success(
          `Welcome ${data?.foundUser.firstName}, you are now logged in`
        );
        navigate("/");
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };
  const logOutUser = () => {
    try {
      authDispatch({ type: "SET_TOKEN", payload: "" });
      authDispatch({ type: "SET_USER", payload: {} });
      authDispatch({ type: "SET_USER", payload: false });
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      toast.success("Logged Out");
    } catch (err) {
      console.log(err);
    }
  };
  const SignUpUser = async ({
    username,
    password,
    firstName,
    lastName,
    email,
    bio,
    website,
    avatarUrl,
  }) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        username,
        password,
        firstName,
        lastName,
        email,
        bio,
        website,
        avatarUrl,
      });
      const { data, status } = response;
      if (status === 201) {
        authDispatch({ type: "SET_TOKEN", payload: data?.encodedToken });
        authDispatch({ type: "SET_USER", payload: data?.createdUser });
        authDispatch({ type: "SET_IS_LOGGED_IN", payload: true });
        localStorage.setItem("token", data?.encodedToken);
        localStorage.setItem("user", JSON.stringify(data?.createdUser));
        navigate("/");
        toast.success("Successfully signed up");
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <AuthContext.Provider
      value={{ loginUser, SignUpUser, authState, logOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
