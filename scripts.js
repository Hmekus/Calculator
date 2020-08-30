let displayValue = document.getElementById('result');

/*let matchItUp = {
  '+': function (x, y) {return x + y},
  '-': function (x, y) {return x - y}
};*/

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

function operate() {
  let operateValue = displayValue.value.split(' ');
  let operands = [];
  let operators = [];

  for (let i = 0; i < operateValue.length; i++) {
    if (i % 2 === 0) {
      operands.push(operateValue[i]);

    } else {
      operators.push(operateValue[i]);
    }
  }

  if (operators[0] === "-") {
    displayValue.value = subtract(operands[0], operands[1]);
  
  } else if (operators[0] === "+") {
    displayValue.value = add(Number(operands[0]), Number(operands[1]));

  } else if (operators[0] === "*") {
    displayValue.value = Number(multiply(operands));

  } else {
    displayValue.value = divide(operands[0], operands[1]);
  }
}    


function display(button) {
  displayValue.value += button;
}

function clear() {
  displayValue.value = 0;
}
