import React, { useState } from "react";
import { useAuth } from "../../context/auth-context";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useAuth();
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const guessUserDetails = {
    username: "adarshbalika",
    password: "adarshBalika123",
  };

  const loginHandler = (e) => {
    e.preventDefault();
    loginUser(loginDetails);
  };
  const guestLoginHandler = (e) => {
    e.preventDefault();
    setLoginDetails(guessUserDetails);
    loginUser(guessUserDetails);
    navigate("/");
  };
  return (
    <div className="flex justify-center">
      <form className="flex flex-col p-6 border-solid border-2 border-indigo-600">
        <label className="p-2">
          Username
          <input
            className="m-4 pl-2 border-2 border-blue-600"
            type="text"
            placeholder="adarshbalika"
            required
            name="username"
            value={loginDetails.username}
            onChange={(e) =>
              setLoginDetails({
                ...loginDetails,
                username: e.target.value,
              })
            }
            autoComplete="username"
          />
        </label>
        <label className="p-2">
          Password
          <input
            className="m-4 pl-2 border-2 border-blue-600"
            type="password"
            required
            placeholder="*********"
            value={loginDetails.password}
            name="password"
            onChange={(e) =>
              setLoginDetails({
                ...loginDetails,
                password: e.target.value,
              })
            }
          />
        </label>
        <div className="flex flex-col">
          <button
            className="bg-yellow-100 my-4 py-2"
            onClick={guestLoginHandler}>
            Guest Login
          </button>
          <button className="bg-orange-100 my-2 py-2" onClick={loginHandler}>
            Login
          </button>
          <div className="flex justify-evenly mt-4">
            Don't have an Account?
            <Link
              to="/signup"
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
              Create One
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
