import { useContext } from "react";
import { AuthenticatedContext } from "../../providers/authenticated";
import { Redirect } from "react-router-dom";
import { Container } from "./styles";
import Header from "../../components/Header";
import CardGeneric from "../../components/CardGeneric";

const Groups = () => {
  const { authenticated } = useContext(AuthenticatedContext);

  if (!authenticated) {
    return <Redirect to="/" />;
  }
  return (
    <Container>
      <Header />
      <CardGeneric title="All Groups" cardType="groups" />
    </Container>
  );
};

export default Groups;
