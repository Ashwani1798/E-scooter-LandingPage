import Image from 'next/image'

import { starIcon} from "../../DummyData/CarouselSection";

import stl from "./CarouselCardStyle.module.scss"

type CarouselCardProps = {
  description: string;
  clientImg: string;
  clientName: string;
  clientProfile: string;
};

const CarouselCard = ({description, clientImg, clientName, clientProfile}:CarouselCardProps) => {
  return (
    <>
      <div className={stl.cardWrapper}>
        <div className={stl.cardStarIcon}>
          <Image src={starIcon} alt="stars" />
        </div>
        <div className={stl.cardDescription}>
          <h6>
            {description}
          </h6>
        </div>
        <div className={stl.clientInfoWrapper}>
          <div className={stl.clientImage}>
            <Image src={clientImg} alt="client-img" />
          </div>
          <div className={stl.clientDetails}>
            <p>{clientName}</p>
            <pre>{clientProfile}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselCard