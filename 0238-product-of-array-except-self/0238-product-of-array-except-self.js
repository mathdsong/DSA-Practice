/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefix = 1, suffix_arr = Array(nums.length + 1), suffix = 1, result = [];
    suffix_arr[nums.length] = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        suffix *= nums[i];
        suffix_arr[i] = suffix;
    }

    for (let i = 0; i < suffix_arr.length - 1; i++) {
        result.push(prefix * suffix_arr[i+1]);
        prefix *= nums[i];
    }

    return result;
};