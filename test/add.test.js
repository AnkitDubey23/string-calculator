const add = require('../stringCalculator');

// Test cases
describe('add(numbers)', () => {

  test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

});
module.exports = add;