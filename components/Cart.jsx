import React from "react";
import Image from "next/image";

function Cart({ add, name, para }) {
  return (
    <>
      <div className="  flex flex-col  text-center w-auto  md:text-left   align-left ">
        {/* lg:w-[14.42rem] */}
        <div className="mb-4">
          <Image src={add} width={48} height={48} objectFit="contain" />
        </div>
        <div className="text-xl mb-4">{name}</div>
        <div className=" text-sm text-gray-400 ">{para}</div>
      </div>
    </>
  );
}

export default Cart;
