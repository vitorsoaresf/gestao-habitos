import { useContext } from "react";
import { AuthenticatedContext } from "../../providers/authenticated";
import { Redirect } from "react-router-dom";
import { Container } from "./styles";

const Groups = () => {
  if (!JSON.parse(localStorage.getItem("@Anima/authenticated"))) {
    return <Redirect to="/" />;
  }
  return <Container>Groups</Container>;
};

export default Groups;
