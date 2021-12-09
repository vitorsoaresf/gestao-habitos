import logo from "./logo.svg";
import "./App.css";

import GlobalStyle from "./style/global";
import CardGeneric from "./components/CardGeneric";

import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalStyle />
        <CardGeneric />
        <Input />
      </header>
    </div>
  );
}

export default App;
