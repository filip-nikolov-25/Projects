import { AboutUsMainSectionType } from "@/types/typesNew";
import Image from "next/image";
import React from "react";

interface Props {
  staticContent: AboutUsMainSectionType;
}
const MainSection = ({ staticContent }: Props) => {
  return (
    <div>
      <div className="flex">
        <div className="w-[30%] h-full mr-10">
          <Image
            src={"/aboutPageImgs/MainSectionLeftImage.png"}
            width={4000}
            height={3000}
            alt="image"
            className="rounded-t-full h-[45vh]"
          />
        </div>
        <div className="mt-10 w-[70%]">
          <h2 className="text-5xl font-bond mb-10">
            {staticContent.headingParagraph}
          </h2>
          <h4 className="text-3xl  mb-10">
            {staticContent.secondaryParagraph}
          </h4>
          <p>{staticContent.firstSectionFirstParagraph}</p>
          <p className="mt-5">{staticContent.firstSectionSecondParagraph}</p>
          <p> {staticContent.firstSectionThirdParagraph}</p>
        </div>
      </div>
      <div className="flex flex-wrap-reverse">
        <div className="mt-10 w-[67%]">
          <h2 className="text-5xl font-bold mb-10">    {staticContent.secondSectionMainParagraph}</h2>

          <p>
          {staticContent.secondSectionFirstParagraph}
          </p>
          <p className="mt-2">
          {staticContent.secondSectionSecondParagraph}
          </p>
          <p className="mt-2">
          {staticContent.secondSectionThirdParagraph}
          </p>
        </div>

        <div className="w-[30%] h-full ml-10">
          <Image
            src={"/aboutPageImgs/MainSectionRightImage.png"}
            width={4000}
            height={3000}
            alt="image"
            className="rounded-t-full h-[45vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
