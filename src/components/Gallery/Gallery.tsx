import Image from "next/image";

import GalleryBtn from "./GalleryBtn";

import HeadingAndSubheading from "../HeadingAndSubheading";
import { heading, imagesAndText, btnData } from "../DummyData/Gallery";

import stl from "./GalleryStyle.module.scss";

const Gallery = () => {
  const headingData = heading;
  const images = imagesAndText;
  const galleryBtnData = btnData;
  return (
    <>
      <div className={stl.galleryWrapper}>
        <HeadingAndSubheading
          heading={headingData[0]}
          subHeading={headingData[1]}
        />
        <div className={stl.contentWrapper}>
          <div className={stl.leftWrapper}>
            <div className={stl.leftImg}>
              <h4>{images[1].imgText}</h4>
              <Image src={images[1].img} alt="Scooter" />
            </div>
            <div className={stl.btnwrapper}>
              {galleryBtnData.map((data, index) => (
                <div key={index}>
                  <GalleryBtn btnText={data} />
                </div>
              ))}
            </div>
          </div>
          <div className={stl.rightWrapper}>
            <div className={stl.topImage}>
              <h4>{images[0].imgText}</h4>
              <Image src={images[0].img} alt="Built Quality" />
            </div>
            <div className={stl.bottomImage}>
              <h4>{images[2].imgText}</h4>
              <Image src={images[2].img} alt="Parts" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
