import Image from "next/image";
import React from "react";
import ContactCard from "../base/ContactCard";
import {
  EventCarouselType,
  SingleEventPageHeroSectionType,
} from "@/types/typesNew";

interface Props {
  event: EventCarouselType | undefined;
  staticContent: SingleEventPageHeroSectionType;
}

const HeroSection = ({ event, staticContent }: Props) => {

  return (
    <div className="relative">
      <div className="relative w-full h-[86vh] z-10">
        <Image
          className="absolute heroSectionImg w-[98%] h-full left-1/2 transform -translate-x-1/2"
          src="/singleEventPageImgs/singleEventHeroImg.png"
          alt="HeroImage"
          width={1800}
          height={750}
        />
        <h3 className="text-2xl font-bold absolute top-[27%] left-36 z-20 text-white">
          {staticContent.blog}
        </h3>
        <h1 className="text-6xl font-extrabold top-[35%] left-36 absolute text-white w-[50%] z-20">
          {event?.blogName}
        </h1>
        <h2 className="text-xl font-semibold absolute top-[47%] left-36 z-20 text-white">
          <span>{event?.date}</span>
        </h2>

        <div className="absolute bottom-[5.5%] left-[70%] w-[30%] z-20">
          <ContactCard contact={staticContent.contact} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
