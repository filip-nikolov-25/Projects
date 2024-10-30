import React from "react";
import AppContainer from "../../base/AppContainer/AppContainer";
import AppSection from "../../base/AppSection/AppSection";
import Heading1 from "../../base/Heading1/Heading1";
import "./UnlearningWorkshop.css";
import SecondaryParagraph from "../../base/SecondaryParagraph/SecondaryParagraph";
import AppButton from "../../base/AppButton/AppButton";
import LeadParagraph from "../../base/LeadParagraph/LeadParagraph";

const UnlearningWorkshop = () => {
  return (
    <AppContainer>
      <AppSection>
        <Heading1>unlearning workshop</Heading1>
        <div className="unlearning-workshop">
          <div className="left-side-container">
            <LeadParagraph>october, 2024</LeadParagraph>
            <div className="table-row">
              <div className="left-side">
                <p>objective</p>
              </div>
              <div className="right-side">
                <ul>
                  <li>
                    <SecondaryParagraph>team empowerment and synchronisation</SecondaryParagraph>
                  </li>
                  <li>
                    <SecondaryParagraph>intercultural work design, raising awareness and</SecondaryParagraph>
                  </li>
                  <li>
                    <SecondaryParagraph>hosting uncomfortable conversations that impact your teams and their performance</SecondaryParagraph>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="table-row">
              <div className="left-side">
                <p>course outline</p>
              </div>
              <div className="right-side">
                <ul>
                  <li>
                    <SecondaryParagraph>one-day in-person workshop with two facilitators for your entire team</SecondaryParagraph>
                  </li>
                  <li>
                    <SecondaryParagraph>6 months access to premium online content</SecondaryParagraph>
                  </li>
                  <li>
                    <SecondaryParagraph>3 hours of online follow-up training</SecondaryParagraph>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="table-row">
              <div className="left-side">
                <p>target audience</p>
              </div>
              <div className="right-side">
                <ul>
                  <li>
                    <SecondaryParagraph>DE&I and Sustainability Managers, Teams, Departments</SecondaryParagraph>
                  </li>
                  <li>
                    <SecondaryParagraph>Business Managers & Owners running large international teams</SecondaryParagraph>
                  </li>
                  <li>
                    <SecondaryParagraph>NGOs, Philanthropists, International Development Organisations</SecondaryParagraph>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="table-row">
              <div className="left-side">
                <p className="font-weight-bold">outcomes</p>
              </div>
              <div className="right-side">
                <ul>
                  <li className="font-weight-bold">
                    <SecondaryParagraph>teams, employees, employers will maintain a better sense of community</SecondaryParagraph>{" "}
                  </li>
                  <li className="font-weight-bold">
                    <SecondaryParagraph>respond better to market needs</SecondaryParagraph>
                  </li>
                  <li className="font-weight-bold">
                    <SecondaryParagraph>innovate with a higher degree of success and deliver better results</SecondaryParagraph>
                  </li>
                </ul>
              </div>
            </div>
            <AppButton children={"book your workshop"} borderRadius="60px" height="76px" width="416px" />
          </div>
          <div className="right-side-container">
            <div className="tree-holder">
            <p className="custom-paragraph-a">growth mindset</p>
              <img src="../../../../public/images/landing-page/unlearning-workshop/tree-icons/challenges.svg" alt="" className="challenges" />
              <img src="../../../../public/images/landing-page/unlearning-workshop/tree-icons/obstacles.svg" alt="" className="obstacles" />
              <img src="../../../../public/images/landing-page/unlearning-workshop/tree-icons/effort.svg" alt="" className="effort" />
              <img src="../../../../public/images/landing-page/unlearning-workshop/tree-icons/success.svg" alt="" className="success" />
              <img src="../../../../public/images/landing-page/unlearning-workshop/tree-icons/criticism.svg" alt="" className="criticism" />
              <img src="../../../../public/images/landing-page/unlearning-workshop/growth-mindset.svg" alt="" className="whole-tree" />
              <p className="tree-paragraph p-challenges">challenges</p>
              <p className="tree-paragraph p-obstacles">obstacles</p>
              <p className="tree-paragraph p-effort">effort</p>
              <p className="tree-paragraph p-success">success</p>
              <p className="tree-paragraph p-criticism">criticism</p>
            </div>
          </div>
        </div>
      </AppSection>
    </AppContainer>
  );
};

export default UnlearningWorkshop;
