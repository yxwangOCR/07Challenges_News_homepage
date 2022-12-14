import "../styles/Nav.css";
import Logo from "../../src/assets/logo.svg";
import MobileMenu from "../../src/assets/icon-menu.svg";

const MobileNav = () => {
  return (
    <div className='mobile-navbar'>
      <img src={Logo} alt='Website Logo' />
      <img src={MobileMenu} alt='Mobile Nav menu' />
    </div>
  );
};

export default MobileNav;
