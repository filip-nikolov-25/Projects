import CommentsSection from "@/components/blog-article/CommentsSection/CommentsSection";
import SingleComment from "@/components/blog-article/SingleComment/SingleComment";
import { currentUserType, UserDashBoardPageHeroSectionType } from "@/types/typesNew";
import Image from "next/image";
import React from "react";
interface Props {
  currentUser: currentUserType;
  staticContent:UserDashBoardPageHeroSectionType
}

const InfoSection = ({ currentUser,staticContent }: Props) => {
  return (
    <div className="p-10">
      <h2 className="mb-10 font-bold text-2xl">{staticContent.shortBio}</h2>
      <p>{currentUser.bio}</p>
      <h2 className="mt-20 font-bold mb-10 text-2xl">{staticContent.recommended}</h2>
      <div>
        {currentUser.comments.map((comment,index) => (
          <SingleComment
          key={index}
            singleCommentData={comment}
            disableLikes={true} 
            disableComments={true} 
          />
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
