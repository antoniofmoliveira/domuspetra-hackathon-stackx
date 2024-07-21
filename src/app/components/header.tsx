"use client";
import React, { useRef } from "react";
import DomusPetraLogo from "./domus-petra-logo";
import Link from "next/link";

const Header = () => {
  const btnRef = useRef<HTMLDivElement>(null);
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div>
            <Link href="/">
              <DomusPetraLogo />
            </Link>
          </div>

          <div className="main-menu">
            <ul>
              <li>
                <a href="/about">Sobre</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contato</a>
              </li>
              {/* <li>
                <a href="/landing">Diferenciais</a>
              </li> */}
              <li>
                <a href="/speechs">Palestras</a>
              </li>
              <li>
                <a href="/training">Treinamento</a>
              </li>
              <li>
                <a href="/consultancy">Consultoria</a>
              </li>
              <li>
                <a href="/dashboard">Administração</a>
              </li>
            </ul>
          </div>
          {/* <!-- Hamburger Button --> */}
          <button
            className="hamburger-button"
            onClick={(e) => {
              if (btnRef.current!.style.right == "0px") {
                btnRef.current!.style.right = "-250px";
              } else {
                btnRef.current!.style.right = "0px";
              }
            }}
          >
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </button>
          {/* <!-- Mobile Menu --> */}
          <div className="mobile-menu" id="mobile_menu" ref={btnRef}>
            <ul>
              <li>
                <a href="/about">Sobre</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contato</a>
              </li>
              {/* <li>
                <a href="/landing">Diferenciais</a>
              </li> */}
              <li>
                <a href="/speechs">Palestras</a>
              </li>
              <li>
                <a href="/training">Treinamento</a>
              </li>
              <li>
                <a href="/consultancy">Consultoria</a>
              </li>
              <li>
                <a href="/dashboard">Administração</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
