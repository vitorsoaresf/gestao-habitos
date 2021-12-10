import styled from "styled-components";

export const Container = styled.div`
  background: var(--green);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  @media (min-width: 768px) {
    height: 700px;
    width: 500px;
    display: flex;
    border-radius: 10px;
  }

  h1 {
    color: var(--white);
    font-size: 40px;
    margin-bottom: 10px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      margin: 10px 0 10px 0;
      color: var(--white);
    }

    a {
      color: var(--purple);
      text-decoration: none;
    }
  }
`;
