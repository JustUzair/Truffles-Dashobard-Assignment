import React from "react";
import Image from "next/image";
import logo from "../../images/logo.svg";
import UserProfile from "./UserProfile";
import { Divider } from "@material-ui/core";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className="navbar flex justify-between items-center pl-9 pr-4 py-5 bg-[#fff]">
        <Link href="/">
          <Image className="mr-10" src={logo} alt="truffle" />
        </Link>
        <div className="nav-elements flex justify-between items-center grow">
          <h1 className="nav-heading font-bold text-2xl inter">Dashboard</h1>
          <div className="user-profile">
            <UserProfile />
          </div>
        </div>
      </div>
      <Divider></Divider>
    </>
  );
};

export default Navbar;
