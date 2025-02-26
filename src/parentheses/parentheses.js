const Stack = require("../lib/stack");


/*
Initialize a new empty stack.
Start a loop to iterate through each character in the expression.
If the current character is (:
Push it onto the stack.
Else:
If the current character is ):
If the stack isn't empty:
Pop one item off the stack.
Else:
Return false.
If the stack is empty:
Return true.
Else:
Return false.
*/

const match = (expression) => {
    const stack = new Stack();

    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];

        if (char === "(") {
            stack.push(char); // Push opening parenthesis onto the stack
        } else if (char === ")") {
            if (stack.top !== null) { // ✅ Check if stack is NOT empty
                stack.pop(); // Remove the matching "("
            } else {
                return false; // Found ")" but no matching "("
            }
        }
    }

    return stack.top === null; // ✅ If stack is empty, all "(" had matches
};



module.exports = match;
