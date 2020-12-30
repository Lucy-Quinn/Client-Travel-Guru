import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
// import "./../../App.css";

function LandingPage() {
  return (
    <div>
      <header className="header">
        <div className="header-img"></div>
        <div className="header-title">
          <h1>Travel Guru</h1>
        </div>
      </header>
      <section className="landing-buttons">
        <Link to={"/signup"}>
          <button className="form-button">Sign Up</button>
        </Link>

        <Link to={"login"}>
          <button className="form-button">Login</button>
        </Link>
      </section>

      <section className="about-us">
        <h4>What is Travel Guru?</h4>
        <div className="about-us-text">
          <p>
            Have you ever been on holiday and forgotten where you have been
            exactly and what you have done? Also, looking for some travel inspiration?</p>
          <p>Join our community and search for travel ideas and keep a record of
          all your travel memories. </p>
          <p>Travel experiences should never be
          forgotten!
          </p>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
