import Image from "next/image";
import {
  Container,
  NavContainer,
  NavLink,
  NavLinksList,
} from "../global/styledPages/styledIndex";

export default function Home() {
  return (
    <Container>
      <NavContainer>
        <div>
          <Image
            src="/favicon.ico"
            width={50}
            height={50}
            objectFit="contain"
          />
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
    </Container>
  );
}
