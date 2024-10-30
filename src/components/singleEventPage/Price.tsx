import Image from "next/image";
import React from "react";
import AppButton from "../base/AppButton";
import { SignleEventPageBottomSectionType } from "@/types/typesNew";
interface Props {
  staticContent: SignleEventPageBottomSectionType;
}

const Price = ({ staticContent }: Props) => {
  return (
    <div className="mt-36">
      <div className="flex border-t-2 mb-28 rounded-3xl border-l-2 border-r-2   ">
        <div className="w-1/2 border-r-2  text-center p-5">
          <h2 className="text-3xl mb-12 mt-10 font-bold">
            {staticContent.individualPrice}
          </h2>
          <p className="text-3xl font-bold">500мкд</p>
        </div>
        <div className="w-1/2   text-center p-5">
          <h2 className="text-3xl mb-12 mt-10 font-bold">
            {staticContent.speakerParahraph}
          </h2>
          <p className="text-3xl font-bold">5000мкд</p>
        </div>
      </div>
      <div className="mt-14 relative">
        <div className="">
          <Image
            src={"/singleEventPageImgs/priceImg.png"}
            width={1800}
            className="rounded-l-full rounded-r-full"
            height={1200}
            alt="img"
          />
        </div>
        <div className="text-center absolute bottom-[-4.5%] w-full ">
          <AppButton
            backgroundColor="#E87B22"
            color="white"
            padding="15px 40px"
            borderRadius="40px"
            fontSize="20px"
            width="30%"
          >
            {staticContent.buttonText}
          </AppButton>
        </div>

        <div className="flex bg-white mt-16 absolute top-[-20%] left-[41%]  w-[20%] p-3  rounded-full ">
          <div className="w-[25%] mr-5 bg-orange-500 rounded-full p-5 flex items-center justify-center">
            <Image
              src="/homepageImgs/endSection/attachIcon.svg"
              alt="asd"
              height={200}
              width={200}
            />
          </div>
          <div className="flex justify-center flex-col">
            <p className="m-0 mb-1 text-l font-bold">{staticContent.buycard}</p>
            <p className="m-0 text-[14px] text-gray-400">{staticContent.mail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
