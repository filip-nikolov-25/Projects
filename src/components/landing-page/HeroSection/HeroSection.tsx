import AppButton from "../../base/AppButton/AppButton";
import AppContainer from "../../base/AppContainer/AppContainer";
import AppSection from "../../base/AppSection/AppSection";
import Heading1 from "../../base/Heading1/Heading1";
import SecondaryParagraph from "../../base/SecondaryParagraph/SecondaryParagraph";
import TreeAnimation from "../TreeAnimation/TreeAnimation";

const HeroSection = () => {
  return (
    <AppContainer>
      <AppSection>
        <div className="row">
          <div className="col-12 col-md-6">
            <Heading1>unlearning is the evolution</Heading1>
            <SecondaryParagraph>
              we enable professionals to utilize new business solutions for a
              regenerative and inclusive world. larger.world is an unlearning
              platform & community, focused on sustainability, diversity and
              inclusion.
            </SecondaryParagraph>
            <AppButton height="75px" width="416px" borderRadius="60px">
              start free
            </AppButton>
          </div>
          <div className="col-12 col-md-6 d-flex">
            <div className="d-fle justify-content-center align-items-center">
              <TreeAnimation />
            </div>
          </div>
        </div>
      </AppSection>
    </AppContainer>
  );
};

export default HeroSection;
