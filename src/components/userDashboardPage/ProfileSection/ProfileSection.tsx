import { currentUserType, UserDashBoardPageHeroSectionType } from "@/types/typesNew";
import Image from "next/image";
import React from "react";
interface Props {
  setIsActiveSettings: (isActive: boolean) => void;
  currentUser:currentUserType
  staticContent:UserDashBoardPageHeroSectionType
}

const ProfileSection = ({setIsActiveSettings,currentUser,staticContent}:Props) => {
  return (
    <div className=" p-10 rounded-3xl bg-white shadow-lg ">
      <div className="flex justify-center relative">
        <div className="flex justify-center rounded-t-full w-[90%]  border-[10px] border-yellow-400">
          <Image
            className="rounded-t-full"
            src={`/currentUserGirl.png`}
            alt="profilePic"
            width={4000}
            height={2000}
          />
        </div>
        <div className="w-[12%] absolute top-0 right-0">
            <Image
              src={`/userDashboardImgs/messagesIcon.svg`}
              alt="messageIcon"
              width={200}
              height={200}
            />
          </div>
      </div>
      <div className="text-center mt-5">
        <h2>{`${currentUser.name} ${currentUser.lastname}`}</h2>
        <h2>{currentUser.town} </h2>
      </div>
      <hr className="w-[80%] mt-12 mb-10" />
      <div className="w-[70%] mx-auto">
        <div className="flex items-center mb-5">
          <div className="w-7">
            <Image
              src={`/userDashboardImgs/profileVector.svg`}
              alt="profileIcon"
              width={100}
              height={100}
            />
          </div>
          <p className="ml-5 ">{currentUser.profession}</p>
        </div>
        <div className="flex items-center  ">
          <div className="w-7">
            <Image
              src={`/userDashboardImgs/attachVector.svg`}
              alt="profileIcon"
              width={100}
              height={100}
            />
          </div>
          <p className="ml-5 ">CV</p>
        </div>
      </div>
      <hr className="w-[80%] mt-12 mb-10" />
      <div className="w-[70%] mx-auto">
        <div className="flex items-center mb-5">
          <div className="w-7">
            <Image
              src={`/userDashboardImgs/profileVector.svg`}
              alt="profileIcon"
              width={100}
              height={100}
            />
          </div>
          <p className="ml-5 ">{currentUser.profession}</p>
        </div>
        <div className="flex items-center  mb-5">
          <div className="w-7">
            <Image
              src={`/userDashboardImgs/mail.svg`}
              alt="profileIcon"
              width={100}
              height={100}
            />
          </div>
          <p className="ml-5 ">CV</p>
        </div>
        <div className="flex items-center  ">
          <div className="w-7">
            <Image
              src={`/userDashboardImgs/settings.svg`}
              alt="profileIcon"
              width={100}
              height={100}
            />
          </div>
          <p className="ml-5 cursor-pointer " onClick={() => setIsActiveSettings(true)}>{staticContent.settingParagrah}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
