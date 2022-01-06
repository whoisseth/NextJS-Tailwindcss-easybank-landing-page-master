import React from "react";
import Image from "next/image";
import OnlineIcon from "/images/icon-online.svg";

function WhychooseEasyBank() {
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
        <div>
          <div className="flex flex-col w-[16.5rem] align-left mb-24">
            <div className="mb-4">
              <Image
                src={OnlineIcon}
                width={48}
                height={48}
                objectFit="contain"
              />
            </div>
            <div className="text-lg mb-4">Online Banking</div>
            <div className="text-gray-400 ">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhychooseEasyBank;
