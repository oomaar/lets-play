import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectValue } from "../slices/CounterSlice";
import {
  Container,
  SubContainer,
  Title,
} from "../global/styledPages/styledSkills";
import {
  CounterContainer,
  DecrementButton,
  IncrementButton,
} from "../global/styledPages/styledCounter";

const Counter: NextPage = () => {
  const count = useSelector(selectValue);
  const dispatch = useDispatch();

  return (
    <Container>
      <SubContainer>
        <Title>Counter with redux</Title>

        <CounterContainer>
          <DecrementButton onClick={() => dispatch(decrement())}>
            -
          </DecrementButton>
          <p>
            The value of count is <span>{count}</span>
          </p>
          <IncrementButton onClick={() => dispatch(increment())}>
            +
          </IncrementButton>
        </CounterContainer>
      </SubContainer>
    </Container>
  );
};

export default Counter;
