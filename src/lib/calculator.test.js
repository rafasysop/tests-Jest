const { sum } = require("./calculator");

it('should sum 2 and 2 the result must be 4', () => {
  expect(sum(2,2)).toBe(4)
});

it('should sum 2 and 2 even if one of them is a string and the result must be for', () => {
  expect(sum('2',2)).toBe(4)
});

it('should throw an error if what is provided to the method cannot be summed', () => {
  expect(() => {
    sum('',2)
  }).toThrowError()

  expect(() => {
    sum([3,2])
  }).toThrowError()
});