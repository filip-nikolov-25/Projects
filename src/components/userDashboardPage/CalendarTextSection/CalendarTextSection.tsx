import { UserDashBoardPageCalendarSectionType } from "@/types/typesNew";
import React from "react";
interface Props {
  staticContent:UserDashBoardPageCalendarSectionType
}
const CalendarTextSection = ({staticContent}:Props) => {
  return (
    <div className="mt-10  p-10 rounded-3xl ">
      <h2 className="text-5xl font-bold mb-10">{staticContent.mainParagparh}</h2>
      <p className="text-ml">
    {staticContent.secondaryParagraph}
      </p>
    </div>
  );
};

export default CalendarTextSection;
