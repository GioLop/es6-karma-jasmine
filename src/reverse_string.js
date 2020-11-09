import Stack from '../src/Stack.js';

function reversedString(str) {
    const stack = new Stack();
    let finalString = '';

    for (let char of str) {
        stack.push(char)
        finalString = stack.pop() + finalString;
    }

    return finalString;
}

export default reversedString;