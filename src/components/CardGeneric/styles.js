import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--lightGreen);

  border-radius: 10px;
  width: 280px;
  max-width: 386px;

  h2 {
    font-size: 64px;
    margin: 16px 0;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    height: 42px;
    margin: 16px auto;
    background: red;
    border-radius: 10px;
    background: white;
    width: 240px;

    div {
      background: transparent;

      input {
        height: 42px;
        background: transparent;
        outline: none;
        border: none;
        margin: 0 8px;
      }

      span {
        background: transparent;
        color: var(--darkGreen);
      }
    }

    button {
      height: 42px;
      margin-left: 16px;
    }
  }
`;
