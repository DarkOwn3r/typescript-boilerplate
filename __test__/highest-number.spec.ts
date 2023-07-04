import { highestNumber  } from "../src/highest-number";

describe('getHighestNumber', () => {
    //test an array with one number return one number
    it('should return one number from an array of one number', () => {
        const numbers: Array<number> = [1];
        expect(highestNumber(numbers)).toEqual(1);
    });
})

describe('getHighestNumber', () => {
    //test an array with one number return one number
    it('should return the highest number from an array', () => {
        const numbers: Array<number> = [1, 5, 3];
        expect(highestNumber(numbers)).toEqual(5);
    });
})

describe('getHighestNumber', () => {
    //test an array with one number return one number
    it('should return the highest number from an array with identical values', () => {
        const numbers: Array<number> = [5, 5, 5];
        expect(highestNumber(numbers)).toEqual(5);
    });
})