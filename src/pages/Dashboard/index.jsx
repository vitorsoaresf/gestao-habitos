import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import { AuthenticatedContext } from "../../providers/authenticated";
import Header from "../../components/Header";
import CardGeneric from "../../components/CardGeneric";
import { HabitsContext } from "../../providers/habits";
import ModalDelete from "../../components/Modal";

import { Container } from "./styles";

const Dashboard = () => {
  const { getHabits, allHabits, updateHabit, deleteHabit, createHabit } =
    useContext(HabitsContext);

  const [currentHabit, setCurrentHabit] = useState([]);
  console.log("current habit", currentHabit);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

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
      {showDeleteModal && (
        <ModalDelete
          getHabits={getHabits}
          setShowDeleteModal={setShowDeleteModal}
          deleteClick={() => deleteHabit(currentHabit.id)}
        />
      )}
      <Header />
      <Container>
        <CardGeneric
          title={"My Habits"}
          cardType={"habit"}
          list={allHabits}
          updateClick={updateHabit}
          habitUptadeData={habitUptadeData}
          setCurrentHabit={setCurrentHabit}
          setShowDeleteModal={setShowDeleteModal}
          addClick={createHabit}
        />
        <CardGeneric title={"My Groups"} cardType={"group"} />

        {/* {allHabits.map((element) => console.log("console do habits", element))} */}
      </Container>
    </>
  );
};

export default Dashboard;
