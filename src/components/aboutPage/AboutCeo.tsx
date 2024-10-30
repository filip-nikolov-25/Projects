import { AboutUsCeoSectionType } from "@/types/typesNew";
import Image from "next/image";
import React from "react";
interface Props {
  staticContent: AboutUsCeoSectionType;
}

const AboutCeo = ({ staticContent }: Props) => {
  return (
    <div className="flex mt-[15%] mb-[14%] ">
      <div className="w-[23%] mr-10 ">
        <div className="w-full ">
          <Image
            src={"/aboutPageImgs/ceoProfilePic.png"}
            width={370}
            height={370}
            alt="imageCeo"
            className="rounded-b-full"
          />
        </div>
      </div>
      <div className="w-[70%] p-10">
        <h2 className="text-5xl">{staticContent.mainParagraph}</h2>
        <p className="text-orange-500 text-l mt-5 mb-10 font-bold">
          {staticContent.smallParagraph}
        </p>
        <p className="mb-5">{staticContent.firstParagraph}</p>

        <p className="mb-5">{staticContent.secondParagraph}</p>
        <p className="mb-5">{staticContent.thirdParagraph}</p>

        <p>{staticContent.fourthParagraph}</p>
      </div>
    </div>
  );
};

export default AboutCeo;
