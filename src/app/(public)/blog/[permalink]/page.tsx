import showdown from "showdown";
import Image from "next/image";
import { Article } from "@/model/definitions";

export default async function Post({ article }: { article: Article }) {
  const url = new URL(article.content_url);
  const blog = await fetch(url);
  const content = blog.text();
  let chtml = "";

  if (article.content_url.endsWith(".md")) {
    const convert = new showdown.Converter();
    chtml = convert.makeHtml(await content);
  } else {
    chtml = await content;
  }

  return (
    <>
      <div>Blog Page</div>

      <div>
        <Image src={article.image_url} alt="alt" width={268} height={188} />
      </div>
      <div className="postTitle">{article.title}</div>
      <div className="postSummary">{article.summary}</div>

      <div className="post" dangerouslySetInnerHTML={{ __html: chtml }}></div>
    </>
  );
}
