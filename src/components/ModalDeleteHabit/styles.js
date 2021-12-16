import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;

  div {
    width: 310px;
    height: 200px;
    border-radius: 8px;
    background-color: var(--gray);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

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
        font-size: 1.2rem;
      }

      button {
        margin-right: 5px;
        background-color: var(--red);
        width: 30px;
        height: 30px;
      }
    }

    p {
      font-size: 1.5rem;
      text-align: center;
    }
`;

export const ButtonBox = styled.section`
  width: 100%;

  display: flex;
  justify-content: space-evenly;

  button {
    margin-bottom: 10px;
  }
`;
