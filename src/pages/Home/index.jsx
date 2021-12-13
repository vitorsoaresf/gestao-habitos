import { useContext } from "react";
import { Redirect } from "react-router";
import { BsList } from "react-icons/bs";

import { AuthenticatedContext } from "../../providers/authenticated";
import Button from "../../components/Button";

import { Container, TitleBox } from "./styles";

const Home = () => {
  if (JSON.parse(localStorage.getItem("@Anima/authenticated"))) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <header>
        <img src alt="project Logo" />
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
          <Button>Login</Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </Container>
  );
};

export default Home;
