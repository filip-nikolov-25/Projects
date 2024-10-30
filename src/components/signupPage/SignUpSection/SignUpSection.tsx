import AppButton from "@/components/base/AppButton";
import { SignUpPageLoginSection } from "@/types/typesNew";
import Image from "next/image";
import React from "react";

interface Props {
  staticContent: SignUpPageLoginSection;
}
const SignUpSection = ({ staticContent }: Props) => {
  return (
    <div className="w-full ">
      <h2 className="text-3xl font-bold text-center">
        {staticContent.headingParagraph}
      </h2>
      <div className="flex justify-center mt-14">
        <div className="flex  border-2 border-gray-300 w-[40%] mb-10 p-2 rounded-l-full rounded-r-full justify-center">
          <div className="w-[6%] mr-5">
            <Image
              src={"/signUpImgs/googleIcon.svg"}
              width={200}
              height={200}
              alt="googleIcon"
            />
          </div>
          <button className="font-bold text-xl">
            {staticContent.googleButton}
          </button>
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <div className="flex w-[40%]  items-center">
          <hr className="flex-grow border-t border-gray-300" />
          <p className="mx-4">{staticContent.orParagraph}</p>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
      </div>
      <div className="w-[39%] mb-1 mx-auto">
        <label htmlFor="email" className="text0center">
          e-mail
        </label>
      </div>
      <div className="flex justify-center ">
        <input
          type="text"
          id="email"
          placeholder="mhra@primer.com"
          className="rounded-r-full rounded-l-full shadow-2xl  p-5 w-[40%]"
        />
      </div>
      <div className="w-[40%] mt-5 mx-auto">
        <AppButton
          backgroundColor="#E87B22"
          color="white"
          padding="15px 40px"
          borderRadius="40px"
          fontSize="20px"
          width="100%"
        >
          {staticContent.continueButton}
        </AppButton>
        <p className="mb-3 mt-10">{staticContent.cookiesText}</p>

        <div className="flex mb-3 items-center">
          <input type="checkbox" />
          <p className="ml-2">{staticContent.firstAcceptInputText}</p>
        </div>
        <div className="flex items-center">
          <input type="checkbox" />
          <p className="ml-2">{staticContent.secondAcceptInputText}</p>
        </div>
      </div>
    </div>
  );
};

export default SignUpSection;
