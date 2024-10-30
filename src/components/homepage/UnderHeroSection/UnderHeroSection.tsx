import AppButton from "@/components/base/AppButton";
import { HomePageStaticUnderHeroSectionType } from "@/types/typesNew";

import Image from "next/image";
import React from "react";

interface Props {
  underHeroSectionData: HomePageStaticUnderHeroSectionType;
}

const UnderHeroSection = ({ underHeroSectionData }: Props) => {
  return (
    <div className="relative mt-12 h-[100vh]">
      <Image
        src={"/homepageImgs/underHeroSection/firstImg.png"}
        height={1000}
        width={400}
        alt="asd"
        className="rounded-t-full absolute top-0 left-0"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      />
      <Image
        src={"/homepageImgs/underHeroSection/secondImageHero.png"}
        width={500}
        height={1000}
        alt="asd"
        className="rounded-b-full absolute top-[51.5%] left-[23.35%]"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      />
      <Image
        src={"/homepageImgs/underHeroSection/thirdImageHero.png"}
        width={400}
        height={1000}
        alt="asd"
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="rounded-t-full absolute right-0 top-[25%]"
      />
      <div
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="absolute w-[45%]  left-[30%] top-20"
      >
        <h2 className="text-6xl mb-10 ">{underHeroSectionData.mainText}</h2>
        <p className="w-2/3">{underHeroSectionData.smallText}</p>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="w-[43%] p-8 absolute top-[44%] shadow-2xl flex justify-end left-[6%] rounded-xl bg-white"
      >
        <div className="">
          <AppButton
            width="100%"
            padding="20px 40px"
            backgroundColor="#E87B22"
            color="white"
            fontSize="18px"
            borderRadius="30px"
          >
            {underHeroSectionData.buttonText}
          </AppButton>
        </div>
        <h2 className="absolute text-2xl left-16 top-[38%] ">
          {underHeroSectionData.buttonContainerText}
        </h2>
      </div>
    </div>
  );
};

export default UnderHeroSection;
