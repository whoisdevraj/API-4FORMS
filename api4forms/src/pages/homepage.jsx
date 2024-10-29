import React from "react";
import ApiRequestForm from "../components/ApiRequestForm";
import "./HomePage.css";
import UsageExample from "../components/UsageExample";

function HomePage() {
  return (
    <div className="homepage">
      <header className="hero">
        <p>WELCOME, TO API-4FORMS</p>
      </header>
      <nav className="navbar">
        <ul className="navbar-links">
          <li>
            <a href="#request-api">
              AN API WHICH MAKES WEBPAGE FORMS SUBMISSIONS DIRECTLY INTO YOUR
              MAIL BOX, SO THERE NOW NO NEED FOR A BACKEND SERVER.
            </a>
          </li>
        </ul>
      </nav>
      <div className="content-section">
        <section id="request-api" className="section">
          <ApiRequestForm />
        </section>
        <div className="content-section">
          <section id="usage-example" className="section">
            <UsageExample />
          </section>
        </div>
      </div>
      <footer className="footer">
        <p>Developer: Devraj Deshmukh</p>
      </footer>
    </div>
  );
}

export default HomePage;
