import React from "react";
import { Link, Navigate } from "react-router-dom";
export interface videoType {
  img: string;
  title: string;
  desc: string;
}
type Props = {
  array: videoType[];
  id: number;
  onClick: () => void;
};

const VideoPopUp = ({ array, id, onClick }: Props) => {
  const videoToShow = array[id];
  if (!videoToShow) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="video-pop-up-a">
      <img src={videoToShow.img} alt="" />

      <i className="fa-solid fa-xmark" onClick={onClick}></i>
      <h2>{videoToShow.title}</h2>
      <p>{videoToShow.desc}</p>
      <Link to={`/videos/${id}`}>
        <button>watch here</button>
      </Link>
    </div>
  );
};

export default VideoPopUp;
