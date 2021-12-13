import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  height: 100vh;
  /* background: pink; */

  header {
    width: 100%;
    background: var(--darkGreen);
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      background: var(--white);
      width: 32px;
      margin-left: 12px;
      border-radius: 100%;
      padding: 2px;

      img {
        width: 30px;
      }
    }

    > p {
      margin-right: 12px;
      color: var(--white);
    }
  }

  > div {
    /* background: orange; */
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    > div {
      /* background: blue; */
      display: flex;
      flex-direction: column;

      > Button {
        margin: 8px;
        width: 200px;
      }
    }
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* height: 50vh; */

  h1 {
    font-size: 64px;
  }

  p {
    font-size: 25px;
    text-align: center;
    margin: 25px 10px 0 10px;
  }
`;
