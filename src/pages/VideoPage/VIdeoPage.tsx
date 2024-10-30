import React, { useState } from "react";
import "./videopage.css";
import HeroSection from "../../components/whyourpage-isblack/HeroSection/HeroSection";
import VideoPlay from "../../components/base/Video/VideoPlay";
import VideoDesc from "../../components/base/VideoDesc/VideoDesc";
import UnlearningPart from "../../components/base/UnlearningPart/UnlearningPart";
import AppContainer from "../../components/base/AppContainer/AppContainer";
import AppSection from "../../components/base/AppSection/AppSection";
import AppButton from "../../components/base/AppButton/AppButton";
import DiscussionSection from "../../components/landing-page/DiscussionSection/DiscussionSection";
import ConnectLargerWorld from "../../components/landing-page/ConnectLargerWorld/ConnectLargerWorld";
import JoinOurNewsletter from "../../components/landing-page/JoinOurNewsLetter/JoinOurNewsletter";

const VideoPage = () => {
  const [videoLength, setVideoLength] = useState(0);

  const video = {
    description: "The first Blender Open Movie from 2006",
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    subtitle: "By Blender Foundation",
    thumb: "images/ElephantsDream.jpg",
    title: "Elephant Dream",
  };

  const imageUrls = {
    img1: "../../../public/videoPageImgs/linkedIn.svg",
    img2: "../../../public/videoPageImgs/play.svg",
    img3: "../../../public/videoPageImgs/clock.svg",
  };

  const videoLengthInMinutes = (videoLength / 60).toFixed(2);

  return (
    <div>
      <AppContainer>
        <AppSection>
          <HeroSection
            heading="Intersectionalism by Rita Isiba"
            paragraph={
              "I often hear 'but we can't accommodate everyone’s differences!' says Rita Isiba in this video, explaining the different facets of diversity and inclusion."
            }
          />
          <VideoDesc imgUrl={imageUrls} videoLength={videoLengthInMinutes} />
          <VideoPlay videoUrl={video.sources} setVideoLength={setVideoLength} />
          <UnlearningPart
            headerText="unlearning questions"
            mainTextFirst="In which way does your company help you bring your best self to live?
"
            mainTextSecond="How do you contribute to creating an environment where people feel safe?"
          />
          <div className="d-flex justify-content-center">
          <AppButton width="50%" height="6vh"  borderRadius="30px" borderColor="#FA6400">
            continue discovering
        </AppButton>
          </div>
          <DiscussionSection />
          <ConnectLargerWorld />
         <JoinOurNewsletter />
        </AppSection>
      </AppContainer>
    </div>
  );
};

export default VideoPage;
