import Routes from "./routes/Routes";
import GlobalStyle from "./style/global";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes />
      <GlobalStyle />
    </>
  );
};

export default App;
