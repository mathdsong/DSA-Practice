/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefix = 1, suffix_arr = Array(nums.length), suffix = 1, result = Array(nums.length);
    suffix_arr[nums.length - 1] = 1;

    for (let i = nums.length - 1; i >= 1; i--) {
        suffix *= nums[i];
        suffix_arr[i-1] = suffix;
    }

    for (let i = 0; i < suffix_arr.length; i++) {
        result[i] = prefix * suffix_arr[i];
        prefix *= nums[i];
    }

    return result;
};
