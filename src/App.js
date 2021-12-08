import logo from "./logo.svg";
import "./App.css";

import GlobalStyle from "./style/global";

import CardGeneric from "./components/CardGeneric";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalStyle />
        <CardGeneric title="Teste" />
      </header>
    </div>
  );
}

export default App;
