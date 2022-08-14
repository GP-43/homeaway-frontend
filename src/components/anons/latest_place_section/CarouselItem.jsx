import React from "react";
import LatestPlaceCard from "./LatestPlaceCard";

function CarouselItem(props) {
  return (
              <LatestPlaceCard
                  description={props.description}
                  src={props.src}
                  date={props.date}
                />
  );
}

export default CarouselItem;
