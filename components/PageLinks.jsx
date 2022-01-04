import Link from "next/link";

function PageLinks({ display, link }) {
  const pageLinksHoverBorder = `relative hover:text-black after:content-[''] after:h-1 after:mt-4 after:w-12 after:bg-gradient-to-r after:from-green-500 after:to-blue-400 hover:after:absolute after:left-0 md:after:top-8 lg:after:top-10 ease-in-out after:duration-800 `;
  return (
    <div className={`  ${display} md:flex gap-8 text-gray-400 `}>
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
