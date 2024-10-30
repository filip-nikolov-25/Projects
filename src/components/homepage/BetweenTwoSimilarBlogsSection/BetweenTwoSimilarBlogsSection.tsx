import { BetweenTwoSimilarBlogsHomePageType } from "@/types/typesNew";
import Image from "next/image";
import React from "react";

interface Props {
  staticContent: BetweenTwoSimilarBlogsHomePageType;
}

const BetweenTwoSimilarBlogsSection = ({ staticContent }: Props) => {
  return (
    <div data-aos="fade-up" className="flex">
      <div className="w-[50%] h-[80vh] relative">
        <div className="absolute left-10 top-1/4">
          <h2 className="text-5xl font-bold mb-12">
            {staticContent.mainParagraph}
          </h2>
          <p className="text-xl">{staticContent.secondaryParagraph}</p>
        </div>
        <div className="flex items-center absolute left-10 top-[65%]">
          <div className="">
            <Image
              src="/homepageImgs/betweenTwoSimilarBlogsSectionImgs/profilePicLeft.png"
              className="rounded-full"
              width={70}
              height={70}
              alt="Profile Picture"
            />
          </div>
          <div className="flex flex-col ml-5">
            <h4>m-r Darko Petrovski</h4>
            <p>{staticContent.president}</p>
          </div>
        </div>
      </div>
      <div className="w-[50%] relative">
        <div className="absolute rounded-full border-[1px] border-gray-500 p-16 top-12 right-[50%] z-10">
          <Image
            src="/currentProfilePicUser.png"
            width={200}
            height={200}
            alt="asd"
            className="z-10 rounded-full"
          />
        </div>
        <div className="flex shadow-2xl bg-white mt-16 absolute bottom-[-13%] z-10 right-[-3%]  w-[40%] p-3 pr-6  rounded-full ">
          <div className="w-[30%] mr-5 bg-orange-500  rounded-full p-5 flex items-center justify-center">
            <Image
              src="/homepageImgs/endSection/attachIcon.svg"
              alt="asd"
              height={200}
              width={200}
            />
          </div>
          <div className="flex justify-center  flex-col">
            <p className="m-0 mb-1 text-xl font-bold">Text </p>
            <p className="m-0 text-[14px] text-gray-400">Email </p>
          </div>
        </div>
        <Image
          src="/homepageImgs/betweenTwoSimilarBlogsSectionImgs/betweenTwoSimilarBlogsImg.png"
          className="rounded-t-full absolute top-0 right-[8%] rounded-b-full"
          alt="Between Two Similar Blogs"
          height={550}
          width={550}
        />
      </div>
    </div>
  );
};

export default BetweenTwoSimilarBlogsSection;
