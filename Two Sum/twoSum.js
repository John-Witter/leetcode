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