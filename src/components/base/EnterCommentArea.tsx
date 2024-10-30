import Image from "next/image";
import React, { useState } from "react";
import AppButton from "./AppButton";
import { CommentType, CurrentLoggedInUserType } from "@/types/typesNew";

interface Props {
  commentButtonText: string | undefined;
  currentLoggedInUser: CurrentLoggedInUserType
  setNewComment:(newComment:CommentType) => void
  newComment:CommentType
}

const EnterCommentArea = ({
  commentButtonText,
  currentLoggedInUser,
  setNewComment,
  newComment
}: Props) => {

  const [commentText,setCommentText] = useState()


  return (
    <div className="relative">
         <div className="absolute bottom-0 w-full  z-10">
        <Image
          src={"/blogArticleDots/onCommentBlogArticle.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>
      <div className="flex p-5 pb-32 bg-white border-2 border-orange-500 rounded-xl">
        <div className="w-[20%] rounded-b-[500px] ">
          <Image
            src={`/aboutPageImgs/MainSectionLeftImage.png`}
            className="rounded-b-[500px] h-20 w-20"
            width={3000}
            height={2000}
            alt="profile-picture"
          />
        </div>
        <div className="w-80% ">
          <textarea
            rows={4}
            cols={50}
            className="w-[53vw] outline-none rounded-md"
            name=""
            id=""
            placeholder=""
            
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewComment({...newComment,text:e.target.value})}
          ></textarea>
        </div>
      </div>
      <div className="absolute bottom-5 right-16 font-bold z-20">
        <AppButton padding="10px" width="12vw" backgroundColor="#E87B22" color="white"  borderRadius="30px">
          {commentButtonText}
        </AppButton>
      </div>
    </div>
  );
};

export default EnterCommentArea;
