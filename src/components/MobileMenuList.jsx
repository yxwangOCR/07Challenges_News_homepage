import "../styles/Nav.css";
import MobileMenuClose from "../../src/assets/icon-menu-close.svg";
import { useState } from "react";

const MobileMenuList = () => {
  const [close, setClose] = useState(false);
  return (
    <>
      {!close ? (
        <div className='modal'>
          <img
            src={MobileMenuClose}
            alt='Mobile Nav close menu'
            onClick={() => setClose(!close)}
          />
          <ul className='mobile-menu-list'>
            <a href='#'>Home</a>
            <a href='#'>New</a>
            <a href='#'>Popular</a>
            <a href='#'>Trending</a>
            <a href='#'>Categories</a>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default MobileMenuList;
