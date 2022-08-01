// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

var isValid = (s) => {
    const bracketMap = new Map([
        [')', '('],
        ['}', '{'],
        [']', '['],
      ]);
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        //if closing bracket, see if stack's most recent addition is its opening bracket
        if (bracketMap.has(s[i])) {
            const pop = stack.pop();
            if (pop !== bracketMap.get(s[i])) {
                return false;
            }
            //if opening bracket, put in stack
        } else {
            stack.push(s[i]);
        }
    }

    return stack.length === 0;
}