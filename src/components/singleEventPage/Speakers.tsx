import { SignleEventPageBottomSectionType } from "@/types/typesNew";
import Image from "next/image";
import React from "react";
interface Props {
  staticContent:SignleEventPageBottomSectionType
}

const Speakers = ({staticContent}:Props) => {
  return (
    <div className="flex mt-10">
      <div className="w-1/2">
        <h2 className="text-5xl">{staticContent.speakerParahraph}</h2>
      </div>
      <div className="w-1/2 flex">
        <div className="w-[30%] rounded-b-full pb-10 bg-white">
          <div className="flex justify-center p-2">
            <div className="w-[70%] ">
              <Image
                src={"/singleEventPageImgs/firstSpeaker.png"}
                className="rounded-b-full"
                width={300}
                height={200}
                alt="img"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between items-center">
            <h2 className="text-m  p-5 text-orange-500">Елица Перчинкова</h2>
            <p className="text-gray-400">АЕК</p>
            <div className="flex mt-5">
              <div className="">
                {" "}
                <i className="fa-brands fa-facebook  text-2xl mr-3"></i>
              </div>
              <div>
                <i className="fa-brands fa-twitter  text-2xl mr-3"></i>
              </div>
              <div>
                <i className="fa-brands fa-square-instagram mr-3 text-2xl"></i>
              </div>
              <div>
                <i className="fa-brands fa-linkedin text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] ml-5 mr-5 rounded-b-full pb-10 bg-white">
          <div className="flex justify-center p-2">
            <div className="w-[70%] ">
              <Image
                src={"/singleEventPageImgs/secondSpeaker.png"}
                className="rounded-b-full"
                width={300}
                height={200}
                alt="img"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between items-center">
            <h2 className="text-m  p-8 text-orange-500">Зорица Поповска</h2>
            <p className="text-gray-400">Сенсум коучинг и тренинг центар</p>
            <div className="flex mt-5">
              <div className="">
                {" "}
                <i className="fa-brands fa-facebook  text-2xl mr-3"></i>
              </div>
              <div>
                <i className="fa-brands fa-twitter  text-2xl mr-3"></i>
              </div>
              <div>
                <i className="fa-brands fa-square-instagram mr-3 text-2xl"></i>
              </div>
              <div>
                <i className="fa-brands fa-linkedin text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] rounded-b-full pb-10 bg-white">
          <div className="flex justify-center p-2">
            <div className="w-[70%] ">
              <Image
                src={"/singleEventPageImgs/thirdSpeaker.png"}
                className="rounded-b-full"
                width={300}
                height={200}
                alt="img"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between items-center">
            <h2 className="text-m  p-5 text-orange-500">Марија Петрушевска,</h2>
            <p className="text-gray-400">ТТК банка</p>
            <div className="flex mt-5">
              <div className="">
                {" "}
                <i className="fa-brands fa-facebook  text-2xl mr-3"></i>
              </div>
              <div>
                <i className="fa-brands fa-twitter  text-2xl mr-3"></i>
              </div>
              <div>
                <i className="fa-brands fa-square-instagram mr-3 text-2xl"></i>
              </div>
              <div>
                <i className="fa-brands fa-linkedin text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
