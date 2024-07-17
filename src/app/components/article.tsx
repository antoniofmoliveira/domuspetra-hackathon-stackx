import showdown from "showdown";
import Image from "next/image";
import { Article } from "@/model/definitions";
import { getArticleByPermalink } from "@/lib/db";

interface PageProps {
  permalink: string;
  footer_: ({ title }: { title: string }) => JSX.Element;
}

export default async function FullArticle({ permalink, footer_ }: PageProps) {
  const article: Article | undefined = await getArticleByPermalink(permalink);

  if (article === undefined) return;

  const url_fetch = async (url: string) => {
    if (url == null) {
      return "";
    }
    const url_ok = new URL(url);

    const blog = await fetch(url_ok);
    const content = await blog.text();
    const result = content;
    return result;
  };

  const content = await url_fetch(article.content_url);
  if (content === "") return;
  let chtml = "";

  if (article.content_url.endsWith(".md")) {
    const convert = new showdown.Converter();
    chtml = convert.makeHtml(content);
  }
  if (article.content_url.endsWith(".txt")) {
    chtml = `<pre class='articleInTxt'>${content}</pre>`;
  } else {
    chtml = content;
  }
  const title = article.title;
  return (
    <>
      <div className={"relative p-6 ml-6 rounded-lg  w-[95vw]  h-[15vw]"}>
        <Image
          className="relative rounded-2xl shadow-lg shadow-slate-500"
          src={article.image_url}
          alt="alt"
          fill={true}
          objectFit="cover"
        />
        <div className="absolute top-0 let-0 w-[97%] h-[100%] content-center text-center">
          <div>
            <p className="textshadow text-3xl font-extrabold text-yellow-100">
              {article.title}
            </p>
          </div>
        </div>
      </div>

      <div className="articleSummary pt-6 m-1 ml-6 w-[95vw]">
        {article.summary}
      </div>
      <div
        className="article p-1 m-1 ml-6 w-[95vw]"
        dangerouslySetInnerHTML={{ __html: chtml }}
      ></div>
      <div className="footer_  p-1 m-1 ml-6 w-[95vw]">{footer_({ title })}</div>
    </>
  );
}
