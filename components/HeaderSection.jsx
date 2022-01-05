import Image from "next/image";
import bgIntroDesktop from "../images/bg-intro-desktop.svg";
import BtnRequestInvite from "./BtnRequestInvite";
function HeaderSection() {
  return (
    <>
      <div className="md:pl-28 grid grid-cols-2 shadow-sm overflow-hidden  ">
        <div className="flex flex-col justify-center w-[25rem] ">
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
        {/* <div className=" absolute top-[-20rem] right-[-20rem] h-[100vh] w-[10]"> */}
        <div className="bg-red-400  right-0">
          <Image
            className=" "
            width={900}
            // height={`100%`}
            src={bgIntroDesktop}
          />
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
