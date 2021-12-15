import "./App.css";
import { Favorites } from "./components/Favorites/Favorites";
import { Futer } from "./components/Futer/Futer";
import { Header } from "./components/Header/Header";
import { MadeFrom } from "./components/MadeFrom/MadeFrom";
import { MainShop } from "./components/MainShop/MainShop";
import { Reversing } from "./components/Reversing/Reversing";
import { SeasonsChange } from "./components/SeasonsChange/SeasonsChange";

function App() {
  return (
    <div className="App">
      <div className="appContent">
        <Header />
        <MainShop />
        <Favorites />
        <SeasonsChange/>
        <MadeFrom/>
        <Reversing/>
        <Futer/>
      </div>
    </div>
  );
}

export default App;
