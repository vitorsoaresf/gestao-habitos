import styled from "styled-components";

export const Container = styled.div`
  background: var(--Green);
  width: 280px;
  /* height: 450px; */
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 45px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }
`;

export const ContainerUl = styled.ul`
  width: 310px;
  background-color: var(--green);
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
    /* margin-top: 10px; */
    margin-bottom: 10px;
    background-color: #ecf0f1;
    border-radius: 5px;

    button {
      width: 50px;
      height: 30px;
      background-color: var(--lightGreen);
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
