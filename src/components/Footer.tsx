import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.innerHeight + window.scrollY;
      const bottom = document.documentElement.scrollHeight;
      if (scrollTop >= bottom - 50) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="footer-container">
        <div className={`footer-section footer-section1 ${isBottom ? "jump" : ""}`}>
          <h3>Section 1</h3>
          <p>This is the first section of the footer.</p>
        </div>
        <div className={`footer-section footer-section2 ${isBottom ? "jump" : ""}`}>
          <h3>Section 2</h3>
          <p>This is the second section of the footer.</p>
        </div>
        <div className={`footer-section footer-section3 ${isBottom ? "jump" : ""}`}>
          <h3>Section 3</h3>
          <p>This is the third section of the footer.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
