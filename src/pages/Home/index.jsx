import { useContext } from "react";
import { Redirect } from "react-router";

import { AuthenticatedContext } from "../../providers/authenticated";

import { Container } from "./styles";

const Home = () => {
  const { authenticated } = useContext(AuthenticatedContext);

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return <Container>Home</Container>;
};

export default Home;
