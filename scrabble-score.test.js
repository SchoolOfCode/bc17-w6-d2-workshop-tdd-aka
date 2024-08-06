import { calculateScrabbleScore } from "./scrabble-score";
import { expect, test } from "vitest";

test('should return 1 for letter A', () => {
  expect(calculateScrabbleScore('A')).toBe(1);
});

test('should return 3 for letter B', () => {
  expect(calculateScrabbleScore('B')).toBe(3);
});
test('should return 3 for letter C', () => {
  expect(calculateScrabbleScore('C')).toBe(3);
});
test('should return 2 for letter D', () => {
  expect(calculateScrabbleScore('D')).toBe(2);
});
test('should return 1 for letter E', () => {
  expect(calculateScrabbleScore('E')).toBe(1);
});
test('should return 4 for letter F', () => {
  expect(calculateScrabbleScore('F')).toBe(4);
});
test('should return 2 for letter G', () => {
  expect(calculateScrabbleScore('G')).toBe(2);
});
test('should return 4 for letter H', () => {
  expect(calculateScrabbleScore('H')).toBe(4);
});
test('should return 1 for letter I', () => {
  expect(calculateScrabbleScore('I')).toBe(1);
});
test('should return 8 for letter J', () => {
  expect(calculateScrabbleScore('J')).toBe(8);
});
test('should return 5 for letter K', () => {
  expect(calculateScrabbleScore('K')).toBe(5);
});
test('should return 1 for letter L', () => {
  expect(calculateScrabbleScore('L')).toBe(1);
});
test('should return 3 for letter M', () => {
  expect(calculateScrabbleScore('M')).toBe(3);
});
test('should return 1 for letter N', () => {
  expect(calculateScrabbleScore('N')).toBe(1);
});
test('should return 1 for letter O', () => {
  expect(calculateScrabbleScore('O')).toBe(1);
});
test('should return 3 for letter P', () => {
  expect(calculateScrabbleScore('P')).toBe(3);
});
test('should return 10 for letter Q', () => {
  expect(calculateScrabbleScore('Q')).toBe(10);
});
test('should return 1 for letter R', () => {
  expect(calculateScrabbleScore('R')).toBe(1);
});
test('should return 1 for letter S', () => {
  expect(calculateScrabbleScore('S')).toBe(1);
});
test('should return 1 for letter T', () => {
  expect(calculateScrabbleScore('T')).toBe(1);
});
test('should return 1 for letter U', () => {
  expect(calculateScrabbleScore('U')).toBe(1);
});
test('should return 4 for letter V', () => {
  expect(calculateScrabbleScore('V')).toBe(4);
});
test('should return 4 for letter W', () => {
  expect(calculateScrabbleScore('W')).toBe(4);
});
test('should return 8 for letter X', () => {
  expect(calculateScrabbleScore('X')).toBe(8);
});
test('should return 4 for letter Y', () => {
  expect(calculateScrabbleScore('Y')).toBe(4);
});
test('should return 10 for letter Z', () => {
  expect(calculateScrabbleScore('Z')).toBe(10);
});



// TEST EACH (NOT FULLY COMPLETE, TABLE SHOULD HAVE ALL LETTERS)

// test.each([
//   ['A', 1],
//   ['B', 3]
// ])('TRYING OUT TEST EACH', (letter, expected) => {
//   expect(calculateScrabbleScore(letter)).toBe(expected)
// })
