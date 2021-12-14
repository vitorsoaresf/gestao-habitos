import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ContainerTitle = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2rem;
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
