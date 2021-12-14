import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  header {
    width: 100%;
    background: var(--darkGreen);
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > a {
      text-decoration: none;
      font-size: 24px;
      margin-right: 32px;
      color: var(--white);
    }
  }

  > img {
    position: absolute;
    z-index: -1;
    margin-top: 90px;

    @media (max-width: 767px) {
      display: none;
    }
  }

  > div {
    display: flex;

    @media (min-width: 768px) {
      justify-content: flex-end;
    }

    > div {
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      @media (min-width: 768px) {
        width: 80vw;
      }
    }
  }
`;

export const ButtonBox = styled.section`
  display: flex;
  flex-direction: column;

  > Button {
    margin: 8px;
    width: 200px;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;

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

export const AboutUsBox = styled.footer`
  background: var(--gray);
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 42px 0 42px 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  > div {
    @media (min-width: 768px) {
      width: 650px;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
    }

    > div {
      background: var(--darkGreen);
      color: var(--white);
      margin-top: 8px;
      display: flex;
      flex-direction: column;
      padding: 12px;
      width: 270px;
      height: 150px;
      border-radius: 8px;
      justify-content: space-between;

      box-shadow: rgba(0, 0, 0, 0.55) 0px 3px 8px;

      a {
        text-decoration: none;
        color: var(--white);
        margin-left: 4px;
        cursor: pointer;
      }
    }
  }
`;

export const NameBox = styled.div`
  display: flex;
  margin-bottom: 8px;
  justify-content: center;
  border-bottom: 1px solid var(--gray);

  h1 {
    font-weight: 600;
  }

  p {
    font-family: italic;
  }
`;

export const PicBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin-right: 8px;
  }

  h4 {
    width: 80%;
  }
`;
