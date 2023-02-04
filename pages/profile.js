import React, { useState } from "react";
import Navbar from "../components/Profile/Navbar";
import Sidebar from "../components/Profile/Sidebar";
import UserInfo from "../components/Profile/UserInfo";
import BusinessInfo from "../components/Profile/BusinessInfo";
const Profile = () => {
  const [progress, setProgress] = useState(1);
  return (
    <div className="bg-[#FAFAFA] w-[100vw] h-[100vh] overflow-x-hidden ">
      <Navbar></Navbar>
      <div className="flex mt-[20px]">
        <div>
          <Sidebar progress={progress} setProgress={setProgress}></Sidebar>
        </div>
        <div className="ml-[300px] mr-[100px] grow bg-[#fff]">
          {" "}
          {progress == 1 && (
            <UserInfo progress={progress} setProgress={setProgress}></UserInfo>
          )}
          {progress == 2 && (
            <BusinessInfo
              progress={progress}
              setProgress={setProgress}
            ></BusinessInfo>
          )}
          {progress == 3 && <> Business Information 2</>}
          {progress == 4 && <> Upload Documents</>}
        </div>
      </div>
    </div>
  );
};

export default Profile;
