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
      <div className="flex md:gap-8   justify-between py-6 px-6 md:px-24  items-center  sticky top-0 z-50  bg-white ">
        <Logo />
        <PageLinks display={`hidden`} nav={true} />
        <BtnRequestInvite hide={"hidden"} />
        {showMe ? (
          <MenuIcon
            onClick={toggle}
            className="h-8 md:hidden cursor-pointer transition ease-out delay-300  "
          />
        ) : (
          <div>
            <CgClose
              onClick={toggle}
              className="relative  w-8 h-8 md:hidden cursor-pointer transition ease-in delay-300  "
            />
            <div className="flex bg:white justify-center items-center mx-8   absolute left-0 right-0 top-[7rem]  content-center">
              <PageLinks
                menu={`flex   flex-col  bg-white  md:hidden  items-center rounded-md   mx-auto gap-4 py-4 w-[25rem] bg:black `}
                link={`text-black md:after:content-['']`}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
