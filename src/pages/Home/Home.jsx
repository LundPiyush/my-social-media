import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Nav from "../../components/Nav/Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="flex justify-between">
        <Sidebar />
        <div className="font-bold text-3xl">home</div>
        <div>followers </div>
      </div>
    </>
  );
};

export default Home;
