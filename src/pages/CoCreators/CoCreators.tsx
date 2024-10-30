import React, { useState, useEffect, useRef } from "react";
import "./CoCreators.css"; // Import CSS for additional styling
import image1 from "../../../public/images/co-creators/background1.png";
import image2 from "../../../public/images/co-creators/background2.png";
import image3 from "../../../public/images/co-creators/background3.png";
import image4 from "../../../public/images/co-creators/background4.png";
import image5 from "../../../public/images/co-creators/background5.png";
import heroTable from "../../../public/images/co-creators/hero-table.svg";
import scrollBtn from "../../../public/images/co-creators/scroll-btn.svg";
import popup1 from "../../../public/images/co-creators/welcome-popup.svg";
import coWorkers1 from "../../../public/images/co-creators/co-workers1.svg";
import coWorkers2 from "../../../public/images/co-creators/co-workers2.svg";
import coWorkers3 from "../../../public/images/co-creators/co-workers3.svg";
import coWorkers4 from "../../../public/images/co-creators/co-workers4.svg";
import coWorkers5 from "../../../public/images/co-creators/co-workers5.svg";
import popup2 from "../../../public/images/co-creators/popup2.svg";
import popup3 from "../../../public/images/co-creators/popup3.svg";
import flower1 from "../../../public/images/co-creators/flower1.svg";
import { Link } from "react-router-dom";

const CoCreators: React.FC = () => {
  const [scrollX, setScrollX] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const maxScrollX = 19300.37;

  const handleMouseWheel = (e: WheelEvent) => {
    setScrollX((prevScrollX) => {
      const newScrollX = prevScrollX - e.deltaY;
      return Math.min(Math.max(0, newScrollX), maxScrollX);
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("wheel", handleMouseWheel);
      return () => {
        container.removeEventListener("wheel", handleMouseWheel);
      };
    }
  }, []);

  return (
    <div className="scroll-container" ref={scrollContainerRef}>
      <Link to={"/"}>
        <img
          src="../../../public/images/co-creators/logo.svg"
          alt=""
          id="logo"
        />
      </Link>
      <div
        className="scroll-content"
        style={{ transform: `translate3d(-${scrollX}px, 0, 0)` }}
      >
        <section className="panel" id="section1">
          <img src={image1} alt="Background" className="background-image" />
          <img src={heroTable} alt="" className="hero-table" />
          <div id="claim">
            <div>
              <h1>co-creators</h1>
              <p>
                the following virtual working environments <br /> host content
                around our narratives, biases
                <br /> and interactions with each other.
                <br />
                please come in!
              </p>
              <div className="scroll-navigate">
                <span>
                  scroll up & down to
                  <br /> navigate through
                  <br /> your journey.
                </span>
                <div className="bounce">
                  <img src={scrollBtn} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div id="coworkers1">
            <img src={coWorkers1} alt="" />
          </div>
          <div id="coworkers2">
            <img src={coWorkers2} alt="" />
          </div>

          <div id="popup1">
            <img src={popup1} alt="" />
          </div>
        </section>
        <section className="panel" id="section2">
          <img src={image2} alt="Background" className="background-image" />
          <div id="coworkers3">
            <img src={coWorkers3} alt="" />
          </div>
          <div id="popup2">
            <img src={popup2} alt="" />
          </div>
          <div id="coworkers4">
            <img src={coWorkers4} alt="" />
          </div>
          <div id="flower1">
            <img src={flower1} alt="" />
          </div>
          <div id="popup3">
            <img src={popup3} alt="" />
          </div>
          <div id="coworkers5">
            <img src={coWorkers5} alt="" />
          </div>
        </section>
        <section className="panel" id="section3">
          <img src={image3} alt="" className="background-image" />
        </section>
        <section className="panel" id="section4">
          <img src={image4} alt="" className="background-image" />
        </section>
        <section className="panel" id="section5">
          <img src={image5} alt="" className="background-image" />
        </section>
      </div>
    </div>
  );
};

export default CoCreators;
