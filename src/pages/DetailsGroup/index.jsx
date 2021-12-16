import {
  Container,
  ContainerBody,
  ContainerTitle,
  ContainerButton,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { GroupsContext } from "../../providers/groups";
import { Redirect, useHistory, useParams } from "react-router-dom";
// import Header from "../../components/Header";
import CardGroups from "../../components/CardGroups";
import Button from "../../components/Button";
import ModalLeave from "../../components/ModalLeave";
import ModalEditGroup from "../../components/ModalEditGroup";
import { motion } from "framer-motion";

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
    inscribeGroup,
    dataGroup,
    isParticipant,
  } = useContext(GroupsContext);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("@Anima/authenticated"))) {
      return <Redirect to="/" />;
    }
    getGroupAllParticipants(groupId);
    getGoalsGroup(groupId);
    getActivitiesGroup(groupId);
  }, [update]);

  if (!JSON.parse(localStorage.getItem("@Anima/authenticated"))) {
    return <Redirect to="/" />;
  }

  const updateActivitiesGoals = () => {
    setUpdate(!update);
  };

  console.log(isParticipant);
  return isParticipant ? (
    <>
      {/* <Header /> */}
      <motion.div
        initial={{ x: -900 }}
        animate={{ x: 0 }}
        exit={{ x: 0 }}
        transition={{ duration: 1 }}
      >
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
            <h1>
              <p>{dataGroup.name}</p>
            </h1>
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
            {groupCreator.length > 0 ? (
              <Button onClick={() => setModalEditGroup(true)}>Edit</Button>
            ) : (
              <Button onClick={() => setModalLeave(true)}>Leave</Button>
            )}
          </ContainerBody>
        </Container>
      </motion.div>
    </>
  ) : (
    <>
      {/* <Header /> */}
      <motion.div
        initial={{ x: -900 }}
        animate={{ x: 0 }}
        exit={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <Container>
          <ContainerTitle>
            <h1>{dataGroup.name}</h1>
            <p>{dataGroup.description}</p>
          </ContainerTitle>
          <ContainerBody>
            <CardGroups title="participants" list={groupParticipants} />
            <ContainerButton>
              <Button onClick={() => history.push(`/groups/`)}>Back</Button>
              {groupCreator.length > 0 ? (
                <Button onClick={() => setModalEditGroup(true)}>Edit</Button>
              ) : (
                <Button
                  onClick={() => {
                    inscribeGroup(groupId)
                      .then((_) => updateActivitiesGoals())
                      .catch((err) => console.log(err));
                  }}
                >
                  Join
                </Button>
              )}
            </ContainerButton>
          </ContainerBody>
        </Container>
      </motion.div>
    </>
  );
};

export default DetailsGroup;
