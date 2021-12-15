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
        background-color: var(--green);
        width: 30px;
        height: 30px;
      }
    }

    p {
      font-size: 1.5rem;
      text-align: center;
    }

    button {
      margin-bottom: 10px;
    }

    width: 310px;
    height: 300px;
    border-radius: 8px;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;
