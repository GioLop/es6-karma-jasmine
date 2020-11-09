import Stack from '../src/Stack.js';

// Algorithm: 

// Declare a character stack S.
// Now traverse the expression string exp. 
// If the current character is a starting bracket (‘(‘ or ‘{‘ or ‘[‘) then push it to stack.
// If the current character is a closing bracket (‘)’ or ‘}’ or ‘]’) 
    // then pop from stack and if the popped character is the matching starting bracket then fine else parenthesis are not balanced.
// After complete traversal, if there is some starting bracket left in stack then “not balanced”

function isParenthesisBalanced(str) {
    const stack = new Stack();

    const map = {
        "(": ")",
        "[": "]",
        "{": "}",
    }

    for (let char of str) {
        const item = map[char];
        
        if (item) {
            stack.push(item);
        } else {
            if (char !== stack.pop()) {
                return false;
            }
        }
    }

    return stack.size() === 0;
}

export default isParenthesisBalanced;