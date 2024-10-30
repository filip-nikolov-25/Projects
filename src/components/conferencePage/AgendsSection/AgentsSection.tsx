import {
  EventCarouselType,
  StaticContentConferencePageAgendSectionType,
} from "@/types/typesNew";
import Image from "next/image";
import React from "react";

interface Props {
  staticContent: StaticContentConferencePageAgendSectionType;
  event: EventCarouselType | undefined;
}
const AgentsSection = ({ event, staticContent }: Props) => {
  return (
    <>
      <div className="mt-20 mb-36 w-[70%] mx-auto">
        <h2 className="text-center text-5xl font-bold">
          {staticContent.mainParagraph}
        </h2>
        <div>
          <div className="flex border-b-2 border-b-orange-500">
            <p className="mr-5 mt-5 text-xl mb-3">{event?.date}</p>
          </div>
          {event?.agendSection.map((item, index) => (
            <div key={index} className="flex pt-5 mb-10">
              <p className="mr-10">{item.eventTime}</p>
              <div className="flex flex-col">
                <p className="mb-3 font-bold">{item.name}</p>
                <ul className="list-disc">
                  <li>{item.firstParagraph}</li>
                  {item.secondParagraph && <li>{item.secondParagraph}</li>}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default AgentsSection;
