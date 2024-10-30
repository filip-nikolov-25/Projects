// pages/index.tsx
import { GetServerSideProps } from "next";
import AppWrapper from "@/components/base/AppWrapper";
import {
  AllBlogsData,
  BetweenTwoSimilarBlogsHomePageType,
  BlogArticleStaticContent,
  CurrentOpenedPageType,
  EndSectionType,
  EventCarouselType,
  HomePageEventsSectionType,
  HomePageStaticHeroSectionData,
  HomePageStaticHeroSectionType,
  HomePageStaticUnderHeroSectionType,
} from "@/types/typesNew";
import HomePageHeroSection from "@/components/homepage/HomePageHeroSection/HomePageHeroSection";
import Carrousel from "@/components/base/Carrousel";
import UnderHeroSection from "@/components/homepage/UnderHeroSection/UnderHeroSection";
import EventsSection from "@/components/homepage/EventsSection/EventsSection";
import BlogsSection from "@/components/base/BlogsSection/BlogsSection";
import BetweenTwoSimilarBlogsSection from "@/components/homepage/BetweenTwoSimilarBlogsSection/BetweenTwoSimilarBlogsSection";
import BottomSection from "@/components/homepage/BottomSection/BottomSection";
import CurrentOpenedPage from "@/components/base/CurrentOpenedPage";
import Image from "next/image";

interface Props {
  heroSectionStaticData: HomePageStaticHeroSectionType;
  carrouselData: EventCarouselType[]; 
  underHeroSectionData: HomePageStaticUnderHeroSectionType;
  eventsSectionData: HomePageEventsSectionType;
  allBlogsDynamicData: AllBlogsData;
  endSection: HomePageStaticHeroSectionData;
  currentOpenedPage: CurrentOpenedPageType;
  betweenTwoSimilarBlogs: BetweenTwoSimilarBlogsHomePageType;
}

const HomePage = ({
  heroSectionStaticData,
  carrouselData,
  underHeroSectionData,
  eventsSectionData,
  allBlogsDynamicData,
  endSection,
  currentOpenedPage,
  betweenTwoSimilarBlogs,
}: Props) => {
  return (
    <div className="relative overflow-hidden">
      <AppWrapper>
        {/* @ts-ignore */}
        <HomePageHeroSection heroSectionData={heroSectionStaticData} />
      </AppWrapper>
      <div className="absolute top-[8%]   z-[-99]">
        <Image
          src={"/homepageDots/firstDotsHeroSeection.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>
      <Carrousel carrouselData={carrouselData} />
      <div className="absolute top-[14.2%] z-[-99]">
        <Image
          src={"/homepageDots/carrouselDots.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>
      <div className="absolute top-[30%]   z-[-99]">
        <Image
          src={"/homepageDots/underHeroSectionDots.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>
      <div className="absolute top-[63%]   z-[-99]">
        <Image
          src={"/homepageDots/betweenTwoSImilarBlogDots.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>
      <div className="absolute top-[86.4%] right-0   z-[-99]">
        <Image
          src={"/homepageDots/bottomSectionFirstDots.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>
      <div className="absolute top-[93%]    z-[-99]">
        <Image
          src={"/homepageDots/bottomSectionSecondDots.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>
      <AppWrapper>
        <div className="mt-10">
          <CurrentOpenedPage data={currentOpenedPage} />
        </div>
        <UnderHeroSection underHeroSectionData={underHeroSectionData} />
        <div className="mt-28">
          <EventsSection eventsSectionData={eventsSectionData} />
        </div>
      </AppWrapper>
      <AppWrapper>
        <BlogsSection similarBlogsData={allBlogsDynamicData} />
      </AppWrapper>
      <AppWrapper>
        <div className="pt-16 pb-16">
          <BetweenTwoSimilarBlogsSection
            staticContent={betweenTwoSimilarBlogs}
          />
        </div>
      </AppWrapper>

      <BlogsSection similarBlogsData={allBlogsDynamicData} />
      <AppWrapper>
        <BottomSection {...endSection.endSection} />
      </AppWrapper>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const locale = context.locale;
  const res = await fetch(`http://localhost:5000/homepage`);
  const data = await res.json();

  const eventsDataRes = await fetch("http://localhost:5000/allEvents");
  const eventsData = await eventsDataRes.json();

  const allBlogsDataRes = await fetch("http://localhost:5000/allblogsdata");
  const allBlogsData = await allBlogsDataRes.json();

  // Initialize default values as null to prevent undefined values
  let heroSectionData = null;
  let carrouselData = null;
  let underHeroSectionData = null;
  let eventsSectionData = null;
  let allBlogsDynamicData = null;
  let currentOpenedPage = null;
  let endSection;
  let betweenTwoSimilarBlogs;
  if (locale) {
    heroSectionData = data[locale]?.staticContent?.heroSection || null;
    carrouselData = eventsData[locale] || null;
    underHeroSectionData =
      data[locale]?.staticContent?.underHeroSection || null;
    eventsSectionData = data[locale]?.staticContent.eventsSectionData || null;
    allBlogsDynamicData = allBlogsData[locale] || null;
    endSection = data[locale].staticContent || null;
    currentOpenedPage = data[locale].staticContent.currentOpenedPage;
    betweenTwoSimilarBlogs = data[locale].staticContent.betweenTwoSimilarBlogs;
  }

  return {
    props: {
      heroSectionStaticData: heroSectionData,
      carrouselData,
      underHeroSectionData,
      eventsSectionData,
      allBlogsDynamicData,
      endSection,
      currentOpenedPage,
      betweenTwoSimilarBlogs,
    },
  };
};

export default HomePage;
