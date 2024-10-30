import { EventCarouselType } from "@/types/typesNew";
import Image from "next/image";
import React from "react";

const RecommendedCardBlogs = ({
  blogName,
  day,
  id,
  mainParagparh,
  month,
  img,

}: EventCarouselType) => {
  return (
    <div className=" carousel-child w-[100%]  ">
      <div className="h-[20vh] w-[20rem] relative">
        <Image
          className="h-[43vh] w-full  carrouselImg "
          src={img}
          alt="FIRST IMAGE "
          width={300}
          height={246}
        />
        <div className="text-white absolute top-[15%] left-[50%] p-2  -translate-x-1/2 text-center ">
          <p className="text-xl font-bold">{blogName}</p>
          <p className="text-ml mt-5">{mainParagparh}</p>
        </div>
        <div className="absolute top-[105%] left-1/2 -translate-x-1/2 text-white text-center">
          <h2 className="text-3xl">{month}</h2>
          <div className="mt-3 mr-5 font-bold  h-20 w-full flex justify-center items-center border-white border-4 rounded-lg">
            <h2 className="text-3xl font-bold">{day}</h2>
          </div>
          <p className="mt-4 ">learno more</p>
        </div>
      </div>
    </div>
  );
};

export default RecommendedCardBlogs;
