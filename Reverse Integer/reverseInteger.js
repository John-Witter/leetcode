// https://leetcode.com/problems/reverse-integer/

/* 
    Given a signed 32-bit integer x, return x with its digits reversed. If 
        reversing x causes the value to go outside the signed 32-bit integer 
        range [-2^31, 2^31 - 1], then return 0.

    Assume the environment does not allow you to store 64-bit integers (signed 
        or unsigned).
*/

/* 

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

Example 4:
Input: x = 0
Output: 0
*/

var reverse = function(x) {
    let j
    let k = null
    let temp = String(x).split('')
    if (temp[0] === '-') {
        temp = temp.slice(1)
        k = '-'
    }
    j = temp.join('')
    let rtnArr = []
    
    for (i = j.length; i >= 0; i--) {
        rtnArr.push(j[i])
    }
    if (k) {
        rtnArr[0] = k
    }
    j = rtnArr.join("")
    
    let rtn = Number(j)
    let min = -Math.pow(2, 31)
    let max = Math.pow(2, 31) -1

    if (rtn >= max || rtn <= min) return 0
    else return rtn
}

console.log(reverse(1534236469))

