import styled from "styled-components";

export const Container = styled.div`
  width: 310px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  background-color: var(--green);
  border-radius:10px; 
  margin: 15px 0;
  
}
`;

export const ContainerTitle = styled.div`
  width: 90%;
  display: flex;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;

  margin: 10px 0;
  color: var(--white);
  font-weight: 600;

  h1 {
    font-size: 2rem;
  }

  button {
    width: 50px;
    font-size: 1.5rem;
    color: var(--white);
  }
`;

export const ContainerUl = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  padding-top: 20px;
  padding-bottom: 10px;

  li {
    width: 90%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    background-color: #ecf0f1;
    border-radius: 5px;
    font-size: 1.2rem;
    color: var(--purple-0);
    font-weight: 600;
    font-family: "Indie Flower", cursive;
    letter-spacing: 2px;

    button {
      width: 50px;
      height: 30px;
      background-color: var(--purple-0);
      color: var(--white);
      border-radius: 5px;
      margin-right: 5px;
    }

    p {
      width: 200px;
      margin-left: 5px;
    }
  }
`;
