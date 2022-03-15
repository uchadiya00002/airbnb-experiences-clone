import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Card from "./components/card/Card";
import data from "../src/components/card/Hero.data";
function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />

      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
