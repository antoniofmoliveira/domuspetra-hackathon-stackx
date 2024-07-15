import { getArticles } from "@/lib/db";
import React from "react";
import Card from "./card";
interface CardsProp {
  category: string;
}
const Cards = async ({ category }: CardsProp) => {
  const articles = await getArticles(category);
  if (articles === undefined) return <></>;
  return (
    <>
      {articles.map((article) => (
        <Card
          key={article.id}
          img={article.image_url}
          title={article.title}
          subtitle={article.summary}
        />
      ))}
    </>
  );
};

export default Cards;
