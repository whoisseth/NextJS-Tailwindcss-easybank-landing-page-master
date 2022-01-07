import React from "react";
import Image from "next/image";
import Cart from "./Cart";
import { cart } from "../pages/api/data";
function WhychooseEasyBank() {
  console.log(cart);
  return (
    <>
      <div className="md:px-28 bg-gray-100">
        <div className="w-[36rem] pt-24 mb-12 ">
          <div className="text-3xl  mb-4 font-public">
            Why choose easy Bank ?
          </div>
          <div className="text-gray-400">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </div>
        </div>
        <div className="flex gap-8">
          <Cart
            add={cart[1].cartImgAddress.onlineIcon.src}
            name={cart[1].cartName}
            para={cart[1].cartPara}
          />
          <Cart />
          <Cart />
          <Cart />
        </div>
      </div>
    </>
  );
}

export default WhychooseEasyBank;
