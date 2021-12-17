import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  width: 310px;
  max-height: 540px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  background-color: var(--green);
  border-radius:10px; 
  margin: 15px 0;
  background-image: linear-gradient(
    var(--green),
    var(--darkGreen));
  
}
`;

export const ContainerTitle = styled.div`
  width: 90%;
  display: flex;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;

  margin: 10px 0;
  color: var(--white);

  > div {
    width: 100%;
    display: flex;
    justify-content: center;

    h1 {
      font-size: 3rem;
      color: white;
    }
  }

  button {
    width: 50px;
    font-size: 1.5rem;
    color: var(--white);
  }
`;

export const ContainerUl = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  padding-top: 20px;
  padding-bottom: 10px;

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

  li {
    width: 90%;
    min-height: 50px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ecf0f1;
    border-radius: 5px;
    font-size: 1.2rem;
    color: var(--darkGreen);
    font-weight: 600;
    font-family: "Itim", cursive;
    letter-spacing: 2px;
    margin: 10px 12px 0px 0px;

    button {
      background: var(--lightGreen);
      width: 70px;
      font-size: 15px;
      height: 20px;
      margin-right: 4px;

      :hover {
        background: var(--purple-0);
      }
    }

    p {
      margin-left: 4px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      width: 75%;
      height: 100%;
      display: flex;
      align-items: center;

      overflow-x: scroll;

      ::-webkit-scrollbar {
        width: 0px;
      }
      ::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 100px;
      }
      ::-webkit-scrollbar-thumb:horizontal {
        /* background-color: var(--green); */
        border-radius: 100px;
        -webkit-width: 1;
      }
    }
  }
`;
