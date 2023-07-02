import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

const SignUp = () => {
  const { SignUpUser } = useAuth();
  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    bio: "",
    website: "",
    avatarUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1687208699/userimage_u8ozxc.png",
  });
  const signUpHandler = (e) => {
    e.preventDefault();
    SignUpUser(signUpDetails);
  };
  return (
    <div className="flex flex-col">
      <h1 className="m-6 text-3xl underline">Sign Up</h1>
      <form
        onSubmit={signUpHandler}
        className="flex flex-col p-6 border-solid border-2 border-gray-400 m-auto rounded-lg">
        <div className="flex justify-between">
          <label className="p-2">First Name</label>
          <input
            className="mt-2 mb-4 px-2 py-1 border-2 border-gray-100"
            type="text"
            placeholder="adarsh"
            required
            name="firstName"
            onChange={(e) =>
              setSignUpDetails({ ...signUpDetails, firstName: e.target.value })
            }
          />
        </div>
        <div className="flex justify-between">
          <label className="p-2">Last Name</label>
          <input
            className="mt-2 mb-4 px-2 py-1 border-2 border-gray-100"
            type="text"
            placeholder="balika"
            required
            name="lastName"
            onChange={(e) =>
              setSignUpDetails({ ...signUpDetails, lastName: e.target.value })
            }
          />
        </div>
        <div className="flex justify-between">
          <label className="p-2">Email</label>
          <input
            className="mt-2 mb-4 px-2 py-1 border-2 border-gray-100"
            type="email"
            placeholder="adarshbalika@gmail.com"
            required
            name="email"
            onChange={(e) =>
              setSignUpDetails({ ...signUpDetails, email: e.target.value })
            }
          />
        </div>
        <div className="flex justify-between">
          <label className="p-2">Username</label>
          <input
            className="mt-2 mb-4 px-2 py-1 border-2 border-gray-100"
            type="text"
            placeholder="adarshbalika"
            required
            name="username"
            onChange={(e) =>
              setSignUpDetails({ ...signUpDetails, username: e.target.value })
            }
          />
        </div>
        <div className="flex justify-between">
          <label className="p-2">Bio</label>
          <input
            className="mt-2 mb-4 px-2 py-1 border-2 border-gray-100"
            type="text"
            placeholder="Student"
            required
            name="bio"
            onChange={(e) =>
              setSignUpDetails({ ...signUpDetails, bio: e.target.value })
            }
          />
        </div>
        <div className="flex justify-between">
          <label className="p-2">Website</label>
          <input
            className="mt-2 mb-4 px-2 py-1 border-2 border-gray-100"
            type="text"
            placeholder="https://adarshbalika.netlify.app"
            required
            name="website"
            onChange={(e) =>
              setSignUpDetails({ ...signUpDetails, website: e.target.value })
            }
          />
        </div>
        <div className="flex justify-between">
          <label className="p-2">Password</label>
          <input
            className="mt-2 mb-4 px-2 py-1 border-2 border-gray-100"
            type="password"
            required
            placeholder="*********"
            name="password"
            onChange={(e) =>
              setSignUpDetails({ ...signUpDetails, password: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <button className="bg-orange-100 my-2 py-2" onClick={() => {}}>
            Signup
          </button>
          <div className="flex justify-around">
            <p>Already have an Account?</p>
            <Link
              to="/login"
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
              LogIn here
            </Link>
          </div>
        </div>
      </form>
      <p></p>
    </div>
  );
};

export default SignUp;
