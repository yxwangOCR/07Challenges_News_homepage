import DesktopNav from "./DesktopNav";
import Hero from "./Hero";
import Block from "./Block";
import Card from "./Card";
import "../styles/General.css";

const DesktopLayout = () => {
  return (
    <div>
      <DesktopNav />
      <div className='desktop-hero'>
        <Hero />
        <Block />
      </div>
      <Card />
    </div>
  );
};

export default DesktopLayout;
