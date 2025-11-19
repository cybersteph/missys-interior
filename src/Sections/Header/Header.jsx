import React from "react";
import headerImg from '../../assets/Tezza-9342.JPG';
import "./Header.css"; // optional stylesheet

const Header = () => {
  return (
      <section className="header">
        <div className="header-content">
          <img src={headerImg} alt="Header Image"></img>
          <h1>Creating experiences by transforming any space.</h1>
          <h2>Moments made beautiful.</h2>
          <p>We don’t just decorate spaces — we craft environments that tell stories. 
            From curated home and office designs to beautifully themed events, parties, 
            and special celebrations, we transform any space into a moment you’ll never forget.</p>
          <button className="header-button">Let's Get Started</button>
        </div>
      </section>
  );
};

export default Header;