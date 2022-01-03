import Link from "next/link";
import logo from "../images/logo.svg";
import Image from "next/image";

function Logo() {
  return (
    <>
      <Link href={"/"}>
        <a>
          <Image src={logo} />
        </a>
      </Link>
    </>
  );
}

export default Logo;
