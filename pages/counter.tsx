import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import {
  Container,
  SubContainer,
  Title,
} from "../global/styledPages/styledSkills";
import { decrement, increment } from "../slices/CounterSlice";

const Counter: NextPage = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Container>
      <SubContainer>
        <Title>Counter with redux</Title>

        <div>
          <h1>The value of count is {count}</h1>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
      </SubContainer>
    </Container>
  );
};

export default Counter;
