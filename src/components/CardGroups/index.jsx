import { Container, ListBox } from "./styles";

import Button from "../Button";

const CardGroups = ({ title, list }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <ListBox>
        <ul>
          {title === "Participants" ? (
            /*particpants.map */
            <div>
              <h3>{/*{element.name}*/}Nome do Participante</h3>
            </div>
          ) : title === "Goals" ? (
            /*goals.map */
            <div>
              <h3>{/*{element.name}*/}Nome da meta</h3>
              <div>
                <Button>Done</Button>
                <Button>Delete</Button>
              </div>
            </div>
          ) : (
            /*activities.map */
            <div>
              <h3>{/*{element.name}*/}Nome da Atividade</h3>
              <div>
                <Button>Edit</Button>
              </div>
            </div>
          )}
        </ul>
      </ListBox>
    </Container>
  );
};

export default CardGroups;
