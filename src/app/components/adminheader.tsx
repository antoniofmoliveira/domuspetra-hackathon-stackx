"use client";
import React, { useRef } from "react";
import DomusPetraLogo from "./domus-petra-logo";

const AdminHeader = () => {
  const btnRef = useRef<HTMLDivElement>(null);

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
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/dashboard/users">Usuários</a>
              </li>
              <li>
                <a href="/dashboard/articles">Enviar artigos</a>
              </li>
              <li>
                <a href="/dashboard/upload">Enviar arquivo</a>
              </li>
              <li>
                <form action="/dashboard/api/logoff" method="POST">
                  <button>Sign Out</button>
                </form>
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
          <div className="mobile-menu" ref={btnRef}>
            <ul>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/dashboard/users">Usuários</a>
              </li>
              <li>
                <a href="/dashboard/articles">Enviar artigos</a>
              </li>
              <li>
                <a href="/dashboard/upload">Enviar arquivo</a>
              </li>
              <li>
                <form action="/dashboard/api/logoff" method="POST">
                  <button>Sign Out</button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminHeader;
