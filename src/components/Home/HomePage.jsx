import React from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero-section container flex-between">
        <div className="hero-image">
          <img src="./images/bg-image.png" alt="images" />
        </div>
        <div className="hero-details">
          <h2>Remove Image Background</h2>
          <p>
            By uploading image you can remove the background of the image, and
            can download it in a good quality in just with one click.
          </p>
          <div className="tagline">
            <h3>
              100% Automatically and <span>Free</span>
            </h3>
          </div>
        </div>
      </section>

      <section className="second-section container">
        <h2>Just picture it!</h2>
        <div className="image-bg flex">
          <div className="img-box">
            <img src="./images/people-1.jpg" alt="person-skateboarding" />
            <p>Original</p>
          </div>
          <div className="img-box">
            <img
              src="./images/people-1-transparent2.jpg"
              alt="person-skateboarding-transparent-background"
            />
            <p>Transparent Background</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
