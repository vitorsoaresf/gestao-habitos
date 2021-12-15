import { useContext } from "react";
import { GroupsContext } from "../../providers/groups";
import { Container } from "./styles";
import { useHistory } from "react-router-dom";
import Button from "../Button";
import { motion } from "framer-motion";

const ModalLeave = ({ groupId, setModalLeave }) => {
  const { unsubscribeGroup } = useContext(GroupsContext);
  const history = useHistory();

  const onSubmitFunction = () => {
    setModalLeave(false);
    unsubscribeGroup(groupId);
    history.push(
      `/dashboard/${JSON.parse(localStorage.getItem("@Anima/token"))}`
    );
  };

  return (
    <Container onClick={() => setModalLeave(false)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>
          <p>Are you sure you want to leave? </p>
          <Button onClick={() => setModalLeave(false)}>x</Button>
        </h1>
        <div>
          <Button onClick={() => onSubmitFunction()}>Confirm</Button>
        </div>
      </motion.div>
    </Container>
  );
};

export default ModalLeave;
