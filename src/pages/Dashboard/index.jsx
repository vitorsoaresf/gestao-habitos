import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import { AuthenticatedContext } from "../../providers/authenticated";
import Header from "../../components/Header";
import CardGeneric from "../../components/CardGeneric";
import { HabitsContext } from "../../providers/habits";
import Modal from "../../components/Modal";

import { Container } from "./styles";

const Dashboard = () => {
  const { getHabits, allHabits, updateHabit } = useContext(HabitsContext);

  const [showDeleteModal, setShowDeleteModal] = useState(true);

  console.log("allHabits", allHabits);

  useEffect(() => {
    getHabits();
  }, []);

  if (!JSON.parse(localStorage.getItem("@Anima/authenticated"))) {
    return <Redirect to="/" />;
  }

  const habitUptadeData = {
    achieved: true,
    how_much_achieved: 100,
  };

  return (
    <>
      {showDeleteModal && <Modal />}
      <Header />
      <Container>
        <CardGeneric
          title={"My Habits"}
          cardType={"habit"}
          list={allHabits}
          updateClick={updateHabit}
          habitUptadeData={habitUptadeData}
        />
        <CardGeneric title={"My Groups"} cardType={"group"} />

        {allHabits.map((element) => console.log("console do habits", element))}
      </Container>
    </>
  );
};

export default Dashboard;
