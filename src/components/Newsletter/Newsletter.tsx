import React from 'react'

import {heading} from "../DummyData/Newsletter"

import stl from "./NewsletterStyle.module.scss"
import HeadingAndSubheading from '../HeadingAndSubheading'
const Newsletter = () => {
  return (
    <>
      <div className={stl.newsletterWrapper}>
        <HeadingAndSubheading heading={heading[0]} subHeading={heading[1]} />
        <div className={stl.newsLetterForm}>
          
            <input
              className={stl.input}
              type="text"
              placeholder="Enter your email."
            />
          
          <button>Get start</button>
        </div>
      </div>
    </>
  );
}

export default Newsletter