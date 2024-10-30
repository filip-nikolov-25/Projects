import AppButton from "@/components/base/AppButton";
import { StaticContentConferencePageSpecialGuestsSectionType } from "@/types/typesNew";
import Image from "next/image";
import React from "react";

interface Props {
  staticContent: StaticContentConferencePageSpecialGuestsSectionType;
}

const SpecialGuests = ({ staticContent }: Props) => {
  
  return (
    <div className="mt-36">
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-10">
          {staticContent.mainParagraph}
        </h2>
        <p>{staticContent.secondaryParagraph}</p>
      </div>
      <div>
        <div className="flex justify-around relative">
          <div className="w-[28%]">
            <Image
              src={"/conferencePageImgs/specialGuest1.png"}
              width={600}
              height={600}
              alt="specialGuestImgPic"
            />
          </div>
          <div className="w-[28%]">
            <Image
              src={"/conferencePageImgs/specialGuest2.png"}
              width={600}
              height={600}
              alt="specialGuestImgPic"
            />
          </div>
          <div className="flex bg-white absolute bottom-4 left-[33%]  w-[17%] p-3 pr-6  rounded-full ">
            <div className="w-[30%] mr-5 bg-orange-500 rounded-full p-5 flex items-center justify-center">
              <Image src="/linkedIn.svg" alt="asd" height={200} width={200} />
            </div>
            <div className="flex justify-center flex-col">
              <p className="m-0 mb-1 text-xl font-bold">Оливиа Оил</p>
              <p className="m-0 text-[14px] text-gray-400">CO на “Спинак”</p>
            </div>
          </div>
          <div className="flex flex-row-reverse absolute top-1/4 right-[32%] bg-white w-[17%] p-3 pr-6 rounded-full">
            <div className="w-[30%] ml-5 bg-orange-500 rounded-full p-5 flex items-center justify-center">
              <Image src="/linkedIn.svg" alt="asd" height={200} width={200} />
            </div>
            <div className="flex justify-center flex-col">
              <p className="m-0 mb-1 text-xl font-bold">Мајк Вазауски</p>
              <p className="m-0 text-[14px] text-gray-400">
                CEO на “Монстер Инк”
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex justify-around relative">
          <div className="w-[28%]">
            <Image
              src={"/conferencePageImgs/specialGuest3.png"}
              width={600}
              height={600}
              alt="specialGuestImgPic"
            />
          </div>
          <div className="w-[28%]">
            <Image
              src={"/conferencePageImgs/specialGuest4.png"}
              width={600}
              height={600}
              alt="specialGuestImgPic"
            />
          </div>
          <div className="flex bg-white absolute bottom-20 left-[33%]  w-[17%] p-3 pr-6  rounded-full ">
            <div className="w-[30%] mr-5 bg-orange-500 rounded-full p-5 flex items-center justify-center">
              <Image src="/linkedIn.svg" alt="asd" height={200} width={200} />
            </div>
            <div className="flex justify-center flex-col">
              <p className="m-0 mb-1 text-xl font-bold">Оливиа Оил</p>
              <p className="m-0 text-[14px] text-gray-400">CO на “Спинак”</p>
            </div>
          </div>
          <div className="flex flex-row-reverse absolute top-[10%] right-[32%] bg-white w-[17%] p-3 pr-6 rounded-full">
            <div className="w-[30%] ml-5 bg-orange-500 rounded-full p-5 flex items-center justify-center">
              <Image src="/linkedIn.svg" alt="asd" height={200} width={200} />
            </div>
            <div className="flex justify-center flex-col">
              <p className="m-0 mb-1 text-xl font-bold">Мајк Вазауски</p>
              <p className="m-0 text-[14px] text-gray-400">
                CEO на “Монстер Инк”
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <AppButton
            borderRadius="30px"
            width="15%"
            padding="15px"
            color="white "
            backgroundColor="#E87B22"
          >
            {staticContent.buttonText}
          </AppButton>
        </div>
      </div>
    </div>
  );
};

export default SpecialGuests;
