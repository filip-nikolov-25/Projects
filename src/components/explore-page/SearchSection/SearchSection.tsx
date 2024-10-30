import React, { useState } from "react";
import "./explore.css"; // Import your custom CSS file
import AppContainer from "../../base/AppContainer/AppContainer";
import AppSection from "../../base/AppSection/AppSection";
import AppButton from "../../base/AppButton/AppButton";
import SecondaryParagraph from "../../base/SecondaryParagraph/SecondaryParagraph";

interface Props {
  setClickedTerm: (value: string) => void;
  setSearchTerm: (value: string) => void;
}

const SearchSection = ({ setClickedTerm, setSearchTerm }: Props) => {
  const [activeTerm, setActiveTerm] = useState<string>("all");
  const [searchTerm, setSearchTermState] = useState<string>("");

  const handleClick = (value: string) => {
    setClickedTerm(value);
    setActiveTerm(value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTermState(event.target.value);
  };

  const handleSearchClick = () => {
    setSearchTerm(searchTerm);
    setClickedTerm(activeTerm); 
  };

  return (
    <div>
      <AppContainer>
        <AppSection>
          <div>
            <h2 className="headerText">Explore</h2>
            <div className="orange-border-bottom"></div>
            <SecondaryParagraph>
              embrace your journey of unlearning in any order you feel
              comfortable with.{" "}
            </SecondaryParagraph>
          </div>
          <div className="d-flex align-items-center mb-3 mt-5">
            <input
              type="text"
              placeholder="Search"
              onChange={handleInputChange}
              className="custom-input form-control"
            />
          </div>
          <div className="d-flex align-items-center mb-3">
            <span
              onClick={() => handleClick("all")}
              className={`filter-option ${
                activeTerm === "all" ? "active" : ""
              }`}
            >
              all
            </span>
            <span
              onClick={() => handleClick("article")}
              className={`filter-option ${
                activeTerm === "article" ? "active" : ""
              }`}
            >
              article
            </span>
            <span
              onClick={() => handleClick("document")}
              className={`filter-option ${
                activeTerm === "document" ? "active" : ""
              }`}
            >
              document
            </span>
            <span
              onClick={() => handleClick("event")}
              className={`filter-option ${
                activeTerm === "event" ? "active" : ""
              }`}
            >
              event
            </span>
            <span
              onClick={() => handleClick("podcast")}
              className={`filter-option ${
                activeTerm === "podcast" ? "active" : ""
              }`}
            >
              podcast
            </span>
            <span
              onClick={() => handleClick("video")}
              className={`filter-option ${
                activeTerm === "video" ? "active" : ""
              }`}
            >
              video
            </span>
            <b className="color-light-gray me-4">|</b>
            <select
              name=""
              id=""
              className="ml-3 filter-select"
              onChange={(e) => handleClick(e.target.value)}
            >
              <option value="planet-earth">planet-earth</option>
              <option value="co-creators">co-creators</option>
            </select>
          </div>

          <div className="mt-3">
            <AppButton
              width="30%"
              height="7vh"
              borderRadius="20px"
              onClick={handleSearchClick}
            >
              Search
            </AppButton>
          </div>
        </AppSection>
      </AppContainer>
    </div>
  );
};

export default SearchSection;
