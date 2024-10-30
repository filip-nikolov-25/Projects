import { SignUpPageBenefitsSectionType } from "@/types/typesNew";
import Image from "next/image";
import React from "react";

interface Props {
  staticContent: SignUpPageBenefitsSectionType;
}
const BenefitsSection = ({ staticContent }: Props) => {
  return (
    <div className="flex mt-20">
      <div className="w-1/2">
        <div className="">
          <Image
            src={"/signUpImgs/firstImgBenefits.png"}
            className="rounded-t-full"
            width={785}
            height={400}
            alt="firstImg"
          />
        </div>
        <div>
          <h2 className="mt-10 mb-10 text-5xl w-3/4">
            {staticContent.leftSectionHeadingParagraph}
          </h2>
          <ul className="list-disc">
            <li> {staticContent.leftSectionFirstListParagraph}</li>
            <li> {staticContent.leftSectionSecondListParagraph}</li>
            <li> {staticContent.leftSectionThirdListParagraph}</li>
            <li> {staticContent.leftSectionFourthListParagraph}</li>
          </ul>
        </div>
      </div>
      <div className="w-1/2">
        <div className="mb-10 ml-20">
          <h2 className="mt-10 mb-10 text-5xl w-3/4">
            {staticContent.rightSectionHeadingParagraph}
          </h2>
          <ul className="list-disc ">
            <li>   {staticContent.rightSectionFirstListParagraph}</li>
            <li>   {staticContent.rightSectionSecondListParagraph}</li>
            <li>   {staticContent.rightSectionThirdListParagraph}</li>
            <li>   {staticContent.rightSectionFourthListParagraph}</li>
            <li>   {staticContent.rightSectionFifthListParagraph}</li>
          </ul>
        </div>
        <div className="mt-32">
          <Image
            src={"/signUpImgs/secondImgBenefits.png"}
            className="rounded-b-full "
            width={880}
            height={400}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
