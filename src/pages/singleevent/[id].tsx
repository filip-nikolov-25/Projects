import AppWrapper from "@/components/base/AppWrapper";
import BlogsSection from "@/components/base/BlogsSection/BlogsSection";
import Carrousel from "@/components/base/Carrousel";
import CurrentOpenedPage from "@/components/base/CurrentOpenedPage";
import AgendSection from "@/components/singleEventPage/AgendSection";
import HeroSection from "@/components/singleEventPage/HeroSection";
import MainSection from "@/components/singleEventPage/MainSection";
import Price from "@/components/singleEventPage/Price";
import Speakers from "@/components/singleEventPage/Speakers";
import {
  AllBlogsData,
  EventCarouselType,
  SingleEventPageHeroSectionType,
  StaticContentSingleEventPage,
} from "@/types/typesNew";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

interface Props {
  allEvents: EventCarouselType[];
  allBlogsDynamicData: AllBlogsData;
  staticContent: StaticContentSingleEventPage;
}
const SingleEventPage = ({
  allEvents,
  allBlogsDynamicData,
  staticContent,
}: Props) => {
  const { id } = useParams();
  const selectedEvent = allEvents.find((event) => event.id === id);
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-[6.8%]   z-[-99]">
        <Image
          src={"/eventListingDots/eventListingHeroDots.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>
      <div className="absolute top-[13.58%]   z-[-99]">
        <Image
          src={"/blogPageDots/blogCarrouseldots.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>
      <div className="absolute top-[30.2%]   z-[-99]">
        <Image
          src={"/eventListingDots/eventListingLeftDots.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>
      <div className="absolute top-[56.2%]   z-[-99]">
        <Image
          src={"/eventListingDots/eventListingLeftDots.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>

      <HeroSection
        event={selectedEvent}
        staticContent={staticContent.heroSection}
      />
      <Carrousel carrouselData={allEvents} />
      {/* <CurrentOpenedPage data={"single event"} /> */}
      <AppWrapper>
        {selectedEvent && (
          <MainSection
            event={selectedEvent}
            staticContent={staticContent.mainSection}
          />
        )}
        {selectedEvent && (
          
          <AgendSection
            event={selectedEvent}
            staticContent={staticContent.bottomSection}
          />
        )}

        <Speakers staticContent={staticContent.bottomSection} />
        <Price staticContent={staticContent.bottomSection} />
        <div className="mt-36">
          <BlogsSection similarBlogsData={allBlogsDynamicData} />
        </div>
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

  const allBlogsDataRes = await fetch("http://localhost:5000/allblogsdata");
  const allBlogsData = await allBlogsDataRes.json();

  const staticContentRes = await fetch("http://localhost:5000/singleeventpage");
  const staticContentData = await staticContentRes.json();

  // Get heroSection data based on locale
  let allEvents;
  let allBlogsDynamicData;
  let staticContent;
  if (locale) {
    allEvents = eventsData[locale] || null;
    allBlogsDynamicData = allBlogsData[locale] || null;
    staticContent = staticContentData[locale].staticContent || null;
  }
  return {
    props: {
      allEvents,
      allBlogsDynamicData,
      staticContent,
    },
  };
};
export default SingleEventPage;
