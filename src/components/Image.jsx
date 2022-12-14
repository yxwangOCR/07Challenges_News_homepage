import HeroDesktop from "../assets/image-web-3-desktop.jpg";
import HeroMobile from "../assets/image-web-3-mobile.jpg";

const Image = () => {
  return (
    <picture>
      <source media='(max-width: 1400px)' srcSet={HeroMobile} />
      <source media='(min-width: 1400px)' srcSet={HeroDesktop} />
      <img src={HeroDesktop} alt='hero' />
    </picture>
  );
};

export default Image;
