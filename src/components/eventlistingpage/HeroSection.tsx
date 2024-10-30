import Image from "next/image";
import React from "react";
import ContactCard from "../base/ContactCard";
import AppButton from "../base/AppButton";
import { EventListingHeroSectionType } from "@/types/typesNew";
interface Props{
  staticContent:EventListingHeroSectionType
}

const HeroSection = ({staticContent}:Props) => {
  return (
    <div className="h-[100vh] relative">
      {" "}
      <div className="flex justify-between relative">
        <div className="h-[40vh]">
          <div className="w-full h-[150%] rounded-b-full">
            <Image
              src="/eventsImgs/eventListingLeft.png"
              width={550}
              height={700}
              alt="blogImage1"
              className="rounded-b-full h-[150%]"
            />
          </div>
        </div>
        <div>
          <div className="w-full">
            <Image
              src="/eventsImgs/eventListingRight.png"
              width={800}
              height={500}
              alt="blogImage2"
              className="rounded-b-full"
            />
          </div>
        </div>
      </div>
      <div className="absolute rounded-lg bg-white top-[20%] pb-32 right-1/3 p-9 w-[50%]">
        <p className="mb-5">{staticContent.eventName}</p>
        <h2 className="mb-5 mt-5 text-[3.5rem] font-bold break-words">
          {staticContent.event}
        </h2>
        <h2 className="text-xl font-semibold absolute top-[59%]  left-9 z-10 ">
          <span>
          {staticContent.eventText}
          </span>
     
        </h2>
      </div>
      <div className="bottom-[9%] left-[70%] w-[40%] absolute">
        <ContactCard contact={staticContent.contactUsText} />
      </div>
      <div className="absolute  top-[50.3%] right-[35%]">
        {/* <Link href={`/blogs/${dinamicAllBlogs.allBlogs[0].id}`}> */}
        <AppButton
          backgroundColor="#E87B22"
          color="white"
          padding="15px 40px"
          borderRadius="40px"
          fontSize="20px"
        >
         {staticContent.buttonText}
        </AppButton>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default HeroSection;
