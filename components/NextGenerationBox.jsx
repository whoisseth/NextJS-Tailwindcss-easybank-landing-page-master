import React from "react";
import BtnRequestInvite from "./BtnRequestInvite";

function NextGenerationBox() {
  return (
    <div className="order-2 md:order-1">
      <div className=" px-10 md:px-0 flex flex-col justify-center items-center md:items-baseline w-[24rem]  md:w-[22rem] lg:w-[25rem]       ">
        <div className="text-4xl lg:text-5xl text-[#2d314d] mb-6 ">
          Next generation digital banking
        </div>
        <div className="text-sm lg:text-base text-gray-400 mb-6  z-40">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </div>
        <div>
          <BtnRequestInvite hide={"mb-16 md:mb-0 lg:mb-0"} />
        </div>
      </div>
    </div>
  );
}

export default NextGenerationBox;
