import { useState } from 'react';

function ArithmeticFunction(props) {
  const [x, setX] = useState('');
  const [y, setY] = useState('');

  function updateX(event) {
    setX(event.target.value)
  }

  function updateY(event) {
    setY(event.target.value)
  }

  const [a, b] = [Number(x), Number(y)]

  let result;

  switch(props.operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      alert("AHHHH");
  }

  return (
    <p>
      <input type="text" value={x} onChange={updateX} />
      {props.operator}
      <input type="text" value={y} onChange={updateY} />
      =
      {result}
    </p>
  )
}

export default ArithmeticFunction;
