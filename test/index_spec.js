import myFunction from '../src/index.js';

describe("First test example", () => {
  
  it("should return 33", () => {
    expect(myFunction()).toEqual(33);
  });

  it("should return 33", () => {
    expect (myFunction()).toEqual(22);
  });
});