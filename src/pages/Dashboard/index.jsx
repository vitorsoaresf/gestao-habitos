import { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { AuthenticatedContext } from "../../providers/authenticated";
import Header from "../../components/Header";
import CardGeneric from "../../components/CardGeneric";
import { HabitsContext } from "../../providers/habits";
import CardGroups from "../../components/CardGroups";

import { Container } from "./styles";

const Dashboard = () => {
  const { getHabits, allHabits, updateHabit } = useContext(HabitsContext);

  const userToken = JSON.parse(localStorage.getItem("@Anima/token"));

  console.log(allHabits);

  useEffect(() => {
    getHabits(userToken);
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
        <CardGeneric title={"My Groups"} cardType={"group"} />
        <CardGroups title="Goals" />

        {allHabits.map((element) => console.log("console do habits", element))}
      </Container>
    </>
  );
};

export default Dashboard;
