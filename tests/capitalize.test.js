import capitalize from '../code/capitalize.js';

test('First character is capitalized', () => {
  expect(capitalize('this is a test')).toBe('This is a test');
});
