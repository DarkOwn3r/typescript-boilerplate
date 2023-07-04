import { getPowerOfTwo } from "../src/power-of-two"

describe("powerOfTwo", () => {
    it("should return a list of powered by two numbers from a list with one number", () => {
        const numbers: Array<number> = [2];
    expect(getPowerOfTwo(numbers)).toEqual([4])
    });
})
describe("powerOfTwo", () => {
    it("should return a list of powered by two numbers from a list with one number", () => {
        const numbers: Array<number> = [2, 4];
    expect(getPowerOfTwo(numbers)).toEqual([4, 16])
    });
})