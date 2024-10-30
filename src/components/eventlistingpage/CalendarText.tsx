import { EventListingCalendarTextSectionType } from "@/types/typesNew";
import React from "react";
interface Props {
  staticContent: EventListingCalendarTextSectionType;
}

const CalendarText = ({ staticContent }: Props) => {
  return (
    <div className="shadow-3xl">
      <div className="mt-10  p-10 rounded-3xl ">
        <h2 className="text-5xl font-bold mb-10">
          {staticContent.mainParagparh}
        </h2>
        <p className="text-sm">{staticContent.secondaryParagraph}</p>
      </div>
    </div>
  );
};

export default CalendarText;
