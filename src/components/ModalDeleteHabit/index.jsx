import { motion } from "framer-motion";
import Button from "../Button";

import { Container } from "./styles";

const ModalDelete = ({ deleteClick, setShowDeleteModal, getHabits }) => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h3>Nome do hábito</h3>
          <p>Do you really want to delete this habit?</p>
          <Button
            onClick={() => {
              deleteClick();
              setShowDeleteModal(false);
              getHabits();
            }}
          >
            Confirm
          </Button>
        </div>
      </motion.div>
    </Container>
  );
};

export default ModalDelete;
