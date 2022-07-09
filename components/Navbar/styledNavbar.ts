import styled from "styled-components";

const NavContainer = styled.nav`
  position: fixed;
  inset: 0;
  bottom: unset;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem 4rem;
`;

const NavLinksList = styled.ul`
  display: flex;
  gap: 0 2rem;
`;

const NavLink = styled.li`
  transition: all 0.3s ease-in-out;
  font-weight: 700;
  font-size: 1.2rem;

  :hover {
    transform: scale(1.1);
  }
`;

export { NavContainer, NavLinksList, NavLink };
