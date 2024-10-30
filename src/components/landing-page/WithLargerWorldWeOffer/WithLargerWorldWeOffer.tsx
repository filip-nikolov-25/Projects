import AppContainer from "../../base/AppContainer/AppContainer";
import AppSection from "../../base/AppSection/AppSection";
import Heading2 from "../../base/Heading2/Heading2";
import LeadParagraph from "../../base/LeadParagraph/LeadParagraph";
import SecondaryParagraph from "../../base/SecondaryParagraph/SecondaryParagraph";
import CombinedImage from "../../../../public/images/landing-page/with-larger-world-we-offer/combined-img.svg";

const columns: { title: string; description: string }[] = [
  {
    title: "unlearning",
    description:
      "instead of focusing on new skills, we support companies to tackle sustainability and DEI through a unique, unlearning process taking your team through 5 worlds.",
  },
  {
    title: "greenest content hub",
    description:
      "highly-curated content in one place, with user-friendly interface, videos, context description and other creative format, hosted in the most green possible way online.",
  },
  {
    title: "practical tips",
    description:
      "The best way to fight the existing reality is to build new examples of the world we believe in. Those new examples are already out there, but they rarely make it to the overpopulated media space.",
  },
  {
    title: "community",
    description:
      "Build a community of DEI and sustainability professionals that is connected, vibrant and has access to the most engaging tools, videos and materials on the market.",
  },
];

const WithLargerWorldWeOffer = () => {
  return (
    <AppContainer>
      <AppSection>
        <Heading2>with larger.world we offer</Heading2>
        <img src={CombinedImage} alt="" />
        <div className="row">
          {columns.map((column, id) => (
            <div className="col-12 col-md-6 col-lg-3" key={id}>
              <div className="app-text-primary">
                <LeadParagraph>{column.title}</LeadParagraph>
              </div>
              <SecondaryParagraph>{column.description}</SecondaryParagraph>
            </div>
          ))}
        </div>
      </AppSection>
    </AppContainer>
  );
};

export default WithLargerWorldWeOffer;
