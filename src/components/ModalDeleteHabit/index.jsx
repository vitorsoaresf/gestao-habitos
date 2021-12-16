import { motion } from "framer-motion";
import Button from "../Button";

import { Container } from "./styles";

const ModalDelete = ({
  deleteClick,
  setShowEditModal,
  getHabits,
  currentHabit,
  updateClick,
}) => {
  let habitUpdateData;

  currentHabit.achieved
    ? (habitUpdateData = { achieved: false, how_much_achieved: 0 })
    : (habitUpdateData = { achieved: true, how_much_achieved: 100 });

  console.log(currentHabit);

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h3>
            <p>Habit - {currentHabit.title} </p>
            <Button onClick={() => setShowEditModal(false)}>x</Button>
          </h3>
          <p>Do you really want to delete this habit?</p>
          <Button
            onClick={() => {
              updateClick(habitUpdateData, currentHabit.id);
              setShowEditModal(false);
            }}
          >
            {currentHabit.achieved ? <p>Undone</p> : <p>Done</p>}
          </Button>
          <Button
            onClick={() => {
              deleteClick(currentHabit.id);
              setShowEditModal(false);
              getHabits(JSON.parse(localStorage.getItem("@Anima/token")));
            }}
          >
            Delete
          </Button>
        </div>
      </motion.div>
    </Container>
  );
};

export default ModalDelete;
