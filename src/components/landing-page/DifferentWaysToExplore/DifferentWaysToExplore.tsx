import React from "react";
import "./DifferentWaysToExplore.css";
import AppContainer from "../../base/AppContainer/AppContainer";
import AppSection from "../../base/AppSection/AppSection";
import Heading2 from "../../base/Heading2/Heading2";
import SingleExploreCard from "./SingleExploreCard";
import { Link } from "react-router-dom";

const DifferentWaysToExplore = () => {
  return (
    <AppContainer>
      <AppSection>
        <Heading2>different ways to explore our worlds</Heading2>
        <p className="explore-under-header">take your time to estimate what membership works best for you at this point</p>
        <div className="offer-cards-container">
          <SingleExploreCard
            radiusBottomLeft={"1000px"}
            radiusBottomRight={"0%"}
            mostPopular={false}
            free={false}
            team={true}
            title={"team explorer"}
            price={500}
          >
            <div className="explore-description-container">
              <div className="explore-description fw-bold">everything in solo explorer,plus</div>
              <div className="explore-description">
                50+ users company package, with special perks (consulting hours, customized training and facilitation services)
              </div>
            </div>
          </SingleExploreCard>
          <SingleExploreCard
            radiusBottomLeft={"0%"}
            radiusBottomRight={"0%"}
            mostPopular={true}
            free={false}
            team={false}
            title={"solo explorer"}
            price={10}
          >
            <div className="explore-description-container">
              <div className="explore-description fw-bold">everything in basic explorer, plus</div>
              <div className="explore-description">video content</div>
              <div className="explore-description">forum/community</div>
              <div className="explore-description">specialized tools</div>
            </div>
          </SingleExploreCard>
          <SingleExploreCard
            radiusBottomLeft={"0%"}
            radiusBottomRight={"1000px"}
            mostPopular={false}
            free={true}
            team={false}
            title={"basic explorer"}
            price={0}
          >
            <div className="explore-description-container">
                <div className="explore-description fw-bold">access to free content</div>
                <div className="explore-description">access to newsletter</div>
                <div className="explore-description">live events</div>
            </div>
          </SingleExploreCard>
        </div>
      </AppSection>
    </AppContainer>
  );
};

export default DifferentWaysToExplore;
