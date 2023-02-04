import Image from "next/image";
import React from "react";
import userProfile from "../../images/user-profile.svg";
import Link from "next/link";
import notification from "../../images/notification.svg";

const UserProfile = () => {
  return (
    <div className="user-profile text-[#67748E] flex justify-around px-5 items-center">
      <Link href="/profile">
        <Image
          className="user-profile--image w-6 mr-4 cursor-pointer"
          src={userProfile}
          alt="profile"
        />
      </Link>
      <span className="user-profile--username mr-4 leading-[17px] hover:underline cursor-pointer">
        Evan Winter
      </span>
      <div className="user-profile--notification relative cursor-pointer">
        <Image
          className="user-profile--notification-icon w-6 "
          src={notification}
          alt="profile"
        />
        <d className="bg-[#F5222D] text-[#fff] text-[11px] rounded-full absolute h-[15px] w-[15px] text-center top-[-3px] right-[-3px]">
          4
        </d>
      </div>
    </div>
  );
};

export default UserProfile;
