import React from "react";
import AppContainer from "../AppContainer/AppContainer";
import AppButton from "../AppButton/AppButton";

interface Props {
  imgUrl: { img1: string; img2: string; img3: string };
  videoLength: string;
}

const VideoDesc = ({ imgUrl, videoLength }: Props) => {
  return (
    <AppContainer>
        <div className="d-flex justify-content-between align-items-center p-5">
          <div>
            <img src={imgUrl.img1} className="w-75" alt="LinkedIn" />
          </div>
          <div>
            <img src={imgUrl.img2} alt="Play" className="w-75" />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <img src={imgUrl.img3} alt="Clock" className="w-75" />
            <h2 className="text-white videoLenght">{videoLength} min</h2>
          </div>
        </div>

    </AppContainer>
  );
};

export default VideoDesc;
