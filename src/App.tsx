import "./App.css";
import About from "./Components/About/About";
import Directions from "./Components/Directions/Directions";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Directions />
    </div>
  );
}

export default App;
