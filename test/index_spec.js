import funcs from '../src/index.js';

describe("First test example", () => {
  it("should return 33", () => {
    expect(funcs.first()).toEqual(33);
  });

  it("should return 22", () => {
    expect (funcs.second()).toEqual(22);
  });

  it("should return the result of arguments adding", () => {
    expect(funcs.sum(5, 5)).toEqual(10);
  })
});
