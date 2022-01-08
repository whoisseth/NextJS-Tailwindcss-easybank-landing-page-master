import Link from "next/link";
function Article({ imgSrc, caption, title, desc }) {
  return (
    <>
      <div className="cart  lg:w-[16.5rem] w-[18rem] bg-white rounded-t-md overflow-hidden  ">
        <div className="  h-[10.5rem]   ">
          <img src={imgSrc} className="h-[100%] w-[100%]" />
        </div>
        <div className="p-4">
          <div className="caption mb-2 text-xs text-gray-400">{caption}</div>

          <Link href="/">
            <a>
              <div className="title text-lg leading-5 mb-2   hover:text-green-400">
                {title}
              </div>
            </a>
          </Link>
          <div className="text-gray-400  text-sm ">{desc}</div>
        </div>
      </div>
    </>
  );
}

export default Article;
