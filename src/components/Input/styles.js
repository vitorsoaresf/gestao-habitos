import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-radius: 10px;
  width: 80%;
  max-width: 300px;
  height: 40px;
  margin: 8px 0;

  input {
    background: transparent;
    outline: none;
    border: none;
    height: 100%;
    margin: 0 8px;
  }
`;
