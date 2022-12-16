import "../styles/Card.css";
import Content from "./Content";
import img1 from "../assets/image-retro-pcs.jpg";
import img2 from "../assets/image-top-laptops.jpg";
import img3 from "../assets/image-gaming-growth.jpg";

const Card = () => {
  return (
    <div className='card-container'>
      <div className='card'>
        <img src={img1} alt='news-one' />
        <Content
          number='01'
          title='Reviving Retro PCs'
          text='What happens when old PCs are given modern upgrades?'
        />
      </div>
      <div className='card'>
        <img src={img2} alt='news-two' />
        <Content
          number='02'
          title='Top 10 Laptops of 2022'
          text='Our best picks for various needs and budgets.'
        />
      </div>
      <div className='card'>
        <img src={img3} alt='news-three' />
        <Content
          number='03'
          title='The Growth of Gaming'
          text='How the pandemic has sparked fresh opportunities.'
        />
      </div>
    </div>
  );
};

export default Card;
