import React from "react";
import EventCard from "./EventCard";
import { HomePageEventsSectionType } from "@/types/typesNew";

interface Props {
  eventsSectionData: HomePageEventsSectionType;
}

const EventsSection = ({ eventsSectionData }: Props) => {
  return (
    <div className="flex ">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="w-[70%] "
      >
        {eventsSectionData.textCards.map((event, index) => {
          return <EventCard key={index} {...event} />;
        })}
      </div>
      <div
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="w-[30%] flex flex-col justify-start"
      >
        <h2 className="text-5xl w-[80%]  mb-14">
          {eventsSectionData.rightSection.headingText}
        </h2>
        <p>{eventsSectionData.rightSection.mainText}</p>
      </div>
    </div>
  );
};

export default EventsSection;
