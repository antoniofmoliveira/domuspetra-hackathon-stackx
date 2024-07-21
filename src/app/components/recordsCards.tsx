import { getArticles } from "@/lib/db";
import React from "react";
import RecordCard from "./recordCard";
interface CardsProp {
  category: string;
}
const RecordsCards = async ({ category }: CardsProp) => {
  const articles = await getArticles(category);
  if (articles === undefined) return <></>;
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
