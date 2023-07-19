import React from "react";
import stl from "./HeadingAndSubheadingStyle.module.scss";

type HeadingAndSubheadingProps = {
  heading: string;
  subHeading: string;
};

const HeadingAndSubheading = ({
  heading,
  subHeading,
}: HeadingAndSubheadingProps) => {
  return (
    <>
      <div className={stl.headingWrapper}>
        <h2>{heading}</h2>
        <h6>{subHeading}</h6>
      </div>
    </>
  );
};

export default HeadingAndSubheading;
