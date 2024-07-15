import showdown from "showdown";
import Image from "next/image";
import { Article } from "@/model/definitions";
import { getArticleByPermalink } from "@/lib/db";

interface PageProps {
  params: { permalink: string };
}

export default async function Post({ params: { permalink } }: PageProps) {
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
  } else {
    chtml = content;
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
