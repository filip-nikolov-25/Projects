import AppButton from "@/components/base/AppButton";
import AppWrapper from "@/components/base/AppWrapper";
import ContactCard from "@/components/base/ContactCard";
import BenefitsSection from "@/components/signupPage/BenefitsSection/BenefitsSection";
import HeroSection from "@/components/signupPage/HeroSection/HeroSection";
import SignUpSection from "@/components/signupPage/SignUpSection/SignUpSection";
import { SignUpPageStaticContentType } from "@/types/typesNew";
import { GetServerSideProps } from "next";
import Image from "next/image";
import React from "react";

interface Props {
  staticContent: SignUpPageStaticContentType;
}

const SignupPage = ({ staticContent }: Props) => {
  return (
    <div className="relative">
      <div className="absolute top-[19.6%]   z-[-99]">
        <Image
          src={"/signUpDots/signUpDots.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>
      <div className="absolute top-[60.6%]   z-[-99]">
        <Image
          src={"/signUpDots/topLeftDots.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>
      <div className="absolute top-[79.6%] right-[43.5%]   z-[-99]">
        <Image
          src={"/signUpDots/middleDots.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>
      <div className="absolute top-[83.6%] right-0   z-[-99]">
        <Image
          src={"/signUpDots/bottomRightDots.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>
      <div className="mb-[10%]">

      <HeroSection staticContent={staticContent.heroSection} />
      </div>
      <AppWrapper>
        <SignUpSection staticContent={staticContent.loginSection} />
        <BenefitsSection staticContent={staticContent.benefitsSection} />
      </AppWrapper>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const locale = context.locale;

  const staticContentRes = await fetch("http://localhost:5000/signuppage");
  const staticContentData = await staticContentRes.json();

  // Get heroSection data based on locale
  let staticContent;
  if (locale) {
    staticContent = staticContentData[locale].staticContent;
  }

  return {
    props: {
      staticContent,
    },
  };
};

export default SignupPage;
