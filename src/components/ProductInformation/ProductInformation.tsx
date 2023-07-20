import Image from "next/image";

import HeadingAndSubheading from "../HeadingAndSubheading";
import IconWithText from "../IconWithText/IconWithText";

import { heading, img, featureslist } from "../DummyData/ProductInformation";

import stl from "./ProductInformationStyle.module.scss";

const ProductInformation = () => {
  const headingData = heading;
  const features = featureslist;
  return (
    <>
      <div className={stl.productInfoWrapper}>
        <HeadingAndSubheading
          heading={headingData[0]}
          subHeading={headingData[1]}
        />
        <div className={stl.contentWrapper}>
          <div className={stl.leftContent}>
            <Image src={img} alt="eScooter" />
          </div>
          <div className={stl.rightContent}>
            {features.map((data, index) => (
              <div className={stl.list} key={index}>
                <IconWithText text={data} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInformation;
