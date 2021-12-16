import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0 50px 0;
  }
`;
