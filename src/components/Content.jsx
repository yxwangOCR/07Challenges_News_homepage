const Content = ({ number, title, text }) => {
  return (
    <div className='content'>
      <h2>{number}</h2>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Content;
