let displayValue = document.getElementById("output");
const error = "You cant divide by zero";

function removeZero() {
  let operateValue = displayValue.innerHTML;
  if (operateValue == "0") {
    operateValue = " ";
    displayValue.innerHTML = operateValue;
  }
}

function clearDisplay() {
  document.getElementById("output").innerHTML = 0;
}

function operate() {
  let operateValue = displayValue.innerHTML;
  let resultOfEval;

  if (operateValue.match(/^(\d|[-+*\/]| |\.)*$/)) {
    
    resultOfEval = eval(operateValue);

    if (resultOfEval == Infinity) {
      displayValue.innerHTML = error;
    
    } else {
      displayValue.innerHTML = eval(operateValue);
    }  
  }
}
    


function display(button) {
  removeZero();
  displayValue.innerHTML += button;
}
