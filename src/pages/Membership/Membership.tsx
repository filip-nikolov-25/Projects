import React from "react";
import "./Membership.css";
import DifferentWaysToExplore from "../../components/landing-page/DifferentWaysToExplore/DifferentWaysToExplore";
import HeroSection from "../../components/whyourpage-isblack/HeroSection/HeroSection";
import AppSection from "../../components/base/AppSection/AppSection";
import AppContainer from "../../components/base/AppContainer/AppContainer";
import ConnectLargerWorld from "../../components/landing-page/ConnectLargerWorld/ConnectLargerWorld";
import JoinOurNewsletter from "../../components/landing-page/JoinOurNewsLetter/JoinOurNewsletter";

const Membership = () => {
  return (
    <div>
      <HeroSection
        heading="membership"
        paragraph="
"
      />
      <AppContainer>
        <AppSection>
          <p className="already-a-member">
            Already a member?{" "}
            <span>
              <i className="fa-regular fa-user"></i>
              sign in here
            </span>
          </p>
        </AppSection>
      </AppContainer>
      <DifferentWaysToExplore />
      <ConnectLargerWorld />
      <JoinOurNewsletter />
    </div>
  );
};

export default Membership;
