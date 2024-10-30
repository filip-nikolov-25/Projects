import React from "react";
import HeroSection from "../../components/whyourpage-isblack/HeroSection/HeroSection";
import MainSection, { UserCardData } from "../../components/whyourpage-isblack/MainSection/MainSection";
import ConnectLargerWorld from "../../components/landing-page/ConnectLargerWorld/ConnectLargerWorld";
import JoinOurNewsletter from "../../components/landing-page/JoinOurNewsLetter/JoinOurNewsletter";
import Accordion from "../../components/base/Accordion/Accordion";

const AboutPage = () => {
  const paragraphLines = [
    "At larger.world, we are dedicated to fostering sustainability, diversity, and inclusion in the business world.",
    "Our unique unlearning platform provides professionals with green, mindful, and safe spaces to explore new ideas, inclusive narratives, and artistic expressions.",
    "Through our continuous learning workshops, we enable participants to apply fresh concepts and create regenerative and inclusive work environments.",
  ];
  const paragraphLines2 = [
    "by supporting and nurturing unlearning pathways, we unravel dysfunctional systems thwarted by theory, best practice, and hyper-focused growth strategies.",
    "we start rebuilding workplaces through cognitive ways of reflection and implementation, fostering a mindset of continuous learning and growth.",
  ];
  const paragraphLines3 = [
    "n all services provided by larger.world, our facilitators and co-facilitators are instrumental in guiding discussions, fostering inclusivity, and promoting critical thinking.",
    "we collected tools, tips and stories from all across the globe to bring new perspective to existing problems.",
    "whether it's workshops, events, or other engagements, they bring diverse expertise to create collaborative learning experiences.",
  ];
  const teamMembers: UserCardData[] = [
    { description: "bistra kumbaroska", userImg: "../../../public/images/aboutPage/ourTeam/bistra.svg", position: "founder", padding: "10px" },
    {
      description: "lindita fetiu",
      userImg: "../../../public/images/aboutPage/ourTeam/lindita.svg",
      position: "content & social medium",
      padding: "100px",
    },
    {
      description: "christina forster",
      userImg: "../../../public/images/aboutPage/ourTeam/christina.svg",
      position: "editor in chief",
      padding: "200px",
    },
    {
      description: "guillermo cereza",
      userImg: "../../../public/images/aboutPage/ourTeam/guillermo.svg",
      position: "design & tech",
      padding: "200px",
    },
    {
      description: "jacqueline kressner",
      userImg: "../../../public/images/aboutPage/ourTeam/jackqueline.svg",
      position: "business development & sales",
      padding: "100px",
    },
    {
      description: "barbara inmann",
      userImg: "../../../public/images/aboutPage/ourTeam/barbara.svg",
      position: "head of board of advisors",
      padding: "10px",
    },
  ];
  return (
    <>
      <HeroSection
        heading="about"
        paragraph={paragraphLines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index == 1 && <br />}
            <br />
          </React.Fragment>
        ))}
      />
      <div className="d-flex w-100 justify-content-center">
        <img src="../../../public/images/aboutPage/ourTeam/underAbout.svg" alt="" />
      </div>
      <HeroSection
        heading="why unlearning methodology?"
        paragraph={paragraphLines2.map((line, index) => (
          <React.Fragment key={index}>
            {line}

            <br />
          </React.Fragment>
        ))}
      />
      <div className="d-flex w-100 justify-content-center">
        <img src="../../../public/images/aboutPage/ourTeam/trees.svg" alt="" />
      </div>
      <HeroSection
        heading="who we are?"
        paragraph={paragraphLines3.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index == 1 && <br />}
            <br />
          </React.Fragment>
        ))}
      />
      <MainSection
        title={"our team"}
        userCards={teamMembers}
        logoText="what if the way we 
respond to the
planetary and human 
crisis is (part of) 
the crisis?"
      />
      <ConnectLargerWorld />
      <Accordion />
      <JoinOurNewsletter />
    </>
  );
};

export default AboutPage;
