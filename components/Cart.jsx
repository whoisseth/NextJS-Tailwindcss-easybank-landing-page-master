import React from "react";
import Image from "next/image";
import OnlineIcon from "/images/icon-online.svg";

function Cart({ add, name, para }) {
  return (
    <>
      <div className="flex flex-col bg-red-700 w-[14.5rem]  align-left mb-24">
        <div className="mb-4">
          {/* <Image src={OnlineIcon} width={48} height={48} objectFit="contain" /> */}
          <Image src={add} width={48} height={48} objectFit="contain" />
        </div>
        {/* <div className="text-lg mb-4">Online Banking</div> */}
        <div className="text-lg mb-4">{name}</div>
        <div className="text-sm text-gray-400 ">{para}</div>
      </div>
    </>
  );
}

export default Cart;
