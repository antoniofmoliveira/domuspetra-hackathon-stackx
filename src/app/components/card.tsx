"use client";
import Image from "next/image";
import "./card.css";
import { Article } from "@/model/definitions";
import { useRef } from "react";

type CardProp = {
  article: Article;
};

const Card = ({ article }: CardProp) => {
  const href = `/${article.type}/${article.permalink}`;
  const ref = useRef(null);
  const content = (
    <>
      <a href={href}>
        <div className="cardContainer">
          <Image
            className="cardContainerImage"
            src={article.image_url}
            alt={article.image_url}
            height={400}
            width={400}
          />
          <div className="cardContainerTexts">
            <div className="cardContainerText">
              <h2>{article.title}</h2>
              <p>{article.summary}</p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
  return content;
};

export default Card;
