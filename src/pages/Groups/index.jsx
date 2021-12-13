import { Redirect } from "react-router-dom";
import { Container } from "./styles";
import Header from "../../components/Header";
import CardGeneric from "../../components/CardGeneric";
import { useContext, useState } from "react";
import { GroupsContext } from "../../providers/groups";
import { useEffect } from "react";
import { useHistory } from "react-router";

const Groups = () => {
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(1);

  const { getAllGroups, groups, previousPage, nextPage, getFilteredGroups } =
    useContext(GroupsContext);
  useEffect(() => {
    getAllGroups(currentPage);
  }, []);

  if (!JSON.parse(localStorage.getItem("@Anima/authenticated"))) {
    return <Redirect to="/" />;
  }

  const accessGroup = (id) => {
    history.push(`/detailsgroup/${id}`);
  };

  const goToNextPage = () => {
    if (nextPage) {
      setCurrentPage(currentPage + 1);
      getAllGroups(currentPage);
    }
  };
  const goToPrevPage = () => {
    if (previousPage) {
      setCurrentPage(currentPage - 1);
      getAllGroups(currentPage);
    }
  };

  const searchFunction = (valor) => {
    getFilteredGroups(valor);
  };
  console.log("prev: " + previousPage);
  console.log("current: " + currentPage);
  console.log("next: " + nextPage);
  console.log("________________________-");
  return (
    <Container>
      <Header />
      {groups && (
        <CardGeneric
          title="All Groups"
          cardType="groups"
          list={groups}
          updateClick={accessGroup}
          habitUptadeData={goToNextPage}
          setCurrentHabit={goToPrevPage}
          searchFunction={searchFunction}
        />
      )}
    </Container>
  );
};

export default Groups;
