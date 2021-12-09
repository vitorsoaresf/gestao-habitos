import { useContext } from "react";
import { AuthenticatedContext } from "../../providers/authenticated";
import { Redirect } from "react-router-dom";
import { Container } from "./styles";

import Header from "../../components/Header";
import CardGeneric from "../../components/CardGeneric";

const Dashboard = () => {
  const { authenticated } = useContext(AuthenticatedContext);

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header />
      <Container>
        <CardGeneric title={"My Habits"} cardType={"title"} />
      </Container>
    </>
  );
};

export default Dashboard;
