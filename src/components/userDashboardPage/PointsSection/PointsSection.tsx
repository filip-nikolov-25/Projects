import { UserDashBoardPageBadgeSectionType } from "@/types/typesNew";
import Image from "next/image";
import React from "react";
interface Props {
  staticContent:UserDashBoardPageBadgeSectionType
}

const PointsSection = ({staticContent}:Props) => {
  return (
    <div className="bg-white p-10 rounded-3xl ">
      <h3 className="text-xl font-bold mb-10">{staticContent.points}</h3>
      <div className="flex">
        <div className="w-[33.333%]">
          <Image
            src="/userDashboardImgs/firstPointsBlue.svg"
            alt="points"
            width={120}
            height={100}
          />
        </div>
        <div className="w-[33.333%]">
          <Image
            src="/userDashboardImgs/secondPointsOrange.svg"
            alt="points"
            width={120}
            height={100}
          />
        </div>
        <div className="w-[33.333%]">
          <Image
            src="/userDashboardImgs/thirdPointsBrown.svg"
            alt="points"
            width={120}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default PointsSection;
