import { useContext, useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";

import { AuthenticatedContext } from "../../providers/authenticated";
import Header from "../../components/Header";
import CardGeneric from "../../components/CardGeneric";
import { HabitsContext } from "../../providers/habits";
import { GroupsContext } from "../../providers/groups";
import CardGroups from "../../components/CardGroups";
import ModalDelete from "../../components/ModalDeleteHabit/index";
import ModalAdd from "../../components/ModalAddHabit";
import { motion } from "framer-motion";
import ModalAddGroup from "../../components/ModalAddGroup";

import { Container } from "./styles";

const Dashboard = () => {
  const { getHabits, allHabits, updateHabit, deleteHabit, createHabit } =
    useContext(HabitsContext);
  const { getGroupsUser, myGroups, createGroup } = useContext(GroupsContext);
  const params = useParams();

  const [currentHabit, setCurrentHabit] = useState([]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [showAddModal, setShowAddModal] = useState(false);

  const [showAddGroupModal, setShowAddGroupModal] = useState(false);

  useEffect(() => {
    getGroupsUser(params.token);
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

      {showAddGroupModal && (
        <ModalAddGroup showAddGroupModal={showAddGroupModal} />
      )}

      <Header />
      <motion.div
        initial={{ y: 900 }}
        animate={{ y: 0 }}
        exit={{ y: 0 }}
        transition={{ duration: 1 }}
      >
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
          <CardGeneric
            title={"My Groups"}
            list={myGroups}
            setShowAddModal={setShowAddModal}
            addClick={createGroup}
          />
        </Container>
      </motion.div>
    </>
  );
};

export default Dashboard;
