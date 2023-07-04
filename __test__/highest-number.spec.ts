import { highestNumber  } from "../src/highest-number";

describe('getHighestNumber', () => {
    //test an array with one number return one number
    it('should return one number from an array of one number', () => {
        const numbers: Array<number> = [1];
        expect(highestNumber(numbers)).toEqual(1);
    });
})