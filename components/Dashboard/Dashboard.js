import React, { useEffect } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Main from "./Main";

const Dashboard = () => {
  useEffect(() => {}, []);
  return (
    <div className="dashboard bg-[#F5F5F5] w-[100vw]">
      {" "}
      <Navbar></Navbar>
      <div className="flex">
        <SideBar></SideBar>
        <Main></Main>
      </div>
    </div>
  );
};

export default Dashboard;
