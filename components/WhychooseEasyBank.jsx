import React from "react";
import Image from "next/image";
import Cart from "./Cart";
import { cart } from "../pages/api/data";
function WhychooseEasyBank() {
  // console.log(cart);
  return (
    <>
      <div className="px-10   md:px-28 bg-gray-100  pb-24 ">
        <div className="text-center md:text-left w-auto md:w-[36rem] pt-24 mb-12 ">
          <div className="  text-4xl  mb-4 font-public">
            Why choose Easybank?
          </div>
          <div className=" text-gray-400">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </div>
        </div>
        <div className="grid gap-[2.3rem]  grid-cols-1 place-items-center md:place-items-start   md:grid-cols-2 lg:grid-cols-4">
          {cart.map((data) => (
            <div key={data.id}>
              <Cart add={data.src} name={data.title} para={data.para} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WhychooseEasyBank;
