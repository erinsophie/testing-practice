import caesarCipher from '../code/caesarCipher.js';

test('Loops from z back to a', () => {
  expect(caesarCipher('zoo', 1)).toBe('app');
});

test('Keeps the same case', () => {
  expect(caesarCipher('New York City', 1)).toBe('Ofx Zpsl Djuz');
});

test('Includes special characters', () => {
  expect(caesarCipher('hello there!', 1)).toBe('ifmmp uifsf!');
});
