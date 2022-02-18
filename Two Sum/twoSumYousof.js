/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/*
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/


//

/* 
    APPROACHES:

1. Nested for loop
    - 1st loop checks index of 1st num
    - 2nd for loop checks remaining nums for a match 
        - add the 1st num to 2nd num, if a match return: [i, j]
    - O(n^2)

2. Get rid of inner for loop from step APPROACH # 1.
    - iterate nums 2 times

    - 1st iteration
    - create an object in the following shape: obj[num] = i
        - for each num in nums with corresponding i index
    
    - 2nd iteration
    - keep track of currentTarget
        - currentTarget = num - target
    - if obj contains a key of currentTarget
        - and obj[currentTarget] doesn't equal i
    - return [i, obj[currentTarget]]
*/

// [2,7,11,15]
//  i = 0
//  j = 1 (i+1)

// APPROACH # 1:
const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            let num2 = nums[j]
            if (num1 + num2 === target) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum([2,7,11,15], 9)); // [0, 1]

// 1st: come up with the solution that uses nested for loops. O(n^2)
// 2nd: get rid of the inner loop by using an object. O(n) *for this algo*


// APPROACH # 2:
const twoSum2 = (nums, target) => {
    const obj = {};
    // for this array: [2,7,11,15]
    // populate obj as: obj[num] = i
    // obj[2] = 0, obj[7] = 1, obj[11] = 2, obj[15] = 3
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        obj[num] = i;
    }

    // iterate nums a 2nd time
    // this time, keep track of currentTarget
    // currentTarget is `target - current num`
    // if currentTarget is in obj, and obj[currentTarget] contains a different index than i,
    // return [i, obj[currentTarget]]
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const currentTarget = target - num;
        if (currentTarget in obj && currentTarget[num] !== i)
            return [i, obj[currentTarget]];
    }
}

console.log(twoSum2([2,7,11,15], 9)); // [0, 1]