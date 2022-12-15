import "../styles/Nav.css";
import Logo from "../../src/assets/logo.svg";
import MobileMenu from "../../src/assets/icon-menu.svg";
import MobileMenuList from "./MobileMenuList";
import { useState } from "react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='mobile-navbar'>
        <img src={Logo} alt='Website Logo' />

        <img
          src={MobileMenu}
          alt='Mobile Nav open menu'
          onClick={() => setOpen(!open)}
        />
      </div>
      {open ? <MobileMenuList /> : null}
    </>
  );
};

export default MobileNav;
