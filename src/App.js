import './App.css';
import Advertisement from "./components/Advertisement/Advertisement";
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Navigation from "./components/Navigation/Navigation"
import Subcontent from "./components/Subcontent/Subcontent"

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="lowerNav">
        <Navigation/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
