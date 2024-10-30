import HowItWorksHero from "../../components/how-it-works/how-it-works-hero/HowItWorksHero";
import HowCreateWorlds from "../../components/how-it-works/how-create-worlds/HowCreateWorlds";
import HowToTravelOurWorlds from "../../components/how-it-works/how-to-travel-our-worlds/HowToTravelOurWorlds";
import OurWorldsOpenTheirDoors from "../../components/landing-page/OurWorldsOpenTheirDoors/OurWorldsOpenTheirDoors";
import ConnectLargerWorld from "../../components/landing-page/ConnectLargerWorld/ConnectLargerWorld";
import JoinOurNewsletter from "../../components/landing-page/JoinOurNewsLetter/JoinOurNewsletter";
import Tips from "../../components/how-it-works/tips/Tips";

const HowItWork = () => {
  return (
    <>
      <HowItWorksHero />
      <HowCreateWorlds />
      <HowToTravelOurWorlds />
      <OurWorldsOpenTheirDoors heading="our worlds open their doors" showButton={false} />
      <Tips />
      <ConnectLargerWorld />
      <JoinOurNewsletter />
    </>
  );
};

export default HowItWork;
