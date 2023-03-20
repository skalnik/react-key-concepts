import ArithmeticFunction from "./ArithmeticFunction";

function Calculator() {
  return (
    <form>
      <ArithmeticFunction operator="+" />
      <ArithmeticFunction operator="-" />
      <ArithmeticFunction operator="*" />
      <ArithmeticFunction operator="/" />
    </form>
  );
}

export default Calculator;
