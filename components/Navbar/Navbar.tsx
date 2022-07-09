import { NavContainer, NavLink, NavLinksList } from "./styledNavbar";
import Image from "next/image";

export const Navbar = () => {
  return (
    <NavContainer>
      <div>
        <Image src="/favicon.ico" width={50} height={50} objectFit="contain" />
      </div>
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
