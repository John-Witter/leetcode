/*
Given a string s, find the length of the longest substring without repeating 
characters.
*/

/*
Example 1:
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.

Example 2:
    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.

Example 3:
    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
        Notice that the answer must be a substring, "pwke" is a subsequence and 
        not a substring.
Example 4:
    Input: s = ""
    Output: 0
*/

/*
Constraints:
    0 <= s.length <= 5 * 10^4
    s consists of English letters, digits, symbols and spaces.
*/

/* IDEAS */
/*
    if s.length === 0, return 0

    solution:
    let maxLen = 1
    let set = new Set()
    iterate through s, char = s[i]
    if set.has(char), maxLen = Math.max(maLen, set.length), set = new Set()
    else set.add(char)
        
    return Math.max(set.length, maxLen)
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) return 0;
    console.log('s:', s)
    let maxLen = 1;
    let set = new Set();
    set.add(s[0])
    let currMax = 1
    for (let i = 1; i < s.length; i++) {
        let char = s[i];
        console.log('char:', char, '\tmaxLen:', maxLen, '\tset:', set)
        if (set.has(char)) {
            // maxLen = Math.max(currMax, set.size, maxLen);
            // console.log('if (set.has(char)):\tmaxLen:', maxLen, '\tcurrMax:', currMax, '\tset.size', set.size, '\tMath.max(currMax, set.size, maxLen)', Math.max(currMax, set.size, maxLen));
            // currMax = 1
            // set.clear();
            // set.add(char)

            // remove the letters 

        } else {
            set.add(char)
            currMax++
        }
    }
    
    console.log('Math.max((set.size), maxLen):', Math.max((set.size), maxLen), '\tset.size:', set.size, 'maxLen:', maxLen)
    return Math.max((set.size), maxLen)
};

let s1 = "bbbbb"
let s2 = "abcabcbb"
let s3 = "dvdf"
console.log('s1:', s1, 'expected: 1 actual:', lengthOfLongestSubstring(s1))
console.log()
console.log('s2:', s2, 'expected: 3 actual:',lengthOfLongestSubstring(s2))
console.log()
console.log('s3:', s3, 'expected: 3 actual:',lengthOfLongestSubstring(s3))