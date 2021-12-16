import { useContext, useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import CardGeneric from "../../components/CardGeneric";
import { HabitsContext } from "../../providers/habits";
import { GroupsContext } from "../../providers/groups";
import ModalDelete from "../../components/ModalDeleteHabit/index";
import ModalAdd from "../../components/ModalAddHabit";
import { motion } from "framer-motion";
import ModalAddGroup from "../../components/ModalAddGroup";

import { Container } from "./styles";
import HeaderInitial from "../../components/HeaderInitial";
const Dashboard = () => {
  const {
    getHabits,
    allHabits,
    updateHabit,
    deleteHabit,
    createHabit,
    setAllHabits,
  } = useContext(HabitsContext);

  const { getGroupsUser, myGroups, createGroup, setMyGroups } =
    useContext(GroupsContext);

  const params = useParams();

  const [currentHabit, setCurrentHabit] = useState([]);

  const [showEditModal, setShowEditModal] = useState(false);

  const [showAddModal, setShowAddModal] = useState(false);

  const [showAddGroupModal, setShowAddGroupModal] = useState(false);

  const searchHabitFunction = (search) => {
    if (search) {
      const searchHabit = allHabits.filter((element) =>
        element.title.toLowerCase().includes(search.toLowerCase())
      );
      setAllHabits(searchHabit);
    } else {
      getHabits(params.token);
    }
  };

  const searchMyGroupsFunction = (search) => {
    if (search) {
      const searchMyGroups = myGroups.filter((element) =>
        element.name.toLowerCase().includes(search.toLowerCase())
      );
      setMyGroups(searchMyGroups);
    } else {
      getGroupsUser(params.token);
    }
  };

  useEffect(() => {
    getGroupsUser(params.token);
    getHabits(params.token);
  }, []);

  if (!JSON.parse(localStorage.getItem("@Anima/authenticated"))) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <HeaderInitial />
      {showAddModal && <ModalAdd setShowAddModal={setShowAddModal} />}
      {showEditModal && (
        <ModalDelete
          getHabits={getHabits}
          setShowEditModal={setShowEditModal}
          currentHabit={currentHabit}
          updateClick={updateHabit}
          deleteClick={deleteHabit}
        />
      )}

      {showAddGroupModal && (
        <ModalAddGroup setShowAddGroupModal={setShowAddGroupModal} />
      )}

      <motion.div
        initial={{ y: 900 }}
        animate={{ y: 0 }}
        exit={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <Container>
          <div>
            <CardGeneric
              title={"My Habits"}
              cardType={"habit"}
              list={allHabits}
              setCurrentHabit={setCurrentHabit}
              setShowEditModal={setShowEditModal}
              setShowAddModal={setShowAddModal}
              addClick={createHabit}
              searchFunction={searchHabitFunction}
            />
            <CardGeneric
              title={"My Groups"}
              list={myGroups}
              setShowAddModal={setShowAddGroupModal}
              addClick={createGroup}
              searchFunction={searchMyGroupsFunction}
            />
          </div>
        </Container>
      </motion.div>
    </>
  );
};

export default Dashboard;
