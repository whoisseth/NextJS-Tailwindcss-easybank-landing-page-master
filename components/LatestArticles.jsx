import { Articles } from "../pages/api/data";
import Article from "./Article";
function LatestArticles() {
  console.log(Articles);
  return (
    <>
      <div className="px-10 md:px-24 py-24 bg-gray-50  ">
        <div className=" text-4xl mb-16 text-center md:text-left">
          Latest Articles
        </div>
        <div className="grid gap-[4rem]  grid-cols-1 place-items-center md:place-items-start   md:grid-cols-2 lg:grid-cols-4">
          {Articles.map((article) => (
            <div key={article.id}>
              <Article
                imgSrc={article.src}
                caption={article.caption}
                title={article.title}
                desc={article.desc}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LatestArticles;
