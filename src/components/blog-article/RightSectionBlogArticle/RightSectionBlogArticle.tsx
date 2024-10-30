import ContactCard from "@/components/base/ContactCard";
import Image from "next/image";
import React, { useState } from "react";
import SingleComment from "../SingleComment/SingleComment";
import SmallOrangeCardPart from "@/components/base/SmallOrangeCardPart";
import {
  AllBlogsData,
  BlogArticleRightShortDescText,
  
} from "@/types/typesNew";

interface Props {
  dynamicContent: AllBlogsData;
  staticContent: BlogArticleRightShortDescText;
}

const RightSectionBlogArticle = ({ dynamicContent, staticContent }: Props) => {
  const [activeParagraph, setActiveParagraph] = useState<number | null>(1);

  const handleParagraphClick = (index: number) => {
    setActiveParagraph(index === activeParagraph ? null : index);
  };

  return (
    <div className="mt-7 p-5">
      <div className="w-full text-center rounded-b-[500px]">
        <Image
          src={dynamicContent.allBlogs[0].authorImgUrl}
          className="rounded-b-[500px]"
          width={500}
          height={100}
          alt=""
        />
      </div>
      <p className="pt-5 mt-4 font-bold text-2xl">
        {dynamicContent.allBlogs[0].author}
        <i className="fa-brands fa-linkedin ml-3 text-blue-700"></i>
      </p>
      <div>
        <SmallOrangeCardPart text={staticContent.shareText} />
        <div className="mt-9">
          <p
            onClick={() => handleParagraphClick(1)}
            className={`pb-5 text-xl font-bold m-0 pt-5 pl-3 ${
              activeParagraph === 1 ? "border-l-4 border-orange-500" : ""
            }`}
          >
            {staticContent.shortDescription}
          </p>
          <p
            onClick={() => handleParagraphClick(2)}
            className={`pb-5 m-0 pt-5 pl-3  ${
              activeParagraph === 2 ? "border-l-4 border-orange-500" : ""
            }`}
          >
            {dynamicContent.allBlogs[0].blogTextCardsData && dynamicContent.allBlogs[0].blogTextCardsData[0].leadingText}
          </p>
          <p
            onClick={() => handleParagraphClick(3)}
            className={`pb-5 m-0 pt-5 pl-3 ${
              activeParagraph === 3 ? "border-l-4 border-orange-500" : ""
            }`}
          >
                    {dynamicContent.allBlogs[0].blogTextCardsData && dynamicContent.allBlogs[0].blogTextCardsData[1].leadingText}
          </p>
          <p
            onClick={() => handleParagraphClick(4)}
            className={`pb-5 m-0 pt-5 pl-3 ${
              activeParagraph === 4 ? "border-l-4 border-orange-500" : ""
            }`}
          >
                        {dynamicContent.allBlogs[0].blogTextCardsData && dynamicContent.allBlogs[0].blogTextCardsData[2].leadingText}
          </p>
          <p
            onClick={() => handleParagraphClick(5)}
            className={`pb-5 m-0 pt-5 pl-3 ${
              activeParagraph === 5 ? "border-l-4 border-orange-500" : ""
            }`}
          >
                   {dynamicContent.allBlogs[0].blogTextCardsData && dynamicContent.allBlogs[0].blogTextCardsData[3].leadingText}
          </p>
          <p
            onClick={() => handleParagraphClick(6)}
            className={`pb-5 m-0 pt-5 pl-3 ${
              activeParagraph === 6 ? "border-l-4 border-orange-500" : ""
            }`}
          >
                       {dynamicContent.allBlogs[0].blogTextCardsData && dynamicContent.allBlogs[0].blogTextCardsData[4].leadingText}
          </p>
          <p
            onClick={() => handleParagraphClick(7)}
            className={`pb-5 m-0 pt-5 pl-3 ${
              activeParagraph === 7 ? "border-l-4 border-orange-500" : ""
            }`}
          >
            {dynamicContent.allBlogs[0].blogTextCardsData && dynamicContent.allBlogs[0].blogTextCardsData[5].leadingText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightSectionBlogArticle;
