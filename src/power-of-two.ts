export function getPowerOfTwoFrom(numbers: Array<number>): Array<number> {
    return numbers.map(number => Math.pow(number, 2))
}