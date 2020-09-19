let displayValue = document.getElementById('result');

function clear() {
  alert("Vasya!!!!!")
}

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
  let operateValue = displayValue.value;

  if (operateValue.match(/^(\d|[-+*/])*$/)) {
    displayValue.value = eval(operateValue);
  }
}    


function display(button) {
  displayValue.value += button;
}
