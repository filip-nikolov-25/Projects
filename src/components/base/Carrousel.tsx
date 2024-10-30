import React from "react";
import CarrouselCard from "./CarrouselCard";
import Image from "next/image";
import { EventCarouselType } from "@/types/typesNew";
import Link from "next/link";

interface Props {
  carrouselData: EventCarouselType[] | null;
}
const Carrousel = ({ carrouselData }: Props) => {
  return (
    <div className="carousel-container relative ">

      <div className="carousel-parent z-10">
        {carrouselData?.map((carrouselCard) => {
          return (
            <Link
              href={`/singleevent/${carrouselCard.id}`}
              key={carrouselCard.id}
            >
              <CarrouselCard {...carrouselCard} />
            </Link>
          );
        })}
      </div>
      <div className="carousel-parent">
        {carrouselData?.map((carrouselCard) => {
          return (
            <Link
              href={`/singleevent/${carrouselCard.id}`}
              key={carrouselCard.id}
            >
              <CarrouselCard {...carrouselCard} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Carrousel;
