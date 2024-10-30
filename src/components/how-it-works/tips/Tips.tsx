import AppContainer from "../../base/AppContainer/AppContainer";
import AppSection from "../../base/AppSection/AppSection";
import Heading2 from "../../base/Heading2/Heading2";
import PrimaryParagraph from "../../base/PrimaryParagraph/PrimaryParagraph";

const tips = () => {
  return (
    <AppContainer>
      <AppSection>
        <Heading2>tips</Heading2>
        <div className="text-white">
          <PrimaryParagraph>
            as much as we want you to feel comfortable in your way of traveling,
            we are also aware that the journey of unlearning is an uncomfortable
            one that can challenge your ego. here are a few tips for your
            journey in case our content makes you feel uncomfortable
          </PrimaryParagraph>
        </div>
      </AppSection>
    </AppContainer>
  );
};

export default tips;
