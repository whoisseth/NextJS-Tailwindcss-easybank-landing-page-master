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
      <div className=" bg-[#2d314d] px-10 md:px-24 py-10 grid grid-cols-1 md:grid-cols-3   place-items-center md:place-items-start">
        <div className="1">
          <FooterLogo />
          <SocialMediaLinks />
        </div>
        {/* <div className="bg-red-400 w-auto grid grid-cols-1 md:grid-cols-2"> */}
        <PageLinks
          display={"2 grid md:ird-cols-2 gap-5 text-center mb-8"}
          link={"text-white hover:text-green-400 md:after:content-none"}
        />
        <div className=" 3 flex flex-col items-center md:items-start gap-4">
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
  const svgStyle = "h-6 w-6  fill-white hover:fill-green-400 mb-8";
  return (
    <>
      <div className="socialLinks flex gap-2">
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
