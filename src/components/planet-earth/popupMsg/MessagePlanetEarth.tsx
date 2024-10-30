import React from "react";
import "../components/MessagePlanetEarth.css";

interface Props {
  header: string;
  section1: string;
  section2: string;
}

const MessagePlanetEarth = ({ header, section1, section2 }: Props) => {
  return (
    <div className="full-message-container">
      <div className="emptyContainerPlanet">
        <div className="leftConnector"></div>
        <div className="rightConnector"></div>
      </div>
      <div className="text-container bg-message-planet w-25">
        <h4>{header} HEADER SOME TET EXAMPLE</h4>
        <p>
          {section1} Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Error, modi.
        </p>
        <p>
          {section2} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Facere eum dolores, id exercitationem laborum explicabo!
        </p>
      </div>
    </div>
  );
};

export default MessagePlanetEarth;
