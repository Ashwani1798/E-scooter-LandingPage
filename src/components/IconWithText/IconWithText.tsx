import Image from "next/image";

import { icon } from "../DummyData/checkIcon";

import stl from "./IconWithTextStyle.module.scss";

type IconWithTextProp = {
  text: string;
};

const IconWithText = ({ text }: IconWithTextProp) => {
  return (
    <>
      <div className={stl.outerWrapper}>
        <Image src={icon} alt="check-icon" />
        <h6>{text}</h6>
      </div>
    </>
  );
};

export default IconWithText;
