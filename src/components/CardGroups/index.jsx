import { Container, ContainerTitle, ContainerUl } from "./styles";

import Button from "../Button";

const CardGroups = ({ title, list }) => {
  return (
    <Container>
      <ContainerTitle>
        <h1>{title}</h1>
        {title !== "participants" && <Button>+</Button>}
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
  );
};

export default CardGroups;
