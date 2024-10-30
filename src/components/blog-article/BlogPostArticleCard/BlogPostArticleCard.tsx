import { BlogPostArticleCardsType } from "@/types/typesNew";
import React from "react";
interface Props {
  blogText: BlogPostArticleCardsType | null;
}
const BlogPostArticleCard = ({ blogText }: Props) => {
  return (
    <div>
      <h2 className="text-5xl mb-10">{blogText?.leadingText}</h2>
      <p>{blogText?.secondaryText}</p>
      <p className="mb-10">
        <span>
          {blogText?.advice?.adviceWord}: {blogText?.advice?.adviceText}
        </span>
      </p>
    </div>
  );
};

export default BlogPostArticleCard;
