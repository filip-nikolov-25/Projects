import { UserDashBoardPageTicketSectionType } from "@/types/typesNew";
import Image from "next/image";
import React from "react"; 
interface Props {
  staticContent :UserDashBoardPageTicketSectionType
}

const CardsSection = ({staticContent}:Props) => {
  return (
    <div className="p-8">
      <h2 className="text-5xl mb-16 font-bold">{staticContent.headingParagraph}</h2>
      <div className="p-10 shadow-2xl  flex items-center rounded-3xl">
        <div className="w-[10%] mr-5">
          <Image
            src={"/userDashboardImgs/cardImg.svg"}
            alt="image"
            width={200}
            height={200}
          />
        </div>
        <div>
          <h3 className="text-xl">
          {staticContent.firstCardMainParagraph}
          </h3>
          <p className="text-sm mt-2 text-gray-300">
          {staticContent.firstCardSecondaryParagraph}
          </p>
        </div>
      </div>
      <div className="p-10 flex shadow-2xl mt-5 items-center rounded-3xl  bg-white">
        <div className="w-[10%] mr-5">
          <Image
            src={"/userDashboardImgs/cardImg.svg"}
            alt="image"
            width={200}
            height={200}
          />
        </div>
        <div>
          <h3 className="text-xl">{staticContent.secondCardMainParagraph  }</h3>
          <p className="text-sm mt-2 text-gray-300">
          {staticContent.secondCardSecondaryParagraph}
          </p>
        </div>
      </div>
      <div className="flex w-[70%]  mt-14">
        <div className="bg-white shadow-2xl rounded-3xl p-5 w-1/2 pt-10 pb-10 text-center">
          <p className="mt-5 mb-5 font-bold text-xl">{staticContent.won}</p>
          <h2 className="text-8xl mb-7 font-bold">20%</h2>
          <p className="font-bold">{staticContent.discount}</p>
        </div>

        <div className="bg-white shadow-2xl ml-5 rounded-3xl p-5 w-1/2 pt-10 pb-10 text-center">
          <p className="mt-5 mb-5 font-bold text-xl">{staticContent.recommended}</p>
          <h2 className="text-8xl mb-7 font-bold">20</h2>
          <p className="font-bold">{staticContent.friends}</p>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
