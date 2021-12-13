import { Container } from "./styles";

const Button = ({ isGray, children, onClick, type }) => {
  return (
    <Container isGray={isGray} type={type} onClick={onClick}>
      {children}
    </Container>
  );
};

export default Button;
