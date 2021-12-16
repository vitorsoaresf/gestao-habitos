import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--darkGreen);
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;

    header {
      display: flex;
      width: 100%;
      max-width: 1200px;
    }
`;
export const RightSide = styled.div`
  flex: 50%;
  background-color: var(--darkGreen);
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    display: none;
    cursor: pointer;

    &:hover {
      color: var(--green);
    }
  }

  #hidden {
    display: flex;
  }

  @media (max-width: 768px) {
    button {
      display: flex;
      background: none;
      border: none;
      font-size: 35px;
      color: var(--white);
    }

    #hidden {
      position: absolute;
      left: 0px;
      top: 80px;
      max-height: 230px;
      width: 100%;
      background-color: var(--darkGreen);
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
export const LeftSide = styled.div`
  flex: 50%;
  background-color: var(--darkGreen);
  display: flex;
  justify-content: left;
  padding-right: 25px;
  align-items: center;
`;
export const Links = styled.div`
  max-height: 80px;
  display: flex;

  a {
    text-decoration: none;
    color: var(--white);

    &:hover {
      color: var(--green);
    }
  }
  p {
    font-size: 1.3rem;
    padding: 15px;

    &:hover {
      border-bottom: solid 1px white;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    p {
      display: block;
    }
  }
  > div {
    background: var(--white);
    width: 40px;
    margin-left: 12px;
    border-radius: 100%;
    padding: 5px;
    z-index: 1;

    img {
      width: 41px;
    }
  }

  p {
    display: none;
    margin-left: 8px;
    font-size: 24px;
    color: var(--white);
    animation-name: titleMotion;
    animation-duration: 1s;
    z-index: 0;
  }

  @keyframes titleMotion {
    from {
      margin-left: -50px;
    }
    to {
      margin-left: 8px;
    }
  }
`;
