import { EventsListingType } from "@/types/typesNew";
import Image from "next/image";
import React from "react";

interface Props {
    eventData:EventsListingType
}

const SingleEventList = ({eventData}:Props) => {
  return (
    <div className="rounded-bl-[250px] rounded-br-[240px] flex w-[95%] mx-auto  group overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="w-[50%] relative overflow-hidden">
        <div className="w-full h-full overflow-hidden">
          <Image
            src={eventData.img}
            width={500}
            height={500}
            alt="EVENT NAME"
            className="transition-transform duration-500 ease-in-out group-hover:scale-[0.5] group-hover:translate-x-[-75%] group-hover:translate-y-[-75%]"
          />
        </div>
      </div>
      <div className="w-[50%] relative ml-3  justify-around ">
        <h2 className="transition-transform duration-500 w-full absolute top-[12%] ease-in-out group-hover:translate-x-[-95%] group-hover:translate-y-[-25%] font-bold text-[25px] group-hover:whitespace-nowrap">
         {eventData.eventName}
        </h2>
        <p className="text-lg underline text-orange-500 transition-transform duration-500 w-full absolute bottom-[25%] group-hover:transform group-hover:translate-x-[-7%] ease-in-out group-hover:scale-[1.5]">
        {eventData.readMore}
        </p>
        <div className="w-[200%] ">
          <p className="absolute right-0 w-[150%] transform text-lg -translate-y-1/2 top-[38%] opacity-0 transition-all duration-500 ease-in-out group-hover:right-[15%] group-hover:translate-x-[-20%] group-hover:opacity-100">
          {eventData.hiddenText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleEventList;
