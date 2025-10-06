const errorHolder = document.querySelector('.errorHolder');
function Addition(a, b) {
  return a + b;
}
function Subtraction(a, b) {
  return a - b;
}
function Multiplication(a, b) {
  return a * b;
}
function Division(a, b) {

  return a / b;
}
function Modulus(a, b) {
  return a % b;
}
export default function Calculator(operation, a, b) {
  try {
   if (
  typeof a !== 'number' || isNaN(a) ||
  typeof b !== 'number' || isNaN(b)
) {
  throw new Error('Error: Both arguments must be valid numbers');
} else if (operation === '+') {
      return Addition(a, b);
    } else if (operation === '-') {
      return Subtraction(a, b);
    } else if (operation === '*') {
      return Multiplication(a, b);
    } else if (operation === '/' || operation === '÷') {
      if (b === 0) {
        throw new Error('Error: Division by zero');
      }
      return Division(a, b);
    } else if (operation === '%') {
      return Modulus(a, b);
    }
  } catch (error) {
    errorHolder.innerHTML = `<p class="text-red-500">There is an error: ${error.message}</p>`;
    console.log(`error: ${error.name}`);
    console.log(`error: ${error.message}`);
    return error.name;
  }
}
