import AppButton from "@/components/base/AppButton";
import { EventListingFilterSectionType } from "@/types/typesNew";
import React from "react";

interface Props {
  setCategoryTerm: (category: string) => void;
  categoryTerm: string;
  buttonText:EventListingFilterSectionType
}

const SearchSection = ({ setCategoryTerm, categoryTerm ,buttonText}: Props) => {
  return (
    <div className="w-full flex mt-5">
      <div className="w-[10%] mr-5">
        <AppButton
          padding="5px"
          width="100%"
          borderRadius="20px"
          backgroundColor={`${categoryTerm === "all" ? " #E87B22" : "#fff"}`}
          color={`${categoryTerm === "all" ? "#fff" : "#000"}`}
          onClick={() => {
            setCategoryTerm("all");
          }}
        >
         {buttonText.firstButton}
        </AppButton>
      </div>
      <div className="w-[10%] mr-5">
        <AppButton
          padding="5px"
          color={`${categoryTerm === "hrCoffee" ? "#fff" : "#000"}`}
          width="100%"
          borderRadius="20px"
          backgroundColor={`${
            categoryTerm === "hrCoffee" ? " #E87B22" : "#fff"
          }`}
          onClick={() => setCategoryTerm("hrCoffee")}
        >
     {buttonText.secondButton}
        </AppButton>
      </div>

      <div className="w-[10%] mr-5">
        <AppButton
          padding="5px"
          color={`${categoryTerm === "hrWeekend" ? "#fff" : "#000"}`}
          width="100%"
          borderRadius="20px"
          backgroundColor={`${
            categoryTerm === "hrWeekend" ? " #E87B22" : "#fff"
          }`}
          onClick={() => {
            setCategoryTerm("hrWeekend");
          }}
        >
          {buttonText.thirdButton}
        </AppButton>
      </div>
      <div className="w-[10%] mr-5">
        <AppButton
          padding="5px"
          color={`${categoryTerm === "hrWebinar" ? "#fff" : "#000"}`}
          width="100%"
          borderRadius="20px"
          backgroundColor={`${
            categoryTerm === "hrWebinar" ? " #E87B22" : "#fff"
          }`}
          onClick={() => {
            setCategoryTerm("hrWebinar");
          }}
        >
         {buttonText.fourthButton}
        </AppButton>
      </div>
      <div className="w-[10%] mr-5">
        <AppButton
          padding="5px"
          color={`${categoryTerm === "hrConferences" ? "#fff" : "#000"}`}
          width="100%"
          borderRadius="20px"
          backgroundColor={`${
            categoryTerm === "hrConferences" ? " #E87B22" : "#fff"
          }`}
          onClick={() => {
            setCategoryTerm("hrConferences");
          }}
        >
         {buttonText.fifthButton}
        </AppButton>
        
  
      </div>
    </div>
  );
};

export default SearchSection;
