import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";

import Button from "../Button";
import { navbarData } from "../DummyData/Navbar";

import stl from "./NavbarStyle.module.scss";

const Navbar = () => {
  const { navlogo, navPages, navBtns } = navbarData;
  return (
    <>
      <div className={stl.navbarContainer}>
        <div className={stl.navbarWrapper}>
          <div className={stl.navLogo}>
            <Image src={navlogo} alt="Nav-logo" />
          </div>
          <div className={stl.navPages}>
            {navPages.map((data, index) => (
              <div key={index} className={stl.navLinks}>
                <Link href="#">{data}</Link>
              </div>
            ))}
          </div>
          <div className={stl.navBtns}>
            {navBtns.map((data, index) => (
              <div key={index}>
                <Button btnText={data} />
              </div>
            ))}
          </div>
        </div>
        <div className={stl.mobileNavbarWrapper}>
          <div className={stl.navLogo}>
            <Image src={navlogo} alt="Nav-logo" />
          </div>
          <MenuIcon></MenuIcon>
        </div>
      </div>
    </>
  );
};

export default Navbar;
