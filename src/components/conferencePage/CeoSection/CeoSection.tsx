import { StaticContentConferencePageCEOSectionType } from "@/types/typesNew";
import Image from "next/image";
import React from "react";
interface Props {
  staticContent: StaticContentConferencePageCEOSectionType;
}
const CeoSection = ({ staticContent }: Props) => {
  return (
    <div className="flex">
      <div className="w-[100%] p-[8%] border-[1px] border-gray-300 rounded-full mr-10 relative">
        <div className="absolute top-[30.7%] left-[10%]  z-[10]">
          <Image
            src={"/conferenceDots/Pattern.png"}
            className="w-full"
            width={2053}
            height={400}
            alt="dots"
          />
        </div>
        <div className="absolute top-[15.7%] w-[15%] left-[20%]  z-[10]">
          <Image
            src={"/conferencePageImgs/commas.svg"}
            className="w-full"
            width={2053}
            height={400}
            alt="dots"
          />
        </div>
        <Image
          src={"/conferencePageImgs/specialGuest1.png"}
          width={1000}
          height={500}
          alt="ceoImg"
          className="rounded-full"
        />
      </div>
      <div>
        <h2 className="text-5xl mb-2 font-bold text-orange-500">
          {staticContent.ceo}
        </h2>
        <p className="text-sm text-gray-400 mb-10">
          {staticContent.smallParagraph}
        </p>
        <p>{staticContent.bio}</p>
      </div>
    </div>
  );
};

export default CeoSection;
