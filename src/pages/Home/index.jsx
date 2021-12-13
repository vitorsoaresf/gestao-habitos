import { useContext } from "react";
import { Redirect, useHistory } from "react-router";
import { BsList } from "react-icons/bs";

import { AuthenticatedContext } from "../../providers/authenticated";
import Button from "../../components/Button";
import Logo from "../../assets/anima-logo.png";

import { Container, TitleBox, LogoBox, AboutUsBox } from "./styles";

const Home = () => {
  const history = useHistory();

  if (JSON.parse(localStorage.getItem("@Anima/authenticated"))) {
    return (
      <Redirect
        to={`/dashboard/${JSON.parse(localStorage.getItem("@Anima/token"))}`}
      />
    );
  }

  return (
    <Container>
      <header>
        <LogoBox>
          <div>
            <img src={Logo} alt="project Logo" />
          </div>
          <p>Anima</p>
        </LogoBox>
        <p>About Us</p>
      </header>
      <div>
        <TitleBox>
          <h1>Anima</h1>
          <p>
            A great way to manage your habits and connect you with people who
            share the same habits.
          </p>
        </TitleBox>
        <div>
          <Button onClick={() => history.push("/login")}>Login</Button>
          <Button isGray onClick={() => history.push("/register")}>
            Sign up
          </Button>
        </div>
      </div>
      <AboutUsBox>teste</AboutUsBox>
    </Container>
  );
};

export default Home;
