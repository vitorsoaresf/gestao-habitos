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
  margin: 20px 0;
  width: 310px;
  color: var(--darkGreen);

  h1 {
    width: 100%;

    @media (min-width: 768px) {
      width: 80vh;
    }

    > div {
      font-size: 2.5rem;
      margin: 10px 0;
      width: 100%;
      text-align: center;
      font-weight: 600;

      > p {
        font-size: 1.8rem;
        margin-top: 8px;
      }
    }
  }

  > p {
    margin: 10px 0;
    width: 100%;
    font-size: 1.5rem;
    text-align: center;

    @media (min-width: 768px) {
      width: 80vh;
    }
  }
`;

export const ContainerTitleNotParticipant = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  width: 310px;
  color: var(--darkGreen);

  h1 {
    width: 100%;

    @media (min-width: 768px) {
      width: 80vh;
    }

    > div {
      font-size: 2.5rem;
      margin: 10px 0;
      width: 100%;
      text-align: center;
      font-weight: 600;

      > p {
        font-size: 1.8rem;
        margin-top: 8px;
      }
    }
  }

  > p {
    margin: 10px 0;
    width: 100%;
    font-size: 1.5rem;
    text-align: center;

    @media (min-width: 768px) {
      width: 80vh;
    }
  }
`;

export const ContainerBody = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1024px;

  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
  }
`;

export const ContainerBodyNotParticipant = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1024px;
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
    margin-bottom: 50px;
  }
`;
