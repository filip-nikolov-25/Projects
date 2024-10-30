import AppButton from "@/components/base/AppButton";
import { StaticContentConferencePagePriceSectionType } from "@/types/typesNew";
import React from "react";

interface Props {
  staticContent:StaticContentConferencePagePriceSectionType
}

const PriceSection = ({staticContent}:Props) => {
  return (
    <div className="mt-[10%]">
      <div className="h-[80vh]">
        <div className="text-center mb-16">
          <h2 className="text-5xl text-orange-500">
        {staticContent.headingParagraph}
          </h2>
        </div>
        <div className="flex mb-20">
          <div className="w-1/2 flex justify-center ">
            <div className="bg-white rounded-t-full shadow-2xl rounded-b-full h-[130%] p-10 w-[50%] flex flex-col items-center justify-center">
              <h2 className="text-5xl text-orange-500 mb-5">{staticContent.individualCardName}</h2>
              <p className="text-5xl">1200 den</p>
              <ul className="list-disc mt-10 mb-20">
                <li>{staticContent.individualCardFirst}</li>
                <li>{staticContent.individualCardSecond}</li>
                <li>{staticContent.individualCardThird}</li>
              </ul>
              <div className="w-full text-center">
                <AppButton
                  color="white"
                  backgroundColor="#E87B22"
                  borderRadius="30px"
                  width="65%"
                  padding="10px"
                >
                  {staticContent.buyNowButtonText}
                </AppButton>
              </div>
            </div>
          </div>

          <div className="w-1/2 flex justify-center">
            <div className="bg-white rounded-t-full shadow-2xl h-[130%] rounded-b-full p-10 w-[50%] flex flex-col items-center justify-center">
              <h2 className="text-5xl text-orange-500 mb-5">{staticContent.corporationCardName}</h2>
              <p className="text-5xl">20 000ден</p>
              <ul className="list-disc mt-10 mb-20">
                <li>{staticContent.corporationCardFirst}</li>
                <li>{staticContent.corporationCardSecond}</li>
                <li>{staticContent.corporationCardThird}</li>
                <li>{staticContent.corporationCardFourth}</li>
              </ul>
              <div className="w-full text-center">
                <AppButton
                  color="white"
                  backgroundColor="#E87B22"
                  borderRadius="30px"
                  width="65%"
                  padding="10px"
                >
                      {staticContent.buyNowButtonText}
                </AppButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-10 text-center" >
          <AppButton
            color="white"
            backgroundColor="#E87B22"
            borderRadius="30px"
            width="25%"
            padding="18px"
          >
                    {staticContent.recommendButtonText}
          </AppButton>
        </div>
      </div>
      
    </div>
  );
};

export default PriceSection;
