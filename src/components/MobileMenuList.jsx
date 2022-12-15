import "../styles/Nav.css";
import MobileMenuClose from "../../src/assets/icon-menu-close.svg";
import useToggle from "../hooks/useToggle";

const MobileMenuList = () => {
  const [isToggle, setIsToggle] = useToggle(true);
  return (
    <>
      {isToggle ? null : (
        <div className='modal'>
          <img
            src={MobileMenuClose}
            alt='Mobile Nav close menu'
            onClick={() => setIsToggle.onToggle()}
          />
        </div>
      )}
      {isToggle ? null : (
        <ul className='Mobile-menu-list'>
          <a href='#'>Home</a>
          <a href='#'>New</a>
          <a href='#'>Popular</a>
          <a href='#'>Trending</a>
          <a href='#'>Categories</a>
        </ul>
      )}
    </>
  );
};

export default MobileMenuList;
