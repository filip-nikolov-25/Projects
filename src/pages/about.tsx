import AboutCeo from "@/components/aboutPage/AboutCeo";
import HeroSection from "@/components/aboutPage/HeroSection";
import MainSection from "@/components/aboutPage/MainSection";
import People from "@/components/aboutPage/People";
import AppWrapper from "@/components/base/AppWrapper";
import Carrousel from "@/components/base/Carrousel";
import CurrentOpenedPage from "@/components/base/CurrentOpenedPage";
import {
  AboutUsPageStaticContent,
  EventCarouselType,
  SignUpPageStaticContentType,
} from "@/types/typesNew";
import { GetServerSideProps } from "next";
import Image from "next/image";
import React from "react";
interface Props {
  allEvents: EventCarouselType[];
  staticContent: AboutUsPageStaticContent;
}

const AboutPage = ({ allEvents, staticContent }: Props) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-[7.8%]   z-[-99]">
        <Image
          src={"/eventListingDots/eventListingHeroDots.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
        <div className="absolute top-[108.2%] z-[-99]">
          <Image
            src={"/homepageDots/carrouselDots.png"}
            className="w-full"
            width={2053}
            height={400}
            alt="dots"
          />
        </div>
        <div className="absolute top-[360.2%] z-[-99]">
          <Image
            src={"/eventListingDots/eventListingLeftDots.png"}
            className="w-full"
            width={2053}
            height={400}
            alt="dots"
          />
        </div>
        <div className="absolute top-[580.2%] left-0 z-[-99]">
          <Image
            src={"/aboutPageImgs/leftDotsAbout.png"}
            className="w-full"
            width={2053}
            height={400}
            alt="dots"
          />
        </div>
        <div className="absolute top-[600.2%] right-0 z-[-99]">
          <Image
            src={"/aboutPageImgs/rightDotsAbout.png"}
            className="w-full"
            width={2053}
            height={400}
            alt="dots"
          />
        </div>
      </div>
      <AppWrapper>
        <HeroSection staticContent={staticContent.heroSection} />
      </AppWrapper>
      <Carrousel carrouselData={allEvents} />
      <AppWrapper>
        <div className="mt-[3%]">

        <CurrentOpenedPage data={staticContent.currentOpenedPage} />
        </div>
        <div className="mt-[8%]">

        <MainSection staticContent={staticContent.mainSection} />
        </div>
        <AboutCeo staticContent={staticContent.aboutCeo} />
        <People />
      </AppWrapper>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const locale = context.locale;

  const eventsDataRes = await fetch("http://localhost:5000/allEvents");
  const eventsData = await eventsDataRes.json();


  const staticContentRes = await fetch("http://localhost:5000/aboutuspage");
  const staticContentData = await staticContentRes.json();

  // Get heroSection data based on locale
  let allEvents;
  let allBlogsDynamicData;
  let staticContent;
  if (locale) {
    allEvents = eventsData[locale] || null;
    staticContent = staticContentData[locale].staticContent;
  }

  return {
    props: {
      allEvents,
      //   allBlogsDynamicData,
      staticContent,
    },
  };
};

export default AboutPage;
