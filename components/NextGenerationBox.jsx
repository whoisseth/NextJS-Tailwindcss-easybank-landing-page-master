import React from "react";
import BtnRequestInvite from "./BtnRequestInvite";

function NextGenerationBox() {
  return (
    <>
      <div className="flex flex-col justify-center  w-[36rem]  h-80   ">
        <div className="text-5xl text-[#2d314d] mb-6">
          Next generation digital banking
        </div>
        <div className="text-gray-400 mb-6">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </div>
        <div>
          <BtnRequestInvite />
        </div>
      </div>
    </>
  );
}

export default NextGenerationBox;
