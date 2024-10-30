import React from "react";
import { DemoData } from "../../../pages/Explore/Explore";
import DemoCard from "../../base/DemoCard/DemoCard";
import AppContainer from "../../base/AppContainer/AppContainer";
import AppSection from "../../base/AppSection/AppSection";
import { Link } from "react-router-dom";

interface Props {
  data: DemoData[];
}

const ExploreCardSection = ({ data }: Props) => {
  return (
    <div>
      <AppContainer>
        <AppSection>
          {data.map((card,i) => (
            <Link key={i} to={card.link}>
              <DemoCard {...card} />
            </Link>
          ))}
        </AppSection>
      </AppContainer>
    </div>
  );
};

export default ExploreCardSection;
