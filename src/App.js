
import './App.css';
import Dietary from "./Dietary.js";
import TypeSelector from "./TypeSelector.js";
import FlavourSelector from "./FlavourSelector.js";
import ABVSelector from "./ABVSelector.js";
import CountrySelector from "./CountrySelector.js";
import SubmitButton from "./SubmitButton.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Build Your Perfect Beer</h2>
      </header>
      <main>
        <form method="post" action="/submit" enctype="application/x-www-form-urlencoded">
          <Dietary />
          <TypeSelector />
          <FlavourSelector />
          <div id="beerFlavourDiv1"></div>
          <div id="beerFlavourDiv2"></div>
          <ABVSelector />
          <CountrySelector />
          <ImportanceSelector />
          <SubmitButton />
        </form>
      </main>
    </div>
  );
}

export default App;
