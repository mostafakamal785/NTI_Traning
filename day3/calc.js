export function Addition(a, b) {
  return a + b;
}
export function Subtraction(a, b) {
  return a - b;
}
export function Multiplication(a, b) {
  return a * b;
}
export function Division(a, b) {
  if (b === 0) {
    console.log('Error: Division by zero');
    return null;
  }
  return a / b;
}
export function Modulus(a, b) {
  return a % b;
}
export default function Calculator(operation, a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log('Error: Both arguments must be numbers');
    return null;
  } else if (operation === '+') {
    return Addition(a, b);
  } else if (operation === '-') {
    return Subtraction(a, b);
  } else if (operation === '*') {
    return Multiplication(a, b);
  } else if (operation === '/' || operation === '÷') {
    return Division(a, b);
  } else if (operation === '%') {
    return Modulus(a, b);
  } else {
    console.log('Error: Invalid operation');
    return null;
  }
}
