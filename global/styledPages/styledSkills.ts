import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.containerColor};
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem auto;
`;

const Title = styled.h2`
  text-align: center;
  padding-bottom: 1rem;
  color: ${({ theme }) => theme.colors.titleColor};
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;

const DerivedStateContainer = styled.div`
  h3 {
  }

  div {
    margin: 1rem 0;
    button {
      background-color: #fbb034;
      margin: 0 0.5rem;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      padding: 0.5rem 1rem;
    }
  }
`;

export { Container, SubContainer, Title, DerivedStateContainer };
