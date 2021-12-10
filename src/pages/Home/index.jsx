import { useContext } from "react";
import { Redirect } from "react-router";

import { AuthenticatedContext } from "../../providers/authenticated";

import { Container } from "./styles";

const Home = () => {
  if (JSON.parse(localStorage.getItem("@Anima/authenticated"))) {
    return <Redirect to="/dashboard" />;
  }

  return <Container>Home</Container>;
};

export default Home;
