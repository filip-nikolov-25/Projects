import ConnectLargerWorld from "../../components/landing-page/ConnectLargerWorld/ConnectLargerWorld";
import DifferentWaysToExplore from "../../components/landing-page/DifferentWaysToExplore/DifferentWaysToExplore";
import DiscussionSection from "../../components/landing-page/DiscussionSection/DiscussionSection";
import HeroSection from "../../components/landing-page/HeroSection/HeroSection";
import JoinOurNewsletter from "../../components/landing-page/JoinOurNewsLetter/JoinOurNewsletter";
import OurWorldsOpenTheirDoors from "../../components/landing-page/OurWorldsOpenTheirDoors/OurWorldsOpenTheirDoors";
import UnlearningWorkshop from "../../components/landing-page/UnlearningWorkshop/UnlearningWorkshop";
import WithLargerWorldWeOffer from "../../components/landing-page/WithLargerWorldWeOffer/WithLargerWorldWeOffer";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <OurWorldsOpenTheirDoors
        heading={"today is a beautiful day!"}
        buttonText="wonder why our page is black"
      />
      <WithLargerWorldWeOffer />
      <UnlearningWorkshop />
      <DiscussionSection />
      <DifferentWaysToExplore />
      <ConnectLargerWorld />
      <JoinOurNewsletter />
    </div>
  );
};

export default LandingPage;
