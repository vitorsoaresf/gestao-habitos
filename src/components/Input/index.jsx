import { Container } from "./styles";

const Input = ({ error, name, register, placeholder, children, ...rest }) => {
  return (
    <Container {...register(name)} placeholder={placeholder} {...rest}>
      {children}
      <input {...register(name)} placeholder={placeholder} {...rest} />
    </Container>
  );
};

export default Input;
