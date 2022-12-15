import "../styles/Nav.css";
import Logo from "../../src/assets/logo.svg";
import MobileMenu from "../../src/assets/icon-menu.svg";
import MobileMenuList from "./MobileMenuList";
import useToggle from "../hooks/useToggle";

const MobileNav = () => {
  const [isToggle, setIsToggle] = useToggle(true);
  return (
    <>
      <div className='mobile-navbar'>
        <img src={Logo} alt='Website Logo' />

        <img
          src={MobileMenu}
          alt='Mobile Nav open menu'
          onClick={() => setIsToggle.onToggle()}
        />
      </div>
      {isToggle ? <MobileMenuList /> : null}
    </>
  );
};

export default MobileNav;
