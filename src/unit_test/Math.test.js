import addition from '../modules/Math.js';

it('retun sum of two numbers', () => {
  const sum = addition(4, 5);
  expect(sum).toBe(9);
});