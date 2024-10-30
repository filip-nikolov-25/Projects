import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import AppWrapper from "./base/AppWrapper";
import AppButton from "./base/AppButton";
import Link from "next/link";
import { NavType } from "@/types/typesNew";
import NotificationPopUp from "./base/NotificationPopUp";

interface Props {
  navData: NavType | null;
}

const NavBar = ({ navData }: Props) => {
  const router = useRouter();

  const handleLanguageChange = (locale: string) => {
    localStorage.setItem("manualLanguageChange", "true");
    router.replace(`/${router.asPath}`, `/${router.asPath}`, { locale });
  };

  const [popUp, isActivePopUp] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);

  const handleNotificationClick = () => {
    isActivePopUp(true);
  };

  const handleClosePopUp = () => {
    isActivePopUp(false);
  };

  return (
    <div
      className={`pt-3 pb-3 sticky top-0 z-50 backdrop-blur-md bg-white/30 shadow-xl ${
        popUp ? "bg-white bg-opacity-90" : "bg-white/30"
      }`}
    >
      <AppWrapper>
        <div className="flex justify-between items-center">
          <div>
            <Link href={router.locale === "mk" ? `/` : `/${router.locale}`}>
              <Image
                src="/navBarImgs/logo.svg"
                width={50}
                height={50}
                alt="logo-img"
              />
            </Link>
          </div>
          <ul className="flex items-center justify-between">
            <Link href={"/about"}>
              <li className="mr-5">{navData?.first}</li>
            </Link>
            <li className="mr-5">{navData?.second}</li>
            <div
              className="mr-5 cursor-pointer relative"
              onMouseEnter={() => {
                setIsDropdownOpen(true);
                setIsDropdownHovered(true);
              }}
              onMouseLeave={() => {
                if (!isDropdownHovered) {
                  setIsDropdownOpen(false);
                }
              }}
            >
              <Link href={`/events`}>
                <span>{navData?.fourth}</span>
              </Link>
              {isDropdownOpen && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50"
                  onMouseEnter={() => setIsDropdownHovered(true)}
                  onMouseLeave={() => {
                    setIsDropdownHovered(false);
                    setIsDropdownOpen(false);
                  }}
                >
                  <Link
                    href="/singleevent/3"
                    className="block px-4 py-2 hover:bg-orange-500"
                  >
                    {navData?.drowdownFirst}
                  </Link>
                  <Link
                    href="/singleevent/1"
                    className="block px-4 py-2 hover:bg-orange-500"
                  >
                    {navData?.drowdowsSecond}
                  </Link>
                  <Link
                    href="/singleevent/6"
                    className="block px-4 py-2 hover:bg-orange-500"
                  >
                    {navData?.drowdownThird}
                  </Link>
                  <Link
                    href="/singleevent/2"
                    className="block px-4 py-2 hover:bg-orange-500"
                  >
                    {navData?.drowdownFourh}
                  </Link>
                </div>
              )}
            </div>

            <Link href={`/events/conference`}>
              <li className="mr-5">{navData?.third}</li>
            </Link>
            <li className="mr-5">
              <Link href={`/blogs`}>{navData?.fifth}</Link>
            </li>
            <li onClick={() => isActivePopUp(true)}>
              <Image
                src="/navBarImgs/search.svg"
                className="w-full h-full"
                width={70}
                height={70}
                alt="search"
              />
            </li>
          </ul>
          <div className="flex">
            <div
              className="relative w-full h-full mr-5"
              onClick={handleNotificationClick}
            >
              <Image
                src="/navBarImgs/notification.svg"
                alt="notification"
                className="w-full h-full cursor-pointer"
                width={40}
                height={40}
              />
            </div>
            <ul className="flex relative">
              <li className="flex mr-5 h-full">
                <button
                  className="mr-3"
                  onClick={() => handleLanguageChange("en")}
                >
                  EN
                </button>
                <button onClick={() => handleLanguageChange("mk")}> MK </button>
              </li>
              <Link href={"/signup"}>
                <li className="h-full w-[100%]">
                  <AppButton
                    backgroundColor="#E87B22"
                    color="white"
                    width="150px"
                    height="100%"
                    borderRadius="20px"
                  >
                    {navData?.button}
                  </AppButton>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </AppWrapper>

      {popUp && <NotificationPopUp onClose={handleClosePopUp} />}
    </div>
  );
};

export default NavBar;
