import { Redirect } from "react-router-dom";
import { Container } from "./styles";
import Header from "../../components/Header";
import CardGeneric from "../../components/CardGeneric";
import { useContext, useState } from "react";
import { GroupsContext } from "../../providers/groups";
import { useHistory } from "react-router";
import Loading from "../../components/Loading";
import { motion } from "framer-motion";

const Groups = () => {
  const history = useHistory();

  const { groups, getFilteredGroups } = useContext(GroupsContext);

  if (!JSON.parse(localStorage.getItem("@Anima/authenticated"))) {
    return <Redirect to="/" />;
  }

  const accessGroup = (id) => {
    history.push(`/detailsgroup/${id}`);
  };

  const searchFunction = (valor) => {
    getFilteredGroups(valor);
  };
  return (
    <Container>
      <Header />
      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        exit={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        {groups && (
          <CardGeneric
            title="All Groups"
            cardType="groups"
            list={groups}
            updateClick={accessGroup}
            searchFunction={searchFunction}
          />
        )}
      </motion.div>
    </Container>
  );
};

export default Groups;
