import React from "react";
import MainSection from "../../components/whyourpage-isblack/MainSection/MainSection";
import HeroSection from "../../components/whyourpage-isblack/HeroSection/HeroSection";

const WhyOurPageIsBlack = () => {
  const userCards = [
    {
      userImg: "../../../../public/whyOurPageIsBlackImgs/dummyWhiteImg.avif",
      description: "All larger.world content is hosted on green servers, running on solar energy.",
    },
    {
      userImg: "../../../../public/whyOurPageIsBlackImgs/dummyWhiteImg.avif",
      description: "Black backgrounds on screens contribute to energy conservation...",
    },
    {
      userImg: "../../../../public/whyOurPageIsBlackImgs/dummyWhiteImg.avif",
      description: "We track our digital carbon footprint on a weekly basis.",
    },
    {
      userImg: "../../../../public/whyOurPageIsBlackImgs/dummyWhiteImg.avif",
      description: "We track our digital carbon footprint on a weekly basis.",
    },
    {
      userImg: "../../../../public/whyOurPageIsBlackImgs/dummyWhiteImg.avif",
      description: "We track our digital carbon footprint on a weekly basis.",
    },
  ];
  return (
    <>
      <HeroSection
        heading="carbon neutrality efforts"
        paragraph="As the climate crisis deepens, we need to save every drop of energy that we can. Larger.world was committed to putting together the most regenerative, green and mindful digital space there is. To do so was not easy, and in many ways, we failed our expectations. But what we managed to do is to have an A+ carbon footprint page, and a lot of knowledge on where we need to improve, learn and unlearn."
      />
      <HeroSection heading="another heading" paragraph="Here is another paragraph content that can be dynamically changed." />

      <MainSection title="some title asdasdw" userCards={userCards} logoText={""} />
    </>
  );
};

export default WhyOurPageIsBlack;
