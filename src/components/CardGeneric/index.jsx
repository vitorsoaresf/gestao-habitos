import { Container, ListBox } from "./styles";
import { BsSearch } from "react-icons/bs";

import Button from "../Button";

const CardGeneric = ({
  title,
  cardType,
  updateClick,
  list,
  habitUptadeData,
  setCurrentHabit,
  setShowDeleteModal,
  setShowAddModal,
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
        {cardType !== "groups" && (
          <Button
            onClick={() => {
              setShowAddModal(true);
            }}
          >
            +
          </Button>
        )}
      </div>
      <ListBox>
        <ul>
          {list ? (
            list.map((habit, index) => (
              <li key={index}>
                <h3> {habit.title}</h3>
                <div>
                  <Button
                    onClick={() => {
                      updateClick(habitUptadeData, habit.id);
                    }}
                  >
                    Done
                  </Button>
                  <Button
                    onClick={() => {
                      setCurrentHabit(habit);
                      setShowDeleteModal(true);
                    }}
                  >
                    Delete
                  </Button>
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
