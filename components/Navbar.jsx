import React from "react";
import BtnRequestInvite from "./BtnRequestInvite";
import PageLinks from "./PageLinks";
import Logo from "./Logo";
import { MenuIcon, Close } from "@heroicons/react/outline";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

function Navbar() {
  const [showMe, setShowMe] = useState(true);
  function toggle() {
    setShowMe(!showMe);
  }
  return (
    <>
      <div className="flex  justify-between py-6 px-6 md:px-28  items-center border">
        <Logo />
        <PageLinks display={`hidden`} />
        <BtnRequestInvite />
        {showMe ? (
          <MenuIcon
            onClick={toggle}
            className="h-8 md:hidden cursor-pointer transition ease-in-out delay-300  "
          />
        ) : (
          <div>
            <CgClose
              onClick={toggle}
              className="relative  w-8 h-8 md:hidden cursor-pointer transition ease-in-out delay-300  "
            />
            <div className="flex justify-center items-center mx-8   absolute left-0 right-0 top-[7rem]  content-center">
              <PageLinks
                display={`flex flex-col  bg-white  md:hidden  items-center rounded-md  border mx-auto gap-4 py-4 w-[30rem] bg:black`}
                link={`text-black after:content-none focus:after:content-none`}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
