import Image from "next/image";

import { footerImg, footerLinks, Copyright } from "../DummyData/Footer";

import stl from "./FooterStyle.module.scss";

const Footer = () => {
  return (
    <>
      <div className={stl.footerWrapper}>
        <div className={stl.footerContent}>
          <div className={stl.footerImg}>
            <Image src={footerImg} alt="eScooter" />
          </div>
          <div className={stl.footerLinks}>
            <div className={stl.innerLinkWrapper}>
              {footerLinks.map((data, index) => (
                <div key={index} className={stl.listHeading}>
                  <h5>{data.heading}</h5>
                  <div className={stl.subLinks}>
                    {footerLinks[index].links.map((data, index) => (
                      <div key={index}>
                        <p>{data}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={stl.copyright}>
          <p>{Copyright}</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
