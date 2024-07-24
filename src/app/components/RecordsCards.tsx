import { getArticles } from "@/lib/db";
import React from "react";
import RecordCard from "./RecordCard";

interface CardsProp {
  category: string;
}

/**
 * Component to display cards of articles of a specific category.
 *
 * This component displays a list of cards of articles of a specific category.
 *
 * @param {CardsProp} props - The props for the component.
 * @param {string} props.category - The category of the articles.
 * @returns {Promise<JSX.Element>} The React component.
 */
const RecordsCards = async ({ category }: CardsProp): Promise<JSX.Element> => {
  const articles = await getArticles(category);
  if (articles === undefined)
    return (
      <>
        <div>Undefined</div>
      </>
    );
  return (
    <>
      <div className="flex flex-wrap w-full flex-row justify-evenly  mt-6 mb-6">
        {articles.map((article) => (
          <RecordCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
};

export default RecordsCards;
