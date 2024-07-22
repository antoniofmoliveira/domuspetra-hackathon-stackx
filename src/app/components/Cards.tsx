import { getArticles } from "@/lib/db";
import React from "react";
import Card from "./Card";
interface CardsProp {
  category: string;
}
const Cards = async ({ category }: CardsProp) => {
  const articles = await getArticles(category);
  if (articles === undefined) return <></>;
  return (
    <>
      <div className="flex flex-wrap w-full flex-row justify-evenly">
        {articles.map((article) => (
          <Card key={article.id} article={article} />
        ))}
      </div>
    </>
  );
};

export default Cards;
