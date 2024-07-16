import React from "react";
import DomusPetraLogo from "./domus-petra-logo";

const Header = () => {
  return (
    <div>
      {" "}
      <nav className="navbar">
        <div className="container">
          <div className="card">
            <a href="/">
              <DomusPetraLogo />
            </a>
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
              <li>
                <a href="/landing">Diferenciais</a>
              </li>
              <li>
                <a href="/speechs">Palestras</a>
              </li>
              <li>
                <a href="/training">Treinamento</a>
              </li>
              <li>
                <a href="/dashboard">Administração</a>
              </li>
            </ul>
          </div>
          {/* <!-- Hamburger Button --> */}
          <button className="hamburger-button">
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </button>
          {/* <!-- Mobile Menu --> */}
          <div className="mobile-menu">
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
              <li>
                <a href="/landing">Diferenciais</a>
              </li>
              <li>
                <a href="/speechs">Palestras</a>
              </li>
              <li>
                <a href="/training">Treinamento</a>
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
