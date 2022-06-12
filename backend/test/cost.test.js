import { expect, test } from "vitest";
import { calculateCost } from "../util/cost";

test("Lowest tier", () => {
    const storage = 10;
    const cost = 4000;
    // Cost = storage * 4 pound * 100 (to get pennies)
    const expectedCost = calculateCost(storage);
    expect(cost).toEqual(expectedCost);
});

test("Middle tier", () => {
    const storage = 100;
    const cost = 20000;
    // Cost = storage * 2 pound * 100 (to get pennies)
    const expectedCost = calculateCost(storage);
    expect(cost).toEqual(expectedCost);
});

test("Highest tier", () => {
    const storage = 101;
    const cost = 10100;
    // Cost = storage * 1 pound * 100 (to get pennies)
    const expectedCost = calculateCost(storage);
    expect(cost).toEqual(expectedCost);
});