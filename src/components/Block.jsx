import "../styles/Block.css";
import Content from "./Content";

const Block = () => {
  return (
    <div className='block'>
      <h2>New</h2>
      <Content
        title='Hydrogen VS Electric Cars'
        text='Will hydrogen-fueled cars ever catch up to EVs?'
      />
      <hr />
      <Content
        title='The Downsides of AI Artistry'
        text='What are the possible adverse effects of on-demand AI image generation?'
      />
      <hr />
      <Content
        title='Is VC Funding Drying Up?'
        text='Private funding by VC firms is down 50% YOY. We take a look at what that means.'
      />
    </div>
  );
};

export default Block;
