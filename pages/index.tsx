import Image from "next/image";
import { Container, HeroContainer } from "../global/styledPages/styledIndex";

export default function Home() {
  return (
    <Container>
      <HeroContainer>
        <Image
          src="/react-light.png"
          width={100}
          height={100}
          objectFit="contain"
        />
        <h2>React Challenges</h2>
      </HeroContainer>
    </Container>
  );
}
