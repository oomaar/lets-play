import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { decrement, increment } from "../slices/CounterSlice";
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
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Container>
      <SubContainer>
        <Title>Counter with redux</Title>

        <CounterContainer>
          <IncrementButton onClick={() => dispatch(increment())}>
            +
          </IncrementButton>
          <p>
            The value of count is <span>{count}</span>
          </p>
          <DecrementButton onClick={() => dispatch(decrement())}>
            -
          </DecrementButton>
        </CounterContainer>
      </SubContainer>
    </Container>
  );
};

export default Counter;
