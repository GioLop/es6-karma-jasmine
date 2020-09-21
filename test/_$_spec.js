<<<<<<< HEAD
import _$ from '../src/_$.js';

=======
import _$ from '../src/_$';
>>>>>>> a919626ef895356ed659bcdc25a92f517ece6506
describe("Test _$ lib", () => {
  describe("head func", () => {
    it("should return 'a'", () => {
      expect(_$.head(['a', 'b', 'c'])).toEqual('a');
    });
  });
<<<<<<< HEAD
  
=======
>>>>>>> a919626ef895356ed659bcdc25a92f517ece6506
  describe("tail func", () => {
    it("should return everything but the first element", () => {
      expect(_$.tail(['a', 'b', 'c']).includes('a')).toEqual(false);
    });
  });
<<<<<<< HEAD

=======
>>>>>>> a919626ef895356ed659bcdc25a92f517ece6506
  describe("copy func", () => {
    it("should return a new array with the same values", () => {
      const myArr = ['a', 'b', 'c'];
      const newArr = _$.copy(myArr);
      expect(newArr).toEqual(myArr);
    });
<<<<<<< HEAD

=======
>>>>>>> a919626ef895356ed659bcdc25a92f517ece6506
    it("should return a new instance of a given array", () => {
      const myArr = ['a', 'b', 'c'];
      const newArr = _$.copy(myArr);
      newArr.push('d');
<<<<<<< HEAD

      expect(newArr).toEqual(['a', 'b', 'c', 'd']);
    });
  });
=======
      expect(newArr).toEqual(['a', 'b', 'c', 'd']);
    });
  });
  describe("if array has elements", ()=> {
      it("should return true if any of the array elements is present in another array", () => {
          const myArr = ['a','b','c']
          const hasArr = ['b','c']
          expect(_$.isPresent(myArr, hasArr)).toEqual(true)
      })
  })
>>>>>>> a919626ef895356ed659bcdc25a92f517ece6506
});
