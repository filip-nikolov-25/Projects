import React from "react";
import AppContainer from "../AppContainer/AppContainer";
import AppSection from "../AppSection/AppSection";

interface Props {
  videoUrl: string;
  setVideoLength: (minuter: number) => void;
}
const VideoPlay = ({ videoUrl, setVideoLength }: Props) => {
  const handleLoadedMetadata = (event) => {
    const duration = event.target.duration; // Get the duration of the video
    setVideoLength(duration); // Save the duration in state
  };
  return (
    <AppContainer>
      <video width="full" controls onLoadedMetadata={handleLoadedMetadata}>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </AppContainer>
  );
};

export default VideoPlay;
