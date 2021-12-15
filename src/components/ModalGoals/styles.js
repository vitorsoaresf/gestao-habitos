import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  div {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      width: 100%;
      padding: 5px 0;
      border-radius: 5px 5px 0 0;
      background: var(--darkGreen);
      font-size: 2rem;
      color: var(--white);
      display: flex;
      justify-content: space-between;

      p {
        margin-left: 5px;
      }

      button {
        color: var(--white);
        width: 30px;
        height: 30px;
        background: var(--red);
        margin-right: 5px;
      }
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: var(--gray);
      border-radius: 0 0 5px 5px;

      input {
        width: 100%;
      }

      button {
        margin: 10px 0;
        width: 80%;
      }
    }
  }
`;
