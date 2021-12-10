import { Container } from "./styles";

const Button = ({ children, onClick, type }) => {
  return (
    <Container type={type} onClick={() => onClick()}>
      {children}
    </Container>
  );
};

export default Button;
