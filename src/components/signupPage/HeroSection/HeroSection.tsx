import AppButton from "@/components/base/AppButton";
import ContactCard from "@/components/base/ContactCard";
import { SignUpPageHeroSectionType } from "@/types/typesNew";
import Image from "next/image";
import React from "react";

interface Props {
  staticContent:SignUpPageHeroSectionType
}

const HeroSection = ({staticContent}:Props) => {
  return (
    <div className="relative">
      <div className="flex justify-between relative h-[100vh]">
        <div className="h-[40vh] ">
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
      <div className="absolute rounded-lg bg-white top-[25%] shadow-2xl right-[32%] p-10 w-[50%]">
        <h2 className="mb-2 mt-2 text-[3.5rem] font-bold break-words">
          {staticContent.mainParagparh}
        </h2>
      </div>
      <div className="absolute rounded-l-full rounded-r-full shadow-gray-400 shadow-xl drop-shadow-2xl  bg-white top-[41%] right-[45%] p-5 w-[35%]">
        <h2 className="text-xl z-10">
          {staticContent.secondaryParagraph}
        </h2>
      </div>
      <div className="top-[89.5%] left-[70%] w-[30%] absolute">
        <ContactCard contact={staticContent.contactUsText} />
      </div>

      <div className="absolute w-full top-[45.5%] left-[50%]">
        <AppButton
          backgroundColor="#E87B22"
          color="white"
          padding="15px 40px"
          borderRadius="40px"
          fontSize="20px"
          width="13%"
        >
            {staticContent.buttonText}
        </AppButton>
      </div>
    </div>
  );
};

export default HeroSection;
