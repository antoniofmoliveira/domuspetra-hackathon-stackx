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
        <div className="cardContainer flex flex-col justify-stretch border-none rounded-[5%] w-[300px] min-w-[300px] h-[500px] bg-[rgb(225, 228, 228)] m-4 p-1  shadow-lg border-hidden shadow-zinc-400 hover:shadow-blue-200">
          <Image
            className="cardContainerImage p-2 pr-[10px] h-[200px] rounded-[10%] shadow-lg border-hidden shadow-zinc-400"
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
