import {
  NavContainer,
  LogoContainer,
  NavLink,
  NavLinksList,
} from "./styledNavbar";
import Image from "next/image";

export const Navbar = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <Image src="/favicon.ico" width={50} height={50} objectFit="contain" />
      </LogoContainer>
      <NavLinksList>
        <NavLink>
          <a>Calculator</a>
        </NavLink>
        <NavLink>
          <a>TODO</a>
        </NavLink>
        <NavLink>
          <a>Weather</a>
        </NavLink>
      </NavLinksList>
    </NavContainer>
  );
};
