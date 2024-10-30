import React from "react";
import HeroSection from "../whyourpage-isblack/HeroSection/HeroSection";
import SecondaryParagraph from "../base/SecondaryParagraph/SecondaryParagraph";
import "./Contact.css";
import AppContainer from "../base/AppContainer/AppContainer";
import InputSectionContact from "./inputSectionContact";
import JoinOurNewsletter from "../landing-page/JoinOurNewsLetter/JoinOurNewsletter";

const Contact = () => {
  return (
    <div>
      <AppContainer disablePadding={true}>
        <HeroSection heading="contact larger.world" paragraph={""} />
        <div className="text-container">
          <h3 className="text-white mb-5">
            no matter if you have a question, a suggestion, a concern or simply
            wanna chat we would love to hear from you!
          </h3>
          <h3 className="text-white">join our community on Linkedin</h3>
          {/* <SecondaryParagraph>
            
          </SecondaryParagraph> */}
        </div>
        <InputSectionContact />
        <JoinOurNewsletter />
      </AppContainer>
    </div>
  );
};

export default Contact;
