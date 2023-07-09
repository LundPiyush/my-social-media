import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Explore from "./pages/Explore/Explore";
import PostDetails from "./pages/PostDetails/PostDetails";
import Profile from "./pages/Profile/Profile";
import LikedPosts from "./pages/LikedPosts/LikedPosts";
import Bookmark from "./pages/Bookmark/Bookmark";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App dark:bg-dark-mode dark:text-white h-[100vh]">
      <ToastContainer position="bottom-right" autoClose={1500} draggable />
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/bookmarks" element={<Bookmark />} />
          <Route path="/liked-posts" element={<LikedPosts />} />
          <Route path="/post/:postId" element={<PostDetails />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
