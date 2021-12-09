import { useContext } from "react";
import { AuthenticatedContext } from "../../providers/authenticated";
import { Redirect } from "react-router-dom";
import { Container } from "./styles";

const Dashboard = () => {
  const { authenticated } = useContext(AuthenticatedContext);

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return <Container>Dashboard</Container>;
};

export default Dashboard;
