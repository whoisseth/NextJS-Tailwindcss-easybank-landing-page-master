import Image from "next/image";
import bgIntroDesktop from "../images/bg-intro-desktop.svg";
import bgIntroMobile from "/images/bg-intro-mobile.svg";
import mockups from "../images/image-mockups.png";
import HeaderRightImageContainer from "./HeaderRightImageContainer";
import NextGenerationBox from "./NextGenerationBox";
function HeaderSection() {
  return (
    <>
      <div className=" md:pl-24 flex flex-col md:flex-row   place-items-center md:h-[35rem] overflow-hidden  md:overflow-auto  ">
        <NextGenerationBox />
        <HeaderRightImageContainer />
      </div>
    </>
  );
}

export default HeaderSection;
