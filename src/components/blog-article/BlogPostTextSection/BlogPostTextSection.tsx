import { AllBlogsData } from "@/types/typesNew";
import React from "react";

interface Props {
  blogsDynamicData: AllBlogsData | null;
}
const BlogPostTextSection = ({ blogsDynamicData }: Props) => {
  return (
    <div className="mb-20">
      <h2 className="text-5xl mb-8 font-bold ">
        {blogsDynamicData?.allBlogs[0].blogName}
      </h2>
      <p>{blogsDynamicData?.allBlogs[0].smallText}</p>
    </div>
  );
};

export default BlogPostTextSection;
