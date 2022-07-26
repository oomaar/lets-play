import styled from "styled-components";

const CounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 1rem;

  p {
    font-size: 1.2rem;

    span {
      color: #fbb034;
      font-size: 2rem;
    }
  }
`;

const IncrementButton = styled.button`
  border: 0;
  outline: 0;
  background-color: #fbb034;
  font-size: 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
`;

const DecrementButton = styled.button`
  border: 0;
  outline: 0;
  background-color: #fbb034;
  font-size: 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
`;

export { CounterContainer, IncrementButton, DecrementButton };
