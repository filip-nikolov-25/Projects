import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SingleBlog from "../SingleBlog/SingleBlog";
import { AllBlogsData } from "@/types/typesNew";

interface Props {
  similarBlogsData: AllBlogsData;
}

const BlogsSection: React.FC<Props> = ({ similarBlogsData }) => {
  let onlyFourCards = similarBlogsData.allBlogs;
  if (similarBlogsData.allBlogs.length > 4) {
    onlyFourCards = similarBlogsData.allBlogs.slice(0, 4);
  }

  return (
    <div>
      <h2 className="mt-14 mb-14 ml-[5%] text-5xl">
        {similarBlogsData.headingParagraph}
      </h2>
      <div className="flex flex-wrap">
        {onlyFourCards.map((blog: any, index: number) => {
          let aosAnimation = "";
          if (index === 0) {
            aosAnimation = "fade-right";
          } else if (index === 1) {
            aosAnimation = "fade-down"; 
          } else if (index === 2) {
            aosAnimation = "fade-right"; 
          } else if (index === 3) {
            aosAnimation = "fade-up"; 
          }

          return (
            <div
              key={blog.id}
              className="w-1/2 flex justify-center mb-20 items-center"
              data-aos={aosAnimation} 
            >
              <div className="w-full">
                <Link href={`/blogs/${blog.id}`}>
                  <SingleBlog similarBlogType={blog} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsSection;
