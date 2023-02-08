import React from "react";
import Header from "../Header";
import BgUpload from "./BgUpload";

export default function UserDashboard() {
  return (
    <>
      <Header />;
      <section className="container remove-bg-section">
        <h2>Remove Image Background</h2>
        <p>Get a transparent background for any image.</p>
        <BgUpload />
      </section>
    </>
  );
}
