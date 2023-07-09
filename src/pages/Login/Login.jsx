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
    navigate("/");
  };
  const guestLoginHandler = (e) => {
    e.preventDefault();
    setLoginDetails(guessUserDetails);
    loginUser(guessUserDetails);
  };
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl my-[5%]">Login</h1>
      <div className="flex justify-center gap-6">
        <form className="flex flex-col gap-6 py-14 px-10 border-solid border-2 border-indigo-60 shadow-xl rounded-md">
          <div className="flex justify-between gap-2">
            <label className="">Username</label>
            <input
              className="pl-2 w-[14rem] border-2"
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
          </div>
          <div className="flex justify-between">
            <label className="">Password</label>
            <input
              className="pl-2 w-[14rem] border-2"
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
          </div>
          <div className="flex flex-col">
            <button
              className="bg-primary-color my-4 py-2 font-bold text-white"
              onClick={guestLoginHandler}>
              Guest Login
            </button>
            <button
              className="bg-primary-color my-2 py-2 font-bold text-white"
              onClick={loginHandler}>
              Login
            </button>
            <div className="flex justify-evenly mt-4">
              Don't have an Account?
              <Link
                to="/signup"
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 dark:text-white">
                Create One
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
