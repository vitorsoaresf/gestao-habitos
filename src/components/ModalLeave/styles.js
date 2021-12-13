import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;

    p {
      color: var(--white);
      font-size: 1.2rem;
    }

    button {
      width: 30px;
      height: 30px;
      color: var(--white);
    }
  }
  button {
    width: 100px;
    height: 50px;
    color: var(--white);
  }
`;
