import React from "react";
import "./Podcast.css";
import HeroSection from "../../components/whyourpage-isblack/HeroSection/HeroSection";
import VideoDesc from "../../components/base/VideoDesc/VideoDesc";
import AppContainer from "../../components/base/AppContainer/AppContainer";
import AppSection from "../../components/base/AppSection/AppSection";
import UnlearningPart from "../../components/base/UnlearningPart/UnlearningPart";
import AppButton from "../../components/base/AppButton/AppButton";
import ConnectLargerWorld from "../../components/landing-page/ConnectLargerWorld/ConnectLargerWorld";
import JoinOurNewsletter from "../../components/landing-page/JoinOurNewsLetter/JoinOurNewsletter";
import DiscussionSection from "../../components/landing-page/DiscussionSection/DiscussionSection";
import { useParams } from "react-router-dom";

const Podcast = () => {
  const { id } = useParams();
  const imageUrls = {
    img1: "../../../public/videoPageImgs/linkedIn.svg",
    img2: "../../../public/videoPageImgs/play.svg",
    img3: "../../../public/videoPageImgs/clock.svg",
  };
  return (
    <div>
      <HeroSection
        heading="mental health in sustainability"
        paragraph="In this podcast episode, Leonie Joubert navigates the balance of maintaining mental health while passionately advocating for the climate crisis and sustainability. This episode looks into the complexities of mental well-being in the realm of environmental advocacy, addressing the highs and lows of the journey. A profound and insightful episode for everyone who pays attention to mental health.
"
      />
      <VideoDesc imgUrl={imageUrls} videoLength={`${id}min`} />
      <AppContainer>
        <AppSection>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img style={{ borderRadius: "20px" }} src="../../../public/videoPageImgs/podcastImg.png" alt="" />
          </div>
        </AppSection>
      </AppContainer>
      <AppContainer>
        <AppSection>
          <p style={{ color: "white" }}>
            In this podcast episode, Leonie Joubert navigates the balance of maintaining mental health while passionately advocating for the climate
            crisis and sustainability. This episode looks into the complexities of mental well-being in the realm of environmental advocacy,
            addressing the highs and lows of the journey. A profound and insightful episode for everyone who pays attention to mental health.
          </p>
          <hr />
        </AppSection>
      </AppContainer>
      <HeroSection
        heading="why listening to this podcast"
        paragraph="“She Rocks meets Leonie Joubert” is showcasing an unique conversation that arises when environmental campaigning and mental resilience are combined. This episode is a call to action and a reminder that the sustainability movement is nourished not only by the careful design of environmental projects but also by the conscientious attention we pay to our personal health."
      />
      <img src="../../../public/videoPageImgs/Podcast-fs.png" alt="" />
      <UnlearningPart
        headerText="unlearning questions"
        mainTextFirst="Reflect on a time when you faced discouragement in your sustainability efforts. How did you navigate the emotional landscape?
"
        mainTextSecond="Are you giving the space to yourself and your team to recover from the highs and lows of your sustainability journey? How do you do that?
"
      />
      <div className="d-flex justify-content-center">
        <AppButton width="20%" height="7vh" borderRadius="30px">
          continue discovering
        </AppButton>
      </div>
      <DiscussionSection />
      <ConnectLargerWorld />
      <JoinOurNewsletter />
    </div>
  );
};
export default Podcast;
