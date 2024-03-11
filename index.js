// index.js

const readline = require('readline');

function calculate(num1, num2, operator) {

  let result;

  if (operator === '+') {
    result = num1 + num2;
  }
  else if (operator === '-') {
   result = num1 - num2;
  }
  else if (operator === '*') {
   result = num1 * num2; 
  }
  else if (operator === '/') {
    result = num1 / num2;
  }
  
  return result;
}

async function start() {

  // loop logic readline

  const result = calculate(num1, num2, operator);
  
  // display result
}

module.exports = {
  calculate,
  start
};