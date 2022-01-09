import Link from "next/link";
import PageLinks from "./PageLinks";
import {
  IoLogoFacebook,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoPinterest,
  IoLogoInstagram,
} from "react-icons/io";
import BtnRequestInvite from "./BtnRequestInvite";

function Footer() {
  return (
    <>
      <div
        className=" bg-[#2d314d] px-10 md:px-24 py-10 flex flex-col md:flex-row  place-items-center  
      justify-auto md:justify-between  "
      >
        <div className="flex flex-col  md:flex-row  gap-4 md:gap-16 lg:gap-36">
          <div className="1 ">
            <FooterLogo />
            <SocialMediaLinks />
          </div>
          <PageLinks
            display={
              " grid md:grid-cols-2 gap-2 md:gap-x-12 text-center mb-8  "
            }
            link={"text-white hover:text-green-400 md:after:content-none"}
            footer={true}
          />
        </div>
        <div className="2 flex flex-col items-center md:items-end gap-4  text-right  ">
          <div className="">
            <BtnRequestInvite />
          </div>
          <div className="text-gray-500">© Easybank. All Rights Reserved</div>
        </div>
      </div>
    </>
  );
}

export default Footer;

//
function FooterLogo() {
  return (
    <>
      <Link href={"/"}>
        <a>
          <img className="mb-8 md:mb-12" src="/images/logo.svg" alt="logo" />
        </a>
      </Link>
    </>
  );
}
function SocialMediaLinks() {
  const svgStyle = "h-6 w-6  fill-white hover:fill-green-400 ";
  return (
    <>
      <div className=" flex gap-2">
        <Link href="/">
          <a>
            <IoLogoFacebook className={svgStyle} />
          </a>
        </Link>
        <Link href="">
          <a className="">
            <IoLogoYoutube className={svgStyle} />
          </a>
        </Link>
        <Link href="">
          <a>
            <IoLogoTwitter className={svgStyle} />
          </a>
        </Link>
        <Link href="">
          <a>
            <IoLogoPinterest className={svgStyle} />
          </a>
        </Link>
        <Link href="">
          <a className="">
            <IoLogoInstagram className={svgStyle} />
          </a>
        </Link>
      </div>
    </>
  );
}
