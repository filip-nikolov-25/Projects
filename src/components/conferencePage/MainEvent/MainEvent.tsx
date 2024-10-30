import AppButton from "@/components/base/AppButton";
import {
  EventCarouselType,
  StaticContentConferencePageHeroSectionType,
  StaticContentConferencePageMainSectionType,
} from "@/types/typesNew";
import Image from "next/image";
import React from "react";

interface Props {
  staticContent: StaticContentConferencePageMainSectionType;
  event: EventCarouselType | undefined;
}

const MainEvent = ({ event, staticContent }: Props) => {
  return (
    <>
      <div className="flex">
        <div className="w-1/2">
          <h2 className="text-5xl font-bold">{event?.blogName}</h2>
          <div className="flex mt-10 mb-10 ">
            <div className="flex">
              <i className="fa-solid fa-calendar"></i>
              <p className="ml-3">{event?.date}</p>
            </div>
            <div className="flex ml-5">
              <i className="fa-solid fa-location-pin"></i>
              <p className="ml-3">Хотел Континентал, Скопје</p>
            </div>
          </div>
          <p className="w-2/3">{event?.description}</p>
          <div className="flex bg-white shadow-2xl mt-16  w-[40%] p-3 pr-6  rounded-full ">
            <div className="w-[30%] mr-5 bg-orange-500 rounded-full p-5 flex items-center justify-center">
              <Image
                src="/homepageImgs/endSection/attachIcon.svg"
                alt="asd"
                height={200}
                width={200}
              />
            </div>
            <div className="flex justify-center flex-col">
              <p className="m-0 mb-1 text-xl font-bold">
                {staticContent.buycard}
              </p>
              <p className="m-0 text-[14px] text-gray-400">
                {staticContent.mail}
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center relative">
          <div className="w-[80%] h-full ">
            <Image
              src={"/conferencePageImgs/yearConferenceBigImg.png"}
              width={500}
              height={600}
              className="rounded-t-full"
              alt="asdwd"
            />
          </div>
          <div className="w-[35%]  p-[7%] border-[1px] border-gray-300 p rounded-full  h-auto absolute top-0 right-56 ">
            <Image
              src={"/conferencePageImgs/womanImageConference.png"}
              width={1280}
              height={1280}
              className="rounded-full"
              alt="asdwd"
            />
          </div>
          <div className="w-[35%] border-[1px] border-gray-300 p-[7%] rounded-full bottom-[-17%] left-0 absolute">
            <Image
              src={"/conferencePageImgs/manPresentationImg.png"}
              width={1280}
              height={1280}
              className="rounded-full"
              alt="asdwd"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-36 mb-[17%]">
        <div className="flex justify-between w-2/3 shadow-2xl  bg-white p-14 rounded-l-full rounded-r-full">
          <div className="flex items-center mr-5">
            <i className="fa-regular fa-calendar text-5xl mr-3 text-orange-500"></i>

            <div>
              {" "}
              <h2 className="text-3xl font-bold">2</h2>
              <p>{staticContent.days}</p>
            </div>
          </div>
          <div className="flex items-center mr-5">
            <i className="fa-regular fa-calendar text-5xl mr-3 text-orange-500"></i>

            <div>
              {" "}
              <h2 className="text-3xl font-bold">2</h2>
              <p>{staticContent.days}</p>
            </div>
          </div>
          <div className="flex items-center mr-5">
            <i className="fa-regular fa-calendar text-5xl mr-3 text-orange-500"></i>

            <div>
              {" "}
              <h2 className="text-3xl font-bold">2</h2>
              <p>{staticContent.days}</p>
            </div>
          </div>
          <div className="flex items-center mr-5">
            <i className="fa-regular fa-calendar text-5xl mr-3 text-orange-500"></i>

            <div>
              {" "}
              <h2 className="text-3xl font-bold">2</h2>
              <p>{staticContent.days}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainEvent;
