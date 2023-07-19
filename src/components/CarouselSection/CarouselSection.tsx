import React from "react";
import CarouselCard from "./CarouselCard";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import HeadingAndSubheading from "../HeadingAndSubheading";
import { heading, clientCard } from "../DummyData/CarouselSection";
import stl from "./CarouselStyle.module.scss";

const CarouselSection = () => {
  return (
    <>
      <div className={stl.carouselOuterContainer}>
        <HeadingAndSubheading heading={heading} subHeading={""} />
        <div className={stl.carouselContainer}>
          {clientCard.map((data, index) => (
            <CarouselCard
              description={data.cardDescription}
              clientImg={data.clientImg}
              clientName={data.clientName}
              clientProfile={data.clientProfile}
            />
          ))}
        </div>
        <div className={stl.carouselBtnContainer}>
          <ArrowCircleLeftIcon sx={{ fontSize: 42 }} />
          <ArrowCircleRightIcon sx={{ fontSize: 42 }} />
        </div>
      </div>
    </>
  );
};

export default CarouselSection;
