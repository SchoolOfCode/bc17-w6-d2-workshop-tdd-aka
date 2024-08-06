import { calculateScrabbleScore } from "./scrabble-score";

import { expect, test } from "vitest";

test('scrabble-score test', () => {
    expect(calculateScrabbleScore ("A")).toBe(1)
  })
