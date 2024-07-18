"use client";
import { useRef, useState } from "react";
import "./Carousel.css";

function Carousel() {
  const [leftBox, setLeftBox] = useState(0);
  const [rightBox, setRightBox] = useState(1);
  const pictureArray = [
    "blogHero.jpg",
    "consultoriaHero.jpg",
    "palestrasHero.jpg ",
    "treinamentosHero.png",
  ];
  const titleArray = ["Blog", "Consultoria", "Palestras", "Treinamentos"];
  const pages = ["blog", "consultancy", "speechs", "training"];
  let hrefLeftBox = `./pages/${pages[leftBox]}`;
  let hrefRightBox = `./pages/${pages[rightBox]}`;

  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);

  const goFowards = (): void => {
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
  };
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
  return (
    <>
      <div id="line">
        <button id="left" onClick={goBackwards}></button>
        <a href={hrefLeftBox}>
          <div id="hero1" ref={ref1} className="hero">
            <h5>{titleArray[leftBox]}</h5>
          </div>
        </a>
        <a href={hrefRightBox}>
          <div id="hero2" ref={ref2} className="hero">
            <h5>{titleArray[rightBox]}</h5>
          </div>
        </a>
        <button id="right" onClick={goFowards}>
          {" "}
        </button>
      </div>
    </>
  );
}

export default Carousel;
