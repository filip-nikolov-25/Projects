import AppButton from "@/components/base/AppButton";
import { EndSectionType } from "@/types/typesNew";
import Image from "next/image";
import React from "react";

const BottomSection = ({
  buttonText,
  email,
  grayMessage,
  macrBigCard,
  mainParagraph,
  orangeMessage,
  smallParagraph,
}: EndSectionType) => {
  return (
    <div className="flex relative">

      <div data-aos="fade-right" className="w-1/2 relative ">
        <div className="w-1/2 rounded-t-full">
          <Image
            src="/homepageImgs/endSection/leftImage.png"
            width={460}
            height={570}
            alt="asd"
            className="rounded-t-full"
          />
        </div>
        <div className="w-[70%] mt-10">
          <h2 className="text-5xl mb-10">{mainParagraph}</h2>
          <p className="mb-10">{smallParagraph}</p>
          <AppButton
            padding="20px 45px"
            fontSize="20px"
            backgroundColor="#E87B22"
            color="white"
            borderRadius="50px"
          >
            {buttonText}
          </AppButton>
        </div>
        <div className="bg-gray-500 p-5 absolute top-1/4 left-[43%] w-1/3 text-white rounded-tl-2xl rounded-tr-2xl rounded-br-2xl ">
          <p>{grayMessage}</p>
        </div>
      </div>
      <div data-aos="fade-left" className="w-1/2">
        <div className="rounded-t-full absolute top-[35%] left-[35%]">
          <Image
            src="/homepageImgs/endSection/rightImage.png"
            width={450}
            height={480}
            alt="asd"
            className="rounded-b-full"
          />
        </div>
      </div>
      <div className="p-5 bg-orange-500 absolute top-[60%] w-1/4 right-96  rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl text-white ">
        <p>{orangeMessage}</p>
      </div>
      <div className="flex bg-white  w-[20%] p-3 pr-6  absolute right-[22.5%] rounded-full top-[77%]">
        <div className="w-[30%] mr-5 bg-orange-500 rounded-full p-5 flex items-center justify-center">
          <Image
            src="/homepageImgs/endSection/attachIcon.svg"
            alt="asd"
            height={200}
            width={200}
          />
        </div>
        <div className="flex justify-center flex-col">
          <p className="m-0 mb-1 text-xl font-bold">{macrBigCard}</p>
          <p className="m-0 text-[14px] text-gray-400">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
