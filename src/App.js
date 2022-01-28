import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Data from "./assets/Data.json";

function App() {
  const newCard = Data.map((item) => <Card key={item.id} item={item} />);
  return (
    <div className="App">
      <Navbar />
      {newCard}
    </div>
  );
}

export default App;
