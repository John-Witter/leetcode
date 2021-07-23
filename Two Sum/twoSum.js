// https://leetcode.com/problems/two-sum/

/* 
Given an array of integers nums and an integer target, return indices of the
     two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not
     use the same element twice.

You can return the answer in any order.
*/

var twoSum = function(nums, target) {
    let obj = {}

    for (let i = 0; i < nums.length; i++) {
        let el = nums[i]
        let potential = target - el
        if (potential in obj) return [obj[potential], i]
        else obj[el] = i
    }
}

let arr = [2, 7, 11, 15]
console.log(twoSum(arr, 9)) // expected output => [0, 1]