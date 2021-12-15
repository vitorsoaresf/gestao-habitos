import { Container, ListBox } from "./styles";
import { BsSearch } from "react-icons/bs";
import { useHistory } from "react-router";
import Button from "../Button";
import Loading from "../Loading";
import { useState } from "react";

const CardGeneric = ({
  title,
  cardType,
  updateClick,
  list,
  habitUptadeData,
  setCurrentHabit,
  setShowDeleteModal,
  setShowAddModal,
  setShowAddGroupModal,
  searchFunction,
}) => {
  const [input, setInput] = useState("");
  const history = useHistory();

  return (
    <Container>
      <h2>{title}</h2>
      <div>
        <div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <span>
            <BsSearch onClick={() => searchFunction(input)} />
          </span>
        </div>
        {cardType !== "groups" && (
          <>
            {cardType === "habit" ? (
              <Button
                onClick={() => {
                  setShowAddModal(true);
                }}
              >
                +
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setShowAddGroupModal(true);
                }}
              >
                +
              </Button>
            )}
          </>
        )}
      </div>
      <ListBox>
        <ul>
          {cardType === "habit" && list
            ? list.map((habit, index) => (
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
            : cardType === "groups" && list
            ? list.map((group, index) => (
                <li key={index}>
                  <h3>{group.name}</h3>
                  <div>
                    <Button
                      onClick={() => {
                        updateClick(group.id);
                      }}
                    >
                      Details
                    </Button>
                  </div>
                </li>
              ))
            : list.map((myGroup, index) => (
                <li key={index}>
                  <h3>{myGroup.name}</h3>
                  <div>
                    <Button
                      onClick={() =>
                        history.push(`/detailsgroup/${myGroup.id}`)
                      }
                    >
                      Details
                    </Button>
                  </div>
                </li>
              ))}
        </ul>
      </ListBox>
    </Container>
  );
};

export default CardGeneric;
