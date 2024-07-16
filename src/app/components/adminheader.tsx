import React from "react";
import DomusPetraLogo from "./domus-petra-logo";
import { signOut } from "@/auth";

const AdminHeader = () => {
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
                <form
                  action={async () => {
                    "use server";
                    await signOut({ redirect: true, redirectTo: "/" });
                  }}
                >
                  <button>Sign Out</button>
                </form>
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
                <form
                  action={async () => {
                    "use server";
                    await signOut({ redirect: true, redirectTo: "/" });
                  }}
                >
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
