import { Container, ListBox } from "./styles";
import { BsSearch } from "react-icons/bs";
import { useHistory } from "react-router";
import Button from "../Button";
import { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const CardGeneric = ({
  title,
  cardType,
  updateClick,
  list,
  setCurrentHabit,
  setShowEditModal,
  setShowAddModal,
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
          {cardType === "habit" && list
            ? list.map((element, index) => (
                <li key={index}>
                  <section>
                    {element.achieved && <BsFillCheckCircleFill />}
                  </section>
                  <h3> {element.title}</h3>
                  <div>
                    <Button
                      onClick={() => {
                        setCurrentHabit(element);
                        setShowEditModal(true);
                      }}
                    >
                      Edit
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
