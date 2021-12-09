import { Container } from "./styles";

const Input = ({ register, name, placeholder, error, ...rest }) => {
  return (
    <Container>
      <input {...register(name)} placeholder={placeholder} {...rest} />
    </Container>
  );
};

export default Input;
