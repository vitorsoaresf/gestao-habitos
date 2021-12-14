import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 450px;
      margin-top: 120px;

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
        height: 450px;
        width: 300px;
        display: flex;
        border-radius: 10px;
        margin-bottom: 120px;
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
        }

        a {
          color: var(--purple);
          text-decoration: none;
        }
      }
    }
  }
`;
