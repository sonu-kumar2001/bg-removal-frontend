import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container flex-between">
        <div className="logo">
          <h2>
            remove <span>bg</span>
          </h2>
        </div>
        <nav className="navbar">
          <ul className="flex">
            <li>
              <p>Terms</p>
            </li>
            <li>
              <p>General Terms and Condition</p>
            </li>
            <li>
              <p>Privacy Policy</p>
            </li>
            <li>
              <p>Cookie Policy</p>
            </li>
            <li><p>Contact</p></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
