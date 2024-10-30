import React, { useEffect, useState } from "react";
import Link from "next/link";
import AppWrapper from "@/components/base/AppWrapper";
import Carrousel from "@/components/base/Carrousel";
import SingleSimilarBlog from "@/components/base/SingleBlog/SingleBlog";
import SearchByCategory from "@/components/blogsPage/SearchBlogs.tsx/SearchByCategory";
import TipsSection from "@/components/blogsPage/TipsSection/TipsSection";
import {
  AllBlogsData,
  AllBlogsType,
  BlogsPageStaticContent,
  EventCarouselType,
} from "@/types/typesNew";
import { GetServerSideProps } from "next";
import BlogsHeroSection from "@/components/blogsPage/BlogsHeroSection/BlogsHeroSection";
import Image from "next/image";
import CarrouselCard from "@/components/base/CarrouselCard";
import SingleBlog from "@/components/base/SingleBlog/SingleBlog";

interface Props {
  staticContent: BlogsPageStaticContent;
  allBLogsDynamicContent: AllBlogsData;
  allEvents: EventCarouselType[];
}

const BlogsPage = ({
  staticContent,
  allBLogsDynamicContent,
  allEvents,
}: Props) => {
  const [filterBlogs, setFilterBlogs] = useState<AllBlogsData>(
    allBLogsDynamicContent
  );
  const [categoryTerm, setCategoryTerm] = useState("all");
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [latestBlogs, setLatestBlogs] = useState<AllBlogsType[]>([]);

  useEffect(() => {
    const parseDate = (dateStr: string) => {
      const [day, month, year] = dateStr.split(".");
      return new Date(`${year}-${month}-${day}`);
    };

    let sortedBlogs = [...allBLogsDynamicContent.allBlogs];

    // Sort all blogs by date to get the latest two blogs
    const sortedByDateBlogs = [...sortedBlogs].sort(
      (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
    );

    setLatestBlogs(sortedByDateBlogs.slice(0, 2));

    let filteredBlogs = sortedBlogs.slice(2);

    if (categoryTerm !== "all") {
      filteredBlogs = filteredBlogs.filter((blog) => {
        if (categoryTerm === "training") return blog.training;
        if (categoryTerm === "culture") return blog.cultureinthecompany;
        return true;
      });
    }

    if (searchTerm) {
      filteredBlogs = filteredBlogs.filter((blog) =>
        blog.blogName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilterBlogs({
      ...allBLogsDynamicContent,
      allBlogs: filteredBlogs,
    });
  }, [categoryTerm, searchTerm, allBLogsDynamicContent]);

  const firstGroup = filterBlogs.allBlogs.slice(0, 4);
  const secondGroup = filterBlogs.allBlogs.slice(4, 8);
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-[10.5%]   z-[-99]">
        <Image
          src={"/homepageDots/firstDotsHeroSeection.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>
      <div className="absolute top-[18.6%]   z-[-99]">
        <Image
          src={"/blogPageDots/blogCarrouseldots.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>

      {filterBlogs.allBlogs.length > 4 && (
        <div className="absolute top-[55.4%]   z-[-99]">
          <Image
            src={"/blogPageDots/underNewestBlogsDots.png"}
            className="w-full"
            width={2053}
            height={400}
            alt="dots"
          />
        </div>
      )}

      <div>
        <AppWrapper>
          <BlogsHeroSection
            dinamicAllBlogs={allBLogsDynamicContent}
            heroSectionData={staticContent.heroSection}
          />
        </AppWrapper>
        <div className="mt-[15rem]">
          <Carrousel carrouselData={allEvents} />
        </div>
        <AppWrapper>
          <div className="mt-36">
            <TipsSection tipsSectionData={staticContent.tipsSection} />
          </div>

          {/* Search by Category Section */}
          <div className="p-5">
            <SearchByCategory
              setCategoryTerm={setCategoryTerm}
              categoryTerm={categoryTerm}
            />
          </div>

          {/* Search input for blog name */}
          <div className="flex justify-between pt-10 pb-14">
            <h2 className="text-5xl">
              {staticContent.recommendedBigCard.headingParagraph}
            </h2>
            <input
              type="text"
              placeholder="Search"
              className="w-1/4 rounded-full pl-10 outline-1 bg-gray-100 outline-orange-500"
              value={searchTerm} // Bind input to searchTerm state
              onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on input change
            />
          </div>

          <div className="flex">
            <div className="w-[70%] h-[100vh] mb-[15%] relative">
              <div className="">
                <div className="absolute h-full w-[100%] left-[-19%] top-[-12.6%] transform scale-75">
                  {latestBlogs[0] && (
                    <Link href={`/blogs/${latestBlogs[0].id}`}>
                      <SingleBlog
                        similarBlogType={latestBlogs[0]}
                        isInSpecialSection={true}
                      />{" "}
                    </Link>
                  )}
                </div>
                <div className="absolute right-0 z-20 top-0">
                  <CarrouselCard {...allEvents[3]} />
                </div>
              </div>
              <div className="w-full">
                <div className="w-[65%]">
                  <div className="absolute left-0 z-20 top-[50%]">
                    <CarrouselCard {...allEvents[1]} />
                  </div>
                  <div className="absolute h-full w-full left-[15%] top-[37.8%] transform scale-75">
                    {latestBlogs[1] && (
                      <Link href={`/blogs/${latestBlogs[1].id}`}>
                        <SingleBlog
                          similarBlogType={latestBlogs[1]}
                          isInSpecialSection={true}
                        />{" "}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[30%]">
              <div className="h-full w-full">
                <div className="carousel-child w-[100%] relative">
                  <div className="h-[90vh] w-[500%] relative">
                    <Image
                      className="h-[94vh] w-[200%]  carrouselImg"
                      src={`/blogsImgs/blogsFirstImg.png`}
                      alt="FIRST IMAGE"
                      width={300}
                      height={246}
                    />
                    <h2 className="absolute top-[15%] left-[20%]  text-[2.5rem] text-white">
                      {staticContent.recommendedBigCard.name}
                    </h2>
                    <div className="absolute top-[25%] text-white left-[20%] text-2xl">
                      <p className="mb-5 flex items-center">
                        <Image
                          src="/navBarImgs/logo.svg"
                          className="mr-2"
                          width={35}
                          height={35}
                          alt=""
                        />
                        {staticContent.recommendedBigCard.first}
                      </p>
                      <p className="mb-5 flex items-center">
                        <Image
                          src="/navBarImgs/logo.svg"
                          className="mr-2"
                          width={35}
                          height={35}
                          alt=""
                        />
                        {staticContent.recommendedBigCard.second}
                      </p>
                      <p className="mb-5 flex items-center">
                        <Image
                          src="/navBarImgs/logo.svg"
                          className="mr-2"
                          width={35}
                          height={35}
                          alt=""
                        />
                        {staticContent.recommendedBigCard.third}
                      </p>
                      <p className="mb-5 flex items-center">
                        <Image
                          src="/navBarImgs/logo.svg"
                          className="mr-2"
                          width={35}
                          height={35}
                          alt=""
                        />
                        {staticContent.recommendedBigCard.fourth}
                      </p>
                      <p className="mb-5 flex items-center">
                        <Image
                          src="/navBarImgs/logo.svg"
                          className="mr-2"
                          width={35}
                          height={35}
                          alt=""
                        />
                        {staticContent.recommendedBigCard.fifth}
                      </p>
                      <p className="mb-5 flex items-center">
                        <Image
                          src="/navBarImgs/logo.svg"
                          className="mr-2"
                          width={35}
                          height={35}
                          alt=""
                        />
                        {staticContent.recommendedBigCard.sixth}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blogs Section */}
          <div className="w-full mt-[6%]">
            <h2 className="text-5xl mb-5 ml-5">Тема: Култура во компанијата</h2>
            <div className="grid grid-cols-1 mb-[20%] md:grid-cols-2 gap-4 mt-6">
              {firstGroup.length > 0 ? (
                firstGroup.map((blog, index) => (
                  <div key={index} className="w-full">
                    <Link href={`/blogs/${blog.id}`}>
                      <SingleSimilarBlog similarBlogType={blog} />
                    </Link>
                  </div>
                ))
              ) : (
                <p>No blogs found.</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {secondGroup.length > 0 ? (
                secondGroup.map((blog, index) => (
                  <div key={index} className="w-full">
                    <Link href={`/blogs/${blog.id}`}>
                      <SingleSimilarBlog similarBlogType={blog} />
                    </Link>
                  </div>
                ))
              ) : (
                <p className="text-red-500">No more blogs found.</p>
              )}
            </div>
          </div>

          {/* Conditionally render the dots based on the number of filtered blogs */}
          {filterBlogs.allBlogs.length > 4 && (
            <div className="absolute top-[78%] z-[-99]">
              <Image
                src={"/blogPageDots/underNewestBlogsDots.png"}
                className="w-full"
                width={2053}
                height={400}
                alt="dots"
              />
            </div>
          )}
        </AppWrapper>
      </div>
    </div>
  );
};

// Server-side logic to fetch data
export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const locale = context.locale;
  const res = await fetch(`http://localhost:5000/blogspage`);
  const data = await res.json();

  const blogRes = await fetch("http://localhost:5000/allblogsdata");
  const allBlogs = await blogRes.json();

  const eventsDataRes = await fetch("http://localhost:5000/allEvents");
  const eventsData = await eventsDataRes.json();

  let staticContent;
  let allEvents;
  let allBLogsDynamicContent;
  if (locale) {
    staticContent = data[locale]?.staticContent || null;
    allEvents = eventsData[locale] || null;
    allBLogsDynamicContent = allBlogs[locale] || null;
  }

  return {
    props: {
      staticContent,
      allBLogsDynamicContent,
      allEvents,
    },
  };
};

export default BlogsPage;
