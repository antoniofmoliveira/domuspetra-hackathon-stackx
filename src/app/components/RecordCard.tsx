import Image from "next/image";
import { Article } from "@/model/definitions";
import showdown from "showdown";
import "./record.css";

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

    const article = await fetch(url_ok);
    const content = await article.text();
    // const result = content;
    // console.log(content);
    return content;
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
      <div className="dark:bg-gray-50 bg-gray-50 text-stone-950 flex flex-col justify-stretch items-center w-[300px] h-[400px] rounded-3xl border-stone-700  shadow-2xl border-hidden shadow-zinc-400 m-1 hover:shadow-blue-400">
        <Image
          className="p-[8px] pr-[10px] h-[200px] w-[200px] rounded-2xl object-cover"
          src={article.image_url}
          alt={article.image_url}
          width={200}
          height={200}
        />
        <div>
          <div className=" w-full h-full p-3">
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
