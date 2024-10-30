import React from "react";
import AppWrapper from "./base/AppWrapper";
import Image from "next/image";
import { FooterType } from "@/types/typesNew";

interface Props {
    staticContent:FooterType
}
const Footer = ({staticContent}:Props) => {
  return (
    <div className="pb-16">
      <AppWrapper>
        <div className="flex justify-between mt-36 border-gray-400 border-t-2">
          <div className="w-1/2 mt-20">
            <div className="mb-10">
              <Image
                src={"/navBarImgs/logo.svg"}
                width={50}
                height={60}
                alt="logo"
              />
            </div>
            <div className="flex">
              <div className="mr-10">
                <h2 className="font-bold">{staticContent.adress}</h2>
                <p>Бул. ВМРО бр. 7/1-7</p>
                <p>1000 Скопје, Македонија</p>
              </div>
              <div>
                <h2 className="font-bold">{staticContent.email}</h2>
                <p>contact@mhra.mk</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 mt-20">
            <h2 className="text-xl font-bold">{staticContent.subscribeText}</h2>
            <input
              type="text"
              placeholder="email"
              className="p-5 w-full mt-5 rounded-l-full rounded-r-full shadow-2xl outline-orange-500 outline-2 "
            />
            <div className="flex mt-10 items-end justify-end">
              <div>
                <span className="ml-4">
                  <i className="fa-brands text-3xl  fa-linkedin"></i>
                </span>
                <span className="ml-4">
                  <i className="fa-brands text-3xl  fa-square-instagram"></i>
                </span>
                <span className="ml-4">
                  <i className="fa-brands text-3xl  fa-square-facebook"></i>
                </span>
                <span className="ml-4">
                  <i className="fa-brands text-3xl  fa-youtube"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </AppWrapper>
    </div>
  );
};

export default Footer;
