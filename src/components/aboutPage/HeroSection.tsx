import Image from "next/image";
import React from "react";
import ContactCard from "../base/ContactCard";
import AppButton from "../base/AppButton";
import { AboutUsHeroSectionType } from "@/types/typesNew";
import { buildDayTableModel } from "@fullcalendar/daygrid/internal.js";

interface Props {
  staticContent:AboutUsHeroSectionType
}

const HeroSection = ({staticContent}:Props) => {
  return (
    <div className="relative">
      <div className="flex justify-between relative h-[75vh]">
        {/* First Image Container */}
        <div className="h-[40vh] ">
          {" "}
          {/* Added ml-auto to push the image to the right */}
          <div className="w-full  rounded-b-full">
            <Image
              src="/aboutPageImgs/aboutPageHeroImgRight.png"
              width={512}
              height={700}
              alt="blogImage1"
              className="rounded-b-full "
              objectFit="cover"
            />
          </div>
        </div>
        {/* Second Image */}
        <div>
          <div className="w-full">
            <Image
              src="/aboutPageImgs/aboutPageHeroImgLeft.png"
              width={780}
              height={500}
              alt="blogImage2"
              className="rounded-b-full"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      {/* Hero Text */}
      <div className="absolute rounded-lg bg-white top-[22%] shadow-xl right-[32%] p-10 w-[50%]">
        <h2 className="mb-2 mt-2 text-[3.5rem] font-bold break-words">
        {staticContent.headingParagraph}
        </h2>
        <h2 className="text-xl z-10">{staticContent.secondaryParagraph}</h2>
      </div>
      {/* Contact Card */}
      <div className="top-[80.5%] left-[70%] w-[40%] absolute">
        <ContactCard contact={staticContent.contactUsText}/>
      </div>
      {/* Button */}
      <div className={` shadow-2xl bg-white p-9  ${staticContent.buttonText.length <= 9 ? "w-[23%] ":"w-[26%] "}  absolute top-[55%] left-[40%] rounded-full`}>
        <h2 className="font-bold">{staticContent.buttonContainerText}</h2>
      </div>
      <div className="absolute top-[57.5%] left-[51%]">
        <AppButton
          backgroundColor="#E87B22"
          color="white"
          padding="15px 40px"
          borderRadius="40px"
          fontSize="20px"
        >
       {staticContent.buttonText}
        </AppButton>
      </div>
    </div>
  );
};

export default HeroSection;
