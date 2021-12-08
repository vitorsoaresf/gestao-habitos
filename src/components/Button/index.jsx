import Container from "./styles";

const Button = ({ isGray, children, ...rest }) => {
  return (
    <Container isGray={isGray} type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
