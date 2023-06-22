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

function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right" autoClose={1500} draggable />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/post/:postId" element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
