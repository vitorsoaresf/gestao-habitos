import styled from "styled-components";

export const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 450px;

      @media (max-width: 767px) {
        display: none;
      }
    }

    > div {
      background: var(--green);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 100vw;

      @media (min-width: 768px) {
        width: 400px;
        height: 400px;
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
          font-family: "Itim", cursive;
          letter-spacing: 2px;
        }

        a {
          color: var(--purple);
          text-decoration: none;
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
