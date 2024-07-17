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
      <div className="articleImageDiv">
        <Image
          className="articleImage"
          src={article.image_url}
          alt="alt"
          width={268}
          height={188}
        />
      </div>
      <div className="articleTitle">{article.title}</div>
      <div className="articleSummary">{article.summary}</div>
      <div
        className="article"
        dangerouslySetInnerHTML={{ __html: chtml }}
      ></div>
      <div className="footer_">{footer_({ title })}</div>
    </>
  );
}
