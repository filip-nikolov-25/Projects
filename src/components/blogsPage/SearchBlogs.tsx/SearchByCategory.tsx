import AppButton from "@/components/base/AppButton";
import React from "react";

interface Props {
  setCategoryTerm: (category: string) => void;
  categoryTerm: string;
}

const SearchByCategory = ({ setCategoryTerm, categoryTerm }: Props) => {
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
          Сите
        </AppButton>
      </div>
      <div className="w-[10%] mr-5">
        <AppButton
          padding="5px"
          color={`${categoryTerm === "training" ? "#fff" : "#000"}`}
          width="100%"
          borderRadius="20px"
          backgroundColor={`${categoryTerm === "training" ? " #E87B22" : "#fff"}`}
          onClick={() => setCategoryTerm("training")}
        >
          Обучување
        </AppButton>
      </div>

      <div className="w-[10%] mr-5">
        <AppButton
          padding="5px"
          color={`${categoryTerm === "culture" ? "#fff" : "#000"}`}
          width="100%"
          borderRadius="20px"
          backgroundColor={`${categoryTerm === "culture" ? " #E87B22" : "#fff"}`}
          onClick={() => {
            setCategoryTerm("culture");
          }}
        >
          Culture
        </AppButton>
      </div>
    </div>
  );
};

export default SearchByCategory;
