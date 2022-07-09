import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem 4rem;
  box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.3);

  @media screen and (max-width: 768px) {
    padding: 0.5rem 1rem;
    justify-content: space-between;
  }
`;

export const LogoContainer = styled.div`
  @media screen and (max-width: 320px) {
    width: 30px;
  }
`;

const NavLinksList = styled.ul`
  display: flex;
  gap: 0rem 2rem;

  @media screen and (max-width: 768px) {
    gap: 0rem 1rem;
  }
`;

const NavLink = styled.li`
  transition: all 0.3s ease-in-out;
  font-weight: 700;
  font-size: 1.2rem;

  :hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 0.8rem;
  }
`;

export { NavContainer, NavLinksList, NavLink };
