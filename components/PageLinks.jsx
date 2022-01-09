import Link from "next/link";

function PageLinks({ display, link, nav, footer, md, menu }) {
  const pageLinksHoverBorder = `relative hover:text-black  md:after:h-1 md:after:mt-4 md:after:bg-gradient-to-r md:after:from-green-500 md:after:to-blue-400 hover:after:absolute after:left-0 md:after:top-11  ease-in-out after:duration-800 `;
  return (
    <div
      className={`${
        nav
          ? `hidden grid md:grid-row-1      place-content-center rounded-md   mx-auto gap-4 py-4  bg:black  md:flex gap-8 text-gray-400  `
          : "grid md:grid-cols-2 gap-4 md:gap-2 md:gap-x-12 text-center mb-8"
      } ${menu}`}
    >
      {footer ? (
        <></>
      ) : (
        <Link href="/">
          <a className={pageLinksHoverBorder + `after:w-[3rem] ` + link}>
            Home
          </a>
        </Link>
      )}
      <Link href="/">
        <a className={pageLinksHoverBorder + `after:w-[3.2rem] ` + link}>
          {footer ? "About Us" : "About"}
        </a>
      </Link>
      <Link href="/">
        <a className={pageLinksHoverBorder + `after:w-[4rem] ` + link}>
          Contact
        </a>
      </Link>
      <Link href="/">
        <a className={pageLinksHoverBorder + `after:w-[3rem] ` + link}>Blog</a>
      </Link>
      <Link href="/">
        <a className={pageLinksHoverBorder + `after:w-[4.2rem] ` + link}>
          Careers
        </a>
      </Link>
      {footer ? (
        <>
          <Link href="/">
            <a className={pageLinksHoverBorder + `after:w-16 ` + link}>
              Careers
            </a>
          </Link>
          <Link href="/">
            <a className={pageLinksHoverBorder + `after:w-16 ` + link}>
              Privacy Policy
            </a>
          </Link>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default PageLinks;
