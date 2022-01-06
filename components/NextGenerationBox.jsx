import React from "react";
import BtnRequestInvite from "./BtnRequestInvite";

function NextGenerationBox() {
  return (
    <div className="order-2 md:order-1">
      <div className=" px-10 flex flex-col justify-center items-center md:items-baseline w-[23rem]  lg:w-[30rem]       ">
        <div className="text-4xl lg:text-5xl text-[#2d314d] mb-6">
          Next generation digital banking
        </div>
        <div className="text-sm lg:text-base text-gray-400 mb-6">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </div>
        <div>
          <BtnRequestInvite />
        </div>
      </div>
    </div>
  );
}

export default NextGenerationBox;
