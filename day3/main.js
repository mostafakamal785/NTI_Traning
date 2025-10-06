import Calculator, { Addition, Modulus, Division, Multiplication, Subtraction } from './calc.js';

console.log(Calculator('+', 5, 3)); // Output: 8
console.log(Calculator('-', 5, 3)); // Output: 2
console.log(Calculator('*', 5, 3)); // Output: 15
console.log(Calculator('/', 5, 0)); // Output: Error: Division by zero
console.log(Calculator('/', 5, 2)); // Output: 2.5
console.log(Calculator('%', 5, 2)); // Output: Error: Invalid operation

const num1Input = document.querySelector('.num1');
const num2Input = document.querySelector('.num3');
const operationSelect = document.getElementById('operation');
const equalBtn = document.querySelector('.equal');
const resultInput = document.querySelector('.result');

equalBtn.addEventListener('click', () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operation = operationSelect.value;
  const result = Calculator(operation, num1, num2);
  resultInput.value = result;
});

//************************************************************************** */

let updateBtn = document.querySelector('.update');
let undoBtn = document.querySelector('.undo');
let randomBtn = document.querySelector('.random');
let textInput = document.querySelector('.textinp');
let colorInput = document.querySelector('.textColor');
let heading = document.querySelector('.paragraaaaaaa');

let text = heading.textContent;

updateBtn.addEventListener('click', () => {
  text = heading.textContent;
  heading.textContent = textInput.value;
  heading.style.color = colorInput.value;
});
undoBtn.addEventListener('click', () => {
  heading.textContent = text;
});
randomBtn.addEventListener('click', () => {
  let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  heading.style.color = randomColor;
});

//*********************************************************************************************************************** */

let mypromise = new Promise((resolve, reject) => {
  let a = 5;
  setTimeout(() => {
    if (a >= 0) {
      resolve('Promise resolved successfully');
    } else {
      reject('Promise rejected');
    }
  }, 2000);
});

mypromise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });
