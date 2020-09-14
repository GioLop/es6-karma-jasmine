import _$ from '../src/_$.js';

describe("Test _$ lib", () => {
  describe("head func", () => {
    it("should return 'a'", () => {
      expect(_$.head(['a', 'b', 'c'])).toEqual('a');
    });
  });
  
  describe("tail func", () => {
    it("should return everything but the first element", () => {
      expect(_$.tail(['a', 'b', 'c']).includes('a')).toEqual(false);
    });
  });

  describe("copy func", () => {
    it("should return a new array with the same values", () => {
      const myArr = ['a', 'b', 'c'];
      const newArr = _$.copy(myArr);
      expect(newArr).toEqual(myArr);
    });

    it("should return a new instance of a given array", () => {
      const myArr = ['a', 'b', 'c'];
      const newArr = _$.copy(myArr);
      newArr.push('d');

      expect(newArr).toEqual(['a', 'b', 'c', 'd']);
    });
  });
});