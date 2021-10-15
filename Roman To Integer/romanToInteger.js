// https://leetcode.com/problems/roman-to-integer/

/*

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

                        Symbol       Value
                        I             1
                        V             5
                        X             10
                        L             50
                        C             100
                        D             500
                        M             1000

For example, 2 is written as II in Roman numeral, just two one's added 
    together. 
12 is written as XII, which is simply X + II. 
The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. 
Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. 
There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.
*/

/*

Example 1:
Input: s = "III"
Output: 3

Example 2:
Input: s = "IV"
Output: 4

Example 3:
Input: s = "IX"
Output: 9

Example 4:
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 5:
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

/*
Constraints:

    1 <= s.length <= 15
    s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
    It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const numerals = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000
    }

    let toNum = 0
    for (let i = 0; i < s.length; i++) {
        let letter = s[i]
        let nextLetter = s[i + 1] || undefined
        let prevLetter = s[i - 1] || undefined
        let end = s.length - 1
        // toNum += numerals[letter]

        switch (letter) {
            case 'I':
                if ((i === 0 && nextLetter === 'I') || i === end) {
                    toNum += 1
                    break
                } else if (nextLetter && nextLetter === 'V') {
                    toNum += 4
                    i++
                    break
                } else if (nextLetter && nextLetter === 'X') {
                    toNum += 9
                    i++
                    break
                } else if (nextLetter === undefined || prevLetter === undefined) {
                    console.log('nextLetter:', nextLetter, 'prevLetter:', prevLetter)
                    break
                } else {
                    console.log('I err: i:', i, 'letter:', letter, 'prevLetter:', prevLetter, 'nextLetter:', prevLetter)
                    toNum += 1
                    break
                }
            case 'V':
                if (prevLetter && prevLetter === 'I') {
                    break
                } else {
                    toNum += 5
                    break
                }
            case 'X':
                if (prevLetter && prevLetter === 'I') {
                    break
                } else if (nextLetter && nextLetter === 'L') {
                    toNum += 40
                    i++
                    break
                } else if (nextLetter && nextLetter === 'C') {
                    toNum += 90
                    i++
                    break
                } else {
                    toNum += 10
                    break

                }
            case 'L':
                if (prevLetter && prevLetter === 'X') {
                    break
                } else {
                    toNum += 50
                    break
                }
            case 'C':
                if (prevLetter && prevLetter === 'X') {
                    break
                } else if (nextLetter && nextLetter === 'D') {
                    toNum += 400
                    i++
                    break
                } else if (nextLetter && nextLetter === 'M') {
                    toNum += 900
                    i++
                    break
                } else {
                    toNum += 100
                    break

                }
            case 'D':
                if (prevLetter && prevLetter === 'C') {
                    break
                } else {
                    toNum += 500
                    break
                }
            case 'M':
                if (prevLetter && prevLetter === 'C') {
                    break
                } else if (i === 0) {
                    toNum += 1000
                    break
                } else {
                    toNum += 1000
                    break
                }
            default: continue
        }
    }
    return toNum
};

console.log('in:', 'III:', '\texpected:', 3, '\tactual:', romanToInt("III"))      // EXPECTED OUTPUT: 3
console.log('in:', 'IV:', '\texpected:', 4, '\tactual:', romanToInt("IV"))       // EXPECTED OUTPUT: 4
console.log('in:', 'IX:', '\texpected:', 9, '\tactual:', romanToInt("IX"))       // EXPECTED OUTPUT: 9
console.log('in:', 'LVIII:', '\texpected:', 58, '\tactual:', romanToInt("LVIII"))    // EXPECTED OUTPUT: 58
console.log('in:', 'MCMXCIV:', '\texpected:', 1994, '\tactual:', romanToInt("MCMXCIV"))  // EXPECTED OUTPUT: 1994