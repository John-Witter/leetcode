/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
*/

/*
Example 1:
    Input: s = "()"
    Output: true

Example 2:
    Input: s = "()[]{}"
    Output: true

Example 3:
    Input: s = "(]"
    Output: false

Example 4:
    Input: s = "([)]"
    Output: false

Example 5:
    Input: s = "{[]}"
    Output: true
*/  

/*
Constraints:
    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.
*/

/* IDEAS */
/*
    '(', '[', and '{' reffered to as openers

    openers must have a corresponding closer to return true
    if opener doesn't have a corresponding closer, return false
    if number of openers differs from number of closers, return false


    solution:
    if s.length % 2 !== 0 return false

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 !== 0) return false;
    
    let stack = []

    for (let i = 0; i < s.length; i++) {
        let currChar = s[i]

        switch(currChar) {
            case '(':
                stack.push(currChar);
                console.log("case '(':\tcurChar:", currChar, 'stack:', stack)
                break;
            case '[':
                stack.push(currChar);
                console.log("case '[':\tcurChar:", currChar, 'stack:', stack)
                break;
            case '{':
                stack.push(currChar);
                console.log("case '{':\tcurChar:", currChar, 'stack:', stack)
                break;
            case ')':
                console.log("case ')':\tcurChar:", currChar, 'stack:', stack)
                if (stack.pop() !== '(') return false;
                break;
            case ']':
                console.log("case ']':\tcurChar:", currChar, 'stack:', stack)
                if (stack.pop() !== '[') return false;
                break;
            case '}':
                console.log("case '}':\tcurChar:", currChar, 'stack:', stack)
                if (stack.pop() !== '{') return false;
                break;
            default:
                continue;
        }
    }

    return stack.length === 0
};
console.log(isValid('()[]{}'))