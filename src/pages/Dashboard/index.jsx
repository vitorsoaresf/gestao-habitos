import { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { AuthenticatedContext } from "../../providers/authenticated";
import Header from "../../components/Header";
import CardGeneric from "../../components/CardGeneric";
import { HabitsContext } from "../../providers/habits";
import { GroupsContext } from "../../providers/groups";
import CardGroups from "../../components/CardGroups";

import { Container } from "./styles";

const Dashboard = () => {
  const { getHabits, allHabits, updateHabit } = useContext(HabitsContext);
  const { getGroupsUser, groups, updateGroup } = useContext(GroupsContext);

  const userToken = JSON.parse(localStorage.getItem("@Anima/token"));

  console.log(allHabits);

  useEffect(() => {
    getHabits(userToken);
    getGroupsUser(userToken);
  }, []);

  if (!JSON.parse(localStorage.getItem("@Anima/authenticated"))) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header />
      <Container>
        <CardGeneric
          title={"My Habits"}
          cardType={"habit"}
          list={allHabits}
          clicking={() => updateHabit()}
        />
        <CardGeneric
          title={"My Groups"}
          cardType={"habit"}
          list={groups}
          clicking={() => updateGroup()}
        />

        {allHabits.map((element) => console.log("console do habits", element))}
        {groups.map((element) => console.log("console do grupo", element))}
      </Container>
    </>
  );
};

export default Dashboard;
