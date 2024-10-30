import { EventCarouselType, SingleEventPageMainType } from "@/types/typesNew";
import Image from "next/image";
import React from "react";

interface Props {
  event: EventCarouselType;
  staticContent: SingleEventPageMainType;
}

const MainSection = ({ event, staticContent }: Props) => {
  return (
    <div className="p-5">
      <h2 className="text-3xl mb-10 font-bold">{event.blogName}</h2>
      <h3 className="text-5xl mb-20">{event.theme}</h3>

      <div className="flex justify-between">
        <div className="w-[40%] mb-20 flex justify-center flex-col">
          <h2 className="mt-10 font-bold text-3xl mb-5">{staticContent.description}</h2>
          <p>{event.description}</p>
          <h2 className="mt-10 font-bold text-3xl mb-5">{staticContent.purpose}</h2>
          <p>{event.mission}</p>
        </div>
        <div className="w-[40%]">
          <div className="relative">
            <div className="">
              <Image
                src={"/singleEventPageImgs/singleEventPageMainImage.png"}
                width={500}
                height={500}
                className="rounded-t-full rounded-b-full "
                alt="image"
              />
            </div>
            <div className="flex bg-white mt-16 absolute bottom-32 right-[8%]  w-[40%] p-3 pr-6  rounded-full ">
              <div className="w-[30%] mr-5 bg-orange-500 rounded-full p-5 flex items-center justify-center">
                <Image
                  src="/homepageImgs/endSection/attachIcon.svg"
                  alt="asd"
                  height={200}
                  width={200}
                />
              </div>
              <div className="flex justify-center  flex-col">
                <p className="m-0 mb-1 text-xl font-bold">{staticContent.buycard}</p>
                <p className="m-0 text-[14px] text-gray-400">{staticContent.mail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
