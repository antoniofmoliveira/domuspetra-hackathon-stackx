"use client";
import { useEffect, useRef, useState } from "react";

import { getLatestArticles } from "@/lib/db";
import Card from "./Card";
import { Article } from "@/model/definitions";

interface CardCarouselProp {
  articles: Article[] | undefined;
}

const CardCarousel = ({ articles }: CardCarouselProp) => {
  const ref0 = useRef<HTMLDivElement | null>(null);
  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const ref3 = useRef<HTMLDivElement | null>(null);
  const ref4 = useRef<HTMLDivElement | null>(null);
  const ref5 = useRef<HTMLDivElement | null>(null);

  const [cardArrayVisibility, setCardArrayVisibity] = useState([
    true,
    true,
    false,
    false,
    false,
  ]);
  const [initialCardVisible, setIntialCardVisible] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const finalCardVisible =
        initialCardVisible === 5 ? 0 : initialCardVisible + 1;
      const tempArray = [false, false, false, false, false, false];
      tempArray[initialCardVisible] = true;
      tempArray[finalCardVisible] = true;
      setCardArrayVisibity(tempArray);
      setIntialCardVisible(() => finalCardVisible);
      ref0.current!.style.display = cardArrayVisibility[0] ? "block" : "none";
      ref1.current!.style.display = cardArrayVisibility[1] ? "block" : "none";
      ref2.current!.style.display = cardArrayVisibility[2] ? "block" : "none";
      ref3.current!.style.display = cardArrayVisibility[3] ? "block" : "none";
      ref4.current!.style.display = cardArrayVisibility[4] ? "block" : "none";
      ref5.current!.style.display = cardArrayVisibility[5] ? "block" : "none";
    }, 5000);
    return () => clearInterval(interval);
  }, [initialCardVisible, cardArrayVisibility]);

  if (articles === undefined) {
    return <></>;
  }

  return (
    <>
      <div className="flex flex-wrap w-full flex-row justify-evenly">
        <div ref={ref0} className="">
          <Card key={articles[0].id} article={articles[0]} />
        </div>
        <div ref={ref1} className="">
          <Card key={articles[1].id} article={articles[1]} />
        </div>
        <div ref={ref2} className="hidden">
          <Card key={articles[2].id} article={articles[2]} />
        </div>
        <div ref={ref3} className="hidden">
          <Card key={articles[3].id} article={articles[3]} />
        </div>
        <div ref={ref4} className="hidden">
          <Card key={articles[4].id} article={articles[4]} />
        </div>
        <div ref={ref5} className="hidden">
          <Card key={articles[5].id} article={articles[5]} />
        </div>
      </div>
    </>
  );
};

export default CardCarousel;
