import "../styles/Card.css";
import Content from "./Content";
import img1 from "../assets/image-retro-pcs.jpg";
import img2 from "../assets/image-top-laptops.jpg";
import img3 from "../assets/image-gaming-growth.jpg";

const Card = () => {
  return (
    <div className='card-container'>
      <div className='card'>
        <img src={img1} />
        <div className='card-content'>
          <h1>01</h1>
          <Content
            title='Reviving Retro PCs'
            text='What happens when old PCs are given modern upgrades?'
          />
        </div>
      </div>
      <div className='card'>
        <img src={img2} />
        <div className='card-content'>
          <h1>02</h1>
          <Content
            title='Top 10 Laptops of 2022'
            text='Our best picks for various needs and budgets.'
          />
        </div>
      </div>
      <div className='card'>
        <img src={img3} />
        <div className='card-content'>
          <h1>03</h1>
          <Content
            title='The Growth of Gaming'
            text='How the pandemic has sparked fresh opportunities.'
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
