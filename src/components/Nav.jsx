import "../styles/Nav.css"
import Logo from "../../src/assets/logo.svg";
import MobileMenu from "../../src/assets/icon-menu.svg";

const Nav = () => {
  return (
    <div className='navbar'>
      <img src={Logo} alt='Website Logo' />
      <img src={MobileMenu} alt='Mobile Nav menu' />
    </div>
  );
};

export default Nav;
