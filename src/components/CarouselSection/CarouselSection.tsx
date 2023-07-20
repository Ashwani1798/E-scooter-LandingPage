"use client";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import CarouselCard from "./CarouselCard";
import HeadingAndSubheading from "../HeadingAndSubheading";
import { heading, clientCard } from "../DummyData/CarouselSection";

import "@splidejs/react-splide/css";
import stl from "./CarouselStyle.module.scss";

const CarouselSection = () => {
  return (
    <>
      <div className={stl.carouselOuterContainer}>
        <HeadingAndSubheading heading={heading} subHeading={""} />
        <div className={stl.carouselInnerContainer}>
          <Splide
            options={{
              perPage: 3,
              arrows: false,
              pagination: false,
              drag: "free",
              type: "loop",
              autoScroll: {
                speed: 0.5,
              },
              breakpoints: {
                1280: {
                  perPage: 10,
                },
                960: {
                  perPage: 3,
                },
                768: {
                  perPage: 3,
                },
              },
            }}
            extensions={{ AutoScroll }}
          >
            {clientCard.map((data, index) => (
              <SplideSlide key={index}>
                <div className={stl.carouselContainer}>
                  <CarouselCard
                    description={data.cardDescription}
                    clientImg={data.clientImg}
                    clientName={data.clientName}
                    clientProfile={data.clientProfile}
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>
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
