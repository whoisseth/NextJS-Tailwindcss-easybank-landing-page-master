import Image from "next/image";
import bgIntroDesktop from "../images/bg-intro-desktop.svg";
import mockups from "../images/image-mockups.png";
import NextGenerationBox from "./NextGenerationBox";
function HeaderSection() {
  return (
    <>
      <div className=" md:pl-28 flex   place-items-center shadow-md  h-[35rem]   ">
        <NextGenerationBox />
        <div className="static  overflow-hidden  h-[35rem]   ">
          <div className="-z-50 relative h-[66rem] w-[66rem]  top-[-20rem]">
            <Image layout="fill" objectFit="contain" src={bgIntroDesktop} />
          </div>
          <div className="overflow-hidden w-[30rem]">
            <div className=" overflow-x-hidden  absolute right-[-11.4rem] top-[0rem]    w-[50rem] h-[50rem] ">
              <Image layout="fill" objectFit="contain" src={mockups} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
