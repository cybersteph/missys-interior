import React from "react";
import "./Header.css"; // optional stylesheet

const Header = () => {
  return (
    <section className="header">
      <div className="header-content">
        <h1>Creating experiences by transforming any space.</h1>
        <h2>Moments made beautiful.</h2>
        <p>I don’t just decorate spaces — I craft environments that tell stories. 
          From curated home and office designs to beautifully themed events, parties, 
          and special celebrations, I transform any space into a moment you’ll never forget.</p>
        <a
          href="mailto:missysignaturespaces@gmail.com?subject=%5BType%5D%20Consultation%20Request"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="header-button">Let's Get Started</button>
        </a>
      </div>
    </section>
  );
};

export default Header;