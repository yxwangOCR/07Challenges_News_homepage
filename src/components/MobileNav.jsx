import "../styles/Nav.css";
import Logo from "../../src/assets/logo.svg";
import MobileMenu from "../../src/assets/icon-menu.svg";
import MobileMenuClose from "../../src/assets/icon-menu-close.svg";
import MobileMenuList from "./MobileMenuList";
import { useState } from "react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className='mobile-navbar'>
        <img src={Logo} alt='Website Logo' />

        {open ? (
          <img
            src={MobileMenuClose}
            alt='Mobile Nav menu'
            onClick={handleToggle}
          />
        ) : (
          <img src={MobileMenu} alt='Mobile Nav menu' onClick={handleToggle} />
        )}
      </div>
      {open ? <MobileMenuList /> : null}
    </>
  );
};

export default MobileNav;
