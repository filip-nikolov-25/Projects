import Image from "next/image";
import React from "react";

interface SmallCardProps {
  imgSrc: string;
  name: string;
  title: string;
}

const SmallCard: React.FC<SmallCardProps> = ({ imgSrc, name, title }) => {
  return (
    <div className="w-full rounded-b-full  drop-shadow-xl pb-10 bg-white">
      <div className="flex justify-center p-2">
        <div className="w-[70%]">
          <Image
            src={imgSrc}
            className="rounded-b-full"
            width={300}
            height={200}
            alt={`${name} image`}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between items-center">
        <h2 className="text-m p-5 text-orange-500">{name}</h2>
        <div className="w-[70%] mx-auto text-center">

        <p className="text-gray-400">{title}</p>
        </div>
        <div className="flex mt-5">
          <i className="fa-brands fa-facebook text-2xl mr-3"></i>
          <i className="fa-brands fa-twitter text-2xl mr-3"></i>
          <i className="fa-brands fa-square-instagram text-2xl mr-3"></i>
          <i className="fa-brands fa-linkedin text-2xl"></i>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
