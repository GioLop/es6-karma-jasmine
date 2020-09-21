import _$ from '../src/_$';
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
  describe("if array has elements", () => {
    it("should return true if any of the array elements is present in another array", () => {
      const myArr = ['a', 'b', 'c']
      const hasArr = ['b', 'c']
      expect(_$.isPresent(myArr, hasArr)).toEqual(true)
    })
  });
  describe("isArray func", () => {
    it("should receive any value and return true if the value is an array", () => {
      const myArr = ['a', 'b', 'c']
      const numb = 1
      const string = 'string'
      const dict = {
        value1: 'uno',
        value2: 'dos'
      }
      expect(_$.isArray(myArr)).toEqual(true)
      expect(_$.isArray(numb)).toEqual(false)
      expect(_$.isArray(string)).toEqual(false)
      expect(_$.isArray(dict)).toEqual(false)
    })
  })
});
