import { Container, ContainerTitle, ContainerUl } from "./styles";
import { useState } from "react";
import Button from "../Button";
import ModalGoals from "../ModalGoals";
import ModalActivities from "../ModalActivities";
import ModalEditGoals from "../ModalEditGoals";
import ModalEditActivities from "../ModalEditActivities";

const CardGroups = ({ title, list, groupId, updateActivitiesGoals }) => {
  const [modalGoals, setModalGoals] = useState(false);
  const [modalActivities, setModalActivities] = useState(false);
  const [modalEditGoals, setModalEditGoals] = useState(false);
  const [modalEditActivities, setModalEditActivities] = useState(false);

  const [currentGoal, setCurrentGoal] = useState(0);
  const [currentActivities, setCurrentActivities] = useState(0);

  const editGoal = (goal) => {
    setModalEditGoals(!modalEditGoals);
    setCurrentGoal(goal);
  };

  const editActivities = (activitiesId) => {
    setModalEditActivities(!modalEditActivities);
    setCurrentActivities(activitiesId);
  };

  return (
    <>
      {modalGoals && (
        <ModalGoals
          updateActivitiesGoals={updateActivitiesGoals}
          setModalGoals={setModalGoals}
          groupId={groupId}
        />
      )}

      {modalActivities && (
        <ModalActivities
          updateActivitiesGoals={updateActivitiesGoals}
          setModalActivities={setModalActivities}
          groupId={groupId}
        />
      )}

      {modalEditGoals && (
        <ModalEditGoals
          updateActivitiesGoals={updateActivitiesGoals}
          setModalEditGoals={setModalEditGoals}
          currentGoal={currentGoal}
        />
      )}

      {modalEditActivities && (
        <ModalEditActivities
          updateActivitiesGoals={updateActivitiesGoals}
          setModalEditActivities={setModalEditActivities}
          currentActivities={currentActivities}
        />
      )}

      <Container>
        <ContainerTitle>
          <div>
            <h1>{title}</h1>
          </div>
          {title === "Goals" && (
            <Button
              onClick={() => {
                setModalGoals(!modalGoals);
              }}
            >
              +
            </Button>
          )}
          {title === "Activities" && (
            <Button
              onClick={() => {
                setModalActivities(!modalActivities);
              }}
            >
              +
            </Button>
          )}
        </ContainerTitle>
        <ContainerUl>
          {title === "Participants"
            ? list.map((partipant, index) => (
                <li key={index}>
                  <p>{partipant.username}</p>
                </li>
              ))
            : title === "Goals"
            ? list.map((goals, index) => (
                <li key={index}>
                  <p>{goals.title}</p>
                  <Button onClick={() => editGoal(goals)}>Edit</Button>
                </li>
              ))
            : list.map((activities, index) => (
                <li key={index}>
                  <p>{activities.title}</p>
                  <Button onClick={() => editActivities(activities)}>
                    Edit
                  </Button>
                </li>
              ))}
        </ContainerUl>
      </Container>
    </>
  );
};

export default CardGroups;
