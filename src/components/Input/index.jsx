import { Container } from "./styles";

const Input = ({ register, placeholder }) => {
  return (
    <Container>
      <input type="text" placeholder={placeholder} />
    </Container>
  );
};

export default Input;
