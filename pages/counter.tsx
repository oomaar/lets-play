import type { NextPage } from "next";
import {
  Container,
  SubContainer,
  Title,
} from "../global/styledPages/styledSkills";

const Counter: NextPage = () => {
  return (
    <Container>
      <SubContainer>
        <Title>Counter with redux</Title>
      </SubContainer>
    </Container>
  );
};

export default Counter;
