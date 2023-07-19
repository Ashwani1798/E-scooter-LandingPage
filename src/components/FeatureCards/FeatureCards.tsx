import React from 'react'



type FeatureCardsProp = {
largeText: string,
subText : string,
description : string,
}

import stl from "./FeatureCardsStyle.module.scss"
const FeatureCards = ({largeText, subText, description}: FeatureCardsProp) => {
  return (
    <>
      <div className={stl.FeatureCardWrapper}>
        <div className={stl.textWrapper}>
          <div className={stl.boldText}>
            <h3>{largeText} <span>{subText}</span></h3>
          </div>
          <div className={stl.lightText}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureCards