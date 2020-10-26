import reversedString from '../src/reverse_string';

describe("Test reversed string function", () => {
    it("should return a reversed string", () => {
        let myString = 'abcd';

        expect(reversedString(myString)).toEqual('dcba');
    });
});