import Link from "next/link";

function PageLinks({ display, link }) {
  const pageLinksHoverBorder = `relative hover:text-black  md:after:h-1 md:after:mt-4 md:after:w-12 md:after:bg-gradient-to-r md:after:from-green-500 md:after:to-blue-400 hover:after:absolute after:left-0 md:after:top-8 lg:after:top-10 ease-in-out after:duration-800 `;
  return (
    <div className={` ${display} +  md:flex gap-8 text-gray-400`}>
      <Link href="/">
        <a className={pageLinksHoverBorder + link}>Home</a>
      </Link>
      <Link href="/">
        <a className={pageLinksHoverBorder + `after:w-12 ` + link}>About</a>
      </Link>
      <Link href="/">
        <a className={pageLinksHoverBorder + `after:w-16 ` + link}>Contact</a>
      </Link>
      <Link href="/">
        <a className={pageLinksHoverBorder + `after:w-9 ` + link}>Blog</a>
      </Link>
      <Link href="/">
        <a className={pageLinksHoverBorder + `after:w-16 ` + link}>Careers</a>
      </Link>
    </div>
  );
}

export default PageLinks;
