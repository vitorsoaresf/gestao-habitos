import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  header {
    background: var(--darkGreen);
    display: flex;
    justify-content: center;
    height: 70px;
    align-items: center;

    > div {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1000px;

      section {
        > a {
          text-decoration: none;
          margin-left: 15px;
          font-size: 24px;
          color: var(--white);
          cursor: pointer;
          padding: 5px 0;

          :hover {
            border-bottom: 1px solid var(--white);
          }

          :focus {
            border-bottom: 1px solid var(--white);
          }
        }
        a + a + a {
          margin-right: 10px;
        }
      }
    }
  }
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  > div {
    background: var(--white);
    width: 40px;
    margin-left: 12px;
    border-radius: 100%;
    padding: 5px;

    img {
      width: 41px;
    }
  }

  p {
    margin-left: 8px;
    font-size: 24px;
    color: var(--white);
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h1 {
    font-size: 64px;
  }

  p {
    font-size: 25px;
    text-align: center;
    margin: 25px 10px 0 10px;
  }
`;
