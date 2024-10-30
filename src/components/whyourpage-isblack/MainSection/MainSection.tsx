import React from "react";
import "../MainSection/mainsection.css";
import AppContainer from "../../base/AppContainer/AppContainer";
import AppSection from "../../base/AppSection/AppSection";
import Heading2 from "../../base/Heading2/Heading2";
import UserCard from "../../base/UserCard/UserCard";
import SecondaryParagraph from "../../base/SecondaryParagraph/SecondaryParagraph";

export interface UserCardData {
  userImg: string;
  description: string;
  position?: string;
  padding?: string | undefined;
}

interface MainSectionProps {
  title: string;
  userCards: UserCardData[];
  additionalText?: string;
  additionalLink?: string;
  linkUrl?: string;
  logoText: string;
}

const MainSection: React.FC<MainSectionProps> = ({ title, userCards, additionalText, additionalLink, linkUrl, logoText }) => {
  return (
    <div>
      <AppContainer>
        <AppSection>
          <Heading2>{title}</Heading2>
          <div className="row">
            <div className="col-12 col-md-6 w-50 d-flex justify-content-center align-items-center text-container-team-members">
              <svg xmlns="http://www.w3.org/2000/svg" width="523" height="525" viewBox="0 0 523 525" fill="none">
                <path
                  d="M422.486 234.663L394.702 235.481L420.852 225.656C498.484 192.906 508.291 174.894 502.57 160.975C496.85 147.056 477.237 142.144 398.788 174.894L378.358 183.9L394.702 167.525C454.356 108.575 457.625 88.1062 446.184 77.4625C435.561 66.8187 415.131 69.275 356.294 129.044C349.551 135.666 343.01 142.492 336.681 149.513L348.122 124.131C379.992 45.5312 374.272 25.0625 359.562 20.15C345.67 14.4188 327.692 24.2437 295.822 102.844L287.65 124.131V101.206C289.284 16.875 277.844 0.5 261.5 0.5C245.156 0.5 233.716 16.875 233.716 101.206L234.533 129.044L224.727 102.844C192.039 25.0625 174.061 15.2375 160.169 20.9688C146.277 26.7 141.373 46.35 174.061 124.95L183.05 145.419L166.706 129.044C107.869 69.275 87.4391 66 76.8156 77.4625C65.375 88.1062 68.6437 108.575 128.298 167.525C134.908 174.281 141.721 180.834 148.728 187.175L122.578 175.712C44.9453 143.781 24.5156 149.512 19.6125 164.25C13.8922 178.169 23.6984 196.181 102.148 228.112L123.395 236.3H100.514C16.3438 234.662 0 246.125 0 262.5C0 278.875 16.3438 290.338 100.514 290.338L128.298 289.519L102.148 299.344C24.5156 332.094 14.7094 350.106 20.4297 364.025C26.15 377.944 45.7625 382.856 124.213 350.106L144.642 341.1L128.298 357.475C68.6437 416.425 65.375 436.894 76.8156 447.537C87.4391 459 107.869 455.725 166.706 395.956L185.502 377.125L174.878 401.688C143.008 479.469 148.728 499.938 162.62 504.85C176.512 510.581 194.491 499.938 226.361 422.156L234.533 400.05V423.794C233.716 508.125 245.156 524.5 261.5 524.5C277.844 524.5 289.284 508.125 289.284 423.794L288.467 397.594L298.273 422.156C330.961 499.938 348.939 509.763 362.831 504.031C376.723 498.3 381.627 477.831 348.939 400.05L339.95 379.581L356.294 395.956C415.131 455.725 435.561 458.181 446.184 447.537C456.808 436.894 454.356 416.425 394.702 357.475C388.092 350.719 381.279 344.166 374.272 337.825L399.605 349.287C478.055 381.219 497.667 375.487 503.387 361.569C509.108 347.65 498.484 329.637 420.852 297.706L399.605 289.519H422.486C506.656 290.337 523 278.875 523 262.5C523 246.125 506.656 234.663 422.486 234.663Z"
                  fill="#7323F4"
                />
              </svg>
              <p className="logo-text-nm235">{logoText}</p>
            </div>
            <div className="comment-container col-12 col-md-6 d-flex flex-column justify-content-between team-members-container">
              {userCards.map((card, index) => (
                <UserCard key={index} userImg={card.userImg} description={card.description} position={card.position} padding={card.padding} />
              ))}
            </div>
          </div>
          {additionalText && (
            <div className="mt-5">
              <SecondaryParagraph>
                {additionalText}{" "}
                {linkUrl && (
                  <a href={linkUrl} className="custom-orange">
                    {additionalLink}
                  </a>
                )}
              </SecondaryParagraph>
            </div>
          )}
        </AppSection>
      </AppContainer>
    </div>
  );
};

export default MainSection;
