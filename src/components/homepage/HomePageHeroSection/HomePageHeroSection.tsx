import Image from "next/image";
import React from "react";

import ContactCard from "@/components/base/ContactCard";
import AppButton from "@/components/base/AppButton";
import { HomePageHeroSectionType } from "@/types/typesNew";

interface Props {
  heroSectionData: HomePageHeroSectionType;
}

const HomePageHeroSection = ({ heroSectionData }: Props) => {
  return (
    <div className="relative">
      <div
        data-aos="fade-down"
        className="flex justify-between relative h-[100vh]"
      >
        {/* First Image Container */}
        <div className="h-[40vh] ">
          {" "}
          <div className="w-full h-[150%] rounded-b-full">
            <Image
              src="/homepageImgs/heroSection/firstImgHomepage.png"
              width={620}
              height={500}
              alt="blogImage1"
              className="rounded-b-full h-[150%]"
              objectFit="cover"
            />
          </div>
        </div>
        {/* Second Image */}
        <div>
          <div className="w-full">
            <Image
              src="/homepageImgs/heroSection/secondImgHomepage.png"
              width={900}
              height={500}
              alt="blogImage2"
              className="rounded-b-full"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      {/* Hero Text */}
      <div
        data-aos="fade-down"
        className="absolute rounded-lg bg-white top-[25%] right-[32%] p-10 w-[50%]"
      >
        <h2 className="mb-2 mt-2 text-[3.5rem] font-bold break-words">
          {heroSectionData.mainParagparh}
        </h2>
        <h2 className="text-xl z-10">{heroSectionData.secondaryParagraph}</h2>
      </div>
      {/* Contact Card */}
      <div
        data-aos="fade-down"
        className="top-[89.5%] left-[65%] w-[40%] absolute"
      >
        <ContactCard contact={heroSectionData.contactUsText} />
      </div>
      {/* Button */}
      <div
        data-aos="fade-down"
        className="bg-white p-9 w-[25%] shadow-xl absolute top-1/2 left-[48%] rounded-full"
      >
        <h2 className="font-bold">{heroSectionData.buttonContainerText}</h2>
      </div>
      <div data-aos="fade-down" className="absolute top-[52%] left-[60%]">
        <AppButton
          backgroundColor="#E87B22"
          color="white"
          padding="15px 40px"
          borderRadius="40px"
          fontSize="20px"
        >
          {heroSectionData.buttonText}
        </AppButton>
      </div>
    </div>
  );
};

export default HomePageHeroSection;
