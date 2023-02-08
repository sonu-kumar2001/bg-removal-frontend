import React from "react";
import { Link } from "react-router-dom";
import { getFromLocalStorage } from "../helper/storage";
import {setToLocalStorage} from "../helper/storage";

export default function Header() {
  const user = getFromLocalStorage("fullName");
  const logoutHandler=()=>{
    setToLocalStorage({
        authToken: "",
        email: "",
        role:"",
        fullName: "",
      });
      window.location.href="/login"
  }
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
          <div className="flex nav-func">
          <p className={user ? "visible loggedin-username" : "hidden"}>
            {user}
          </p>
          <p className={user ? "visible logout" : "hidden"} onClick={logoutHandler}>
            Logout
          </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
