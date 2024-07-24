import { getArticles } from "@/lib/db";
import React from "react";
import Card from "./Card";
interface CardsProp {
  category: string;
}

/**
 * A component that renders a list of cards.
 *
 * @param {CardsProp} props - An object containing the category of the cards to render.
 * @returns {JSX.Element} A React component that renders a list of cards.
 */
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
