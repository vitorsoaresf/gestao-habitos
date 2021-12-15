import { useContext } from "react";
import { GroupsContext } from "../../providers/groups";
import { Container } from "./styles";
import { useHistory } from "react-router-dom";
import Button from "../Button";

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
    <Container>
      <h3>
        <p>Are you sure you want to leave? </p>
        <Button onClick={() => setModalLeave(false)}>x</Button>
      </h3>
      <Button onClick={() => onSubmitFunction()}>Leave</Button>
    </Container>
  );
};

export default ModalLeave;
