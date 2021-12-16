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
                <li className="habitLi" key={index}>
                  <div>
                    <section>
                      {element.achieved && <BsFillCheckCircleFill />}
                    </section>

                    <div>
                      <h3>
                        <p>{element.title}</p>
                        <span>
                          <p>Category: {element.category}</p>
                          <p>Difficulty: {element.difficulty}</p>
                          <p>Frequency: {element.frequency}</p>
                        </span>
                      </h3>
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
                    </div>
                  </div>
                </li>
              ))
            : cardType === "groups" && list
            ? list.map((group, index) => (
                <li className="groupLi" key={index}>
                  <h3>
                    <p>{group.name}</p>
                  </h3>
                  <Button
                    onClick={() => {
                      updateClick(group.id);
                    }}
                  >
                    Details
                  </Button>
                </li>
              ))
            : list.map((myGroup, index) => (
                <li className="groupLi" key={index}>
                  <h3>
                    <p>{myGroup.name}</p>
                  </h3>

                  <Button
                    onClick={() => history.push(`/detailsgroup/${myGroup.id}`)}
                  >
                    Details
                  </Button>
                </li>
              ))}
        </ul>
      </ListBox>
    </Container>
  );
};

export default CardGeneric;
