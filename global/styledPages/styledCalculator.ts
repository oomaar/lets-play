import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbb034;
  background-image: linear-gradient(315deg, #fbb034 0%, #ffdd00 74%);
  width: 50%;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 10px;
`;

export const Wrapper = styled.div`
  width: 340px;
  height: 540px;
  padding: 10px;
  border-radius: 10px;
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);

  .screen {
    height: 100px;
    width: 100%;
    margin-bottom: 10px;
    padding: 0 10px;
    background-color: #4357692d;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #fff;
    font-weight: 700;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: calc(100% - 110px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px;
`;

export const Button = styled.button`
  background-color: rgb(80, 60, 209);
  font-size: 24px;
  color: rgb(255, 255, 255);
  font-weight: 700;
  cursor: pointer;
  border-radius: 10px;

  :hover {
    background-color: rgb(61, 43, 184);
  }
`;

export const ButtonEquals = styled.button`
  background-color: rgb(243, 61, 29);
  font-size: 24px;
  color: rgb(255, 255, 255);
  font-weight: 700;
  cursor: pointer;
  border-radius: 10px;
  grid-column: 3 / 5;

  :hover {
    background-color: rgb(228, 39, 15);
  }
`;
