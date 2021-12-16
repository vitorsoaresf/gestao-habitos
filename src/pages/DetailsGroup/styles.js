import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* height: 100vh; */
`;

export const ContainerTitle = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  width: 310px;
  color: var(--darkGreen);

  h1 {
    width: 100%;
    p {
      font-size: 2.5rem;
    }
  }

  p {
    margin: 10px 0;
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
  }
`;

export const ContainerBody = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ContainerButton = styled.div`
  display: flex;

  button {
    background-color: var(--gray);
    color: var(--black);
  }
  button + button {
    background-color: var(--darkGreen);
    color: var(--white);
    margin-left: 5px;
  }
`;
