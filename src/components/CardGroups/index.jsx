import { Container, ContainerTitle, ContainerUl } from "./styles";
import { useState } from "react";
import Button from "../Button";
import ModalGoals from "../ModalGoals";
import ModalActivities from "../ModalActivities";

const CardGroups = ({ title, list, groupId, addGoals, addActivities }) => {
  const [modalGoals, setModalGoals] = useState(false);
  const [modalActivities, setModalActivities] = useState(false);

  return (
    <>
      {modalGoals && (
        <ModalGoals
          addGoals={addGoals}
          setModalGoals={setModalGoals}
          groupId={groupId}
        />
      )}

      {modalActivities && (
        <ModalActivities
          addActivities={addActivities}
          setModalActivities={setModalActivities}
          groupId={groupId}
        />
      )}

      <Container>
        <ContainerTitle>
          <h1>{title}</h1>
          {title === "goals" && (
            <Button
              onClick={() => {
                setModalGoals(!modalGoals);
              }}
            >
              +
            </Button>
          )}
          {title === "activities" && (
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
          {title === "participants"
            ? list.map((partipant, index) => (
                <li key={index}>
                  <p>{partipant.username}</p>
                </li>
              ))
            : title === "goals"
            ? list.map((goals, index) => (
                <li key={index}>
                  <p>{goals.title}</p>
                  <Button>Edit</Button>
                </li>
              ))
            : list.map((activities, index) => (
                <li key={index}>
                  <p>{activities.title}</p>
                  <Button>Edit</Button>
                </li>
              ))}
        </ContainerUl>
      </Container>
    </>
  );
};

export default CardGroups;
