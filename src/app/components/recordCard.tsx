import Image from "next/image";
import "./card.css";
import { Article } from "@/model/definitions";
import showdown from "showdown";

type CardProp = {
  article: Article;
};

const RecordCard = async ({ article }: CardProp) => {
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
  return (
    <>
      <div className="cardContainer flex items-center w-[200] h-[200]">
        <Image
          className="cardContainerImage  object-fill"
          src={article.image_url}
          alt={article.image_url}
          height={200}
          width={200}
        />
        <div className="cardContainerTexts">
          <div className="cardContainerText">
            <div
              className="record"
              dangerouslySetInnerHTML={{ __html: chtml }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecordCard;
