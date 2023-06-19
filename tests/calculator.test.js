import calculator from '../code/calculator.js';

test('Adds', () => {
  expect(calculator.add(3, 2)).toEqual(5);
});

test('Subtracts', () => {
  expect(calculator.subtract(10, 3)).toEqual(7);
});

test('Multiplies', () => {
  expect(calculator.multiply(2, 5)).toEqual(10);
});

test('Divides', () => {
  expect(calculator.divide(4, 2)).toEqual(2);
});
