import { Container, ContainerBody, ContainerTitle } from "./styles";
import { useContext, useEffect, useState } from "react";
import { GroupsContext } from "../../providers/groups";
import { useHistory, useParams } from "react-router-dom";
import Header from "../../components/Header";
import CardGroups from "../../components/CardGroups";
import Button from "../../components/Button";
import ModalLeave from "../../components/ModalLeave";
import ModalEditGroup from "../../components/ModalEditGroup";

const DetailsGroup = () => {
  const { id: groupId } = useParams();
  const [update, setUpdate] = useState(false);

  const [modalLeave, setModalLeave] = useState(false);
  const [modalEditGroup, setModalEditGroup] = useState(false);

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
    dataGroup,
  } = useContext(GroupsContext);

  useEffect(() => {
    getGroupAllParticipants(groupId);
    getGoalsGroup(groupId);
    getActivitiesGroup(groupId);
  }, [update]);

  const updateActivitiesGoals = () => {
    setUpdate(!update);
  };

  return (
    <>
      <Header />
      <Container>
        {modalLeave && (
          <ModalLeave groupId={groupId} setModalLeave={setModalLeave} />
        )}
        {modalEditGroup && (
          <ModalEditGroup
            groupId={groupId}
            setModalEditGroup={setModalEditGroup}
            updateActivitiesGoals={updateActivitiesGoals}
          />
        )}

        <ContainerTitle>
          <h1>{dataGroup.name}</h1>
          <p>{dataGroup.description}</p>
        </ContainerTitle>
        <ContainerBody>
          <CardGroups title="participants" list={groupParticipants} />
          <CardGroups
            updateActivitiesGoals={updateActivitiesGoals}
            groupId={groupId}
            title="goals"
            list={groupGoals}
          />
          <CardGroups
            updateActivitiesGoals={updateActivitiesGoals}
            groupId={groupId}
            title="activities"
            list={groupActivities}
          />
          <Button onClick={() => history.push(`/groups/`)}>Back</Button>
          {groupCreator ? (
            <Button onClick={() => setModalEditGroup(true)}>Edit</Button>
          ) : (
            <Button onClick={() => setModalLeave(true)}>Leave</Button>
          )}
        </ContainerBody>
      </Container>
    </>
  );
};

export default DetailsGroup;
