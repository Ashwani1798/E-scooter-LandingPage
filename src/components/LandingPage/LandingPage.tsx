import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import Container from "../Container";
import Gallery from "../Gallery";
import ProductInformation from "../ProductInformation";
import HeadingWithImage from "../HeadingWithImage";
import Footer from "../Footer";
import Newsletter from "../Newsletter";
import CarouselSection from "../CarouselSection";

import "../../styles/style.scss";
import stl from "./LandingPageStyle.module.scss";

const LandingPage = () => {
  return (
    <>
      <Container>
        <Navbar />
        <HeroSection />
        <ProductInformation />
        <HeadingWithImage />
        <Gallery />
        <CarouselSection />
        <Newsletter />
        <Footer />
      </Container>
    </>
  );
};

export default LandingPage;
