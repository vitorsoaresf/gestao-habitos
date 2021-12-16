import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 10px;
  width: 80%;
  max-width: 300px;
  height: 40px;
  margin: 10px 0;

  input {
    /* font-family: "Oswald", sans-serif; */
    font-family: "Itim", cursive;
    /* letter-spacing: 1px; */
    background: transparent;
    outline: none;
    border: none;
    height: 100%;
    width: 85%;
    margin: 0 8px;
    font-size: 1.1rem;
    color: var(--darkGray);

    ::placeholder {
      font-size: 1rem;
    }
  }

  svg {
    color: var(--darkGreen);
    width: 15%;
    height: 50%;
  }

  p {
    position: absolute;
    margin-left: 170px;
    color: var(--red);
  }
`;
