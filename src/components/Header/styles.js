import styled from "styled-components";

export const Container = styled.div`
  background: var(--darkGreen);
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;

  .logo {
    width: 100px;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu {
    width: 50px;
    height: 50px;
  }

  p:hover {
    cursor: pointer;
    filter: brightness(120%);
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
