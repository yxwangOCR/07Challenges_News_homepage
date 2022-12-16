import "../styles/Hero.css";
import Image from "./Image";

const Hero = () => {
  return (
    <div className='hero'>
      <Image />
      <div className='hero-content'>
        <h1>The Bright Future of Web 3.0?</h1>
        <div className='hero-items'>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button>READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
