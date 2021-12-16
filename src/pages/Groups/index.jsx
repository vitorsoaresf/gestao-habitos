import { Redirect } from "react-router-dom";
import { Container } from "./styles";
import CardGeneric from "../../components/CardGeneric";
import { useContext } from "react";
import { GroupsContext } from "../../providers/groups";
import { useHistory } from "react-router";
import { motion } from "framer-motion";
import HeaderInitial from "../../components/HeaderInitial";
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
    <>
      <HeaderInitial />
      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        exit={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <Container>
          <div>
            {groups && (
              <CardGeneric
                title="All Groups"
                cardType="groups"
                list={groups}
                updateClick={accessGroup}
                searchFunction={searchFunction}
              />
            )}
          </div>
        </Container>
      </motion.div>
    </>
  );
};

export default Groups;
