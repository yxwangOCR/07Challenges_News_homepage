import "../styles/Hero.css";
import HeroDesktop from "../assets/image-web-3-desktop.jpg";
import HeroMobile from "../assets/image-web-3-mobile.jpg";

const Hero = () => {
  return (
    <div className='hero'>
      <img src={HeroMobile} alt='Mobile Hero Image' />
      <h1>The Bright Future of Web 3.0?</h1>
      <p>
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <button>READ MORE</button>
    </div>
  );
};

export default Hero;
