import React from "react";
import Image from "next/image";
import logo from "../../images/logo.svg";
import { Divider } from "@material-ui/core";

import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className="navbar flex justify-between items-center pl-9 pr-4 py-5 bg-[#fff]">
        <Link href="/">
          <Image className="mr-10" src={logo} alt="truffle" />
        </Link>
        <div className="nav-help mr-10 font-[400] text-[14px] leading-[16.94px]">
          Having trouble?{" "}
          <span className="text-[#775DA6] font-[600] text-[14px] ">
            <Link href="/get-help"> Get Help</Link>
          </span>
        </div>
      </div>
      <Divider></Divider>
    </>
  );
};

export default Navbar;
