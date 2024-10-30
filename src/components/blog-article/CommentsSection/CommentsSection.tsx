import React, { useState } from "react";

import SingleComment from "../SingleComment/SingleComment";
import { AllBlogsData, CommentType } from "@/types/typesNew";

interface Props {
  commentSection: AllBlogsData;
  newComment: CommentType;
}

const CommentsSection: React.FC<Props> = ({ commentSection, newComment }) => {
  return (
    <div className="mt-10">
      <h2 className="text-5xl mb-10">
        {commentSection.allBlogs[0].commentSection?.commentsParagraphs}
      </h2>
      {commentSection.allBlogs[0].commentSection?.allComments.map(
        (comment, index) => (
          // <SingleComment key={index} singleCommentData={comment} />
          <SingleComment
            key={index}
            singleCommentData={comment}
            disableLikes={false} // Disable likes
            disableComments={false} // Enable comments
          />
        )
      )}
      {newComment.text && <SingleComment singleCommentData={newComment} />}
    </div>
  );
};

export default CommentsSection;
