import React from "react";
import "./demoCard.css";
import AppSection from "../AppSection/AppSection";

interface Props {
  img: string;
  title: string;
  header: string;
  time: string;
  description: string;
  buttonText: string;  
}

const DemoCard = ({
  img,
  title,
  header,
  time,
  description,
  buttonText,  
}: Props) => {
  return (
      <AppSection>
        <div className="d-flex demoCardContainer flex-wrap ">
          <div className="photoContainer">
            <img src={img} alt="" className="imgElement" />
          </div>
          <div className="textContainer">
            <h3>{title}</h3>
            <b>{header}</b>
            <p>{time}</p>
            <p>{description}</p>
          </div>
          <div className="buttonContainer">
            <button className="custom-demo-button">{buttonText}</button> 
          </div>
        </div>
      </AppSection>
  );
};

export default DemoCard;
