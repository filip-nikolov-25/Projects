import React, { useState } from "react";
import Image from "next/image";
import { CommentType } from "@/types/typesNew";

interface Props {
  singleCommentData: CommentType;
  disableLikes?: boolean; 
  disableComments?: boolean; 
}

const SingleComment: React.FC<Props> = ({ singleCommentData, disableLikes = false, disableComments = false }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className=" mb-5">
      <div className="flex mb-5">
        <div className=" rounded-b-[500px]">

          <Image
            src={singleCommentData.profilePic}
            className="rounded-b-[500px]"
            width={92}
            height={86}
            alt="ProfilePic"
          />
        </div>
        <h2 className="ml-5 mt-4">{singleCommentData.user}</h2>
      </div>
      <div>
        <p>{singleCommentData.text}</p>
      </div>
      <div className="flex items-center">
        {!disableLikes && (
          <>
            <i
              onClick={() => setIsLiked(!isLiked)}
              className={`${
                isLiked ? "fa-solid text-orange-500" : "fa-regular"
              } fa-heart mr-4 cursor-pointer`}
            ></i>
            <div className="mr-4">
              {singleCommentData.likes &&
                (isLiked ? (
                  <p>{singleCommentData.likes + 1}</p>
                ) : (
                  <p>{singleCommentData.likes}</p>
                ))}
            </div>
          </>
        )}
        {!disableComments && (
          <p>
            <i className="fa-regular fa-comment mr-3"></i>{" "}
            {singleCommentData.comments}
          </p>
        )}
      </div>
    </div>
  );
};

export default SingleComment;
