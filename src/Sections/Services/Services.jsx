import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services-section">
    <h2>Services</h2>
    <div className="service-list">
        <div className="service-card">
        <h3>Residential Design</h3>
        <p>Thoughtfully curated home spaces shaped around the way you live. 
            Whether it's subtle enhancements or full transformations, every detail 
            is crafted to reflect your personality, lifestyle, and vision.</p>
        </div>
        <div className="service-card">
        <h3>Commercial Design</h3>
        <p>Inviting, functional environments that elevate your brand. From offices 
            to boutique spaces, I create atmospheres that support productivity, 
            create impact, and elevate the experience of everyone who walks through your doors.</p>
        </div>
        <div className="service-card">
        <h3>Event Planning</h3>
        <p>From birthdays to holiday gatherings, or milestone moments, 
            I help you bring your celebration to life with style and ease. 
            You share the vision—I bring the creativity, coordination, and atmosphere 
            to craft moments your guests will remember.</p>
        </div>
    </div>
    </section>
  );
};

export default Services;