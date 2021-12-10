import { Container } from "./styles";

const Input = ({ error, name, register, placeholder, ...rest }) => {
  return (
    <Container>
      <input {...register(name)} placeholder={placeholder} {...rest} />
    </Container>
  );
};

export default Input;
