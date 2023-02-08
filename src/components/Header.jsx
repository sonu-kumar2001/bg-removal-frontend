import React from "react";
import { Link } from "react-router-dom";
import { getFromLocalStorage } from "../helper/storage";

export default function Header() {
  const user = getFromLocalStorage("fullName");
  return (
    <header>
      <div className="header-container flex-between">
        <Link to="/">
          <div className="logo">
            <h2>
              remove <span>bg</span>
            </h2>
          </div>
        </Link>
        <nav className="navbar">
          <ul className={user ? "hidden" : "visible flex"}>
            <Link to="/login">
              <li className="login">
                <p>Login</p>
              </li>
            </Link>
            <Link to="/signup">
              <li className="sign-up">
                <p>Sign up</p>
              </li>
            </Link>
          </ul>
          <p className={user ? "visible loggedin-username" : "hidden"}>
            {user}
          </p>
        </nav>
      </div>
    </header>
  );
}
