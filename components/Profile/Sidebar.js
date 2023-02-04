import React, { useState, useEffect } from "react";
import MultiStepSettingsBar from "./MultiStepSettingsBar";
const Sidebar = ({ progress, setProgress }) => {
  useEffect(() => {
    setProgress(1);
  }, []);

  return (
    <div className="sidebar w-[0vw] h-[100%] cursor-pointer ">
      <MultiStepSettingsBar
        progress={progress}
        setProgress={setProgress}
      ></MultiStepSettingsBar>
    </div>
  );
};

export default Sidebar;
