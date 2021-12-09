import { Container } from "./styles";
import { BsSearch } from "react-icons/bs";

const CardGeneric = ({ title, cardType }) => {
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
        <button>+</button>
      </div>
    </Container>
  );
};

export default CardGeneric;
