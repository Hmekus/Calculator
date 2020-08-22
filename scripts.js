function add(a, b) {
  let sum = a + b;
  return sum;
}

function subtract(a, b) {
  let difference = a - b;
  return difference;
}

function multiply(array) {
  return array.reduce((a, b) => a * b);
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  if (operator === '+') {
    add(a, b);
  } else if (operator === '-') {
    subtract(a, b);
  } else if (operator === '*') {
    multiply(a, b);
  } else {
    divide(a, b);
  }
}