function basicCalculator() {
  const num1 = 10;
  const num2 = 20;

  function operation(a, b, op) {
    switch (op) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b; 
      case 'multiply':
        return a * b;
      case 'divide':
        return a / b;
      default:
        return 'Invalid operation';
    }
  }

  return (
    <div>
      <h1>Basic Calculator</h1>
      <p>Sum of {num1} and {num2} is {operation(num1, num2, 'add')}</p>
      <p>Difference of {num1} and {num2} is {operation(num1, num2, 'subtract')}</p>
      <p>Product of {num1} and {num2} is {operation(num1, num2, 'multiply')}</p>
      <p>Quotient of {num1} and {num2} is {operation(num1, num2, 'divide')}</p>
    </div>
  );
}