import { Container, ListBox } from "./styles";
import { BsSearch } from "react-icons/bs";

import Button from "../Button";

const CardGeneric = ({
  title,
  cardType,
  updateClick,
  list,
  addClick,
  habitUptadeData,
}) => {
  return (
    <Container>
      <h2>{title}</h2>
      <div>
        <div>
          <input></input>
          <span>
            <BsSearch />
          </span>
        </div>
        {cardType !== "groups" && <Button onClick={addClick}>+</Button>}
      </div>
      <ListBox>
        <ul>
          {list ? (
            list.map((element, index) => (
              <li key={index}>
                <h3> {element.title}</h3>
                <div>
                  <Button
                    onClick={() => {
                      updateClick(habitUptadeData, element.id);
                    }}
                  >
                    Done
                  </Button>
                  <Button>Delete</Button>
                </div>
              </li>
            ))
          ) : (
            <div>{title} is empty</div>
          )}
        </ul>
      </ListBox>
    </Container>
  );
};

export default CardGeneric;
