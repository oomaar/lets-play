import Image from "next/image";
import Link from "next/link";
import {
  NavContainer,
  LogoContainer,
  NavLink,
  NavLinksList,
} from "./styledNavbar";

export const Navbar = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <Image src="/favicon.ico" width={50} height={50} objectFit="contain" />
      </LogoContainer>
      <NavLinksList>
        <NavLink>
          <Link href="/calculator">
            <a>Calculator</a>
          </Link>
        </NavLink>
        <NavLink>
          <a>TODO</a>
        </NavLink>
        <NavLink>
          <a>Weather</a>
        </NavLink>
        <NavLink>
          <Link href="/skills">
            <a>Skills</a>
          </Link>
        </NavLink>
        <NavLink>
          <Link href="/counter">
            <a>Counter</a>
          </Link>
        </NavLink>
      </NavLinksList>
    </NavContainer>
  );
};
