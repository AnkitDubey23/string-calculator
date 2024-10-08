const add = require('../stringCalculator');

describe('add(numbers)', () => {

    test('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    test('should return the number itself when a single number is passed', () => {
        expect(add("1")).toBe(1);
    });

    test('should return the sum of two numbers separated by a comma', () => {
        expect(add("1,2")).toBe(3);
    });

    test('should return the sum of numbers separated by new lines and commas', () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test('should support custom delimiters', () => {
        expect(add("//;\n1;2")).toBe(3);
    });

    test('should throw an exception for negative numbers', () => {
        expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
    });

    test('should throw an exception for multiple negative numbers', () => {
        expect(() => add("1,-2,-3")).toThrow("Negative numbers not allowed: -2, -3");
    });
});
