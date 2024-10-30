import AppWrapper from "@/components/base/AppWrapper";
import BlogsSection from "@/components/base/BlogsSection/BlogsSection";
import Carrousel from "@/components/base/Carrousel";
import CurrentOpenedPage from "@/components/base/CurrentOpenedPage";
import EnterCommentArea from "@/components/base/EnterCommentArea";
import BlogArticleStats from "@/components/blog-article/BlogArticleStats/BlogArticleStats";
import BlogPostArticleCards from "@/components/blog-article/BlogPostArticleCards/BlogPostArticleCards";
import BlogPostTextSection from "@/components/blog-article/BlogPostTextSection/BlogPostTextSection";
import CommentsSection from "@/components/blog-article/CommentsSection/CommentsSection";
import HeroSection from "@/components/blog-article/HeroSection/HeroSection";
import RightSectionBlogArticle from "@/components/blog-article/RightSectionBlogArticle/RightSectionBlogArticle";
import {
  AllBlogsData,
  AllCommentsType,
  BlogArticleStaticContent,
  CurrentLoggedInUserType,
  EventCarouselType,
} from "@/types/typesNew";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import React, {  useState } from "react";

interface Props {
  staticContent: BlogArticleStaticContent;
  allBlogsDynamicContent: AllBlogsData;
  eventCarousel: EventCarouselType[];
  currentLoggedInUserData: CurrentLoggedInUserType;
}

const Blog: NextPage<Props> = ({
  allBlogsDynamicContent: allBLogsDynamicContent,
  staticContent,
  eventCarousel,
  currentLoggedInUserData,
}) => {
  const [newComment, setNewComment] = useState<AllCommentsType>({
    likes: 12,
    comments: 2,
    profilePic: "/userProfilePic.png",
    text: "",
    user: "Валентина Стојанова",
  });

  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-[9.6%]   z-[-99]">
        <Image
          src={"/blogPageDots/blogCarrouseldots.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>
      <div className="absolute top-[17%]   z-[-99]">
        <Image
          src={"/blogPageDots/blogCarrouseldots.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>
      <div className="absolute top-[45.6%] right-14  z-[-99]">
        <Image
          src={"/blogArticleDots/BlogArticleunderCardDots.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>
      <div className="absolute top-[73.6%]   z-[-99]">
        <Image
          src={"/blogArticleDots/blogArticleSimilarBlogsDots.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>

      <div className="h-[80vh] mb-5">
        <HeroSection
          heroSectionData={staticContent.heroSection}
          dynamicData={allBLogsDynamicContent}
        />
      </div>
      <div className="  "></div>
      <div className="mt-[6rem]">
        <Carrousel carrouselData={eventCarousel} />
      </div>
      <div></div>
      <AppWrapper>
        <div className=" flex ">
          <div className="basis-[70%]">
            <div className="mb-[3rem] ml-1 mt-[4rem]">
              <CurrentOpenedPage data={staticContent.currentOpenedPage} />
            </div>
            <div className="mb-7">
              <BlogPostTextSection blogsDynamicData={allBLogsDynamicContent} />
            </div>
            <div>
              <BlogPostArticleCards blogTextData={allBLogsDynamicContent} />
            </div>
            <div className="mb-[15%]">
              <BlogArticleStats
                blogArticleStats={allBLogsDynamicContent.allBlogs[0]}
                currentLoggedInUser={currentLoggedInUserData}
                newComment={newComment}
                setNewComment={setNewComment}
              />
            </div>
            <CommentsSection
              commentSection={allBLogsDynamicContent}
              newComment={newComment}
            />
          </div>
          <div className="basis-[30%] mt-[4rem]">
            <RightSectionBlogArticle
              dynamicContent={allBLogsDynamicContent}
              staticContent={staticContent.rightShortDescText}
            />
          </div>
        </div>
      </AppWrapper>
      <div className="mt-[12%]">
        <BlogsSection similarBlogsData={allBLogsDynamicContent} />
      </div>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const locale = context.locale;
  const res = await fetch(`http://localhost:5000/blogarticle`);
  const data = await res.json();

  const eventsDataRes = await fetch("http://localhost:5000/allEvents");
  const eventsData = await eventsDataRes.json();

  const allBlogsDataRes = await fetch("http://localhost:5000/allblogsdata");
  const allBlogsData = await allBlogsDataRes.json();

  const currentLoggedInUserRes = await fetch(
    "http://localhost:5000/currentLoggedInUser"
  );
  const currentLoggedInUserData = await currentLoggedInUserRes.json();

  // Get heroSection data based on locale
  let staticContent;
  let allBLogsDynamicContent;

  let eventCarousel;
  if (locale) {
    staticContent = data[locale].staticContent || null;
    allBLogsDynamicContent = allBlogsData[locale] || null;
    eventCarousel = eventsData[locale] || null;
  }

  return {
    props: {
      allBlogsDynamicContent: allBLogsDynamicContent,
      staticContent,
      eventCarousel,
      currentLoggedInUserData,
    },
  };
};
export default Blog;
