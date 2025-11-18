import React, { useEffect, useRef } from "react";
import Slider from "react-slick";

import com1 from '../../assets/commercial/Tezza-1617.JPG';
import com2 from '../../assets/commercial/Tezza-4799.JPG';
import com3 from '../../assets/commercial/Tezza-5186.JPG';
import com4 from '../../assets/commercial/Tezza-7779.JPG';
import com5 from '../../assets/commercial/Tezza-7995.JPG';

import ev1 from '../../assets/event/Tezza-0472.JPG';
import ev2 from '../../assets/event/Tezza-0917.JPG';
import ev3 from '../../assets/event/Tezza-1846.JPG';
import ev4 from '../../assets/event/Tezza-1975.JPG';
import ev5 from '../../assets/event/Tezza-6247.JPG';
import ev6 from '../../assets/event/Tezza-3011.JPG';
import ev7 from '../../assets/event/Tezza-4553.JPG';
import ev8 from '../../assets/event/Tezza-7719.JPG';
import ev9 from '../../assets/event/Tezza-8810.JPG';

import res1 from '../../assets/residential/Tezza-9409.jpg';
import res2 from '../../assets/residential/Tezza-0463.JPG';
import res3 from '../../assets/residential/Tezza-0647.JPG';
import res4 from '../../assets/residential/Tezza-0781.JPG';
import res5 from '../../assets/residential/Tezza-1477.JPG';
import res6 from '../../assets/residential/Tezza-1783.JPG';
import res7 from '../../assets/residential/Tezza-4859.JPG';
import res8 from '../../assets/residential/Tezza-5055.JPG';
import res9 from '../../assets/residential/Tezza-5155.JPG';
import res10 from '../../assets/residential/Tezza-5833.JPG';
import res11 from '../../assets/residential/Tezza-6297.JPG';
import res12 from '../../assets/residential/Tezza-6731.JPG';
import res13 from '../../assets/residential/Tezza-8292.JPG';
import res14 from '../../assets/residential/Tezza-8501.JPG';
import res15 from '../../assets/residential/Tezza-8871.JPG';
import res16 from '../../assets/residential/Tezza-8882.JPG';
import res17 from '../../assets/residential/Tezza-9176.JPG';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "./Portfolio.css";

const Portfolio = () => {
    // Refs for each slider
    const resRef = useRef(null);
    const comRef = useRef(null);
    const eventRef = useRef(null);

    // Shared autoplay timer (mobile only)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    if (!mediaQuery.matches) return; // Only sync autoplay on mobile

    const interval = setInterval(() => {
      resRef.current?.slickNext();
      comRef.current?.slickNext();
      eventRef.current?.slickNext();
    }, 3000); // same speed as your autoplaySpeed

    return () => clearInterval(interval);
  }, []);

    const settings = {
        dots: false,        // desktop default
        arrows: true,       // desktop default
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        autoplay: true,    // desktop default
      
        responsive: [
          {
            breakpoint: 768, // under 768px = mobile
            settings: {
              dots: true,
              arrows: false,
              autoplay: true,
            }
          }
        ]
      };

  const categories = [
    { name: "Residential Design", images: [res1, res2, res3, res4, res5, res6, res7, res8, res9, res10, res11, res12, res13, res14, res15, res16, res17] },
    { name: "Commercial Design", images: [com1, com2, com3, com4, com5] },
    { name: "Event Planning", images: [ev1, ev2, ev3, ev4, ev5, ev6, ev7, ev8, ev9] }
  ];

  return (
    <section className="portfolio-section">
      <h2>Portfolio</h2>

      <div className="portfolio-categories">
        {categories.map((cat, index) => (
          <div key={index} className="portfolio-category">
            <h3>{cat.name}</h3>

            <Slider ref={cat.ref} {...settings}>
              {cat.images.map((img, i) => (
                <div key={i} className="portfolio-item">
                  <img src={img} alt={`${cat.name} ${i + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;