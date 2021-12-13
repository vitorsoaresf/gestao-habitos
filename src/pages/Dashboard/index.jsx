import { useContext, useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";

import { AuthenticatedContext } from "../../providers/authenticated";
import Header from "../../components/Header";
import CardGeneric from "../../components/CardGeneric";
import { HabitsContext } from "../../providers/habits";
import ModalDelete from "../../components/ModalDeleteHabit/index";
import ModalAdd from "../../components/ModalAddHabit";

import { Container } from "./styles";

const Dashboard = () => {
  const { getHabits, allHabits, updateHabit, deleteHabit, createHabit } =
    useContext(HabitsContext);
  const params = useParams();

  const [currentHabit, setCurrentHabit] = useState([]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    getHabits(params.token);
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
      {showAddModal && <ModalAdd setShowAddModal={setShowAddModal} />}
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
          setShowAddModal={setShowAddModal}
          addClick={createHabit}
        />
        <CardGeneric title={"My Groups"} cardType={"group"} />

        {/* {allHabits.map((element) => console.log("console do habits", element))} */}
      </Container>
    </>
  );
};

export default Dashboard;
