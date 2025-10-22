const fizzBuzz = require('./index');
describe('fizzBuzz', () => {
  it('if num is divisible by 3 should return Fizz', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });
  it('if num is divisible by 5 should return Buzz', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });
  it('if num is divisible by 3 or 5 should return fizzBuzz', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
    it('if num is not divisible by 3 or 5 should return num', () => {
      expect(fizzBuzz(16)).toBe(16);
    });
});
