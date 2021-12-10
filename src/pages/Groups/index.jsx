import { Redirect } from "react-router-dom";
import { Container } from "./styles";
import Header from "../../components/Header";
import CardGeneric from "../../components/CardGeneric";

const Groups = () => {
  if (!JSON.parse(localStorage.getItem("@Anima/authenticated"))) {
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
