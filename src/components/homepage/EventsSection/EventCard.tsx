import React from "react";

interface Props {
  ordinalNumber: string;
  eventName: string;
  learnMoreText:string
}

const EventCard = ({eventName,learnMoreText,ordinalNumber}:Props) => {
  return (
    <div className="w-[90%] ">
      <div className="flex ">
        <div className="w-[10%] ">
          <h2 className="text-2xl text-gray-500">{ordinalNumber}</h2>
        </div>
        <div className="w-[90%] border-b-2 border-gray-500 pb-5 ">
          <h4 className="text-3xl mb-5">{eventName}</h4>
          <p className="text-gray-500 underline">{learnMoreText
            }</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
