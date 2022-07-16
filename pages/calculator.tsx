import { useState } from "react";
import {
  Button,
  ButtonEquals,
  ButtonsContainer,
  Container,
  Wrapper,
} from "../global/styledPages/styledCalculator";
import { Textfit } from "react-textfit";

const Calculator = () => {
  type Calc = {
    sign: string;
    number: number;
    result: number;
  };

  const [calc, setCalc] = useState<Calc>({
    sign: "",
    number: 0,
    result: 0,
  });

  const resetClickHandler = () => {};
  const invertClickHandler = () => {};
  const percentClickHandler = () => {};
  const equalsClickHandler = () => {};
  const signClickHandler = () => {};
  const commaClickHandler = () => {};
  function numClickHandler(e) {
    e.preventDefault();
    const value = e.target.innerHTML;
    setCalc({
      ...calc,
      number:
        calc.number === 0 && value === "0"
          ? "0"
          : calc.number % 1 === 0
          ? calc.number + value
          : calc.number + value,
      result: !calc.sign ? 0 : calc.result,
    });
  }

  console.log("first", calc.number);

  const btnValues = [
    ["C", "+-", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ]
    .flat()
    .map((btn, i) => (
      <>
        {btn === "=" ? (
          <ButtonEquals key={i}>{btn}</ButtonEquals>
        ) : (
          <Button
            key={i}
            onClick={() => {
              btn === "C"
                ? resetClickHandler
                : btn === "+-"
                ? invertClickHandler
                : btn === "%"
                ? percentClickHandler
                : btn === "="
                ? equalsClickHandler
                : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                ? signClickHandler
                : btn === "."
                ? commaClickHandler
                : numClickHandler;
            }}
          >
            {btn}
          </Button>
        )}
      </>
    ));

  return (
    <Container>
      <Wrapper>
        {/* Part 0: Design */}
        <Textfit className="screen" mode="single" max={70}>
          {calc.number ? calc.number : calc.result}
        </Textfit>
        <ButtonsContainer>{btnValues}</ButtonsContainer>
        {/* C +- & / */}
        {/* 7 8 9 X */}
        {/* 4 5 6 - */}
        {/* 1 2 3 + */}
        {/* 0 . === */}
        {/* Part 1: arithmatic Calculator */}
        {/* Part 2: cos sin tan Calculator */}
        {/* Part 3: Factorial */}
        {/* Part 4: Power */}
        {/* Part 5: Square Root */}
        {/* Part 6: Percentage */}
        {/* Part 7: Remainder (Modules or %) */}
        {/* Part 8: Floor & Ceil:  */}
      </Wrapper>
    </Container>
  );
};

export default Calculator;
