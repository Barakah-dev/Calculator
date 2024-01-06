let value1 = 0;
let operation = '';
let operationInProgress = false;
let value2 = 0;
let result = 0;
let isResult = false;

function getDisplay() {
  const displayElementQueryResult = document.getElementsByClassName('display');
  
  //if (displayElementQueryResult.length > 0) {
  if (displayElementQueryResult.length) {
    const displayElement = displayElementQueryResult[0];
    return displayElement;
  }
  return null;
}

function numClick(num) {
  const displayElement = getDisplay()
  //console.log(`Value1 is ${value1}, Num is ${num}, Operation is ${operation} 
 // and innerHTML of display is ${displayElement.innerHTML}`);
  
  if (displayElement.innerHTML == '0' || operationInProgress) {
    displayElement.innerHTML = num;
    operationInProgress = false;
  }
  else {
    displayElement.innerHTML += num;
  }

  const btnAcQueryResult = document.getElementsByClassName('btn-ac');

  if (btnAcQueryResult.length) {
    const acBtnElement = btnAcQueryResult[0];
    acBtnElement.innerHTML = 'C';
  }
}

function clearDisplay() {
  const displayElement = getDisplay();
  displayElement.innerHTML = 0;
  value1 = 0;
  operation = '';
  operationInProgress = false;
  value2 = 0;

  const btnAcQueryResult = document.getElementsByClassName('btn-ac');

    if (btnAcQueryResult.length) {
      const acBtnElement = btnAcQueryResult[0];
      acBtnElement.innerHTML = 'AC';
    }
}

function arithmeticOperation(operationSign) {
  const displayElement = getDisplay();
  
  //console.log(`Before: value1: ${value1}, operation is ${operation}`);

  /* Root of 2-- = 0 Problem
  if (operation.length) {
    getResult();
  } */
  
  if (Number(displayElement.innerHTML) || operation.length) {
    value1 = Number(displayElement.innerHTML);
    operation = operationSign;
    operationInProgress= true;
  }
  //console.log(`After: value1: ${value1}, operation is ${operation}`);
 // console.log(`After: display has ${displayElement.innerHTML}, operation is ${operationSign}`);
}

function setValue2() {
  let displayElement = getDisplay();

  if (Number(displayElement.innerHTML)) {
    value2 = Number(displayElement.innerHTML);
  }
}

function getResult() {
  setValue2();

  let displayElement = getDisplay();

  switch (operation) {
    // case '+':
    //   console.log(isResult);
    //   if (isResult == false) {
    //     result = value1 + value2;
    //     isResult = true;
    //     displayElement.innerHTML = result;
    //   } else {
    //     // result = result + value2;
    //     // displayElement.innerHTML = result;
    //      //console.log(value2);
    //     // console.log(result);
    //   }
    //   // result = value1 + value2;
    //   // displayElement.innerHTML = result;
    //   break;
    case '+':
      result = value1 + value2;
      displayElement.innerHTML = result;
      break;
    case '-':
      result = value1 - value2;
      displayElement.innerHTML = result;
      break;
    case '*':
      result = value1 * value2;
      displayElement.innerHTML = result;
      break;
    case '/':
      result = value1 / value2;
      displayElement.innerHTML = result;
      break;
  
    default:
      break;

  }

  //console.log(`Before: Value1 is: ${value1}, operation: ${operation}, 
  //Value2 is: ${value2}, result is: ${result}`);
}

function resultAgain() {

  let displayElement = getDisplay();

  let result = 0;

  if (getDisplay()) {
    value1 = result;
    value2  = value2
    result = value1 + value2;
  }
  //console.log(result);

  console.log(`After: Value1 is: ${value1}, operation: ${operation}, 
  Value2 is: ${value2}, result is: ${result}`);
}