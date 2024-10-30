import AppWrapper from "@/components/base/AppWrapper";
import BlogsSection from "@/components/base/BlogsSection/BlogsSection";
import Carrousel from "@/components/base/Carrousel";
import CurrentOpenedPage from "@/components/base/CurrentOpenedPage";
import AgentsSection from "@/components/conferencePage/AgendsSection/AgentsSection";
import CeoSection from "@/components/conferencePage/CeoSection/CeoSection";
import HeroSection from "@/components/conferencePage/HeroSection/HeroSection";
import MainEvent from "@/components/conferencePage/MainEvent/MainEvent";
import PriceSection from "@/components/conferencePage/PriceSection/PriceSection";
import SpecialGuests from "@/components/conferencePage/SpecialGuests/SpecialGuests";
import {
  AllBlogsData,
  EventCarouselType,
  StaticContentConferencePageType,
} from "@/types/typesNew";
import { GetServerSideProps } from "next";
import Image from "next/image";
import React from "react";
interface Props {
  allEvents: EventCarouselType[];
  allBlogsDynamicData: AllBlogsData;
  staticContent: StaticContentConferencePageType;
}
const ConfenercePage = ({
  allEvents,
  allBlogsDynamicData,
  staticContent,
}: Props) => {
  const annualConferenceEvent = allEvents.find((event) => event.id === "2");
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-[3.8%]   z-[-99]">
        <Image
          src={"/conferenceDots/conferenceHeroDots.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>
      <div className="absolute top-[13.7%] right-0   z-[-99]">
        <Image
          src={"/conferenceDots/underHeroRightDots.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>
      <div className="absolute top-[15.7%] right-[43%]  z-[10]">
        <Image
          src={"/conferenceDots/Pattern.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>
      <div className="absolute top-[23.2%]  z-[-99]">
        <Image
          src={"/conferenceDots/aboveSpecialGuestDots.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>
      <div className="absolute top-[39%]  z-[-99]">
        <Image
          src={"/conferenceDots/aboveSpecialGuestDots.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>
      <HeroSection
        event={annualConferenceEvent}
        staticContent={staticContent.heroSection}
      />
      <Carrousel carrouselData={allEvents} />
      <AppWrapper>
        <div className="pt-20 pb-20">
        <CurrentOpenedPage data={staticContent.currentOpenedPage} />

        </div>
        <MainEvent
          event={annualConferenceEvent}
          staticContent={staticContent.mainSection}
        />
        <SpecialGuests staticContent={staticContent.specialGuests} />
        <div className="mt-[20%]">

        <AgentsSection
          event={annualConferenceEvent}
          staticContent={staticContent.agendSection}
        />
        </div>
        <CeoSection staticContent={staticContent.ceoSection} />
        <PriceSection staticContent={staticContent.priceSection} />
        <div className="flex pb-20 pt-20 justify-center">
          <iframe
            className="rounded-3xl "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.068377525211!2d21.449998876463933!3d41.99880805784735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415986f9f2cd7%3A0x61669f4d3a9aa58c!2sHotel%20Continental!5e0!3m2!1sen!2smk!4v1727006158411!5m2!1sen!2smk"
            width="1200"
            height="650"
            loading="lazy"
          ></iframe>
        </div>
        <div className="mb-10">
          <BlogsSection similarBlogsData={allBlogsDynamicData} />
        </div>
        <div className="mt-10">
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

  const staticContentRes = await fetch("http://localhost:5000/conferencepage");
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

export default ConfenercePage;
