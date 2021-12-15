import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  div {
    width: 310px;
    border-radius: 8px;
    background-color: var(--gray);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h3 {
      width: 100%;
      height: 50px;
      border-radius: 8px 8px 0 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--darkGreen);
      color: white;
      font-size: larger;

      p {
        margin-left: 5px;
      }

      button {
        width: 30px;
        height: 30px;
        background-color: var(--green);
        margin-right: 5px;
      }
    }

    input {
      background: var(--white);
      border-radius: 8px;
      width: 90%;
    }

    button {
      margin-bottom: 10px;
      color: var(--white);
    }
  }
`;
