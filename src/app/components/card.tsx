import Image from "next/image";
import "./card.css";
import { Article } from "@/model/definitions";

type CardProp = {
  article: Article;
};

const Card = ({ article }: CardProp) => {
  const href = `/${article.type}/${article.permalink}`;
  const content = (
    <>
      <a href={href}>
        <div className="Container">
          <Image
            src={article.image_url}
            alt={article.image_url}
            height={400}
            width={150}
          />
          <div>
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
          </div>
        </div>
      </a>
    </>
  );
  return content;
};

export default Card;
