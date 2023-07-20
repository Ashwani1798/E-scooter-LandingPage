import Image from "next/image";

import HeadingAndSubheading from "../HeadingAndSubheading";
import { wheelMotor, heading } from "../DummyData/HeadingWithImage";

import stl from "./HeadingWithImageStyle.module.scss";

const HeadingWithImage = () => {
  return (
    <>
      <div className={stl.outerWrapper}>
        <HeadingAndSubheading heading={heading[0]} subHeading={heading[1]} />
        <div className={stl.imageWrapper}>
          <Image src={wheelMotor} alt="Wheel-Motor" />
        </div>
      </div>
    </>
  );
};

export default HeadingWithImage;
