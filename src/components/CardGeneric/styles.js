import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  // background: var(--green);
  background-image: linear-gradient(var(--green), var(--darkGreen));
  align-items: center;
  border-radius: 10px;
  width: 280px;
  height: 540px;

  @media (min-width: 1400px) {
    width: 380px;
  }

  > h2 {
    font-size: 45px;
    margin: 16px 0;
    color: white;
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 42px;
    margin: 16px auto;
    width: 250px;
    width: 90%;

    > div {
      background: white;
      display: flex;
      width: 100%;
      margin: 0;
      border-radius: 10px;

      > input {
        height: 42px;
        background: transparent;
        outline: none;
        border: none;
        margin: 0 8px;
        width: 90%;
      }

      > span {
        background: transparent;
        color: var(--darkGreen);
        padding-right: 6px;
        display: flex;
        align-items: center;
        cursor: pointer;
      }
    }

    > button {
      height: 42px;
      width: 42px;
      margin-left: 8px;
    }
  }
`;

export const ListBox = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > ul {
    height: 380px;
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

    width: 90%;

    .habitLi {
      :hover {
        display: flex;
        justify-content: flex-start;
        height: 100px;
        transition: 0.4s;
      }

      :hover span {
        visibility: visible;
        transition-delay: 0.2s;
      }
    }

    .groupLi {
      display: flex;
      align-items: center;

      > h3 {
        margin-left: 4px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 145px;
        height: 100%;
        display: flex;
        align-items: center;

        > p {
          font-size: 1.4rem;
        }
      }

      @media (min-width: 1400px) {

        h3 {
          width:220px;
        }
      }

      > Button {
        background: var(--lightGreen);
        width: 70px;
        font-size: 15px;
        height: 20px;
        margin-right: 4px;

        :hover {
          background: var(--purple-0);
        }
      }
    }

    > li {
      background: white;
      height: 50px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      border-radius: 8px;
      margin: 10px 12px 0px 0px;
      transition: 0.4s;
      width: 95%;

      > div {
        width: 100%;
        height: 25px;
        padding: 0 0 0 4px;
        display: flex;
        justify-content: flex-start;
        margin-top: 10px;

        > section {
          width: 28px;
          color: green;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        > div {
          display: flex;
          justify-content: space-between;
          padding: 0 4px;
          width: 80%;

          > h3 {
            width: 70%;

            > p {
              font-size: 1.4rem;
              color: var(--darkGreen);
            }

            > span {
              display: flex;
              flex-direction: column;
              visibility: hidden;
              display: flex;
              width: 100%;
              height: 100%;
              gap: 4px;
              color: var(--darkGreen);
            }
          }
          > div {
            display: flex;
            align-items: center;

            > Button {
              background: var(--lightGreen);
              width: 50px;
              font-size: 15px;
              height: 20px;
            }
          }
        }
      }
    }
  }
`;
