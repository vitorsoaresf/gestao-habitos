import { Redirect } from "react-router-dom";
import { Container } from "./styles";
import Header from "../../components/Header";
import CardGeneric from "../../components/CardGeneric";
import { useContext } from "react";
import { GroupsContext } from "../../providers/groups";
import { useEffect } from "react";
import { useHistory } from "react-router";

const Groups = () => {
  const history = useHistory();

  const { getAllGroups, groups } = useContext(GroupsContext);
  useEffect(() => {
    getAllGroups();
  }, []);

  if (!JSON.parse(localStorage.getItem("@Anima/authenticated"))) {
    return <Redirect to="/" />;
  }

  const accessGroup = (id) => {
    history.push(`/detailsgroup/${id}`);
  };

  return (
    <Container>
      <Header />
      {groups && (
        <CardGeneric
          title="All Groups"
          cardType="groups"
          list={groups}
          updateClick={accessGroup}
        />
      )}
    </Container>
  );
};

export default Groups;
