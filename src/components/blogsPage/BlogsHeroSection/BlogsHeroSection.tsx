import AppButton from "@/components/base/AppButton";
import ContactCard from "@/components/base/ContactCard";
import SmallOrangeCardPart from "@/components/base/SmallOrangeCardPart";
import { AllBlogsData, BlogArticleHeroSectionType } from "@/types/typesNew";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  heroSectionData: BlogArticleHeroSectionType;
  dinamicAllBlogs:AllBlogsData
}

const BlogsHeroSection = ({ heroSectionData,dinamicAllBlogs }: Props) => {
  return (
    <div className="relative ">
      <div className="flex justify-between relative">
        <div className="h-[40vh]">
          <div className="w-full h-[150%] rounded-b-full">
            <Image
              src="/blogsImgs/blogsFirstImg.png"
              width={550}
              height={700}
              alt="blogImage1"
              className="rounded-b-full h-[150%]"
            />
          </div>
        </div>
        <div>
          <div className="w-full">
            <Image
              src="/blogsImgs/blogsImg2.png"
              width={800}
              height={500}
              alt="blogImage2"
              className="rounded-b-full"
            />
          </div>
        </div>
      </div>
      <div className="absolute shadow-lg rounded-lg bg-white top-1/2 right-1/3 p-9 w-[50%]">
        <p className="mb-5">{heroSectionData.blog}</p>
        <h2 className="mb-5 mt-5 text-[3.5rem] font-bold break-words">
          {dinamicAllBlogs.allBlogs[0].blogName}
        </h2>
        <h2 className="text-xl font-semibold absolute top-[83%]  left-9 z-10 ">
          <span>{heroSectionData.from}</span>
          <span className="text-orange-400 ml-2 mr-2">
          {dinamicAllBlogs.allBlogs[0].author}
          </span>{" "}
          <span>{dinamicAllBlogs.allBlogs[0].date}</span>
        </h2>
      </div>
      <div className="top-[115.5%] left-[70.5%] w-[35%] absolute">
        <ContactCard contact={heroSectionData.contact} />
      </div>
      <div className="absolute  top-[89.8%] right-[35%]">
        <Link href={`/blogs/${dinamicAllBlogs.allBlogs[0].id}`}>
        <AppButton backgroundColor="#E87B22" color="white" padding="15px 40px" borderRadius="40px" fontSize="20px" >
        {dinamicAllBlogs.allBlogs[0].learnMore}
        </AppButton>
        </Link>
      </div>
    </div>
  );
};

export default BlogsHeroSection;
