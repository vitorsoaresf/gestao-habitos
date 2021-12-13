import { Container, ContainerBody, ContainerTitle } from "./styles";
import { useContext, useEffect, useState } from "react";
import { GroupsContext } from "../../providers/groups";
import { useHistory, useParams } from "react-router-dom";
import Header from "../../components/Header";
import CardGroups from "../../components/CardGroups";
import Button from "../../components/Button";
import ModalLeave from "../../components/ModalLeave";
import ModalEdit from "../../components/ModalEdit";

// 17 ou 102
const DetailsGroup = () => {
  const { id: groupId } = useParams();
  const [update, setUpdate] = useState(false);

  const [modalLeave, setModalLeave] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

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
        {modalEdit && (
          <ModalEdit groupId={groupId} setModalEdit={setModalEdit} />
        )}

        <ContainerTitle>
          <h1>{dataGroup.name}</h1>
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
          <Button
            onClick={() =>
              history.push(
                `/dashboard/${JSON.parse(localStorage.getItem("@Anima/token"))}`
              )
            }
          >
            Back
          </Button>
          {groupCreator ? (
            <Button onClick={() => setModalEdit(true)}>Edit</Button>
          ) : (
            <Button onClick={() => setModalLeave(true)}>Leave</Button>
          )}
        </ContainerBody>
      </Container>
    </>
  );
};

export default DetailsGroup;
