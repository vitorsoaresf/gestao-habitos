import { Container } from "./styles";

const Input = ({ name, register }) => {
  return (
    <Container>
      <input {...register(name)} />
    </Container>
  );
};

export default Input;
