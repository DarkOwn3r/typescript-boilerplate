import { getPowerOfTwo } from "../src/power-of-two"

describe("powerOfTwo", () => {
    it("should return a list of power of two numbers from a list with one number", () => {
        const numbers: Array<number> = [2];
    expect(getPowerOfTwo(numbers)).toEqual([2])
    });
})