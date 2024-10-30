import AppButton from "@/components/base/AppButton";
import { UserDashBoardPageTicketSectionType } from "@/types/typesNew";
import Image from "next/image";
import React from "react";

interface Props {
  staticContent: UserDashBoardPageTicketSectionType;
}

const FeedbackInput = ({ staticContent }: Props) => {
  return (
    <div className="p-8 rounded-3xl relative">
      <textarea
        rows={10}
        className="w-full p-10 rounded-lg border-2 border-gray-400"
        name="input"
        placeholder={staticContent.feedback}
        id="input"
      ></textarea>
      <Image
        src={"/userDashboardImgs/attachVector.svg"}
        className="absolute bottom-1/4 left-[80px]"
        width={30}
        height={70}
        alt="attachIcon"
      />
      <div className="absolute bottom-1/4 w-full left-[825px]">
        <AppButton
          backgroundColor="#E87B22"
          color="white"
          padding="15px"
          width="20%"
          borderRadius="30px"
        >
          {staticContent.sendButtonText}
        </AppButton>
      </div>
    </div>
  );
};

export default FeedbackInput;
