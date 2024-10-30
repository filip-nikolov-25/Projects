import React from "react";
import AppContainer from "../base/AppContainer/AppContainer";
import AppSection from "../base/AppSection/AppSection";
import VideoDesc from "../base/VideoDesc/VideoDesc";
import SecondaryParagraph from "../base/SecondaryParagraph/SecondaryParagraph";
import HeroSection from "../whyourpage-isblack/HeroSection/HeroSection";
import UnlearningPart from "../base/UnlearningPart/UnlearningPart";
import AppButton from "../base/AppButton/AppButton";
import DiscussionSection from "../landing-page/DiscussionSection/DiscussionSection";
import ConnectLargerWorld from "../landing-page/ConnectLargerWorld/ConnectLargerWorld";
import JoinOurNewsletter from "../landing-page/JoinOurNewsLetter/JoinOurNewsletter";

export const Article = () => {
  const imageUrls = {
    img1: "../../../public/videoPageImgs/linkedIn.svg",
    img2: "../../../public/videoPageImgs/docs.svg",
    img3: "../../../public/videoPageImgs/clock.svg",
  };

  return (
    <div>
      <AppContainer>
        <AppSection>
          <HeroSection
            heading="Building Sustainable Happiness: Employee Well-being Strategies"
            paragraph={
              "Discover the keys to fostering long-term employee happiness and well-being in the workplace, while embracing sustainability practices."
            }
          />
          <VideoDesc imgUrl={imageUrls} videoLength="3" />
          <SecondaryParagraph>
            In today’s fast-paced corporate world, sustaining employee happiness
            goes beyond traditional perks. It requires a holistic approach that
            prioritizes well-being, growth, and environmental responsibility.
            From fostering a culture of inclusivity and support to implementing
            eco-friendly initiatives, creating sustainable happiness among
            employees is both an art and a science.
          </SecondaryParagraph>
        </AppSection>
      </AppContainer>
      <div>
        <img
          src="../../../public/articleImgs/articleImgSmile.png"
          className="w-100"
          alt="Smiling face"
        />
      </div>
      <AppContainer>
        <AppSection>
          <SecondaryParagraph>
            To begin, companies must cultivate a positive work environment that
            promotes work-life balance and mental health support. Flexible work
            arrangements, wellness programs, and access to counseling services
            are essential components. Additionally, investing in employee
            development and offering opportunities for skill enhancement can
            enhance job satisfaction and overall happiness.
          </SecondaryParagraph>
          <SecondaryParagraph>
            Furthermore, integrating sustainability practices into the workplace
            can significantly impact employee morale. Initiatives such as
            reducing carbon footprint, promoting recycling programs, and
            supporting ethical sourcing contribute to a sense of purpose and
            pride among employees. By aligning organizational values with
            sustainable practices, companies can inspire greater employee
            engagement and loyalty.
          </SecondaryParagraph>
          <div className="text-container">
            <HeroSection
              heading="call-to-action (CTA):"
              paragraph={
                "Conduct an Employee Well-being Assessment: Start by evaluating the current state of employee happiness and well-being in your organization. Gather feedback through surveys, focus groups, or one-on-one interviews to identify areas for improvement"
              }
            />
            <SecondaryParagraph>
              mplement Sustainable Happiness Initiatives: Based on the
              assessment findings, develop, and implement tailored strategies to
              enhance employee well-being while incorporating sustainability
              principles. This could include introducing flexible work
              arrangements, organizing wellness workshops, or launching
              eco-friendly initiative
            </SecondaryParagraph>
          </div>
          <div className="text-container">
            <HeroSection
              heading="additional elements:"
              paragraph={
                "Why this article? This article explores the intersection of employee happiness and sustainability, offering actionable insights for creating a positive workplace culture."
              }
            />
            <SecondaryParagraph>
              mplement Sustainable Happiness Initiatives: Based on the
              assessment findings, develop, and implement tailored strategies to
              enhance employee well-being while incorporating sustainability
              principles. This could include introducing flexible work
              arrangements, organizing wellness workshops, or launching
              eco-friendly initiative
            </SecondaryParagraph>
          </div>
          <HeroSection
            heading="additional reads:"
            paragraph={
              "The Happiness Advantage  Shawn Achor happiness Happiness - Sarah van Gelder"
            }
          />
          <UnlearningPart
            headerText="unlearning questions"
            mainTextFirst="How can your organization integrate sustainability practices to enhance employee happiness and well-being?"
            mainTextSecond=""
          />
          <div className="text-center">
            <AppButton
              width="40%"
              height="7vh"
              borderRadius="50px"
              borderColor="#FA6400"
            >
              continue discovering
            </AppButton>
          </div>
          <DiscussionSection />
          <ConnectLargerWorld />
          <JoinOurNewsletter />
        </AppSection>
      </AppContainer>
    </div>
  );
};
