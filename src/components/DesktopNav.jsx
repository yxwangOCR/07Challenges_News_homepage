import "../styles/Nav.css";
import Logo from "../../src/assets/logo.svg";

const DesktopNav = () => {
  return (
    <div className='desktop-nav'>
      <img src={Logo} alt='Website Logo' />
      <ul>
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
  );
};

export default DesktopNav;
