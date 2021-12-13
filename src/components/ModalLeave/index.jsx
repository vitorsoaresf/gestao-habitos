import { useContext } from "react";
import { GroupsContext } from "../../providers/groups";
import { Container } from "./styles";
import { useHistory } from "react-router-dom";
import Button from "../Button";

const ModalLeave = ({ groupId, setModalLeave }) => {
  const { unsubscribeGroup } = useContext(GroupsContext);
  const history = useHistory();

  const onSubmitFunction = (data) => {
    setModalLeave(false);
    setModalLeave(false);
    unsubscribeGroup(groupId);
    history.push("/dashboard");
  };

  return (
    <Container>
      <h3>
        Are you sure you want to leave?{" "}
        <Button onClick={() => setModalLeave(false)}>x</Button>
      </h3>
      <Button onClick={() => onSubmitFunction()}></Button>
    </Container>
  );
};

export default ModalLeave;
