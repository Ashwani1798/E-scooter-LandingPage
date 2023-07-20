import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { heroSectionData } from "../DummyData/HeroSection";

import Image from "next/image";

import FeatureCards from "../FeatureCards";
import { FeatureCardsData } from "../DummyData/FeaturCards.js";

import stl from "./HeroSectionStyle.module.scss";

const HeroSection = () => {
  const { escooter, heading, boldHeading, subHeading } = heroSectionData;
  const feature = FeatureCardsData;
  return (
    <>
      <div className={stl.heroSectionWrapper}>
        <div className={stl.leftTextData}>
          <div className={stl.mainHeading}>
            <h1>
              {heading} <span>{boldHeading}</span>
            </h1>
          </div>
          <div className={stl.divider}></div>
          <div className={stl.subHeading}>
            <h5>{subHeading}</h5>
          </div>
          <div className={stl.featuredBtns}>
            <div className={stl.arrowbtnWrapper}>
              <div className={stl.arrowBtn}>
                <ArrowRightAltIcon
                  className={stl.arrowicon}
                  sx={{ color: "#F7EAE3", fontSize: 35 }}
                />
              </div>
              <div className={stl.arrowBtnText}>
                <h6>Buy now</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={stl.HeroBannerImage}>
          <Image src={escooter} alt="Banner-Scooter" />
        </div>
      </div>
      <div className={stl.featureCardsWrapper}>
        {feature.map((data, index) => (
          <div key={index}>
            <FeatureCards
              largeText={data.largeText}
              subText={data.subText}
              description={data.description}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroSection;
