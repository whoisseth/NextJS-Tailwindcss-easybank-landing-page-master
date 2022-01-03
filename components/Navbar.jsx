import React from "react";
import BtnRequestInvite from "./BtnRequestInvite";
import PageLinks from "./PageLinks";
import Logo from "./Logo";
import { MenuIcon, Close } from "@heroicons/react/outline";
import { CgClose } from "react-icons/cg";

function Navbar() {
  return (
    <>
      <div className="flex justify-between py-6 px-6 md:px-28  items-center border">
        <Logo />
        <PageLinks />
        <BtnRequestInvite />
        <MenuIcon className="h-8 md:hidden cursor-pointer  " />
        {/* <CgClose className=" w-8 h-8 md:hidden cursor-pointer  " /> */}
      </div>
    </>
  );
}

export default Navbar;
