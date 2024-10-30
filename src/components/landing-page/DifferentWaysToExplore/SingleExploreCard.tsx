import React, { ReactNode } from "react";
import LeadParagraph from "../../base/LeadParagraph/LeadParagraph";
import { CardTitle } from "react-bootstrap";
import { Link } from "react-router-dom";

type Props = {
  radiusBottomLeft: string;
  radiusBottomRight: string;
  mostPopular: boolean;
  free: boolean;
  team: boolean;
  children?: ReactNode;
  title: string;
  price: number;
};

const SingleExploreCard = ({ radiusBottomLeft, radiusBottomRight, mostPopular, free, team, children, title, price }: Props) => {
  return (
    <div
      className="card-membership-container-a"
      style={{
        borderBottomLeftRadius: radiusBottomLeft,
        borderBottomRightRadius: radiusBottomRight,
        backgroundColor: mostPopular ? "#7323F4" : "",
      }}
    >
      {mostPopular && (
        <div className="most-popular-container">
          <p>most popular!</p>
          <img className="most-popular-offer-badge" src="../../../../public/images/landing-page/different-ways-to-explore/mostPopular.svg" />
        </div>
      )}
      <LeadParagraph>{title}</LeadParagraph>
      <p className="price">{price}€</p>
      <p className="price-type">{team ? "enterprise" : "user"}/monthly</p>
      {!free ? (
        <Link className="subscribe-button-container" to={"/membership"}>
          <button className="firstBtn">free for 30 days</button> <button className="secondBtn">buy now</button>
        </Link>
      ) : (
        <Link className="subscribe-button-container" to={"/membership"}>
          <button className="firstBtn">free no cc required</button>
        </Link>
      )}
      {children}
    </div>
  );
};

export default SingleExploreCard;
