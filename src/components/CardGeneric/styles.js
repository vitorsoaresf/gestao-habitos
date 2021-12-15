import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: var(--green);
  align-items: center;

  border-radius: 10px;
  width: 280px;
  height: 540px;

  @media (min-width: 1400px) {
    width: 380px;
  }

  h2 {
    font-size: 45px;
    margin: 16px 0;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    height: 42px;
    margin: 16px auto;
    border-radius: 10px;
    width: 250px;
    width: 90%;

    div {
      background: white;
      display: flex;
      width: 100%;
      margin: 0;

      input {
        height: 42px;
        background: transparent;
        outline: none;
        border: none;
        margin: 0 8px;
        width: 90%;
      }

      span {
        background: transparent;
        color: var(--darkGreen);
        padding-right: 6px;
      }
    }

    button {
      height: 42px;
      width: 42px;
      margin-left: 8px;
    }
  }
`;

export const ListBox = styled.section`
  width: 100%;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    overflow-y: scroll;
    width: 90%;

    > li {
      background: white;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 8px;
      margin-top: 10px;

      h3 {
        font-size: 15px;
        font-weight: 550;
        width: 80%;
        height: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        margin-left: 8px;
      }

      > div {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-around;
        align-items: flex-end;
        margin-right: 3px;
        max-width: 80px;
      }
      Button {
        width: 80px;
        font-size: 15px;
        height: 20px;
      }
    }
  }
`;
