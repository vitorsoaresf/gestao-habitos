import Button from "../Button";

import { Container } from "./styles";

const ModalDelete = ({ deleteClick, setShowDeleteModal, getHabits }) => {
  return (
    <Container>
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
    </Container>
  );
};

export default ModalDelete;
