import { UserDashBoardPageBadgeSectionType } from "@/types/typesNew";
import Image from "next/image";
import React from "react";
interface Props {
  staticContent:UserDashBoardPageBadgeSectionType
}

const BadgeSection = ({staticContent}:Props) => {
  return (
    <div className="p-10 bg-white rounded-3xl mt-10">
      <div className="flex mb-5 justify-between">
        <h3 className="text-xl font-bold">{staticContent.newestBadgesParagraph}</h3>
        <p className="text-orange-400 underline">{staticContent.viewAll}</p>
      </div>
      <div className="flex items-center rounded-xl border-2 p-5">
        <div className="mr-5">
          <Image
            src={"/userDashboardImgs/messageBadge.svg"}
            alt="messageBadge"
            width={100}
            height={100}
          />
        </div>
        <div>
          <p>{staticContent.firstBadge  }</p>
        </div>
      </div>
      <div className="flex p-5 items-center rounded-xl border-2 mt-5">
        <div className="mr-5">
          <Image
            src={"/userDashboardImgs/calendarBadge.svg"}
            alt="messageBadge"
            width={100}
            height={100}
          />
        </div>
        <div>
          <p>{staticContent.secondBadge}</p>
        </div>
      </div>
    </div>
  );
};

export default BadgeSection;
