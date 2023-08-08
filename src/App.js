
import './App.css';
import Nav from './component/Nav';
import Card from './component/Card.js';
import HeroBanner from './component/HeroBanner.js';
import data from './data/data.js';

function App() {

  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            {...item}
            
        />
    )
})       
  return (
    <div className="App">
      <Nav />
      <HeroBanner />
      <section className="card-container">
        {cards}
      </section>
    </div>
  );
}

export default App;
