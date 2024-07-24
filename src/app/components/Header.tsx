"use client";
import React, { useRef } from "react";
import DomusPetraLogo from "./ComusPetraLogo";
import Link from "next/link";
import ShareBar from "./ShareBar";

/**
 * The header component.
 *
 * This component is used to render the site header.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const Header = () => {
  const btnRef = useRef<HTMLDivElement>(null);
  return (
    <div>
      <nav className="navbar dark:bg-slate-800 bg-slate-300 rounded-xl">
        <div className="container">
          <Link href="/">
            <DomusPetraLogo />
          </Link>
          <div className="flex flex-col items-end">
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
            <ShareBar />
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
