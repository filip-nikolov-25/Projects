
import { BlogsPageTipsSection } from "@/types/typesNew";
import Image from "next/image";
import React from "react";

interface Props {
    tipsSectionData:BlogsPageTipsSection
}

const TipsSection = ({tipsSectionData}:Props) => {
  return (
    <div className="flex mt-7">
      <div className="w-[30%] rounded-b-full  h-full">
        <Image
        className="rounded-b-full"
          src="/blogsImgs/TipsImgs/TipsSectionImg.jpg"
          width={1000}
          height={1000}
          alt="TipsSectionImg"
        />
      </div>
      <div className="basis-[70%] pl-5 ">
        <h2 className="text-5xl">{tipsSectionData.be} <span className="text-orange-500 mr-1">{tipsSectionData.active}</span>{tipsSectionData.mainText}</h2>
        <p className="text-l mt-10">{tipsSectionData.secondaryText}</p>
      </div>
    </div>
  );
};

export default TipsSection;
