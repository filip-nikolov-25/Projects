// components/blog-article/HeroSection/HeroSection.tsx
import ContactCard from "@/components/base/ContactCard";
import { AllBlogsData, BlogArticleHeroSectionType } from "@/types/typesNew";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  heroSectionData: BlogArticleHeroSectionType
  dynamicData:AllBlogsData
}

const HeroSection = ({ heroSectionData,dynamicData }: Props) => {
  if (!heroSectionData) {
    return <div>No data available</div>;
  } 

  return (
    <div className="relative w-full h-full z-10">
      <Image
        className="absolute heroSectionImg w-[98%] h-full left-1/2 transform -translate-x-1/2"
        src="/blogArticleImgs/blog-heroSectionImg.png"
        alt="HeroImage"
        width={1366}
        height={911}
      />

      <h3 className="text-2xl font-bold  absolute top-[35%] left-24 z-10 text-white">
        {heroSectionData.blog}
      </h3>
      <h1 className="text-6xl font-extrabold top-[45%] left-24 absolute text-white  w-[50%]">
        {dynamicData.allBlogs[0].blogName}
      </h1>
      <h2 className="text-xl font-semibold absolute top-[67%]  left-24 z-10 text-white">
        <span >{heroSectionData.from}</span>
        <span className="text-orange-400 ml-2 mr-2">{dynamicData.allBlogs[0].author}</span>{" "}
        <span></span>
      </h2>
      <div className="top-[98.5%] left-[70%] w-[30%] absolute">
        <ContactCard contact={heroSectionData.contact} />
      </div>
    </div>
  );
};

export default HeroSection;
