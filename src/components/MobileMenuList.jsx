import "../styles/Nav.css";
import MobileMenuCloseIcon from "../../src/assets/icon-menu-close.svg";
import { useState } from "react";

const MobileMenuList = () => {
  const [close, setClose] = useState(false);
  return (
    <>
      {!close ? (
        <div className='modal'>
          <img
            src={MobileMenuCloseIcon}
            alt='Mobile Nav close menu'
            onClick={() => setClose(!close)}
          />
          <ul className='mobile-menu-list'>
            <li>
              <a href='/home'>Home</a>
            </li>
            <li>
              <a href='/new'>New</a>
            </li>
            <li>
              <a href='/popular'>Popular</a>
            </li>
            <li>
              <a href='/trending'>Trending</a>
            </li>
            <li>
              <a href='/categories'>Categories</a>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default MobileMenuList;
