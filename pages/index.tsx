import Image from "next/image";
import {
  Container,
  LogoContainer,
  NavContainer,
  NavLink,
  NavLinksList,
} from "../global/styledPages/styledIndex";

export default function Home() {
  return (
    <Container>
      <NavContainer>
        <LogoContainer>
          <Image
            src="/favicon.ico"
            width={50}
            height={50}
            objectFit="contain"
          />
        </LogoContainer>
        <NavLinksList>
          <li>
            <NavLink>Calculator</NavLink>
          </li>
          <li>
            <NavLink>TODO</NavLink>
          </li>
          <li>
            <NavLink>Weather</NavLink>
          </li>
        </NavLinksList>
      </NavContainer>
    </Container>
  );
}
