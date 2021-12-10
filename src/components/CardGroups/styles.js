import styled from "styled-components";

export const Container = styled.div`
  background: var(--lightGreen);
  width: 280px;
  height: 450px;
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

export const ListBox = styled.div`
  width: 250px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    > div {
      background: white;
      width: 250px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 8px;
      margin-top: 10px;

      h3 {
        font-size: 25px;
        width: 80%;
        height: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
      }

      > div {
        Button + Button {
          margin: 3px 3px 0px 0px;
        }
        display: flex;
        flex-direction: column;
      }

      Button {
        width: 80px;
        font-size: 15px;
        height: 20px;
      }
    }
  }
`;
