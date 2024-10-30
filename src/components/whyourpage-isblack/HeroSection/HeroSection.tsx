import React from "react";
import AppContainer from "../../base/AppContainer/AppContainer";
import AppSection from "../../base/AppSection/AppSection";
import Heading2 from "../../base/Heading2/Heading2";
import SecondaryParagraph from "../../base/SecondaryParagraph/SecondaryParagraph";
import "../HeroSection/herosection.css";

interface HeroSectionProps {
  heading: string;
  paragraph: string | any[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ heading, paragraph }) => {
  return (
    <div>
      <AppContainer>
        <AppSection>
          <Heading2>{heading}</Heading2>
          <div className="orange-border-bottom"></div>
          <div className="mt-5">
            <SecondaryParagraph>{paragraph}</SecondaryParagraph>
          </div>
        </AppSection>
      </AppContainer>
    </div>
  );
};

export default HeroSection;
