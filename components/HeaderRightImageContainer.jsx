import Image from "next/image";
import bgIntroDesktop from "../images/bg-intro-desktop.svg";
import bgIntroMobile from "/images/bg-intro-mobile.svg";

import mockups from "../images/image-mockups.png";
function HeaderRightImageContainer() {
  return (
    <div className="order-1 md:order-2 static  overflow-hidden  h-[35rem]   ">
      <div className=" hidden md:block relative h-[66rem] w-[66rem]  top-[-20rem] ">
        <Image layout="fill" objectFit="contain" src={bgIntroDesktop} />
      </div>
      <div className="  md:hidden relative h-[30rem] w-[30rem]  top-[-2rem] ">
        <Image layout="fill" objectFit="contain" src={bgIntroMobile} />
      </div>

      <div className=" absolute      w-[22rem]   md:w-[30.9rem] lg:w-[38.4rem]  md:right-[-9rem] lg:right-0 top-[-1rem] md:top-[0rem] left-0 md:left-auto   right-0  mx-auto  overflow-x-hidden   ">
        <div className=" relative w-[22rem] h-[30rem]  md:w-[26rem] lg:w-[50rem]   md:h-[48rem] lg:h-[50rem] ">
          <Image layout="fill" objectFit="contain" src={mockups} />
        </div>
      </div>
    </div>
  );
}

export default HeaderRightImageContainer;
