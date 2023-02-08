import React from "react";
import Header from "../Header";

export default function SignupForm({
  setFullName,
  setEmail,
  setPassword,
  handleSubmit,
  loading,
}) {
  return (
    <>
      <Header />
      <main>
        <section className="authentication-section">
          <div className="auth flex-between">
            <div className="auth-img">
              <img src="./images/auth-img.png" alt="hand snapping" />
            </div>

            <div className="form-section">
              <h2>Create your account!</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Full Name"
                  onChange={(e) => setFullName(e.target.value)}
                />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="login-button">
                  <button type="submit">
                    {loading ? "Loading..." : "Signup"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
