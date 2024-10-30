import { CurrentOpenedPageType } from "@/types/typesNew";
import React from "react";

interface Props {
  data: CurrentOpenedPageType;
}

const CurrentOpenedPage = ({ data }: Props) => {
  return (
    <p>
      {!data.second ? (
        <span className="mr-2 text-orange-500">{data.first}</span>
      ) : (
        <>
          <span className="mr-2">{data.first}</span>
          <span>&rarr;</span>
        </>
      )}

      <span className={`ml-2 mr-2 ${!data.third ? "text-orange-500" : ""}`}>
        {data.second}
      </span>

      {data.third && (
        <>
          <span>&rarr;</span>
          <span className={`text-orange-500 ml-2`}>{data.third}</span>
        </>
      )}
    </p>
  );
};

export default CurrentOpenedPage;
