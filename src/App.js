import Routes from "./routes/Routes";
import GlobalStyle from "./style/global";
import { Toaster } from "react-hot-toast";
import HeaderInitial from "./components/HeaderInitial";

const App = () => {
  return (
    <>
      {/* <HeaderInitial /> */}
      <Toaster />
      <Routes />
      <GlobalStyle />
    </>
  );
};

export default App;
