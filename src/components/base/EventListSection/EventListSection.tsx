import Link from "next/link";
import React from "react";
import SingleEventList from "../SingleEventList";
import { EventsListingType } from "@/types/typesNew";

interface Props {
  headingParagraph: string;
  eventList: EventsListingType[];
}

const EventListSection = ({ eventList, headingParagraph }: Props) => {
  return (
    <div>
      <h2 className="mt-14 ] mb-14 text-5xl">{headingParagraph}</h2>
      <div className="flex flex-wrap">
        {eventList.map((event) => {
          return (
            <div
              key={event.id}
              className="w-1/2 flex justify-center mb-20 items-center"
            >
              <div className="w-full">
                <Link href={`/events/${event.id}`}>
                  <SingleEventList eventData={event} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventListSection;
