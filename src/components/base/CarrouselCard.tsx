import { EventCarouselType } from "@/types/typesNew";
import Image from "next/image";
import React from "react";

const CarrouselCard = ({
  blogName,
  day,
  id,
  mainParagparh,
  month,
  img,
}: EventCarouselType) => {
  return (
    <div className=" carousel-child w-[100%]  ">
      <div className="h-[30vh] w-[20rem] relative">
        <Image
          className="h-[33vh] w-full  carrouselImg "
          src={img}
          alt="FIRST IMAGE "
          width={300}
          height={246}
        />
        <div className="text-white absolute top-[13%] left-[50%]  -translate-x-1/2 text-center ">
          <p className="text-[18px] ">{blogName}</p>
          <p className="text-[18px]  ">{mainParagparh}</p>
        </div>
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 text-white text-center">
          <h2 className="text-4xl">{month}</h2>
          <div className="mt-3 mr-5 font-bold  h-20 w-full flex justify-center items-center border-white border-4 rounded-lg">
            <h2 className="text-5xl font-bold">{day}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrouselCard;
