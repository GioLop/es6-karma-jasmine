import isParenthesisBalanced from '../src/parenthesis_validator';

describe("Test parenthesis validator", () => {
    describe("", () => {
        it("should return true when the order are correct", () => {
          const exp = "{}()[]";
          const exp2 = "[{()}]";
          
          expect(isParenthesisBalanced(exp)).toEqual(true);
          expect(isParenthesisBalanced(exp2)).toEqual(true);
        });

        it("should return false when the order are incorrect", () => {
          const exp = "{}))";
          const exp2 = "{[(])]}";
          
          expect(isParenthesisBalanced(exp)).toEqual(false);
          expect(isParenthesisBalanced(exp2)).toEqual(false);
        });
      });
});