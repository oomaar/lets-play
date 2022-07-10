import Image from "next/image";
import {
  Container,
  HeroContainer,
  LogoContainer,
} from "../global/styledPages/styledIndex";

export default function Home() {
  return (
    <Container>
      <HeroContainer>
        <LogoContainer>
          <Image
            src="/react-light.png"
            width={500}
            height={400}
            objectFit="contain"
          />
        </LogoContainer>
        <h2>React Challenges</h2>
      </HeroContainer>
    </Container>
  );
}
