const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function askQuestion(query) {
    return new Promise(resolve => {
      readline.question(query, input => {
        readline.close();
        resolve(input);
      });
    });
  }
  
  async function start() {
    while (true) {
      const num1 = parseFloat(await askQuestion('Enter first number: '));
      const operator = await askQuestion('Enter operator (+, -, *, /): ');
      const num2 = parseFloat(await askQuestion('Enter second number: '));
  
      let result;
      if (operator === '+') {
        result = num1 + num2;
      } else if (operator === '-') {
        result = num1 - num2;
      } else if (operator === '*') {
        result = num1 * num2;
      } else if (operator === '/') {
        result = num1 / num2;
      }
  
      console.log(`Result: ${result}`);
      
      const again = await askQuestion('Calculate again? (y/n) ');
      if (again.toLowerCase() !== 'y') {
        break;
      }
    }
  }
  
  start();