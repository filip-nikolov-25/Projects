import React from "react";
import SecondaryParagraph from "../SecondaryParagraph/SecondaryParagraph";
import "./unlearning.css";
import AppContainer from "../AppContainer/AppContainer";

interface Props {
  headerText: string;
  mainTextFirst: string;
  mainTextSecond: string;
}

const UnlearningPart = ({
  headerText,
  mainTextFirst,
  mainTextSecond,
}: Props) => {
  return (
    <AppContainer>
      <div className="unlearningPartContainer p-5">
        <div className="headerTextContainer d-flex align-items-center mb-3">
          <div className="lightBulb">
            <img
              src="../../../../public/videoPageImgs/videoLightBulb.svg"
              className="w-100"
              alt=""
            />
          </div>
          <h3 className="text-white">{headerText}</h3>
        </div>
        <div className="mainTextcontainer">
          <ul className="text-white">
            <li>{mainTextFirst}</li>
            <li>{mainTextSecond}</li>
          </ul>
        </div>
      </div>
    </AppContainer>
  );
};

export default UnlearningPart;
