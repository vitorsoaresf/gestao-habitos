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
  height: 450px;

  h2 {
    font-size: 45px;
    margin: 16px 0;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    height: 42px;
    margin: 16px auto;
    /* background: red; */
    border-radius: 10px;
    /* background: white; */
    width: 250px;

    div {
      /* background: transparent; */
      background: white;
      display: flex;

      input {
        height: 42px;
        background: transparent;
        outline: none;
        border: none;
      }

      span {
        background: transparent;
        color: var(--darkGreen);
        padding-right: 6px;
      }
    }

    button {
      height: 42px;
      margin-left: 16px;
    }
  }
`;

export const ListBox = styled.section`
  width: 250px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* background: red; */

  ul {
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 100px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--white);
      border-radius: 100px;
    }

    > li {
      background: white;
      width: 250px;
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
