
import './App.css';
import Nav from './component/Nav';
import Card from './component/Card.js';
import HeroBanner from './component/HeroBanner.js';
function App() {
  return (
    <div className="App">
      <Nav />
      <HeroBanner />
      <Card  />
    </div>
  );
}

export default App;
/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/