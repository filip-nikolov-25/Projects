import EnterCommentArea from "@/components/base/EnterCommentArea";
import SmallOrangeCardPart from "@/components/base/SmallOrangeCardPart";
import {
  AllBlogsType,
  AllCommentsType,
  BlogStatsType,
  CurrentLoggedInUserType,
} from "@/types/typesNew";
import Image from "next/image";
import React, { useState } from "react";
interface Props {
  blogArticleStats: AllBlogsType | null;
  currentLoggedInUser?: CurrentLoggedInUserType;
  setNewComment: (newComment: AllCommentsType) => void;
  newComment: AllCommentsType;
}

const BlogArticleStats = ({
  currentLoggedInUser,
  newComment,
  setNewComment,
  blogArticleStats,
}: Props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isCommented, setIsCommented] = useState(false);
  const [isFavourite, setIsFavorite] = useState(false);
  return (
    <div>
      <div>
        <div className="text-3xl flex">
          <div className="flex items-center mr-10">
            <i
              onClick={() => setIsLiked(!isLiked)}
              className={`${
                isLiked ? "fa-solid text-orange-500" : "fa-regular"
              }  fa-thumbs-up`}
            ></i>
            {blogArticleStats?.blogStats.likes && (
              <p className="ml-3 mr-3">
                {isLiked
                  ? blogArticleStats?.blogStats.likes + 1
                  : blogArticleStats?.blogStats.likes}
              </p>
            )}
          </div>
          <div className="flex items-center mr-10">
            <i
              onClick={() => setIsFavorite(!isFavourite)}
              className={`${
                isFavourite ? "fa-solid text-orange-500" : "fa-regular"
              }  fa-heart`}
            ></i>

            {blogArticleStats?.blogStats.favorites && (
              <p className="ml-3 mr-3">
                {isFavourite
                  ? blogArticleStats?.blogStats.favorites + 1
                  : blogArticleStats?.blogStats.favorites}
              </p>
            )}
          </div>
          <div className="flex items-center mr-10">
            <i className="fa-regular fa-comment"></i>
            <p className="ml-3 mr-3">{blogArticleStats?.blogStats.comments}</p>
          </div>
        </div>
      </div>
      <SmallOrangeCardPart text={blogArticleStats?.blogStats.shareSection} />
      <div className="mt-10">
        {currentLoggedInUser && (
          <EnterCommentArea
            newComment={newComment}
            setNewComment={setNewComment}
            commentButtonText={blogArticleStats?.blogStats.commentButton}
            currentLoggedInUser={currentLoggedInUser}
          />
        )}
      </div>
    </div>
  );
};

export default BlogArticleStats;
