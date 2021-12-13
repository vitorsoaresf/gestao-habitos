import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.isGray ? "var(--gray)" : "var(--darkGreen)")};
  color: ${(props) => (props.isGray ? "black" : "var(--white)")};
  width: 150px;
  height: 40px;
  border: 0;
  border-radius: 8px;
  font-size: large;
  cursor: pointer;
`;
