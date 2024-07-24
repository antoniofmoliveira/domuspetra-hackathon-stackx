"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./Carousel.css";

/**
 * A component that displays a carousel of images with titles and navigates between them.
 *
 * @return {JSX.Element} The carousel component.
 */

function Carousel() {
  const [leftBox, setLeftBox] = useState(0);
  const [rightBox, setRightBox] = useState(1);
  const pictureArray: string[] = useMemo(
    () => [
      "blogHero.jpg",
      "consultoriaHero.jpg",
      "palestrasHero.jpg ",
      "treinamentosHero.png",
    ],
    []
  );
  const titleArray = ["Blog", "Consultoria", "Palestras", "Treinamentos"];
  const pages = ["blog", "consultancy", "speechs", "training"];
  let hrefLeftBox = `/${pages[leftBox]}`;
  let hrefRightBox = `/${pages[rightBox]}`;

  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);

  const goFowards = useCallback((): void => {
    if (leftBox == 0) {
      setRightBox(2);
      setLeftBox(1);
    } else if (leftBox == 1) {
      setRightBox(3);
      setLeftBox(2);
    } else if (leftBox == 2) {
      setRightBox(0);
      setLeftBox(3);
    } else if (leftBox == 3) {
      setRightBox(1);
      setLeftBox(0);
    }
    ref1.current!.style.backgroundImage = `url("/images/heros/${pictureArray[leftBox]}")`;
    ref2.current!.style.backgroundImage = `url("/images/heros/${pictureArray[rightBox]}")`;
  }, [leftBox, pictureArray, rightBox]);

  const goBackwards = (): void => {
    if (leftBox == 0) {
      setRightBox(0);
      setLeftBox(3);
    } else if (leftBox == 1) {
      setRightBox(1);
      setLeftBox(0);
    } else if (leftBox == 2) {
      setRightBox(2);
      setLeftBox(1);
    } else if (leftBox == 3) {
      setRightBox(3);
      setLeftBox(2);
    }
    ref1.current!.style.backgroundImage = `url("/images/heros/${pictureArray[leftBox]}")`;
    ref2.current!.style.backgroundImage = `url("/images/heros/${pictureArray[rightBox]}")`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goFowards();
    }, 5000);
    return () => clearInterval(interval);
  }, [goFowards]);

  return (
    <>
      <div id="carousel-hero-all">
        <button id="carousel-btn-up" onClick={goBackwards}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
        <button id="carousel-btn-left" onClick={goBackwards}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>

        <a href={hrefLeftBox}>
          <div
            id="hero1"
            ref={ref1}
            className="carousel-hero rounded-3xl  shadow-lg border-hidden shadow-zinc-400 m-1 hover:shadow-blue-200"
          >
            <h5 className="carousel-title textshadow text-3xl font-extrabold text-yellow-100">
              {titleArray[leftBox]}
            </h5>
          </div>
        </a>
        <a href={hrefRightBox}>
          <div
            id="hero2"
            ref={ref2}
            className="carousel-hero rounded-3xl  shadow-lg border-hidden shadow-zinc-400 m-1 hover:shadow-blue-200"
          >
            <h5 className="carousel-title textshadow text-3xl font-extrabold text-yellow-100">
              {titleArray[rightBox]}
            </h5>
          </div>
        </a>

        <button id="carousel-btn-right" onClick={goFowards}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>

        <button id="carousel-btn-down" onClick={goFowards}>
          <i className="fa-solid fa-arrow-down"></i>
        </button>
      </div>
    </>
  );
}

export default Carousel;
