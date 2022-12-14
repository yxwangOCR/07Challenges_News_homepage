import "././styles/General.scss";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Block from "./components/Block";
import Card from "./components/Card";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Hero />
      <Block />
      <Card />
    </div>
  );
}

export default App;
