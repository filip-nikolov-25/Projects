import React from "react";
import "./usercard.css";

interface Props {
  userImg: string; // Assuming this is a URL to the user image
  description: string;
  position?: string;
  padding?: string;
}

const UserCard = ({ userImg, description, position, padding }: Props) => {
  return (
    <div className="d-flex custom-border text-light height-100-custom" style={{ marginLeft: padding || "initial" }}>
      <div className="me-3">
        <img src={userImg} alt="User" className="userImg " />
      </div>
      <div className="textContainer">
        {description}
        {position && <p className="positionOfTeamMember">{position}</p>}
      </div>
    </div>
  );
};

export default UserCard;
