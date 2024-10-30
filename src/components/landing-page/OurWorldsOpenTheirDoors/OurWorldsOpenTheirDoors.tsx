import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import AppButton from "../../base/AppButton/AppButton";
import AppContainer from "../../base/AppContainer/AppContainer";
import AppSection from "../../base/AppSection/AppSection";
import Heading2 from "../../base/Heading2/Heading2";
import PrimaryParagraph from "../../base/PrimaryParagraph/PrimaryParagraph";

interface Flower {
  image: string;
  text: string;
  disabled: boolean;
  link?: string; // Add a link property
}

interface OurWorldsOpenTheirDoorsProps {
  heading: string;
  showButton?: boolean;
  buttonText?: string;
}

const flowers: Flower[] = [
  {
    image: "planet-earth.svg",
    text: "planet earth",
    disabled: false,
    link: "/planet-earth", // Relative link for the first flower
  },
  {
    image: "co-creators.svg",
    text: "co creators",
    disabled: false,
    link: "/co-creators", // Relative link for the second flower
  },
  {
    image: "community.svg",
    text: "community",
    disabled: true,
  },
  {
    image: "customers-users.svg",
    text: "customers/users",
    disabled: true,
  },
  {
    image: "funders-investors.svg",
    text: "funders/investors",
    disabled: true,
  },
];

const OurWorldsOpenTheirDoors: React.FC<OurWorldsOpenTheirDoorsProps> = ({
  heading,
  showButton = true,
  buttonText,
}) => {
  return (
    <AppContainer>
      <AppSection>
        <Heading2>{heading}</Heading2>

        <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap">
          {flowers.map((flower, id) => (
            <div
              key={id}
              className={flower.disabled ? "blur-2px" : "cursor-pointer"}
            >
              {flower.disabled ? (
                <div className="position-relative">
                  <img
                    src="/images/landing-page/our-worlds-open-their-doors/flower.svg"
                    alt=""
                    className={flower.disabled ? "" : "rotatable-image"}
                  />
                  <img
                    src={`/images/landing-page/our-worlds-open-their-doors/${flower.image}`}
                    alt=""
                    className="position-absolute top-50 start-50 translate-middle"
                  />
                </div>
              ) : (
                <Link to={flower.link || "#"} className="position-relative">
                  <img
                    src="/images/landing-page/our-worlds-open-their-doors/flower.svg"
                    alt=""
                    className="rotatable-image"
                  />
                  <img
                    src={`/images/landing-page/our-worlds-open-their-doors/${flower.image}`}
                    alt=""
                    className="position-absolute top-50 start-50 translate-middle"
                  />
                </Link>
              )}
              <div
                className={`text-center mt-5 ${
                  flower.disabled ? "text-white" : "app-text-primary"
                }`}
              >
                <PrimaryParagraph>{flower.text}</PrimaryParagraph>
              </div>
            </div>
          ))}
        </div>
        {showButton && (
          <div className="text-center">
            <AppButton height="76px" width="416px" borderRadius="60px">
              {buttonText}
            </AppButton>
          </div>
        )}
      </AppSection>
    </AppContainer>
  );
};

export default OurWorldsOpenTheirDoors;
