import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  contact: string;
}

const ContactCard = ({ contact }: Props) => {
  return (
    <div className=" rounded-l-full right-0 text-white p-5 bg-customBlue">
      <div className="ml-10">
        <p className="text-lg text-white">{contact}</p>
        <div className="flex  ">
          <Link href={"https://www.linkedin.com/"}>
            <Image
              src="/blogArticleImgs/blogArticleIcons/linkedIn.svg"
              width={35}
              height={35}
              alt="linkedIn-icon"
            />
          </Link>
          <Link href={"https://www.instagram.com/"}>
            <Image
              src="/blogArticleImgs/blogArticleIcons/instagram.svg"
              width={35}
              height={35}
              alt="instagram-icon"
            />
          </Link>
          <Link href={"https://www.facebook.com/"}>
            <Image
              src="/blogArticleImgs/blogArticleIcons/facebook.svg"
              width={35}
              height={35}
              alt="facebook-icon"
            />
          </Link>
          <Link href={"https://www.youtube.com/"}>
            <Image
              src="/blogArticleImgs/blogArticleIcons/youtube.svg"
              width={35}
              height={35}
              alt="youtube-icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
