import { Container, ContainerUl } from "./styles";
import { useContext, useEffect, useState } from "react";
import { GroupsContext } from "../../providers/groups";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import CardGroups from "../../components/CardGroups";
import Button from "../../components/Button";
import ModalLeave from "../../components/ModalLeave";

const DetailsGroup = ({ groupId = 17 }) => {
  const [participants, setParticipants] = useState([]);
  const [goals, setGoals] = useState(false);
  const [activities, setActivities] = useState(false);

  const [modalLeave, setModalLeave] = useState(false);

  const history = useHistory();
  const {
    groupParticipants,
    getGroupAllParticipants,
    groupGoals,
    getGoalsGroup,
    groupActivities,
    getActivitiesGroup,
    groupCreator,
    unsubscribeGroup,
  } = useContext(GroupsContext);

  useEffect(() => {
    getGroupAllParticipants(groupId);
    getGoalsGroup(groupId);
    getActivitiesGroup(groupId);
  }, [goals, activities]);

  const addGoals = () => {
    setGoals(!goals);
  };

  const addActivities = () => {
    setActivities(!activities);
  };

  // PAREI AQUI PARA FAZER A MODAL DE DESISTIR DO GRUPO
  console.log(modalLeave);
  return (
    <>
      {modalLeave && (
        <ModalLeave groupId={groupId} setModalLeave={setModalLeave} />
      )}
      <Header />
      <Container>
        <CardGroups title="participants" list={groupParticipants} />
        <CardGroups
          addGoals={addGoals}
          groupId={groupId}
          title="goals"
          list={groupGoals}
        />
        <CardGroups
          addActivities={addActivities}
          groupId={groupId}
          title="activities"
          list={groupActivities}
        />
        <Button onClick={() => history.push("/dashboard")}>Back</Button>
        {groupCreator ? (
          <Button>Edit</Button>
        ) : (
          <Button onClick={() => setModalLeave(true)}>Leave</Button>
        )}
      </Container>
    </>
  );
};

export default DetailsGroup;
