import AppWrapper from "@/components/base/AppWrapper";
import React from "react";
import BlogPostArticleCard from "../BlogPostArticleCard/BlogPostArticleCard";
import { AllBlogsData } from "@/types/typesNew";

interface Props {
  blogTextData:AllBlogsData | null
}

const BlogPostArticleCards = ({ blogTextData }: Props) => {
  return (
    <div className="">
      {blogTextData?.allBlogs[0].blogTextCardsData?.map((blogTextCards) => {
        return <BlogPostArticleCard key={blogTextCards.id} blogText={blogTextCards} />;
      })}
    </div>
  );
};

export default BlogPostArticleCards;
