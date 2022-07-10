import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.div`
  @media screen and (max-width: 768px) {
    width: 400px;
  }

  @media screen and (max-width: 425px) {
    width: 300px;
  }
`;

const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.titleColor};

    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 425px) {
      font-size: 2rem;
    }
  }
`;

export { Container, HeroContainer };
