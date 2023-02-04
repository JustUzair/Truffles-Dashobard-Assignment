import Image from "next/image";
import React from "react";
import information from "../../images/information.svg";
import cross from "../../images/cross.svg";
const Notification = () => {
  return (
    <div className="dashboard-main--notification bg-[#8553FB] rounded-[8px] px-4 py-2 mr-5 mt-3 flex justify-between sm:ml-3">
      <div className="dashboard-notification--content text-[#fff] flex ">
        <Image src={information} alt="Information" className="mr-5" />
        <div>
          <div className="dashboard-notification--heading text-xl">
            Please complete the KYC
          </div>
          <div className="dashboard-notification--text">
            Please follow the instructions in the email to complete account
            verification. Make sure to check your promotions/spam as well.
          </div>
        </div>
      </div>
      <Image src={cross} alt={"close"} className="cursor-pointer" />
    </div>
  );
};

export default Notification;
