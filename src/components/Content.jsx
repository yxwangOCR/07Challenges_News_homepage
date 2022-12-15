const Content = ({ number, title, text }) => {
  return (
    <div className='content'>
      <h1>{number}</h1>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Content;
